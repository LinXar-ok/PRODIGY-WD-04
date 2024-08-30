"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "./ui/StickyScrollReveal";

const content = [
  {
    title: "Frontend Development Intern",
    company: "Prodigy InfoTech, Remote",
    date: "August 2024 – Present",
    description: [
      "Web Application Development: Contributing to the development of user-friendly and responsive web applications, utilizing technologies such as HTML, CSS, JavaScript, React, and Next.js.",
      "Agile Methodology: Participating in agile development practices to deliver high-quality software within deadlines.",
      "Skill Enhancement: Continuously learning new front-end development techniques and tools, applying them in real-world projects to improve user interface and experience.",
    ],
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "BSc in Computer Science (In Progress)",
    company: "University of The People - USA(Online)",
    date: "March 2021 – Present",
    description: [
      "Coursework: Pursuing a comprehensive curriculum focused on software development, data structures, algorithms, and systems analysis.",
      "Application of Knowledge: Implemented academic learnings into personal projects, enhancing practical understanding of computer science principles.",
    ],
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Self-Directed IT Support Specialist",
    company: "Coursera (Online)",
    date: "April 2024",
    description: [
      "Practical Experience: Applied hands-on skills in setting up and managing virtual machines, performing system diagnostics, and troubleshooting across various operating systems, including Windows and Linux.",
      "Network Management: Configured and maintained network security protocols, VPNs, and proxies, ensuring secure and efficient connectivity in simulated real-world IT environments.",
      "Systems Administration: Developed and implemented directory services, data management processes, and recovery strategies, enhancing system reliability and data protection.",
      "Troubleshooting: Utilizing technical knowledge to identify and resolve software, hardware, and network issues within the organization.",
    ],
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Google IT Support Professional Certificate",
    company: "Coursera (online)",
    date: "July 2024",
    description: [
      "Comprehensive IT Training: Completed the Google IT Support Professional Certificate, gaining in-depth knowledge and practical skills in troubleshooting, network security, operating systems, and systems administration.",
      "Hands-On Experience: Developed real-world expertise in IT support through hands-on projects, including system diagnostics, network configuration, and security protocol implementation.",
    ],
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "Responsive Web Design",
    company: "freeCodeCamp",
    date: "December 2023",
    description: [
      " Responsive Design Expertise: Mastered the principles of responsive web design, creating user-friendly interfaces optimized for various devices and screen sizes, with a strong emphasis on accessibility and best practices.",
      "Mobile-First Development: Developed proficiency in mobile-first design, ensuring that web applications are both visually appealing and fully functional across all platforms.",
    ],
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export function Experience() {
  return (
    <div id="experiences" className="py-20">
      <StickyScroll content={content} />
    </div>
  );
}
