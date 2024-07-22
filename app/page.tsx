import Hero from "@/components/Hero/Hero";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Certificates from "@/components/Certificates/Certificates";
import Projects from "@/components/Projects/Projects";
import Info from "@/components/Info/Info";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <main>
        <Info />
        <section>
          <Projects />
        </section>
        <section>
          <Certificates />
        </section>
        <section>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
