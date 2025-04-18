"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import { BorderMagicButton } from "./ui/border-magic-button";

const content = [
  {
    title: "React",
    description:
      "Have been working with React for the past 8–10 months, developing multiple projects that showcase a strong understanding of component-based architecture, state management, and modern frontend development practices.",
    content: (
        <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/images.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Next.js",
    description:
      "Learning Next.js for the past 2 months—built frontend interfaces and currently working on backend features using API routes and server-side capabilities.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/icon.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "HTML",
    description:
      "Working with HTML for 3–4 years, building various projects including website clones, blog templates, and simple browser-based games.",
    content: (
        <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/html-5.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "CSS",
    description:
      "Experienced in CSS for 3–4 years, with several projects showcasing responsive design, custom layouts, and UI styling.",
    content: (
        <div className="flex h-full w-full  items-center justify-center text-white">
        <Image
          src="/css.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Javascript",
    description:
      "Proficient in JavaScript with hands-on experience in building interactive web applications, implementing dynamic functionalities, and working across both frontend and backend environments.",
    content: (
        <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/1.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "TypeScript",
    description:
      "Comfortable working with TypeScript to write type-safe, scalable code—used in several projects to enhance code reliability and maintainability in both frontend and backend development.",
    content: (
        <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/4.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Node.js",
    description:
      "Experienced with Node.js for building scalable backend applications and RESTful APIs, with hands-on experience in handling asynchronous operations and integrating databases.",
    content: (
        <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/5.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Git",
    description:
      "Proficient in Git for version control, with experience in branching, merging, and managing collaborative workflows to maintain clean and efficient codebases.",
    content: (
        <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/6.svg.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "GitHub",
    description:
      "Experienced with GitHub for hosting and managing repositories, collaborating through pull requests, handling issues, and maintaining version-controlled project workflows.",
    content: (
        <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/8.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "MySql",
    description:
      "Experienced with MySQL for designing, managing, and querying relational databases, with a solid understanding of SQL for data manipulation, joins, and optimization.",
    content: (
        <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/9.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "mongoDB",
    description:
      "Skilled in using MongoDB for building and managing NoSQL databases, with experience in schema design, CRUD operations, and integrating with backend applications.",
    content: (
        <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/10.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  }
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full bg-neutral-900">
      <div className="w-full bg-neutral-900 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto py-10 sm:py-12 md:py-16 lg:py-20">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl mb-3 sm:mb-4 text-white max-w-4xl">
            <b className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Technical Skills</b>
          </h2>
        </div>
      </div>
      <div className="bg-neutral-900 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        <StickyScroll content={content} />
      </div>
      <div className="flex justify-center mt-4 mb-8">
        <BorderMagicButton>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </BorderMagicButton>
      </div>
    </div>
  );
}
