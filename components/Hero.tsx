import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import TailwindButton from "./ui/TailwindButton";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";
import { FaFilePdf } from "react-icons/fa";
import { MdOutlineContactless } from "react-icons/md";
import { Dock } from "./Dock";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      id="home"
      className="pb-20 pt-36 px-4 flex items-center justify-between w-full mx-auto"
    >
      <div className="flex flex-col justify-center w-full md:w-1/2 lg:w-2/3 text-white ">
        <div className=" flex flex-col items-left justify-center">
          <h2 className="uppercase tracking-widest text-xs text-left text-blue-100 max-w-80">
            Building Solutions:
          </h2>

          <TextGenerateEffect
            className="text-left text-[40px] md:text-5xl lg:text-6xl"
            words="From Web Experiences to IT Excellence"
          />

          <p className="text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Linus, a versatile web developer and IT specialist, I
            build engaging digital experiences and solve complex tech issues
            with ease.
          </p>
          <div className="relative flex flex-col md:flex-row space-y-5 md:space-y-0 space-x-10 py-3">
            <Link href="#contact">
              <TailwindButton
                title="Contact Me !"
                icon={<MdOutlineContactless size={20} className="text-[]" />}
                position="right"
                otherClasses="py-3  text-lg"
              />
            </Link>
            <Link href="/LinusKexordzu.pdf" download="LinusKexordzu.pdf">
              <TailwindButton
                title="Download My CV"
                icon={<FaFilePdf size={18} className="text-[]" />}
                position="right"
                otherClasses="py-3 text-lg"
              />
            </Link>
          </div>

          <Dock />
        </div>
      </div>

      <div className="relative w-full md:w-1/2 lg:w-1/3 hidden md:flex">
        <Image
          src="/linusIMG.jpeg"
          alt="Linus"
          layout="responsive"
          width={500}
          height={500}
          priority
          className="mask-spotlight"
        />
      </div>
    </div>
  );
};

export default Hero;
