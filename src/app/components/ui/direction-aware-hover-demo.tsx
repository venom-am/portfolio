"use client";
import { DirectionAwareHover } from "./direction-aware-hover";
import { motion } from "framer-motion";

export function DirectionAwareHoverDemo() {
  return (
    <DirectionAwareHover
      imageUrl="/me.jpeg"
      className="h-[300px] w-[250px] sm:h-[350px] sm:w-[300px] md:h-[400px] md:w-[350px] lg:h-[450px] lg:w-[400px] xl:h-[550px] xl:w-[450px] rounded-2xl cursor-pointer"
    >
      <div className="flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg"
        >
          Abhishek Misal
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-neutral-200 drop-shadow-lg"
        >
          Full Stack Developer
        </motion.p>
      </div>
    </DirectionAwareHover>
  );
} 