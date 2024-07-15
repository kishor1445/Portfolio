import Hero from "@/components/Hero/Hero";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Certificates from "@/components/Certificates/Certificates";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
