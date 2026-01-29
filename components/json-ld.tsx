import { Organization, WithContext } from "schema-dts";

export default function JsonLd() {
    const jsonLd: WithContext<Organization> = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "OakSignal",
        url: "https://mjsamaha.github.io/oaksignal-landing/",
        logo: "https://mjsamaha.github.io/oaksignal-landing/icon.svg", // Assuming icon.svg is available at root or similar
        sameAs: [
            // "https://twitter.com/oaksignal", // Example social links
            // "https://github.com/oaksignal"
        ],
        contactPoint: {
            "@type": "ContactPoint",
            email: "contact.oaksignal@gmail.com",
            contactType: "customer support",
        },
        description: "Reliable, maintainable digital systems for cadet and youth organizations."
    };

    return (
        <section>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </section>
    );
}
