import Home from "@/components/Home/Home";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import NavBar from "@/components/NavBar/NavBar";


const Hero = () => {
  return (
    <>
        <HeroHighlight>
          <NavBar />
          <Home />
        </HeroHighlight>
    </>
  );
}

export default Hero