import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - OakSignal",
  description: "Common questions about OakSignal's status, security, and platform details.",
};

export default function FAQPage() {
  return (
    <main className="container mx-auto px-6 py-24 max-w-3xl">
      <div className="space-y-10">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">
            Answers to common questions about the OakSignal platform.
          </p>
        </section>

        <div className="space-y-8">
          {/* Section: Official Status */}
          <section>
            <h2 className="text-xl font-semibold mb-4 px-1">Official Status & Policy</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="official-status">
                <AccordionTrigger>Is OakSignal an official DND system?</AccordionTrigger>
                <AccordionContent>
                  No. OakSignal is an independently developed third-party platform. It is not owned, operated, or endorsed by the Department of National Defence (DND), the Canadian Armed Forces (CAF), or the Cadets and Junior Canadian Rangers (CJCR).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="policy-alignment">
                <AccordionTrigger>Does the platform follow cadet program policies?</AccordionTrigger>
                <AccordionContent>
                  Yes. We intentionally design our workflows and data structures to align with standard cadet program administration requirements (e.g., CATO, CJCR Gp Orders) to ensure the tools are relevant and useful for unit staff. However, users are responsible for ensuring their use of the platform remains compliant with their specific local orders.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Section: Data & Security */}
          <section>
            <h2 className="text-xl font-semibold mb-4 px-1">Data & Security</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="data-ownership">
                <AccordionTrigger>Who owns the data entered into OakSignal?</AccordionTrigger>
                <AccordionContent>
                  The unit or organization (Tenant) retains ownership of their data. OakSignal acts as the data processor, hosting and securing the information on your behalf. We do not sell or share unit data with advertisers or third parties.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="data-security">
                <AccordionTrigger>How is my data secured?</AccordionTrigger>
                <AccordionContent>
                  We utilize a strict multi-tenant architecture which ensures that each unit&apos;s data is logically isolated from others. Access is restricted to authorized user accounts authenticated via secure industry-standard protocols.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="data-residency">
                <AccordionTrigger>Where is the data hosted?</AccordionTrigger>
                <AccordionContent>
                  OakSignal infrastructure is hosted in secure data centers. We prioritize keeping data within appropriate legal jurisdictions for Canadian organizations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Section: Access & Cost */}
          <section>
            <h2 className="text-xl font-semibold mb-4 px-1">Access & Availability</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="how-to-join">
                <AccordionTrigger>How can my unit start using OakSignal?</AccordionTrigger>
                <AccordionContent>
                  Access is currently by invitation or request only as we scale our infrastructure. If you are interested in a pilot program for your unit, please contact us.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="cost">
                <AccordionTrigger>Is there a cost to use OakSignal?</AccordionTrigger>
                <AccordionContent>
                   Our goal is to keep the platform accessible to non-profit youth organizations. Specific pricing models or cost-recovery fees for server maintenance are discussed directly with participating units.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

           {/* Section: Platform Details */}
           <section>
            <h2 className="text-xl font-semibold mb-4 px-1">Platform Details</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="products">
                <AccordionTrigger>What functionality is included?</AccordionTrigger>
                <AccordionContent>
                  The platform includes <strong>SignalsMaster</strong> for training and operations management, and <strong>Quartermaster</strong> for supply and logistics. We are continuously developing new features based on user feedback.
                </AccordionContent>
              </AccordionItem>
               <AccordionItem value="mobile">
                <AccordionTrigger>Is it mobile friendly?</AccordionTrigger>
                <AccordionContent>
                  Yes. OakSignal is built with a responsive design, allowing instructors and staff to access key features on tablets and smartphones during training nights or field exercises.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>
    </main>
  );
}
