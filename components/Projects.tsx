"use client";
import React from "react";
import { DirectionAwareHover } from "./ui/DirectionAwareHover";

export function Projects() {
  return (
    <div id="project">
      <div className="max-w-7xl relative mx-auto py-24 md:py-20 px-4 w-full  left-0 top-0">
        <h1 className="text-4xl md:text-6xl font-bold dark:text-white">
          Latest Projects <br /> Explore My Portfolio
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
          Explore my diverse portfolio of projects. Each project reflects my
          commitment to delivering high-quality solutions tailored to real-world
          needs. From dynamic web applications to intricate software systems,
          these works showcase my ability to tackle complex challenges and
          create impactful results.
        </p>
      </div>

      <div className="h-auto relative flex flex-wrap items-center justify-center gap-6 mx-12">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center rounded-lg overflow-hidden shadow-lg"
          >
            <a href={product.link} target="_blank">
              <DirectionAwareHover imageUrl={product.thumbnail}>
                <p className="font-bold text-xl text-white">{product.title}</p>
              </DirectionAwareHover>
            </a>
          </div>
        ))}
      </div>
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
