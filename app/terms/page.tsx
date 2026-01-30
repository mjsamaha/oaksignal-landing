import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for OakSignal platform usage.",
};

export default function TermsPage() {
  return (
    <main className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Terms of Service</h1>
        
        <p className="text-muted-foreground text-sm">Last Updated: January 30, 2026</p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p className="leading-7">
            By accessing or using the OakSignal platform (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of the terms, you may not access the Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Description of Service</h2>
          <p className="leading-7">
            OakSignal provides digital tools for cadet units and youth organizations, including learning management and inventory systems. The Service is provided on a multi-tenant basis where each organization (&quot;Tenant&quot;) operates within an isolated environment.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. User Responsibilities & Supervision</h2>
          <ul className="list-disc pl-6 space-y-2 leading-7">
            <li>
              <strong>Authorized Use:</strong> You typically access this Service as part of an organization (the Tenant). You agree to use the Service only for authorized purposes as defined by your organization.
            </li>
            <li>
              <strong>Adult Supervision:</strong> Tenants are responsible for ensuring that any data related to minors (cadets) is managed and accessed under appropriate adult supervision and in compliance with local regulations regarding youth protection.
            </li>
            <li>
              <strong>Account Security:</strong> You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Acceptable Use</h2>
          <p className="leading-7">
            You agree not to misuse the Service. This includes, but is not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2 leading-7">
            <li>Using the Service for any unlawful purpose.</li>
            <li>Attempting to bypass security measures or access data of other Tenants.</li>
            <li>Harassing, abusing, or harming another person via the Service.</li>
            <li>Uploading viruses or malicious code.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
          <ul className="list-disc pl-6 space-y-2 leading-7">
            <li>
              <strong>OakSignal Rights:</strong> The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of OakSignal.
            </li>
            <li>
              <strong>Tenant Data:</strong> You (the Tenant) retain all rights to the data, files, and information you upload to the Service. You grant OakSignal a license to host, copy, and display such data solely as necessary to provide the Service to you.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Termination</h2>
          <p className="leading-7">
            We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Limitation of Liability</h2>
          <p className="leading-7">
            In no event shall OakSignal, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Governing Law</h2>
          <p className="leading-7">
            These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which OakSignal operates, without regard to its conflict of law provisions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">9. Contact Us</h2>
          <p className="leading-7">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="font-semibold mt-2">
            Email: contact.oaksignal@gmail.com
          </p>
        </section>
      </div>
    </main>
  );
}
