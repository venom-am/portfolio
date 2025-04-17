import { NavbarDemo } from "./components/Navbar";
import { GlowingEffectDemo } from "./components/GlowEffect";
import { StickyScrollRevealDemo } from "./components/Skills";
import { TimelineDemo } from "./components/timeline";
import { GetInTouch } from "./components/ui/get-in-touch";

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
