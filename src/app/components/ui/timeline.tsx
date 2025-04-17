"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      id="timeline-section"
      className="w-full bg-neutral-900 font-sans px-4 sm:px-6 md:px-8 lg:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-10 sm:py-12 md:py-16 lg:py-20">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl mb-3 sm:mb-4 text-white max-w-4xl">
          <b>Changelog from my journey</b>
        </h2>
        <p className="text-neutral-700 text-white text-xs sm:text-sm md:text-base max-w-sm">
          I have been student of Information Technology at <i>Indian Institute Of Information Technology, Vadodara</i> from past 2 years.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-10 sm:pb-12 md:pb-16 lg:pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-6 sm:pt-8 md:pt-10 lg:pt-40 gap-4 sm:gap-6 md:gap-8 lg:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 sm:top-24 md:top-32 lg:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 sm:h-10 absolute left-2 sm:left-3 w-8 sm:w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-3 sm:h-4 w-3 sm:w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-1 sm:p-2" />
              </div>
              <h3 className="hidden md:block text-lg sm:text-xl md:text-2xl lg:text-5xl font-bold text-neutral-500 dark:text-neutral-500 md:pl-16 lg:pl-20">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-12 sm:pl-16 md:pl-20 pr-2 sm:pr-4 w-full">
              <h3 className="md:hidden block text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-6 lg:left-8 left-4 sm:left-6 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
