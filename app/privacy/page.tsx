export const metadata = {
  title: "Privacy Policy | Kaspr",
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

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <img src="/kaspr-icon.png" alt="Kaspr" className="w-12 h-12 rounded-xl mb-6" />
          <p className="text-xs uppercase tracking-widest text-rose-500 font-medium mb-3">Legal</p>
          <h1 className="text-3xl font-bold text-stone-900 mb-2">Privacy Policy</h1>
          <p className="text-stone-500 text-sm">Last updated: 1 May 2026 · Kaspr Pty Ltd</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl border border-stone-200 p-8 md:p-12">
          <p className="text-stone-600 text-sm leading-relaxed mb-10">
            Kaspr Pty Ltd ("Kaspr", "we", "us", "our") operates kaspr.com.au and provides AI automation services to beauty and wellness studios across Australia. This Privacy Policy explains how we collect, use, share, and protect your personal information, including information processed in connection with TikTok, Instagram, WhatsApp, and Stripe.
          </p>
          <Section title="1. Who This Policy Applies To">
            <p>This policy applies to all visitors to kaspr.com.au, prospective clients, current clients, and individuals whose personal data is processed by Kaspr's automated services on behalf of our clients.</p>
          </Section>
          <Section title="2. Information We Collect">
            <p><strong className="text-stone-800">Information you provide directly:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name, email, phone number, and business details when you sign up</li>
              <li>Payment information processed securely via Stripe (we do not store card details)</li>
              <li>Content you provide for publication — images, videos, and text</li>
              <li>Responses to onboarding questionnaires</li>
            </ul>
            <p className="mt-3"><strong className="text-stone-800">Information collected automatically:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>IP address, browser type, device identifiers, and usage data</li>
              <li>WhatsApp message content and metadata when interacting with our agents</li>
              <li>Instagram and TikTok account data when you connect your social accounts</li>
              <li>Google Review request outcomes and SMS delivery data via Twilio</li>
            </ul>
            <p className="mt-3"><strong className="text-stone-800">Information from third-party platforms:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>TikTok:</strong> When you authorise Kaspr to access your TikTok account, we receive access tokens, profile information, and publishing permissions via the TikTok for Developers API. Used solely to publish content and retrieve analytics. Never sold or shared with third parties.</li>
              <li><strong>Instagram / Meta:</strong> Publishing permissions via the Meta Graph API to post content and manage comments and DMs on your behalf.</li>
              <li><strong>Twilio / WhatsApp:</strong> Message content and phone numbers processed in accordance with Twilio's privacy policy.</li>
            </ul>
          </Section>
          <Section title="3. How We Use Your Information">
            <ul className="list-disc pl-5 space-y-1">
              <li>To provide, operate, and improve our automation services</li>
              <li>To publish content to your connected social accounts on your behalf</li>
              <li>To send automated WhatsApp and SMS messages to your clients as directed by you</li>
              <li>To process payments and send transaction and onboarding emails</li>
              <li>To comply with Australian law including the Spam Act 2003 (Cth) and Privacy Act 1988 (Cth)</li>
              <li>To honour opt-out and STOP requests and maintain suppression lists</li>
            </ul>
            <p className="mt-3">We do not use your data for advertising. We do not train AI models on client content without explicit consent.</p>
          </Section>
          <Section title="4. TikTok Data — Specific Disclosures">
            <p>In connection with the TikTok for Developers API, Kaspr collects and processes:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>TikTok account identifiers and profile information (display name, avatar)</li>
              <li>OAuth access tokens and refresh tokens required to act on your behalf</li>
              <li>Content uploaded to TikTok via our platform (videos, captions, hashtags)</li>
              <li>Post performance metrics (views, likes, shares, comments) for reporting</li>
            </ul>
            <p className="mt-3"><strong className="text-stone-800">Purpose:</strong> Used exclusively to fulfil content publishing and analytics services. Never sold or shared for marketing or advertising.</p>
            <p className="mt-3"><strong className="text-stone-800">Retention:</strong> TikTok access tokens and associated data are deleted upon cancellation of your subscription or upon written request.</p>
            <p className="mt-3"><strong className="text-stone-800">Revoking access:</strong> Via TikTok's app settings (Settings → Security → Apps and Sessions) or by contacting <a href="mailto:hello@kaspr.com.au" className="text-rose-500 underline underline-offset-2">hello@kaspr.com.au</a>.</p>
          </Section>
          <Section title="5. Sharing Your Information">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Service providers:</strong> Supabase, Railway, Twilio, Resend, Stripe, Apify, Replicate, Meta, TikTok — only as necessary to deliver our services.</li>
              <li><strong>Legal requirements:</strong> Where required by Australian law or court order.</li>
              <li><strong>Business transfers:</strong> If Kaspr is acquired, subject to equivalent privacy protections.</li>
            </ul>
            <p className="mt-3">We do not sell personal information. Ever.</p>
          </Section>
          <Section title="6. Opt-Out and STOP Requests">
            <p>All WhatsApp and SMS messages include opt-out instructions. Recipients may reply STOP, UNSUBSCRIBE, or STOP ALL at any time. Requests are processed immediately and the number is added to a permanent suppression list. Compliant with the Spam Act 2003 (Cth) and Do Not Call Register Act 2006 (Cth).</p>
          </Section>
          <Section title="7. Data Security">
            <p>Industry-standard security including encrypted storage and access controls. Database hosted in Sydney via Supabase. Access restricted to authorised personnel only.</p>
          </Section>
          <Section title="8. Data Retention">
            <p>Data retained while your account is active. Upon cancellation, held for 90 days then deleted. Suppression records retained indefinitely for compliance.</p>
          </Section>
          <Section title="9. Your Rights">
            <p>Under the Privacy Act 1988 (Cth), you may access, correct, or request deletion of your personal information, and complain to the OAIC. Contact <a href="mailto:hello@kaspr.com.au" className="text-rose-500 underline underline-offset-2">hello@kaspr.com.au</a>. We respond within 30 days.</p>
          </Section>
          <Section title="10. Children's Privacy">
            <p>Our services are not directed at individuals under 18. We do not knowingly collect information from children.</p>
          </Section>
          <Section title="11. Changes to This Policy">
            <p>We will notify clients of material changes via email. Continued use constitutes acceptance. The date above reflects the most recent revision.</p>
          </Section>
          <Section title="12. Contact">
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
