import { AboutBackground } from "@/components/AboutBackground";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { Techs } from "@/components/Techs";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import Heading from "@/components/Heading";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-[#0D0D0D] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-20 px-10 ">
      <div className="max-w-full ">
        <Hero />
        <AboutBackground />
        <Projects />
        <div className="mt-28">
          <Heading />
          <Experience />
        </div>

        <Techs />
        <Contact />
      </div>
    </main>
  );
}
