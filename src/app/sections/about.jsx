import { version } from "react";
import { techStack } from "../lib/techStack";

const categoryLabels = {
    frontEnd: "Front End Technologies",
    backend: "Back End Technologies",
    database: "Database Technologies",
    mobile: "Mobile App Development Technologies",
    desktop: "Desktop App DevelopmentnTechnologies",
    versionControl: "Version Control & Deployment",
}

export default function AboutPage() {
    return (
        <div className="flex flex-col bg-neutral-700 min-h-screen font-sans pt-8">
            <div className="flex flex-col">
                <h1 className="flex justify-center text-3xl font-bold underline text-shadow-lg text-shadow-blue-500 animate-pulse">A LITTLE BIT ABOUT ME</h1>
                <div className="space-y-4 pt-8 p-55 pb-10 text-justify font-semibold">
                    <p className="text-lg leading-relaxed mb-6">I'm <span className="text-white font-medium">Lukmaan Kamiss</span>, a full-stack software engineer based in Kandy, Sri Lanka, specializing in web, mobile, and desktop development.</p>

                    <p className="text-base leading-relaxed mb-6 text-neutral-300">I work with <span className="text-blue-400 font-semibold">React, Next.js, and the MERN stack</span>, along with  <span className="text-blue-400"> PHP/Laravel, C#/.NET, and Flutter </span>. I build clean, user-centered applications from e-commerce platforms to real-time chat systems and AI-integrated solutions.</p>

                    <p className="text-base leading-relaxed text-neutral-400">Always open to interesting projects and opportunities.</p>
                </div>
            </div>

            <div className="py-5">
                <div className="container mx-auto px-6">
                    <h1 className="flex justify-center text-3xl font-bold underline text-shadow-lg text-shadow-blue-500 animate-pulse">My Experience</h1>

                    {Object.entries(techStack).map(([category, technologies], catIndex) => (
                        <div key={category} className={`mb-12 animate-fade-slide-up delay-${catIndex * 200}`}>
                            <h2 className="text-xl font-semibold text-neutral-400 mb-6">{categoryLabels[category]}</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {technologies.map((tech, techIndex) => (
                                    <div key={tech.name} className="flip-card h-48 animate-fade-slide-up hover:scale-105 transition-transform durarion-300">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front bg-neutral-800 border border-neutral-700 rounded-lg p-6 flex flex-col items-center justify-center">
                                                <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-4" />
                                                <h3 className="text-white font-medium">{tech.name}</h3>
                                            </div>

                                            <div className="flip-card-back bg-neutral-800 border border-neutral-700 rounded-lg p-6 flex flex-col items-center justify-center">
                                                <p className="text-white font-semibold text-lg mb-3">{tech.name}</p>
                                                <p className="text-blue-400 text-sm font-medium mb-2">{tech.projects}</p>
                                                <p className="text-neutrzl-300 text-sm leading-relaxed">{tech.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}