import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub, FaGit } from "react-icons/fa";
import { SiTailwindcss} from "react-icons/si";

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
            <div>
                <h1 className="flex justify-center text-3xl font-bold underline text-shadow-lg text-shadow-blue-900 animate-pulse"> MY EXPERIENCE</h1>
                <div className="relative flex items-center justify-center w-80 h-80 mx-auto">
                    <div className="absolute z-10 text-white font-bold">Front End</div>
                    <div className="absolute w-full h-full spin-right" style={{ animationDelay: "0s"}}>
                        <FaHtml5 className="absolute left-1/2 top-7 transform -translate-x-1/2 rotate-0 text-orange-500 text-5xl" />
                    </div>
                    <div className="absolute w-full h-full spin-right" style={{ animationDelay: "1s"}}>
                        <FaCss3Alt className="absolute left-1/2 top-7 transform -translate-x-1/2 rotate-60 text-blue-500 text-5xl" />
                    </div>
                    <div className="absolute w-full h-full spin-right" style={{ animationDelay: "2s"}}>
                        <FaJsSquare className="absolute left-1/2 top-7 transform -translate-x-1/2 rotate-120 text-yellow-500 text-5xl" />
                    </div>
                    <div className="absolute w-full h-full spin-right" style={{ animationDelay: "3s"}}>
                        <FaReact className="absolute left-1/2 top-7 transform -translate-x-1/2 rotate-180 text-blue-300 text-5xl" />
                    </div>
                    <div className="absolute w-full h-full spin-right" style={{ animationDelay: "4s"}}>
                        <FaNodeJs className="absolute left-1/2 top-7 transform -translate-x-1/2 rotate-240 text-green-500 text-5xl" />
                    </div>
                </div>
            </div>
        </div>
    );
}