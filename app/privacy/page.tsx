// src/pages/PrivacyPolicy.jsx
// Route: /privacy
// Drop into kaspr-site and add <Route path="/privacy" element={<PrivacyPolicy />} />

import { useEffect } from "react";

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-lg font-semibold text-stone-900 mb-3 pb-2 border-b border-stone-200">
      {title}
    </h2>
    <div className="space-y-3 text-stone-600 text-sm leading-relaxed">{children}</div>
  </div>
);

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <p className="text-xs uppercase tracking-widest text-rose-500 font-medium mb-3">
            Legal
          </p>
          <h1 className="text-3xl font-bold text-stone-900 mb-2">Privacy Policy</h1>
          <p className="text-stone-500 text-sm">
            Last updated: 1 May 2026 &nbsp;·&nbsp; Kaspr Pty Ltd ABN [INSERT ABN]
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl border border-stone-200 p-8 md:p-12">

          <p className="text-stone-600 text-sm leading-relaxed mb-10">
            Kaspr Pty Ltd ("Kaspr", "we", "us", "our") operates the website{" "}
            <a href="https://kaspr.com.au" className="text-rose-500 underline underline-offset-2">
              kaspr.com.au
            </a>{" "}
            and provides AI automation services to beauty and wellness studios across Australia.
            This Privacy Policy explains how we collect, use, share, and protect your personal
            information, including information collected or processed in connection with our use of
            third-party platforms such as TikTok, Instagram, WhatsApp, and Stripe.
          </p>

          <Section title="1. Who This Policy Applies To">
            <p>
              This policy applies to all visitors to kaspr.com.au, prospective clients, current
              clients (studios and their authorised users), and any individuals whose personal data
              is processed by Kaspr's automated services on behalf of our clients.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p><strong className="text-stone-800">Information you provide directly:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name, email address, phone number, and business details when you sign up or contact us</li>
              <li>Payment information processed securely via Stripe (we do not store card details)</li>
              <li>Content you provide for publication, including images, videos, and text</li>
              <li>Responses to onboarding questionnaires and communications with our team</li>
            </ul>
            <p className="mt-3"><strong className="text-stone-800">Information collected automatically:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>IP address, browser type, device identifiers, and usage data when you visit our website</li>
              <li>WhatsApp message content and metadata when you interact with our automated messaging agents</li>
              <li>Instagram and TikTok account data (follower counts, post performance, engagement metrics) when you connect your social accounts to our platform</li>
              <li>Google Review request outcomes and SMS delivery data via Twilio</li>
            </ul>
            <p className="mt-3"><strong className="text-stone-800">Information from third-party platforms:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>TikTok:</strong> When you authorise Kaspr to access your TikTok account, we
                receive access tokens, account profile information, and content publishing permissions
                via the TikTok for Developers API. We use this data solely to publish content on your
                behalf and to retrieve performance analytics for your account. We do not sell or share
                TikTok data with any third party. TikTok data is retained only for as long as
                necessary to fulfil the publishing and reporting functions you have authorised.
              </li>
              <li>
                <strong>Instagram / Meta:</strong> When you connect your Instagram account, we
                receive publishing permissions via the Meta Graph API to post content and manage
                comments and direct messages on your behalf.
              </li>
              <li>
                <strong>Twilio / WhatsApp:</strong> We use Twilio to send and receive WhatsApp and
                SMS messages. Message content and phone numbers are processed in accordance with
                Twilio's privacy policy.
              </li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <ul className="list-disc pl-5 space-y-1">
              <li>To provide, operate, and improve our automation services</li>
              <li>To publish content to your connected social media accounts (Instagram, TikTok) on your behalf</li>
              <li>To send automated WhatsApp and SMS messages to your clients as directed by you</li>
              <li>To process payments and send transaction and onboarding emails</li>
              <li>To send you service-related communications, including status updates and support messages</li>
              <li>To comply with legal obligations under Australian law, including the Spam Act 2003 (Cth) and the Privacy Act 1988 (Cth)</li>
              <li>To respond to opt-out and STOP requests and maintain suppression lists</li>
            </ul>
            <p className="mt-3">
              We do not use your data or your clients' data for advertising purposes. We do not
              train AI models on client content without explicit consent.
            </p>
          </Section>

          <Section title="4. TikTok Data — Specific Disclosures">
            <p>
              In connection with our integration with the TikTok for Developers API, Kaspr
              collects and processes the following categories of TikTok user data:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>TikTok account identifiers and profile information (display name, avatar)</li>
              <li>OAuth access tokens and refresh tokens required to act on your behalf</li>
              <li>Content uploaded to TikTok via our platform (videos, captions, hashtags)</li>
              <li>Post performance metrics (views, likes, shares, comments) for reporting purposes</li>
            </ul>
            <p className="mt-3">
              <strong className="text-stone-800">Purpose:</strong> TikTok data is used exclusively
              to fulfil the content publishing and analytics services you have purchased. It is never
              sold, rented, or shared with third parties for marketing or advertising purposes.
            </p>
            <p className="mt-3">
              <strong className="text-stone-800">Retention:</strong> TikTok access tokens and
              associated data are deleted or de-authorised immediately upon cancellation of your
              Kaspr subscription or upon your written request.
            </p>
            <p className="mt-3">
              <strong className="text-stone-800">Your rights:</strong> You may revoke Kaspr's
              access to your TikTok account at any time via TikTok's app settings (Settings →
              Security → Apps and Sessions). You may also contact us at{" "}
              <a href="mailto:hello@kaspr.com.au" className="text-rose-500 underline underline-offset-2">
                hello@kaspr.com.au
              </a>{" "}
              to request deletion of any TikTok data we hold.
            </p>
          </Section>

          <Section title="5. Sharing Your Information">
            <p>We share personal information only in the following circumstances:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Service providers:</strong> We share data with Supabase (database hosting,
                Sydney region), Railway (application hosting), Twilio (messaging), Resend (email),
                Stripe (payments), Apify (data scraping), Replicate (AI model inference), and Meta /
                TikTok (social publishing) — only to the extent necessary to deliver our services.
              </li>
              <li>
                <strong>Legal requirements:</strong> We may disclose information where required by
                Australian law, court order, or regulatory authority.
              </li>
              <li>
                <strong>Business transfers:</strong> If Kaspr is acquired or merges with another
                entity, your information may be transferred as part of that transaction, subject to
                equivalent privacy protections.
              </li>
            </ul>
            <p className="mt-3">We do not sell personal information. Ever.</p>
          </Section>

          <Section title="6. Opt-Out and STOP Requests">
            <p>
              All WhatsApp and SMS messages sent via our platform include opt-out instructions.
              Recipients may reply STOP, UNSUBSCRIBE, or STOP ALL at any time. Opt-out requests
              are processed immediately and result in the phone number being added to a permanent
              suppression list. No further messages will be sent to that number.
            </p>
            <p className="mt-3">
              This process is compliant with the{" "}
              <em>Spam Act 2003 (Cth)</em> and the{" "}
              <em>Do Not Call Register Act 2006 (Cth)</em>.
            </p>
          </Section>

          <Section title="7. Data Security">
            <p>
              We implement industry-standard security measures including encrypted data storage,
              access controls, and regular security reviews. Our database is hosted in Sydney,
              Australia via Supabase. Access to production systems is restricted to authorised
              personnel only.
            </p>
            <p>
              Despite our efforts, no method of transmission over the internet is 100% secure.
              If you believe your data has been compromised, please contact us immediately.
            </p>
          </Section>

          <Section title="8. Data Retention">
            <p>
              We retain your personal information for as long as your account is active or as
              needed to provide services. Upon cancellation, we retain data for 90 days before
              deletion, except where longer retention is required by law. Suppression (opt-out)
              records are retained indefinitely to ensure compliance.
            </p>
          </Section>

          <Section title="9. Your Rights (Australian Privacy Act)">
            <p>Under the <em>Privacy Act 1988 (Cth)</em>, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your personal information (subject to legal retention requirements)</li>
              <li>Complain to the Office of the Australian Information Commissioner (OAIC) if you believe we have mishandled your data</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:hello@kaspr.com.au" className="text-rose-500 underline underline-offset-2">
                hello@kaspr.com.au
              </a>
              . We will respond within 30 days.
            </p>
          </Section>

          <Section title="10. Cookies">
            <p>
              Our website uses essential cookies required for the site to function. We do not use
              tracking or advertising cookies. You may disable cookies in your browser settings,
              though this may affect site functionality.
            </p>
          </Section>

          <Section title="11. Children's Privacy">
            <p>
              Our services are not directed at individuals under 18 years of age. We do not
              knowingly collect personal information from children. If you believe a child has
              provided us with personal information, please contact us and we will delete it promptly.
            </p>
          </Section>

          <Section title="12. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify current clients
              of material changes via email. Continued use of our services after changes take effect
              constitutes acceptance of the updated policy. The "Last updated" date at the top of
              this page will always reflect the most recent revision.
            </p>
          </Section>

          <Section title="13. Contact Us">
            <p>For any privacy-related enquiries, please contact:</p>
            <div className="mt-2 p-4 bg-stone-50 rounded-xl border border-stone-200 text-stone-700">
              <p className="font-medium text-stone-900">Kaspr Pty Ltd</p>
              <p>Australia</p>
              <p>
                Email:{" "}
                <a href="mailto:hello@kaspr.com.au" className="text-rose-500 underline underline-offset-2">
                  hello@kaspr.com.au
                </a>
              </p>
              <p>Website: kaspr.com.au</p>
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
}
