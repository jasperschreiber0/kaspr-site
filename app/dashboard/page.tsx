import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const metadata = { title: "Dashboard | Kaspr", robots: { index: false, follow: false } };

type ClientStats = {
  id: string;
  businessName: string;
  conversationsTotal: number;
  conversationsNew: number;
  avgResponseSeconds: number | null;
  reviewsSent: number;
  missedCallsHandled: number;
  missedCallsTexted: number;
  contentReceived: number;
  postsScheduled: number;
  postsPosted: number;
  postsFailed: number;
  instagramPublished: number;
  tiktokPublished: number;
  recoveredRevenue: number;
  openOpportunities: number;
  recoveredBookings: number;
};

type RevenueOpportunity = {
  id: string;
  client_id: string | null;
  type: string;
  status: string;
  customer_phone: string | null;
  estimated_value: number | null;
  recovered_value: number | null;
  detected_at: string;
};

function supabaseAdmin() {
  return createClient(
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_SERVICE_ROLE_KEY as string
  );
}

async function getStats(): Promise<ClientStats[]> {
  const supabase = supabaseAdmin();
  const since = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();

  const [
    { data: clients },
    { data: conversations },
    { data: reviewRequests },
    { data: missedCalls },
    { data: contentQueue },
    { data: scheduledPosts },
    { data: revenueSummary, error: revenueError },
  ] = await Promise.all([
    supabase.from("clients").select("id, business_name").eq("active", true),
    supabase
      .from("conversations")
      .select("client_id, is_new_conversation, response_ms")
      .gte("received_at", since),
    supabase.from("review_requests").select("client_id").gte("sent_at", since),
    supabase.from("missed_calls").select("client_id, sms_sent").gte("created_at", since),
    supabase.from("content_queue").select("client_id").gte("received_at", since),
    supabase
      .from("scheduled_posts")
      .select("client_id, status, instagram_post_id, tiktok_post_id")
      .gte("created_at", since),
    supabase.rpc("kaspr_revenue_summary", { p_since: since }),
  ]);
  if (revenueError) throw new Error("Revenue data unavailable. Check the database connection and apply the booking controls migration.");

  return (clients || []).map((client) => {
    const convos = (conversations || []).filter((c) => c.client_id === client.id);
    const avgMs = convos.length
      ? convos.reduce((sum, c) => sum + (c.response_ms || 0), 0) / convos.length
      : null;
    const posts = (scheduledPosts || []).filter((p) => p.client_id === client.id);
    const posted = posts.filter((p) => p.status === "posted");
    const recovery = (revenueSummary || []).find((o: {client_id:string}) => o.client_id === client.id);

    return {
      id: client.id,
      businessName: client.business_name || "Unnamed client",
      conversationsTotal: convos.length,
      conversationsNew: convos.filter((c) => c.is_new_conversation).length,
      avgResponseSeconds: avgMs !== null ? Math.round(avgMs / 1000) : null,
      reviewsSent: (reviewRequests || []).filter((r) => r.client_id === client.id).length,
      missedCallsHandled: (missedCalls || []).filter((m) => m.client_id === client.id).length,
      missedCallsTexted: (missedCalls || []).filter(
        (m) => m.client_id === client.id && m.sms_sent
      ).length,
      contentReceived: (contentQueue || []).filter((c) => c.client_id === client.id).length,
      postsScheduled: posts.filter((p) => p.status === "scheduled").length,
      postsPosted: posted.length,
      postsFailed: posts.filter((p) => p.status === "failed").length,
      instagramPublished: posted.filter((p) => !!p.instagram_post_id).length,
      tiktokPublished: posted.filter((p) => !!p.tiktok_post_id).length,
      recoveredRevenue: Number(recovery?.recovered_revenue || 0),
      openOpportunities: Number(recovery?.open_opportunities || 0),
      recoveredBookings: Number(recovery?.recovered_bookings || 0),
    };
  });
}

