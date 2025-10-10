import Image from "next/image";
import React from "react";
import HomePage from "./sections/home";
import AboutPage from "./sections/about";
import ContactPage from "./sections/contacts";
import ProjectsPage from "./sections/projects";
import AnimatedBackground from "./components/animatedbackground";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen">

      <section id="home" className="w-full">
        <HomePage />
      </section>
      <section id="about" className="w-full relative">
        <AnimatedBackground />
        <AboutPage />
      </section>
      <section id="projects" className="w-full relative">
        <AnimatedBackground />
        <ProjectsPage />
      </section>
      <section id="contact" className="w-full relative">
        <AnimatedBackground />
        <ContactPage />
      </section>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
