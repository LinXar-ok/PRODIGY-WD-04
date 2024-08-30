"use client";
import React from "react";
import { HeroParallax } from "./ui/HeroParallax";

export function Projects() {
  return (
    <div id="projects">
      <HeroParallax products={products} />
    </div>
  );
}
export const products = [
  {
    title: "HooBank Project (github link)",
    link: "https://github.com/LinXar-ok/payment-react",
    thumbnail: "/HoBank.png",
  },
  {
    title: "Gourmet LInX",
    link: "https://gourmet-linx.vercel.app/",
    thumbnail: "/gourmet.png",
  },
  {
    title: "Sentinel Logistics",
    link: "https://sentinel-logistics.vercel.app/",
    thumbnail: "/sentinel.png",
  },

  {
    title: "Full Stack E-Commerce Project",
    link: "https://github.com/LinXar-ok/ecommerce_backend-project",
    thumbnail: "/iPad Mini (portrait).png",
  },
  {
    title: "LinXar Labs",
    link: "https://linxar-labs.vercel.app/",
    thumbnail: "/linXarLabs.png",
  },

  {
    title: "UX Designer Page (github link)",
    link: "https://github.com/LinXar-ok/PRODIGY-WD-01",
    thumbnail: "/landinPage.png",
  },

  {
    title: "Survey Form",
    link: "https://freecodecamp.org/certification/LinXar/responsive-web-design",
    thumbnail: "/proj01.png",
  },
  {
    title: "Product Landing Page",
    link: "https://freecodecamp.org/certification/LinXar/responsive-web-design",
    thumbnail: "/proj03.png",
  },
  // {
  //   title: "Tailwind Master Kit",
  //   link: "https://tailwindmasterkit.com",
  //   thumbnail:
  //     "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  // },
  {
    title: "Tribute Page",
    link: "https://freecodecamp.org/certification/LinXar/responsive-web-design",
    thumbnail: "/pro02.png",
  },

  {
    title: "Stopwatch Project(github link)",
    link: "https://github.com/LinXar-ok/PRODIGY-WD-02",
    thumbnail: "/stopwatch.png",
  },

  {
    title: "Tic-Tac-Toe Game (github link)",
    link: "https://github.com/LinXar-ok/PRODIGY-WD-03",
    thumbnail: "/Tic-Tac-Toe.png",
  },
  {
    title: "My Portfolio",
    link: "https://github.com/LinXar-ok/PRODIGY-WD-04",
    thumbnail: "/portfolio-sr.png",
  },
  {
    title: "Full Stack E-Commerce Project",
    link: "https://github.com/LinXar-ok/ecommerce_backend-project",
    thumbnail: "/iPhone 15 Mockup (Community).png",
  },
  {
    title: "Full Stack E-Commerce Project",
    link: "https://github.com/LinXar-ok/ecommerce_backend-project",
    thumbnail: "/laptop.png",
  },
];
