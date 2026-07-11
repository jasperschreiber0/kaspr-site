"use client";

import { useState } from "react";

const NICHES = [
  "beauty_salon",
  "nail_studio",
  "pilates_yoga",
  "allied_health",
  "cafe_brunch",
  "boutique_retail",
  "pet_grooming",
  "personal_training",
  "wellness",
];

type CreateResult = {
  client: { id: string; business_name: string };
  connectLinks: { instagram: string | null; tiktok: string | null };
};

export default function NewClientPage() {
  const [form, setForm] = useState({
    slug: "",
    businessName: "",
    niche: NICHES[0],
    icp: "",
    tone: "",
    goals: "",
    competitors: "",
    whatsappNumbers: "",
    brandVoice: "",
    platformInstagram: true,
    platformTiktok: true,
  });
  const [result, setResult] = useState<CreateResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setResult(null);

    const platforms = [
      form.platformInstagram ? "instagram" : null,
      form.platformTiktok ? "tiktok" : null,
    ].filter(Boolean);

    try {
      const res = await fetch("/dashboard/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: form.slug,
          businessName: form.businessName,
          niche: form.niche,
          icp: form.icp,
          tone: form.tone,
          goals: form.goals,
          competitors: form.competitors,
          whatsappNumbers: form.whatsappNumbers
            .split(",")
            .map((n) => n.trim())
            .filter(Boolean),
          brandVoice: form.brandVoice,
          platforms,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong");
      } else {
        setResult(data);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Request failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-cream px-6 py-12 md:px-10">
      <div className="max-w-2xl mx-auto">
        <p className="text-2xs font-bold uppercase tracking-[0.18em] text-coral mb-2">
          Internal
        </p>
        <h1 className="font-serif text-3xl text-espresso mb-1">New client</h1>
        <p className="text-sm text-mid mb-10">
          Creates the <code>clients</code> row every agent depends on. Nothing
          else in this system does that automatically yet.
        </p>

        {result && (
          <div className="mb-8 rounded-2xl border border-sage bg-sage/10 p-6">
            <p className="font-semibold text-espresso mb-2">
              ✅ {result.client.business_name} created
            </p>
            <p className="text-sm text-mid mb-4 font-mono">{result.client.id}</p>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold">Instagram connect: </span>
                {result.connectLinks.instagram ? (
                  <a
                    className="text-coral underline break-all"
                    href={result.connectLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {result.connectLinks.instagram}
                  </a>
                ) : (
                  <span className="text-mid">
                    Set AGENT1_BASE_URL in env to generate this automatically
                  </span>
                )}
              </p>
              <p>
                <span className="font-semibold">TikTok connect: </span>
                {result.connectLinks.tiktok ? (
                  <a
                    className="text-coral underline break-all"
                    href={result.connectLinks.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {result.connectLinks.tiktok}
                  </a>
                ) : (
                  <span className="text-mid">
                    Set AGENT3_BASE_URL in env to generate this automatically
                  </span>
                )}
              </p>
            </div>
            <p className="mt-4 text-xs text-mid">
              Send both links to the client so they can connect their accounts.
            </p>
          </div>
        )}

        {error && (
          <p className="mb-8 rounded-lg border border-coral/30 bg-coral/5 px-4 py-3 text-sm text-coral-dark">
            {error}
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-white border border-border rounded-2xl p-8 shadow-card"
        >
          <Field label="Slug (unique, url-safe)">
            <input
              required
              value={form.slug}
              onChange={(e) => setForm({ ...form, slug: e.target.value })}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm"
              placeholder="luna-nails"
            />
          </Field>
          <Field label="Business name">
            <input
              required
              value={form.businessName}
              onChange={(e) => setForm({ ...form, businessName: e.target.value })}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm"
              placeholder="Luna Nails"
            />
          </Field>
          <Field label="Niche">
            <select
              required
              value={form.niche}
              onChange={(e) => setForm({ ...form, niche: e.target.value })}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm"
            >
              {NICHES.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </Field>
          <Field label="ICP (ideal customer profile)">
            <textarea
              required
              value={form.icp}
              onChange={(e) => setForm({ ...form, icp: e.target.value })}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm"
              rows={2}
            />
          </Field>
          <Field label="Tone / brand voice descriptor">
            <input
              required
              value={form.tone}
              onChange={(e) => setForm({ ...form, tone: e.target.value })}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm"
              placeholder="Casual and friendly, lots of emojis"
            />
          </Field>
          <Field label="Detailed brand voice (optional — used verbatim in AI reply/caption prompts)">
            <textarea
              value={form.brandVoice}
              onChange={(e) => setForm({ ...form, brandVoice: e.target.value })}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm"
              rows={2}
            />
          </Field>
          <Field label="Goals">
            <textarea
              required
              value={form.goals}
              onChange={(e) => setForm({ ...form, goals: e.target.value })}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm"
              rows={2}
            />
          </Field>
          <Field label="Competitors (optional)">
            <input
              value={form.competitors}
              onChange={(e) => setForm({ ...form, competitors: e.target.value })}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm"
            />
          </Field>
          <Field label="Staff WhatsApp numbers (comma-separated, E.164 e.g. +614...)">
            <input
              required
              value={form.whatsappNumbers}
              onChange={(e) => setForm({ ...form, whatsappNumbers: e.target.value })}
              className="w-full border border-border rounded-lg px-3 py-2 text-sm"
              placeholder="+61412345678, +61412345679"
            />
          </Field>
          <Field label="Platforms">
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={form.platformInstagram}
                  onChange={(e) =>
                    setForm({ ...form, platformInstagram: e.target.checked })
                  }
                />
                Instagram
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={form.platformTiktok}
                  onChange={(e) =>
                    setForm({ ...form, platformTiktok: e.target.checked })
                  }
                />
                TikTok
              </label>
            </div>
          </Field>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-coral text-white text-sm font-bold py-3 rounded-full hover:bg-coral-dark transition-colors disabled:opacity-50"
          >
            {submitting ? "Creating..." : "Create client"}
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-espresso mb-1.5">{label}</label>
      {children}
    </div>
  );
}
