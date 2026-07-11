import { createClient } from "@supabase/supabase-js";

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
  ]);

  return (clients || []).map((client) => {
    const convos = (conversations || []).filter((c) => c.client_id === client.id);
    const avgMs = convos.length
      ? convos.reduce((sum, c) => sum + (c.response_ms || 0), 0) / convos.length
      : null;
    const posts = (scheduledPosts || []).filter((p) => p.client_id === client.id);
    const posted = posts.filter((p) => p.status === "posted");

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
    };
  });
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
  let loadError: string | null = null;

  try {
    rows = await getStats();
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
    }),
    { conversations: 0, reviews: 0, missedCalls: 0, content: 0, postsPosted: 0, postsFailed: 0 }
  );

  return (
    <div className="min-h-screen bg-cream px-6 py-12 md:px-10">
      <div className="max-w-6xl mx-auto">
        <p className="text-2xs font-bold uppercase tracking-[0.18em] text-coral mb-2">
          Internal · last 30 days
        </p>
        <h1 className="font-serif text-3xl text-espresso mb-1">Kaspr dashboard</h1>
        <p className="text-sm text-mid mb-10">
          {rows.length} active client{rows.length === 1 ? "" : "s"} &middot;{" "}
          {totals.conversations} conversations &middot; {totals.reviews} review requests &middot;{" "}
          {totals.missedCalls} missed calls handled &middot; {totals.content} posts received
          &middot; {totals.postsPosted} posts published
          {totals.postsFailed > 0 && (
            <span className="text-coral-dark font-semibold">
              {" "}
              &middot; {totals.postsFailed} publish failure{totals.postsFailed === 1 ? "" : "s"}
            </span>
          )}
        </p>

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
