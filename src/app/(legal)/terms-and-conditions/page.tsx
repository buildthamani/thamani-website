import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - Thamani",
  description: "Terms and Conditions for the Thamani App",
};

export default function TermsAndConditions() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 text-foreground">
      <h1 className="mb-4 text-4xl font-medium tracking-tight sm:text-5xl">THAMANI APP TERMS AND CONDITIONS</h1>
      <p className="mb-8 font-semibold">Last Updated: March 2026</p>

      <div className="space-y-6 text-sm leading-relaxed sm:text-base">
        <p>
          Welcome to Thamani! These Terms and Conditions (&quot;Terms&quot;) govern your use of the Thamani mobile application (&quot;App&quot;), website, and associated services (collectively, the &quot;Services&quot;) provided by Thamani (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
        </p>
        <p>
          By downloading the App or accessing our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the App.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">1. Financial Disclaimer – NOT FINANCIAL ADVICE</h2>
        <p className="font-semibold">THAMANI IS NOT A FINANCIAL ADVISOR OR LICENSED FINANCIAL INSTITUTION.</p>
        <p>The App reads your M-PESA transaction messages locally to provide spending insights, category breakdowns, and financial patterns. The content, data, insights, and any analytics provided are for <strong>informational and educational purposes only</strong>.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Thamani is <strong>NOT</strong> a financial advisory service, investment platform, or substitute for professional financial guidance.</li>
          <li>Thamani is <strong>NOT</strong> a banking, lending, or money transfer service. We do not process, hold, or transfer any funds on your behalf.</li>
          <li>Always consult a qualified financial professional for investment decisions, tax matters, or significant financial planning. Never make major financial decisions based solely on information provided by the App.</li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">2. User Accounts and Security</h2>
        <p>To access Thamani, you must download the app from the Google Play Store and grant the necessary permissions.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Device Security:</strong> Since your financial data is stored locally on your device, you are responsible for maintaining the security of your phone, including screen locks and device encryption.</li>
          <li><strong>SMS Permissions:</strong> You agree to grant SMS read permissions to allow Thamani to process your M-PESA transaction messages locally. This permission can be revoked at any time through your Android settings.</li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">3. Data Privacy and Ownership</h2>
        <p>
          Your privacy is paramount. Your financial data never leaves your device. Thamani processes M-PESA messages locally and does not upload, store, or transmit your transaction data to any server. You maintain full ownership of your financial data and may export or completely delete it at any time via the App settings. Both you and Thamani are bound by the terms outlined in our Privacy Policy.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">4. Streaks, Shields, and Gamification</h2>
        <p>The App includes gamification features designed to encourage daily financial mindfulness.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Streaks and Shields are motivational tools only. They do not constitute financial advice or guarantees of improved financial outcomes.</li>
          <li>Shield levels (Wood, Bronze, Silver, Gold) reflect consistency of engagement, not financial health or creditworthiness.</li>
          <li>Streak data is stored locally on your device and is not shared with any third party.</li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">5. Prohibited Conduct</h2>
        <p>When using Thamani, you agree NOT to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use the App for any illegal or unauthorised purpose.</li>
          <li>Attempt to hack, reverse-engineer, decompile, or interfere with the App&apos;s proper functioning or local data storage.</li>
          <li>Use the App in a way that infringes on the privacy or security of others.</li>
          <li>Misrepresent Thamani&apos;s insights as professional financial advice to others.</li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">6. Intellectual Property</h2>
        <p>
          All content, visual interfaces, interactive features, design aesthetics (including our distinctive brand identity and typography), computer code, and software in the App are strictly owned by us or our licensors. You are granted a limited, personal, non-transferable, non-exclusive licence to use the App for personal, non-commercial purposes.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">7. Limitation of Liability</h2>
        <p className="uppercase">
          TO THE FULLEST EXTENT PERMITTED BY LAW, THAMANI, ITS FOUNDERS, EMPLOYEES, AND PARTNERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your use of or inability to use the App.</li>
          <li>Any reliance placed on the spending insights, patterns, or analytics provided by the App.</li>
          <li>Loss of locally stored data due to device failure, user action, or factors beyond our reasonable control.</li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">8. Modifications to the App and Terms</h2>
        <p>
          We reserve the right to modify or discontinue the App (or any part thereof) with or without notice. We also reserve the right to revise these Terms from time to time. We will provide notification of significant changes within the App. By continuing to use the Services after revisions become effective, you agree to the revised Terms.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">9. Governing Law</h2>
        <p>
          These terms shall be governed by and construed in accordance with the laws of the Republic of Kenya, without regard to its conflict of law provisions.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">10. Contact Information</h2>
        <p>For any questions regarding these Terms, please contact us at:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Email:</strong> legal@thamani.app</li>
          <li><strong>Website:</strong> https://thamani.app</li>
        </ul>
      </div>
    </div>
  );
}