async function getRecentOpportunities(): Promise<RevenueOpportunity[]> {
  const supabase = supabaseAdmin();
  const since = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
  const { data, error } = await supabase
    .from("revenue_opportunities")
    .select("id, client_id, type, status, customer_phone, estimated_value, recovered_value, detected_at")
    .gte("detected_at", since)
    .order("detected_at", { ascending: false })
    .limit(12);
  // The revenue migration may be deployed after the dashboard. Keep the
  // existing operational dashboard usable during that rollout window.
  if (error) throw error;
  return (data || []) as RevenueOpportunity[];
}

function StatCell({ value, label }: { value: string; label: string }) {
  return (
    <td className="px-4 py-4 text-center border-l border-border">
      <div className="font-serif text-lg text-espresso tabular-nums">{value}</div>
      <div className="text-2xs uppercase tracking-wide text-mid mt-0.5">{label}</div>
    </td>
  );
}

export default async function DashboardPage() {
  let rows: ClientStats[] = [];
  let opportunities: RevenueOpportunity[] = [];
  let loadError: string | null = null;

  try {
    rows = await getStats();
    opportunities = await getRecentOpportunities();
  } catch (err) {
    loadError = err instanceof Error ? err.message : "Unknown error loading stats";
  }

  const totals = rows.reduce(
    (acc, r) => ({
      conversations: acc.conversations + r.conversationsTotal,
      reviews: acc.reviews + r.reviewsSent,
      missedCalls: acc.missedCalls + r.missedCallsHandled,
      content: acc.content + r.contentReceived,
      postsPosted: acc.postsPosted + r.postsPosted,
      postsFailed: acc.postsFailed + r.postsFailed,
      recoveredRevenue: acc.recoveredRevenue + r.recoveredRevenue,
      openOpportunities: acc.openOpportunities + r.openOpportunities,
      recoveredBookings: acc.recoveredBookings + r.recoveredBookings,
    }),
    { conversations: 0, reviews: 0, missedCalls: 0, content: 0, postsPosted: 0, postsFailed: 0, recoveredRevenue: 0, openOpportunities: 0, recoveredBookings: 0 }
  );

  return (
    <div className="min-h-screen bg-cream px-6 py-12 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start justify-between gap-4 mb-1">
          <div>
            <p className="text-2xs font-bold uppercase tracking-[0.18em] text-coral mb-2">
              Internal · last 30 days
            </p>
            <h1 className="font-serif text-3xl text-espresso mb-1">Kaspr dashboard</h1>
          </div>
          <Link
            href="/dashboard/new-client"
            className="shrink-0 bg-espresso text-cream text-xs font-bold px-4 py-2.5 rounded-full hover:bg-espresso-light transition-colors"
          >
            + New client
          </Link>
        </div>
        {!loadError && <p className="text-sm text-mid mb-10">
          <Link href="/dashboard/booking" className="underline mr-4">Confirm appointments</Link>
          {rows.length} active client{rows.length === 1 ? "" : "s"} &middot;{" "}
          {totals.conversations} conversations &middot; {totals.reviews} review requests &middot;{" "}
          {totals.missedCalls} missed calls handled &middot; {totals.content} posts received
          &middot; {totals.postsPosted} posts published
          &middot; ${totals.recoveredRevenue.toLocaleString("en-AU", { minimumFractionDigits: 0, maximumFractionDigits: 0 })} recovered
          {totals.postsFailed > 0 && (
            <span className="text-coral-dark font-semibold">
              {" "}
              &middot; {totals.postsFailed} publish failure{totals.postsFailed === 1 ? "" : "s"}
            </span>
          )}
        </p>}

        {loadError && (
          <p className="mb-8 rounded-lg border border-coral/30 bg-coral/5 px-4 py-3 text-sm text-coral-dark">
            Couldn&apos;t load stats: {loadError}
          </p>
        )}

        {!loadError && rows.length === 0 && (
          <p className="text-sm text-mid">
            No active clients found, or the tracking tables haven&apos;t been migrated yet.
          </p>
        )}

        {rows.length > 0 && (
          <div className="overflow-x-auto rounded-2xl border border-border bg-white shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-cream-dark/50">
                  <th className="px-4 py-3 text-left font-semibold text-espresso">Client</th>
                  <th className="px-4 py-3 text-center font-semibold text-espresso border-l border-border">
                    Conversations
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-espresso border-l border-border">
                    Avg. response
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-espresso border-l border-border">
                    Reviews sent
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-espresso border-l border-border">
                    Missed calls
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-espresso border-l border-border">
                    Revenue recovery
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-espresso border-l border-border">
                    Content received
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-espresso border-l border-border">
                    Posted (IG / TT)
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-espresso border-l border-border">
                    Publish failures
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id} className="border-t border-border">
                    <td className="px-4 py-4 font-medium text-espresso">{r.businessName}</td>
                    <StatCell
                      value={`${r.conversationsTotal}`}
                      label={`${r.conversationsNew} new`}
                    />
                    <StatCell
                      value={r.avgResponseSeconds !== null ? `${r.avgResponseSeconds}s` : "—"}
                      label="response time"
                    />
                    <StatCell value={`${r.reviewsSent}`} label="requests" />
                    <StatCell
                      value={`${r.missedCallsHandled}`}
                      label={`${r.missedCallsTexted} texted`}
                    />
                    <StatCell
                      value={`$${r.recoveredRevenue.toLocaleString("en-AU", { maximumFractionDigits: 0 })}`}
                      label={`${r.recoveredBookings} bookings · ${r.openOpportunities} open`}
                    />
                    <StatCell value={`${r.contentReceived}`} label="items" />
                    <StatCell
                      value={`${r.instagramPublished} / ${r.tiktokPublished}`}
                      label={`${r.postsScheduled} scheduled`}
                    />
                    <td className="px-4 py-4 text-center border-l border-border">
                      <div
                        className={`font-serif text-lg tabular-nums ${
                          r.postsFailed > 0 ? "text-coral-dark" : "text-espresso"
                        }`}
                      >
                        {r.postsFailed}
                      </div>
                      <div className="text-2xs uppercase tracking-wide text-mid mt-0.5">
                        failed
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {opportunities.length > 0 && (
          <section className="mt-10">
            <div className="flex items-end justify-between mb-3">
              <div>
                <p className="text-2xs font-bold uppercase tracking-[0.18em] text-coral mb-1">
                  Revenue pipeline
                </p>
                <h2 className="font-serif text-2xl text-espresso">Recent opportunities</h2>
              </div>
              <span className="text-xs text-mid">Last 30 days</span>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
              <div className="divide-y divide-border">
                {opportunities.map((opportunity) => (
                  <div key={opportunity.id} className="flex flex-wrap items-center justify-between gap-4 px-5 py-4">
                    <div>
                      <div className="font-medium text-espresso">
                        {opportunity.type.replaceAll("_", " ")} · {opportunity.customer_phone || "Unknown customer"}
                      </div>
                      <div className="text-xs text-mid mt-1">
                        {new Date(opportunity.detected_at).toLocaleString("en-AU")} · opportunity {opportunity.id.slice(0, 8)}
                      </div>
                    </div>
                    <div className="flex items-center gap-5 text-right">
                      <div>
                        <div className="font-serif text-lg text-espresso tabular-nums">
                          {opportunity.recovered_value !== null
                            ? `$${Number(opportunity.recovered_value).toLocaleString("en-AU", { maximumFractionDigits: 0 })}`
                            : opportunity.estimated_value !== null
                              ? `$${Number(opportunity.estimated_value).toLocaleString("en-AU", { maximumFractionDigits: 0 })}`
                              : "—"}
                        </div>
                        <div className="text-2xs uppercase tracking-wide text-mid">{opportunity.recovered_value !== null ? "recovered" : "estimated"}</div>
                      </div>
                      <span className="rounded-full bg-cream-dark px-3 py-1 text-2xs font-bold uppercase tracking-wide text-mid">
                        {opportunity.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <p className="mt-6 text-xs text-mid">
          Data since {new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toLocaleDateString("en-AU")}.
          Zeros across the board usually mean the Supabase migration hasn&apos;t been run yet, not
          that nothing happened. &quot;Posted (IG / TT)&quot; counts posts with a recorded
          instagram_post_id / tiktok_post_id — a client with content flowing in but 0 TikTok
          posts published usually means their TikTok isn&apos;t connected, not that nothing was
          attempted; check publish failures too.
        </p>
      </div>
    </div>
  );
}
