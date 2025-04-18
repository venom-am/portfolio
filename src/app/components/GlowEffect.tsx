"use client";

import { Box, Lock, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/app/components/ui/glowing-effect";

export function GlowingEffectDemo() {
  return (
    <div className="space-y-8">
      <div className="w-full bg-neutral-900 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto py-10 sm:py-12 md:py-16 lg:py-20">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl mb-3 sm:mb-4 text-white max-w-4xl">
            <b className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Projects</b>
          </h2>
        </div>
      </div>
      <ul id="projects-section" className="text-white grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 p-4 bg-neutral-900">

        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Box className="h-4 w-4 text-white dark:text-neutral-400" />}
          title="UpNext"
          description="UpNext – AI-powered career guidance web app built with Next.js, Tailwind CSS, Shadcn UI, and Gemini API. "
        />
      
        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Settings className="h-4 w-4 text-white dark:text-neutral-400" />}
          title="DonateSaathi"
          description="Donation Platform — React, Node.js, MongoDB Connects NGOs with donors, secure auth donation tracking."
        />

        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Lock className="h-4 w-4 text-white dark:text-neutral-400" />}
          title="Metaverse Game"
          description="3D Virtual World — MERN Stack, WebSockets A 3D metaverse game similar to Gather Town, providing an interactive virtual space with real-time communication and interactions."
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Sparkles className="h-4 w-4 text-white dark:text-neutral-400" />}
          title="News App"
          description="Real-time News Feed — React, News API Fetches and filters live news with search functionality."
        />

        <GridItem
          area="md:[grid-area:3/1/4/7] xl:[grid-area:2/8/3/13]"
          icon={<Box className="h-4 w-4 text-white dark:text-neutral-400" />}
          title="ChessFever"
          description="Multiplayer Chess — React, Node.js, WebSocket, Redis Real-time chess game with Redis-powered state sync and interactive UI."
        />
      </ul>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  const handleClick = () => {
    switch (title) {
      case "UpNext":
        window.open("https://up-next-vert.vercel.app", "_blank");
        break;
      case "Metaverse Game":
        window.open("https://github.com/venom-am/Metaverse-Game", "_blank");
        break;
      case "DonateSaathi":
        window.open("https://github.com/venom-am/IT_Project", "_blank");
        break;
      case "News App":
        window.open("https://github.com/venom-am/NewsApp", "_blank");
        break;
    }
  };

  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div 
        className={`relative h-full rounded-2.5xl border border-neutral-800 p-2 md:rounded-3xl md:p-3 bg-neutral-900 ${["UpNext", "Metaverse Game", "DonateSaathi", "News App"].includes(title) ? "cursor-pointer" : ""}`}
        onClick={handleClick}
      >
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-neutral-800 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm md:text-base text-neutral-300">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
