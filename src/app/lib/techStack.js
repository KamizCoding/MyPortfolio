import { version } from "react";

export const techStack = {
    frontEnd: [
        {
            name: "React",
            icon: "/icons/react.svg",
            projects: ["Project A", "Project B"],
            description: "A JavaScript library for building user interfaces.",
            variant: "standard"
        },
        {
            name: "Next.js",
            icon: "/icons/nextjs.svg",
            projects: ["Project C", "Project D"],
            description: "A React framework for server-side rendering and static site generation.",
            variant: "featured-tall"
        },
        {
            name: "HTML5",
            icon: "/icons/html5.svg",
            projects: ["Project E", "Project F"],
            description: "The standard markup language for creating web pages.",
            variant: "compact"
        },
        {
            name: "CSS3",
            icon: "/icons/css3.svg",
            projects: ["Project G", "Project H"],
            description: "A style sheet language used for describing the presentation of a document.",
            variant: "standard"
        },
        {
            name: "JavaScript",
            icon: "/icons/javascript.svg",
            projects: ["Project I", "Project J"],   
            description: "A programming language that conforms to the ECMAScript specification.",
            variant: "standard" 
        },
        {
            name: "Tailwind CSS",
            icon: "/icons/tailwindcss.svg",
            projects: ["Project K", "Project L"],
            description: "A utility-first CSS framework for rapid UI development.",
            variant: "featured-wide" 
        }

    ],
    backend: [
        {
            name: "Node.js",
            icon: "/icons/nodejs.svg",
            projects: ["Project M", "Project N"],
            description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
            variant: "featured-tall"

        },
        {
            name: "Express.js",
            icon: "/icons/expressjs.svg",
            projects: ["Project O", "Project P"],
            description: "A minimal and flexible Node.js web application framework.",
            variant: "standard"
        },
        {
            name: "Laravel",
            icon: "/icons/laravel.svg",
            projects: ["Project Q", "Project R"],
            description: "A PHP framework for web artisans.",
            variant: "standard"  
        },
    ],
    databases: [
        {
            name: "MongoDB",
            icon: "/icons/mongodb.svg",
            projects: ["Project S", "Project T"],
            description: "A NoSQL database program that uses JSON-like documents.",
            variant: "featured-tall"
        },
        {
            name: "MySQL",
            icon: "/icons/mysql.svg",
            projects: ["Project U", "Project V"],
            description: "An open-source relational database management system.",
            variant: "standard"
        },
        {
            name: "Firebase",
            icon: "/icons/firebase.svg",
            projects: ["Project W", "Project X"],
            description: "A platform developed by Google for creating mobile and web applications.",
            variant: "standard"
        },
        {
            name: "Supabase",
            icon: "/icons/supabase.svg",
            projects: ["Project Y", "Project Z"],
            description: "An open-source Firebase alternative that provides a Postgres database.",
            variant: "featured-wide"
        }
    ],
    mobile: [
        {
            name: "Flutter",
            icon: "/icons/flutter.svg",
            projects: ["Project AA", "Project AB"],
            description: "An open-source UI software development kit created by Google.",
            variant: "standard" 
        },
        {
            name: "java",
            icon: "/icons/java.svg",
            projects: ["Project AC", "Project AD"],
            description: "A high-level, class-based, object-oriented programming language.",
            variant: "standard"
        }
    ],
    desktop: [
        {
            name: "C#",
            icon: "/icons/csharp.svg",
            projects: ["Project AE", "Project AF"],
            description: "A modern, object-oriented programming language developed by Microsoft.",
            variant: "standard"
        },
        {
            name: ".NET",
            icon: "/icons/dotnet.svg",
            projects: ["Project AG", "Project AH"],
            description: "A free, cross-platform, open-source developer platform for building many different types of applications.",
            variant: "standard"
        }
    ],
    versioncontrol: [
        {
            name: "Git",
            icon: "/icons/git.svg",
            projects: ["Project AI", "Project AJ"], 
            description: "A distributed version-control system for tracking changes in source code.",
            variant: "standard"
        },
        {
            name: "GitHub",
            icon: "/icons/github.svg",
            projects: ["Project AK", "Project AL"],             
            description: "A provider of Internet hosting for software development and version control using Git.",
            variant: "compact"
        }
    ]
}