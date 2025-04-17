"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import {  useRef, useState } from "react";
import Image from "next/image";

// import { cn } from "@/app/lib/utils";

export const DirectionAwareHover = ({
  imageUrl,
  children,
  className,
}: {
  imageUrl: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  // const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = ref.current?.getBoundingClientRect();

    if (!rect) return;

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex items-center justify-center overflow-hidden rounded-lg bg-neutral-800 ${className}`}
    >
      <motion.div
        animate={isHovered ? "hover" : "initial"}
        variants={{
          initial: {
            scale: 1,
            rotate: 0,
            filter: "blur(0px)",
          },
          hover: {
            scale: 1.05,
            rotate: 1,
            filter: "blur(4px)",
          },
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="relative h-full w-full"
      >
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt="Profile"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority
          />
        </div>
        <motion.div
          animate={isHovered ? "hover" : "initial"}
          variants={{
            initial: {
              opacity: 0,
            },
            hover: {
              opacity: 1,
            },
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
        />
      </motion.div>

      <motion.div
        animate={isHovered ? "hover" : "initial"}
        variants={{
          initial: {
            opacity: 0,
            y: 50,
          },
          hover: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="absolute bottom-0 left-0 right-0 z-20 p-6"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

// const variants = {
//   initial: {
//     x: 0,
//   },

//   exit: {
//     x: 0,
//     y: 0,
//   },
//   top: {
//     y: 20,
//   },
//   bottom: {
//     y: -20,
//   },
//   left: {
//     x: 20,
//   },
//   right: {
//     x: -20,
//   },
// };

// const textVariants = {
//   initial: {
//     y: 0,
//     x: 0,
//     opacity: 0,
//   },
//   exit: {
//     y: 0,
//     x: 0,
//     opacity: 0,
//   },
//   top: {
//     y: -20,
//     opacity: 1,
//   },
//   bottom: {
//     y: 2,
//     opacity: 1,
//   },
//   left: {
//     x: -2,
//     opacity: 1,
//   },
//   right: {
//     x: 20,
//     opacity: 1,
//   },
// };
