// src/pages/TermsOfService.jsx
// Route: /terms
// Drop into kaspr-site and add <Route path="/terms" element={<TermsOfService />} />

import { useEffect } from "react";

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-lg font-semibold text-stone-900 mb-3 pb-2 border-b border-stone-200">
      {title}
    </h2>
    <div className="space-y-3 text-stone-600 text-sm leading-relaxed">{children}</div>
  </div>
);

export default function TermsOfService() {
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
          <h1 className="text-3xl font-bold text-stone-900 mb-2">Terms of Service</h1>
          <p className="text-stone-500 text-sm">
            Last updated: 1 May 2026 &nbsp;·&nbsp; Kaspr Pty Ltd ABN [INSERT ABN]
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl border border-stone-200 p-8 md:p-12">

          <p className="text-stone-600 text-sm leading-relaxed mb-10">
            These Terms of Service ("Terms") govern your access to and use of the services provided
            by Kaspr Pty Ltd ("Kaspr", "we", "us", "our"), including our website at{" "}
            <a href="https://kaspr.com.au" className="text-rose-500 underline underline-offset-2">
              kaspr.com.au
            </a>{" "}
            and all associated automation services. By subscribing to or using our services, you
            agree to be bound by these Terms. If you do not agree, do not use our services.
          </p>

          <Section title="1. About Kaspr">
            <p>
              Kaspr is an AI automation platform designed for beauty and wellness studios in
              Australia. Our services include automated client reactivation messaging, Google Review
              request campaigns, Instagram and TikTok content scheduling and publishing, comment and
              DM management, and AI-powered content generation.
            </p>
          </Section>

          <Section title="2. Eligibility">
            <p>
              You must be at least 18 years of age and a legal entity or individual with authority
              to enter binding contracts to use our services. By using Kaspr, you represent that you
              meet these requirements. Our services are intended for business use by Australian
              beauty and wellness studios.
            </p>
          </Section>

          <Section title="3. Account Registration and Subscription">
            <p>
              To access our services, you must register an account and purchase a subscription.
              Subscription tiers (Revive, Revive + Grow, Full Stack) and associated pricing are
              set out on our website and in the checkout flow. Prices are in Australian dollars and
              include GST where applicable.
            </p>
            <p>
              You are responsible for maintaining the security of your account credentials. Kaspr
              is not liable for any loss arising from unauthorised access to your account.
            </p>
            <p>
              Founding client pricing (50% discount, lifetime locked) is available to the first ten
              (10) subscribing clients and is subject to continuous active subscription. Founding
              pricing is non-transferable.
            </p>
          </Section>

          <Section title="4. Payment and Billing">
            <p>
              Payments are processed via Stripe. By providing payment details, you authorise Kaspr
              to charge your payment method for the applicable subscription fee on a recurring
              monthly basis.
            </p>
            <p>
              Setup fees are charged once at the time of purchase and are non-refundable. Monthly
              subscription fees are charged in advance. If a payment fails, we will notify you and
              may suspend access to your account until payment is resolved.
            </p>
          </Section>

          <Section title="5. Cancellation and Refunds">
            <p>
              You may cancel your subscription at any time by contacting us at{" "}
              <a href="mailto:hello@kaspr.com.au" className="text-rose-500 underline underline-offset-2">
                hello@kaspr.com.au
              </a>
              . Cancellation takes effect at the end of the current billing period. No refunds are
              issued for partial months.
            </p>
            <p>
              Setup fees are non-refundable. If you are dissatisfied with our services within the
              first 14 days of your subscription (excluding the setup fee), please contact us to
              discuss a resolution.
            </p>
          </Section>

          <Section title="6. Permitted Use">
            <p>You agree to use Kaspr's services only for lawful purposes. You must not:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use our services to send unsolicited commercial messages in violation of the <em>Spam Act 2003 (Cth)</em></li>
              <li>Send messages to individuals who have opted out or requested suppression</li>
              <li>Publish content to social platforms that violates those platforms' terms of service</li>
              <li>Use our services to harass, defraud, or harm any person</li>
              <li>Attempt to reverse engineer, copy, or resell any part of our platform</li>
              <li>Provide false or misleading information to Kaspr or to your clients' customers</li>
            </ul>
          </Section>

          <Section title="7. Third-Party Platform Integrations">
            <p>
              Our services integrate with third-party platforms including Meta (Instagram), TikTok,
              Twilio (WhatsApp and SMS), Google, and Stripe. Your use of these integrations is also
              subject to the respective platform's terms of service and developer policies.
            </p>
            <p>
              <strong className="text-stone-800">TikTok:</strong> When you connect your TikTok
              account to Kaspr, you authorise us to publish content and access analytics on your
              behalf via the TikTok for Developers API, subject to TikTok's Platform Policy and
              Terms of Service. You remain solely responsible for ensuring that content published to
              your TikTok account complies with TikTok's Community Guidelines and applicable law.
              You may revoke this authorisation at any time via TikTok's account settings.
            </p>
            <p>
              <strong className="text-stone-800">Instagram / Meta:</strong> When you connect your
              Instagram account, you authorise us to publish content and manage comments and DMs via
              the Meta Graph API. You remain responsible for compliance with Meta's terms of service.
            </p>
            <p>
              Kaspr is not responsible for outages, policy changes, or actions taken by third-party
              platforms that affect the delivery or availability of our services.
            </p>
          </Section>

          <Section title="8. Client Data and Your Clients' Customers">
            <p>
              When you use Kaspr's messaging features, you provide us with contact data belonging to
              your clients' customers (end users). You represent and warrant that:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>You have obtained all necessary consents from end users to contact them via WhatsApp and SMS</li>
              <li>You will honour opt-out requests promptly (Kaspr's STOP handler does this automatically)</li>
              <li>The contact lists you provide comply with the <em>Spam Act 2003 (Cth)</em> and the <em>Do Not Call Register Act 2006 (Cth)</em></li>
            </ul>
            <p>
              You remain the data controller for your clients' customer data. Kaspr processes that
              data as your data processor, in accordance with our Privacy Policy.
            </p>
          </Section>

          <Section title="9. Intellectual Property">
            <p>
              All intellectual property in the Kaspr platform, including software, trademarks, and
              documentation, is owned by Kaspr Pty Ltd. Your subscription grants you a
              non-exclusive, non-transferable licence to use our services during the subscription
              term.
            </p>
            <p>
              You retain ownership of all content you provide to Kaspr (images, videos, brand
              assets). You grant Kaspr a limited licence to use that content solely to provide the
              services you have purchased. We do not use your content to train AI models without
              explicit written consent.
            </p>
          </Section>

          <Section title="10. AI-Generated Content">
            <p>
              Our platform uses AI to generate captions, content suggestions, and automated
              responses. You acknowledge that AI-generated content may not always be accurate,
              appropriate, or aligned with your brand. You are responsible for reviewing and
              approving content before it is published. Kaspr provides approval workflows for this
              purpose. Kaspr is not liable for any harm resulting from AI-generated content that you
              approve and publish.
            </p>
          </Section>

          <Section title="11. Disclaimers and Limitation of Liability">
            <p>
              Our services are provided "as is." To the maximum extent permitted by Australian law,
              Kaspr disclaims all warranties, express or implied, including warranties of
              merchantability, fitness for a particular purpose, and non-infringement.
            </p>
            <p>
              Kaspr's total liability to you for any claim arising from these Terms or your use of
              our services shall not exceed the total subscription fees paid by you in the three (3)
              months preceding the claim. Kaspr is not liable for indirect, incidental, consequential,
              or punitive damages, or for loss of revenue, data, or business opportunity.
            </p>
            <p>
              Nothing in these Terms excludes liability that cannot be excluded under the{" "}
              <em>Australian Consumer Law</em> (Schedule 2 of the{" "}
              <em>Competition and Consumer Act 2010 (Cth)</em>).
            </p>
          </Section>

          <Section title="12. Indemnification">
            <p>
              You agree to indemnify and hold harmless Kaspr, its officers, employees, and agents
              from any claims, losses, damages, or expenses (including legal fees) arising from:
              (a) your breach of these Terms; (b) your violation of any third-party platform's terms
              of service; (c) the content you publish or messages you send via our platform; or (d)
              your violation of applicable law.
            </p>
          </Section>

          <Section title="13. Suspension and Termination">
            <p>
              Kaspr reserves the right to suspend or terminate your account immediately if you
              breach these Terms, violate applicable law, or engage in conduct that Kaspr reasonably
              determines to be harmful to other users, third parties, or Kaspr's reputation.
            </p>
            <p>
              Upon termination, your access to the platform will cease. We will retain your data
              for 90 days before deletion, during which time you may request an export.
            </p>
          </Section>

          <Section title="14. Modifications to Terms">
            <p>
              We may update these Terms from time to time. We will notify you of material changes
              via email at least 14 days before they take effect. Your continued use of our services
              after that date constitutes acceptance of the updated Terms. If you do not accept the
              changes, you may cancel your subscription before they take effect.
            </p>
          </Section>

          <Section title="15. Governing Law and Disputes">
            <p>
              These Terms are governed by the laws of New South Wales, Australia. Any disputes
              arising from these Terms shall be subject to the exclusive jurisdiction of the courts
              of New South Wales. We encourage you to contact us first at{" "}
              <a href="mailto:hello@kaspr.com.au" className="text-rose-500 underline underline-offset-2">
                hello@kaspr.com.au
              </a>{" "}
              to resolve any dispute informally.
            </p>
          </Section>

          <Section title="16. Contact">
            <p>For any questions about these Terms, please contact:</p>
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

