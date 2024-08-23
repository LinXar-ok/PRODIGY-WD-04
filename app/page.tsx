import { AboutBackground } from "@/components/AboutBackground";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { Techs } from "@/components/Techs";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import Heading from "@/components/Heading";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-20 px-10 ">
      <div className="max-w-full ">
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        <Hero />
        <AboutBackground />
        <Projects />
        <div>
          <Heading />
          <Experience />
        </div>

        <Techs />
      </div>
    </main>
  );
}
