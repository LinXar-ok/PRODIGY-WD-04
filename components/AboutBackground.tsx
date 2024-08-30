"use client";
import React, { useEffect } from "react";
import { Boxes } from "../components/ui/BackgroundBoxes";
import { cn } from "@/utils/cn";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import { FaAngleDoubleRight } from "react-icons/fa";
import Typed from "typed.js";

export function AboutBackground() {
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: [
        "IT Support Specialist",
        "Frontend Developer",
        "Backend Developer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      id="about"
      className="h-auto relative w-full overflow-hidden bg-[#2A2A2A] flex flex-col items-center justify-center rounded-lg py-10"
    >
      <div className="absolute inset-0 w-full h-full bg-[#2A2A2A] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1
        className={cn(
          "md:text-5xl text-3xl text-white] font-bold relative z-20 pb-7"
        )}
      >
        About Me!
      </h1>

      <div className="relative w-80 h-80 my-10">
        <span className="absolute inset-0 flex items-center justify-center w-full h-full">
          <Image
            src="/linusIMG.jpeg"
            alt="Linus"
            width={288}
            height={288}
            priority
            className="rounded-full border-4 border-[#00e5ff] "
          />
        </span>
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-0 w-full h-full rounded-full border-2 border-t-[0.2rem] border-b-[0.2rem] border-l-[0.2rem] border-r-[0.2rem] border-t-[#2A2A2A] border-b-[#2A2A2A] border-l-[#00e5ff] border-r-[#00e5ff] animate-about-spinner"></span>
      </div>

      <div>
        <h1
          className={cn(
            "md:text-5xl text-3xl text-white relative z-20 text-center"
          )}
        >
          <span className="multiple-text font-semibold text-[#00e5ff] "></span>
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative p-5 md:text-2xl text-xl z-20">
          I am a web developer and also a certified Google IT Support Specialist
          with a passion for innovation. Driven by an insatiable curiosity to
          explore the limitless possibilities of technology, I excel in crafting
          clean and efficient code and designing seamless user experiences. What
          sets me apart is not only my technical expertise in troubleshooting,
          network security, and systems administration but also my commitment to
          innovation and problem-solving. I thrive on developing ideas into
          useful and meaningful solutions, using my wide skill set to address
          complicated situations.
        </p>

        <a href="/" className="flex justify-center">
          <MagicButton
            title="Read More!"
            icon={<FaAngleDoubleRight />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
}
