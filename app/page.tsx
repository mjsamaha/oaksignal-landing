import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import JsonLd from "@/components/json-ld";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <main>
        <JsonLd />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
