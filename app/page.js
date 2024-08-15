"use client";
import React, { useState, useEffect } from "react";
import About from "./components/about";
import NavBar from "./components/navbar";
import Projects from "./components/projects";
import Testimonials from "./components/testimonials";

export default function Home() {
  const [selectedHeader, setSelectedHeader] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const projectsSection = document.getElementById("projects");
      const testimonialsSection = document.getElementById("testimonials");

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (
        aboutSection &&
        scrollPosition >= aboutSection.offsetTop &&
        scrollPosition < projectsSection.offsetTop
      ) {
        setSelectedHeader("about");
      } else if (
        projectsSection &&
        scrollPosition >= projectsSection.offsetTop &&
        scrollPosition < testimonialsSection.offsetTop
      ) {
        setSelectedHeader("projects");
      } else if (
        testimonialsSection &&
        scrollPosition >= testimonialsSection.offsetTop
      ) {
        setSelectedHeader("testimonials");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen max-w-screen bg-dark-gray text-white relative">
      <NavBar selectedHeader={selectedHeader} setSelectedHeader={setSelectedHeader} />
      <div className="flex flex-col">
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
      </div>
    </main>
  );
}
