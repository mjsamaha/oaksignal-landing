import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for OakSignal - Understanding how we handle your data.",
};

export default function PrivacyPage() {
  return (
    <main className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>
        
        <p className="text-muted-foreground text-sm">Last Updated: January 30, 2026</p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p className="leading-7">
            Welcome to OakSignal. We respect your privacy and are committed to protecting the personal data involved in our multi-tenant web platform designed for cadet units and youth organizations. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you access our services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
          <p className="leading-7">
            OakSignal operates as a platform provider. We collect information in two primary ways:
          </p>
          <ul className="list-disc pl-6 space-y-2 leading-7">
            <li>
              <strong>Account Information:</strong> When an organization (Tenant) registers or an administrator creates a user account, we collect basic login credentials such as names, email addresses, and assigned roles.
            </li>
            <li>
              <strong>Tenant Data:</strong> Our platform allows units to store operational data, which may include records related to inventory, training, and personnel (including cadets). This data resembles a &quot;digital filing cabinet&quot; and is owned and controlled by the Tenant (the unit or organization), not OakSignal.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Cadet Data & Supervision</h2>
          <p className="leading-7">
            We understand the sensitivity of handling data related to youth (cadets). 
          </p>
          <ul className="list-disc pl-6 space-y-2 leading-7">
            <li>
              <strong>Controller vs. Processor:</strong> The Tenant (your local unit or organization) is the &quot;Data Controller&quot; responsible for obtaining necessary consents and ensuring data is used appropriately under adult supervision. OakSignal acts as the &quot;Data Processor&quot; providing the tools to manage this data.
            </li>
            <li>
              <strong>Minimization:</strong> We encourage Tenants to store only the minimum amount of personal data necessary for unit administration.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Data Isolation & Security</h2>
          <p className="leading-7">
            OakSignal is a multi-tenant environment. We implement strict logical isolation to ensure that data belonging to one unit is not accessible by another.
          </p>
          <ul className="list-disc pl-6 space-y-2 leading-7">
            <li>
              <strong>Access Controls:</strong> We utilize role-based access control (RBAC) to ensure that only authorized personnel within a unit can access sensitive information.
            </li>
            <li>
              <strong>Security Measures:</strong> We employ industry-standard encryption and security practices to protect data at rest and in transit.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. How We Use Your Information</h2>
          <p className="leading-7">
            We use the collected information solely to:
          </p>
          <ul className="list-disc pl-6 space-y-2 leading-7">
            <li>Provide, operate, and maintain the OakSignal platform.</li>
            <li>Authenticate users and enforce security permissions.</li>
            <li>Improve, personalize, and expand our platform functionalities.</li>
            <li>Communicate with Tenant administrators regarding updates, security alerts, and support.</li>
          </ul>
          <p className="leading-7">
            We do <strong>not</strong> sell, trade, or rent Tenant Data or personal information to third parties.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Third-Party Services</h2>
          <p className="leading-7">
            We may employ third-party companies and individuals to facilitate our service (e.g., hosting providers, database management). These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Contact Us</h2>
          <p className="leading-7">
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="font-semibold mt-2">
            Email: contact.oaksignal@gmail.com
          </p>
        </section>
      </div>
    </main>
  );
}
