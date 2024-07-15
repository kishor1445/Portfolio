"use client";
import Home from "@/components/Home/Home";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import NavBar from "@/components/NavBar/NavBar";


const Hero = () => {
  return (
    <div>
        <HeroHighlight>
            <NavBar />
            <Home />
        </HeroHighlight>
    </div>
  );
}

export default Hero