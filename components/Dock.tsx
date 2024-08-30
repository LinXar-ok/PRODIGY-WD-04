"use client";

import React from "react";

import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { FloatingDock } from "./ui/FloatindDock";

export function Dock() {
  const links = [
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300 bg-blue-500 rounded-sm" />
      ),
      href: "#",
    },

    {
      title: "YouTube",
      icon: (
        <IconBrandYoutube className="h-full w-full text-neutral-500 dark:text-neutral-300 bg-red-500 rounded-sm" />
      ),
      href: "#",
    },
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300 bg-blue-600 rounded-sm" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="inline-block w-full mt-14 ">
      <FloatingDock items={links} />
    </div>
  );
}
