"use client";
import React from "react";
// import { motion } from "motion/react"
import { ShootingStars } from "@/app/components/ui/shooting-stars";
import { StarsBackground } from "@/app/components/ui/stars-background";
// import { NavbarDemo } from "./Navbar";
import { ColourfulText } from "./ui/colourful-text";
// import { GlowingEffectDemo } from "./GlowEffect";
// import { StickyScrollRevealDemo } from "./Skills";
// import { BorderMagicButton } from "./ui/border-magic-button";
// import { LinkPreview } from "./ui/link-preview";
import { DirectionAwareHoverDemo } from "./ui/direction-aware-hover-demo";

export function ShootingStarsAndStarsBackgroundDemo() {
  // const handleViewProjects = () => {
  //   // Open the GitHub profile in a new tab
  //   window.open('https://github.com/venom-am', '_blank');
    
  //   // // If you have a projects page, you can use router.push('/projects')
  //   // // Or scroll to the projects section
  //   // document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-neutral-900 rounded-md mg-auto m-0 p-0">
      <div className="w-full bg-neutral-900 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto py-10 sm:py-12 md:py-16 lg:py-20">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4 sm:gap-6 md:gap-8">
            <div className="max-w-2xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                <ColourfulText text="Hey, I'm Abhishek" />
              </h1>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
                From dreaming of becoming a disc jockey at the age of nine to
                exploring various paths through trial and error, my journey has been
                anything but unconventional. Along the way, I discovered my true passion
                lies in technology and building things that live on the web. Today,
                I am a web developer at the Indian Institute of Information Technology,
                Vadodara. My work involves turning ideas into functional, user-centric
                websites while continuously learning and evolving with the
                ever-changing tech landscape.

                <br /><br />

                Outside of coding, I am an avid traveler and love immersing myself in
                different cultures—from exploring vibrant cities to spending reflective
                time in Buddhist monasteries. I enjoy meeting new people, hearing their
                stories, and building meaningful connections wherever I go.
              </p>
            </div>
            <div className="w-full md:w-auto flex justify-center">
              <DirectionAwareHoverDemo />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white">
        <ul>Projects</ul>
      </div> */}

      <div />
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
