"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    const sectionIds = ["home", "about", "projects", "experiences", "contact"];
    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (linkSection: string) => {
    return activeSection === linkSection ? "nav-link active" : "nav-link";
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-colors duration-300 py-4 ${
        scrolled ? "bg-black border-b border-dark-silver" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className={`text-lg font-bold text-electric-blue `}>
              LinusKexDev
            </Link>
          </div>

          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
            <div className="flex space-x-4">
              <Link
                href="#home"
                className={`nav-link px-3 py-2 rounded-md text-sm font-medium text-cool-gray hover:text-electric-blue ${isActive(
                  "home"
                )}`}
              >
                Home
              </Link>
              <Link
                href="#about"
                className={`nav-link px-3 py-2 rounded-md text-sm font-medium text-cool-gray hover:text-electric-blue ${isActive(
                  "about"
                )}`}
              >
                About
              </Link>
              <Link
                href="#projects"
                className={`nav-link px-3 py-2 rounded-md text-sm font-medium text-cool-gray hover:text-electric-blue ${isActive(
                  "projects"
                )}`}
              >
                Projects
              </Link>
              <Link
                href="#experiences"
                className={`nav-link px-3 py-2 rounded-md text-sm font-medium text-cool-gray hover:text-electric-blue ${isActive(
                  "experiences"
                )}`}
              >
                Experiences
              </Link>
              <Link
                href="#contact"
                className={`nav-link px-3 py-2 rounded-md text-sm font-medium text-cool-gray hover:text-electric-blue ${isActive(
                  "contact"
                )}`}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="#home"
              onClick={closeMenu}
              className={`nav-link block px-3 py-2 rounded-md text-base font-medium text-cool-gray hover:text-electric-blue ${isActive(
                "home"
              )}`}
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={closeMenu}
              className={`nav-link block px-3 py-2 rounded-md text-base font-medium text-cool-gray hover:text-electric-blue ${isActive(
                "about"
              )}`}
            >
              About
            </Link>
            <Link
              href="#projects"
              onClick={closeMenu}
              className={`nav-link block px-3 py-2 rounded-md text-base font-medium text-cool-gray hover:text-electric-blue ${isActive(
                "projects"
              )}`}
            >
              Projects
            </Link>
            <Link
              href="#experiences"
              onClick={closeMenu}
              className={`nav-link block px-3 py-2 rounded-md text-base font-medium text-cool-gray hover:text-electric-blue ${isActive(
                "experiences"
              )}`}
            >
              Experiences
            </Link>
            <Link
              href="#contact"
              onClick={closeMenu}
              className={`nav-link block px-3 py-2 rounded-md text-base font-medium text-cool-gray hover:text-electric-blue ${isActive(
                "contacts"
              )}`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
