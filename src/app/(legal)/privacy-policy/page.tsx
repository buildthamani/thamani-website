import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Thamani",
  description: "Privacy Policy for the Thamani App",
};

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 text-foreground">
      <h1 className="mb-4 text-4xl font-medium tracking-tight sm:text-5xl">THAMANI APP PRIVACY POLICY</h1>
      <p className="mb-8 font-semibold">Last Updated: March 2026</p>

      <div className="space-y-6 text-sm leading-relaxed sm:text-base">
        <p>
          Welcome to Thamani (&quot;App&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;). Your privacy is deeply important to us. Because we handle sensitive financial data from your M-PESA transactions, we have built Thamani with a privacy-first approach — your data never leaves your device.
        </p>
        <p>
          This Privacy Policy explains what information we collect, how we use it, how we secure it, and your rights concerning that data. By using Thamani, you consent to the practices described in this Privacy Policy.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">1. Information We Collect</h2>

        <h3 className="mt-6 mb-3 text-xl font-medium">A. Information You Provide Directly</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Profile Information:</strong> When you set up the app, you may provide a display name and preferences to personalise your experience.</li>
          <li><strong>Financial Data:</strong> You may set spending limits, categories, and personal financial goals within the app. This data is stored exclusively on your device.</li>
        </ul>

        <h3 className="mt-6 mb-3 text-xl font-medium">B. Information Processed Locally</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>M-PESA SMS Messages:</strong> Thamani reads your M-PESA transaction messages locally on your device to categorise transactions and generate spending insights. These messages are never uploaded to any server or shared with any third party.</li>
          <li><strong>Transaction Insights:</strong> All analytics, spending patterns, and financial insights are computed and stored entirely on your device.</li>
        </ul>

        <h3 className="mt-6 mb-3 text-xl font-medium">C. Automatically Collected Information</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Analytics and Usage Data:</strong> We use PostHog to gather anonymised, non-personally identifiable product usage data to understand how you interact with Thamani and improve its features. No financial data is included in analytics.</li>
          <li><strong>Device Information:</strong> We collect basic device information, app version, and operating system data (e.g., Android version) for crash reporting and bug fixing.</li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">2. How We Use Your Information</h2>
        <p>We use the information we collect strictly to provide and improve the Thamani app experience:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>To Provide Core Features:</strong> Your M-PESA transaction data is processed locally to generate spending insights, category breakdowns, and financial patterns.</li>
          <li><strong>To Power Streaks and Shields:</strong> Your daily check-in activity is tracked locally to maintain your streak progress and shield level.</li>
          <li><strong>To Communicate With You:</strong> For sending optional push notifications (if opted-in) about your spending insights, streak reminders, or app updates.</li>
          <li><strong>For Product Improvement:</strong> Anonymised analytics help us understand which features are most useful and where bugs arise. No financial data is ever included.</li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">3. Data Storage and Security</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Local-First Architecture:</strong> Your financial data — including M-PESA messages, transaction history, spending patterns, and insights — is stored exclusively on your device. We do not maintain any server-side copy of your financial information.</li>
          <li><strong>Encryption:</strong> Data stored on your device is protected by Android&apos;s built-in encryption. Any network communication for analytics uses SSL/TLS encryption.</li>
          <li><strong>Anonymisation:</strong> For analytics tracking in PostHog, we implement strict controls to ensure no financial or personally identifiable information is ever transmitted.</li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">4. How We Share Your Data</h2>
        <p className="font-semibold">We do not and will not sell your personal or financial data to third-party advertisers or data brokers.</p>
        <p>We only share data in the following restricted circumstances:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Service Providers:</strong> We share necessary anonymised usage data with trusted third-party services that provide analytics (PostHog). These providers are bound by strict data processing agreements and never receive your financial data.</li>
          <li><strong>Legal Compliance:</strong> We may disclose information if required to do so by a legal obligation, valid court order, or government request, though we will seek to protect your financial records to the fullest extent permitted by law.</li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">5. Your Rights and Choices</h2>
        <p>We believe you should have total control over your financial data.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Data Export:</strong> You have the right to export all the financial data Thamani holds on your device. You can do this directly from the Settings screen in the app.</li>
          <li><strong>Data Deletion:</strong> You can delete all your data directly from the app (Settings &gt; Delete All Data). Since your data is stored locally, deletion is immediate and complete.</li>
          <li><strong>Opt-Out of Analytics:</strong> While analytics greatly help us improve Thamani, you may opt-out of usage tracking within the app settings.</li>
          <li><strong>Notification Controls:</strong> You control whether Thamani can send you push notifications via your Android system settings.</li>
          <li><strong>SMS Permissions:</strong> M-PESA message reading requires explicit SMS permissions, which you can revoke at any time via your Android settings. Without this permission, Thamani will not be able to automatically read your transactions.</li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">6. Children&apos;s Privacy</h2>
        <p>
          Thamani is not intended for use by children under the age of 13 (or under 16 in certain jurisdictions such as the EU/EEA, unless parental consent is given). We do not knowingly collect personal information from children without appropriate verified consent. If you believe we have inadvertently collected such information, please contact us so we can address it immediately.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">7. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy periodically. If we make material changes, particularly concerning how we handle your financial data, we will notify you within the Thamani app or via other appropriate means before the changes take effect.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">8. Contact Us</h2>
        <p>If you have any questions, concerns, or requests regarding your data and privacy, please contact our support team at:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Email:</strong> privacy@thamani.app</li>
          <li><strong>Website:</strong> https://thamani.app</li>
        </ul>
      </div>
    </div>
  );
}
