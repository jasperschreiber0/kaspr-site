import React from 'react';
export const metadata = {
  title: "Terms of Service | Kaspr",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-semibold text-stone-900 mb-3 pb-2 border-b border-stone-200">
        {title}
      </h2>
      <div className="space-y-3 text-stone-600 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <img src="/kaspr-icon.png" alt="Kaspr" className="w-12 h-12 rounded-xl mb-6" />
          <p className="text-xs uppercase tracking-widest text-rose-500 font-medium mb-3">Legal</p>
          <h1 className="text-3xl font-bold text-stone-900 mb-2">Terms of Service</h1>
          <p className="text-stone-500 text-sm">Last updated: 1 May 2026 · Kaspr Pty Ltd</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl border border-stone-200 p-8 md:p-12">
          <p className="text-stone-600 text-sm leading-relaxed mb-10">
            These Terms of Service govern your access to and use of services provided by Kaspr Pty Ltd ("Kaspr"), including kaspr.com.au and all associated automation services. By subscribing or using our services, you agree to these Terms.
          </p>
          <Section title="1. About Kaspr">
            <p>Kaspr is an AI automation platform for beauty and wellness studios in Australia. Services include Instagram and TikTok content publishing, trend-matched post scheduling, and Instagram DM and comment management.</p>
          </Section>
          <Section title="2. Eligibility">
            <p>You must be at least 18 years of age and authorised to enter binding contracts. Our services are intended for Australian beauty and wellness studios.</p>
          </Section>
          <Section title="3. Subscriptions and Pricing">
            <p>Subscription tiers (Grow, Full Stack) and pricing are detailed on our website in Australian dollars. Founding client pricing (50% lifetime discount) is available to the first ten subscribers, is non-transferable, and requires continuous active subscription.</p>
          </Section>
          <Section title="4. Payment and Billing">
            <p>Payments processed via Stripe. By providing payment details you authorise recurring monthly charges. Setup fees are charged once and are non-refundable. Failed payments may result in account suspension.</p>
          </Section>
          <Section title="5. Cancellation and Refunds">
            <p>Cancel at any time by contacting <a href="mailto:hello@kaspr.com.au" className="text-rose-500 underline underline-offset-2">hello@kaspr.com.au</a>. Cancellation takes effect at the end of the billing period. No refunds for partial months. Setup fees are non-refundable.</p>
          </Section>
          <Section title="6. Permitted Use">
            <p>You must not use our services to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Send unsolicited messages in violation of the Spam Act 2003 (Cth)</li>
              <li>Message individuals who have opted out</li>
              <li>Publish content that violates any platform's terms of service</li>
              <li>Harass, defraud, or harm any person</li>
              <li>Reverse engineer, copy, or resell any part of our platform</li>
            </ul>
          </Section>
          <Section title="7. Third-Party Platform Integrations">
            <p>Our services integrate with Meta, TikTok, Twilio, Google, and Stripe. Your use is also subject to each platform's own terms.</p>
            <p><strong className="text-stone-800">TikTok:</strong> When you connect your TikTok account, you authorise Kaspr to publish content and access analytics via the TikTok for Developers API, subject to TikTok's Platform Policy. You remain responsible for ensuring content complies with TikTok's Community Guidelines. You may revoke access at any time via TikTok's account settings.</p>
            <p><strong className="text-stone-800">Instagram / Meta:</strong> You authorise us to publish content and manage comments and DMs via the Meta Graph API. You remain responsible for compliance with Meta's terms.</p>
            <p>Kaspr is not responsible for outages, policy changes, or actions taken by third-party platforms.</p>
          </Section>
          <Section title="8. Intellectual Property">
            <p>All IP in the Kaspr platform is owned by Kaspr Pty Ltd. You retain ownership of all content you provide. We do not use your content to train AI models without explicit written consent.</p>
          </Section>
          <Section title="9. AI-Generated Content">
            <p>You are responsible for reviewing and approving AI-generated content before publication. Kaspr is not liable for harm resulting from content you approve and publish.</p>
          </Section>
          <Section title="10. Limitation of Liability">
            <p>To the maximum extent permitted by Australian law, Kaspr's total liability shall not exceed subscription fees paid in the three months preceding the claim. Kaspr is not liable for indirect or consequential damages. Nothing here excludes liability that cannot be excluded under the Australian Consumer Law.</p>
          </Section>
          <Section title="11. Indemnification">
            <p>You agree to indemnify Kaspr against claims arising from your breach of these Terms, violation of any platform's terms, content you publish, or your violation of applicable law.</p>
          </Section>
          <Section title="12. Termination">
            <p>Kaspr may suspend or terminate your account for breach of these Terms or applicable law. Data is retained for 90 days post-termination before deletion.</p>
          </Section>
          <Section title="13. Governing Law">
            <p>Governed by the laws of New South Wales, Australia. Disputes subject to NSW courts. Contact <a href="mailto:hello@kaspr.com.au" className="text-rose-500 underline underline-offset-2">hello@kaspr.com.au</a> first to resolve informally.</p>
          </Section>
          <Section title="14. Contact">
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-stone-700">
              <p className="font-medium text-stone-900">Kaspr Pty Ltd</p>
              <p>Australia</p>
              <a href="mailto:hello@kaspr.com.au" className="text-rose-500 underline underline-offset-2">hello@kaspr.com.au</a>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

