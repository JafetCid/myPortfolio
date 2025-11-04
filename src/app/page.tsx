"use client"

import AboutMe from "@/components/AboutMe";
import Inicio from "@/components/Inicio";
import React from "react";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <div className="px-6 min-h-screen">
        <Inicio/>
        <AboutMe/>
        <Projects/>
        <Contact/>
      </div>
      <div className="mb-5 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
    </>
  );
}
