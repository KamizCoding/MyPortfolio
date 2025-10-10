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
            
        </div>
    );
}