import { techStack } from "../lib/techStack";
import Image from "next/image";

const categoryLabels = {
    frontEnd: "Front End Technologies",
    backend: "Back End Technologies",
    databases: "Database Technologies",
    mobile: "Mobile App Development Technologies",
    desktop: "Desktop App Development Technologies",
    versionControl: "Version Control & Deployment"
}

const categoryGradients = {
    frontEnd: "bg-gradient-to-br from-blue-900/10 to-purple-900/10",
    backend: "bg-gradient-to-br from-green-900/10 to-teal-900/10",
    databases: "bg-gradient-to-br from-orange-900/10 to-red-900/10",
    mobile: "bg-gradient-to-br from-cyan-900/10 to-blue-900/10",
    desktop: "bg-gradient-to-br from-purple-900/10 to-indigo-900/10",
    versionControl: "bg-gradient-to-br from-gray-900/10 to-slate-900/10"
}

export default function AboutPage() {
    return (
        <div className="flex flex-col bg-neutral-700 min-h-screen font-sans pt-8">
            <div className="flex flex-col">
                <h1 className="flex justify-center text-3xl font-bold underline text-shadow-lg text-shadow-blue-500 animate-pulse">A LITTLE BIT ABOUT ME</h1>
                <div className="space-y-4 pt-8 px-6 pb-10 text-justify font-semibold max-w-4xl mx-auto">
                    <p className="text-lg leading-relaxed mb-6">I'm <span className="text-white font-medium">Lukmaan Kamiss</span>, a full-stack software engineer based in Kandy, Sri Lanka, specializing in web, mobile, and desktop development.</p>

                    <p className="text-base leading-relaxed mb-6 text-neutral-300">I work with <span className="text-blue-400 font-semibold">React, Next.js, and the MERN stack</span>, along with  <span className="text-blue-400"> PHP/Laravel, C#/.NET, and Flutter </span>. I build clean, user-centered applications from e-commerce platforms to real-time chat systems and AI-integrated solutions.</p>

                    <p className="text-base leading-relaxed text-neutral-400">Always open to interesting projects and opportunities.</p>
                </div>
            </div>

            <div className="py-5">
                <div className="container mx-auto px-6">
                    <h1 className="flex justify-center text-3xl font-bold underline text-shadow-lg text-shadow-blue-500 animate-pulse mb-12">My Experience</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {Object.entries(techStack).map(([category, technologies], catIndex) => (
                            <div
                                key={category}
                                className={`p-6 rounded-xl ${categoryGradients[category]} animate-fade-slide-up`}
                                style={{ animationDelay: `${catIndex * 100}ms` }}
                            >
                                <h2 className="text-xl font-semibold text-neutral-400 mb-6">
                                    {categoryLabels[category]}
                                </h2>
                                <div className="grid grid-cols-2 gap-4 auto-rows-fr">
                                    {technologies.map((tech) => (
                                        <div
                                            key={tech.name}
                                            className={`flip-card animate-fade-slide-up hover:scale-105 transition-transform duration-300 ${
                                                tech.variant === "featured-tall"
                                                    ? "row-span-2"
                                                    : tech.variant === "featured-wide"
                                                        ? "col-span-2"
                                                        : tech.variant === "compact"
                                                            ? ""
                                                            : ""
                                                } min-h-[200px]`}
                                        >
                                            <div className="flip-card-inner h-full">
                                                <div className="flip-card-front bg-neutral-800 border border-neutral-700 rounded-lg p-6 flex flex-col items-center justify-center h-full">
                                                    <Image
                                                        src={tech.icon}
                                                        alt={tech.name}
                                                        width={
                                                            tech.variant === "featured-tall" || tech.variant === "featured-wide"
                                                                ? 80
                                                                : tech.variant === "compact"
                                                                    ? 48
                                                                    : 64
                                                        }
                                                        height={
                                                            tech.variant === "featured-tall" || tech.variant === "featured-wide"
                                                                ? 80
                                                                : tech.variant === "compact"
                                                                    ? 48
                                                                    : 64
                                                        }
                                                        className="mb-4"
                                                    />
                                                    <h3 className="text-white font-medium text-center">{tech.name}</h3>
                                                </div>

                                                <div className="flip-card-back bg-neutral-800 border border-neutral-700 rounded-lg p-6 flex flex-col items-center justify-center h-full">
                                                    <p className="text-white font-semibold text-lg mb-3 text-center">{tech.name}</p>
                                                    <p className="text-blue-400 text-sm font-medium mb-2 text-center">{tech.projects}</p>
                                                    <p className="text-neutral-300 text-sm leading-relaxed text-center">{tech.description}</p>
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
        </div>
    );
}