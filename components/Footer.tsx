import React from "react";
import { BsArrowUp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex justify-center md:justify-between bg-slate-800 py-10 px-20">
      <div className="w-full">
        <p className="text-sm md:text-lg text-center">
          Copyright &copy; 2023 by Linus Kexordzu | All Right Reserved.
        </p>
      </div>

      <div className="bg-slate-950 rounded-full w-8 h-8 relative flex justify-center items-center">
        <a href="/" aria-label="Scroll to Top">
          <i>
            <BsArrowUp size={20} className="text-[#00e5ff] " />
          </i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
