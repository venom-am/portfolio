import { div } from "motion/react-client";
import Image from "next/image";
import { NavItems, Navbar } from "./components/ui/resizable-navbar";
import { NavbarDemo } from "./components/Navbar";
import { StarsBackground } from "./components/ui/stars-background";
import { ShootingStarsAndStarsBackgroundDemo } from "./components/ShootingStar";
import { GlowingEffectDemo } from "./components/GlowEffect";
import { StickyScrollRevealDemo } from "./components/Skills";
import { TracingBeam } from "./components/ui/tracing-beam";
import { TimelineDemo } from "./components/timeline";
import { GetInTouch } from "./components/ui/get-in-touch";
// import Project from "./components/Project";

const navItems = ["Home", "About", "Contact"];
export default function Home() {
  return (
    <div className="bg-neutral-900 py-0 my-0">
      <NavbarDemo />
      <GlowingEffectDemo />
        <StickyScrollRevealDemo />
      <TimelineDemo/>
      <GetInTouch />
    </div>
    
  );
}
