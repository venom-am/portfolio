"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

interface LinkPreview {
  title: string;
  description: string;
  url: string;
  image: string;
}

const links: LinkPreview[] = [
  {
    title: "GitHub",
    description: "Check out my projects and contributions",
    url: "https://github.com/venom-am",
    image: "/github.png",
  },
  {
    title: "LinkedIn",
    description: "Connect with me professionally",
    url: "https://www.linkedin.com/in/abhishekmisal2169/",
    image: "/ln.png",
  },
  {
    title: "Twitter",
    description: "Follow me for tech updates and thoughts",
    url: "https://x.com/Abhispeaks_",
    image: "/x.png",
  },
];

export const GetInTouch = () => {
  return (
    <div id="contact-section" className="w-full bg-neutral-900 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-full"
            >
              <div className="relative h-full rounded-lg overflow-hidden bg-neutral-800 transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Image
                    src={link.image}
                    alt={link.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="relative p-6 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {link.title}
                    </h3>
                    <p className="text-neutral-300">{link.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}; 