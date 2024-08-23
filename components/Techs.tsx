"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

export function Techs() {
  return (
    <div className="h-[20rem] md:h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={techs} direction="left" speed="slow" />
    </div>
  );
}

const techs = [
  {
    name: "Git",
    image: "/git.png",
  },
  {
    name: "Three-Js",
    image: "/threejs.svg",
  },
  {
    name: "CSS",
    image: "/css.png",
  },
  {
    name: "Docker",
    image: "/docker.png",
  },
  {
    name: "Figma",
    image: "/figma.png",
  },
  {
    name: "HTML",
    image: "/html.png",
  },
  {
    name: "JavaScript",
    image: "/javascript.png",
  },
  {
    name: "MongoDB",
    image: "/mongodb.png",
  },
  {
    name: "NodeJs",
    image: "/nodejs.png",
  },
  {
    name: "React",
    image: "/reactjs.png",
  },
  {
    name: "Redux",
    image: "/redux.png",
  },
  {
    name: "Tailwind CSS",
    image: "/tailwind.png",
  },
  {
    name: "TypeScipt",
    image: "/typescript.png",
  },
];
