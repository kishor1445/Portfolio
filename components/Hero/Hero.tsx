import Home from "@/components/Home/Home";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import NavBar from "@/components/NavBar/NavBar";


const Hero = () => {
  return (
    <header>
        <HeroHighlight>
          <NavBar />
          <Home />
        </HeroHighlight>
    </header>
  );
}

export default Hero