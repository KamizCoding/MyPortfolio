import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="flex items-center h-screen font-sans w-full bg-cover bg-center bg-no-repeat bg-[url('/images/homebg.png')]">
      <div className="flex flex-col pt-20 pl-60 space y-2">
        <h1 className="flex text-6xl font-bold">Hello,</h1>
        <h1 className="text-4xl font-semibold">I'm <span className="text-5xl font-bold text-blue-300">Lukmaan Kamiss</span></h1>
        <p className="text-4xl font-bold">I'm a
          <span className="ml-3 slider-window" arisl-live="polite" role="status">
            <span className="slider-roles">
              <span className="block">Full Stack Developer</span>
              <span className="block">Back End Developer</span>
              <span className="block">Mobile App Developer</span>
              <span className="block">MERN Developer</span>
              <span className="block">Front End Engineer</span>
            </span>
          </span>
        </p>
        <div className="flex flex-col pt-5 pl-15">
          <div>
            <Link href="mycv.pdf" download={"Lukmaan_Kamiss_CV.pdf"}>
              <button className="relative group overflow-hidden py-3 px-6 rounded text-white font-semibold transition-all duration-300 cursor-pointer">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-900 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="flex relative z-10 gap-2 pt-2 text-xl">Download CV <FaDownload/></span>
              </button>
            </Link>
          </div>
          <div className="pl-13">
            <Link href="https://www.linkedin.com/in/lukmaan-kamiss?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDD7CzKlAQ86m%2BdDZX5alhw%3D%3D">
              <button className=" group mt-3 ml-3 border-2 p-1 rounded-full cursor-pointer hover:scale-110 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"><FaLinkedin className="text-white transition-colors duration-300 group-hover:text-blue-400" size={25}/> </button>
            </Link>
            <Link href="https://github.com/KamizCoding">
              <button className="group mt-3 ml-3 border-2 p-1 rounded-full cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 transiton-all duration-300"><FaGithub className="text-white transition-colors duration-300 group-hover:text-blue-400" size={25}/> </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center pl-20">
        <div className="absolute">
          <div className="relative flex justify-center items-center">
            <div className="shadow-md shadow-blue-500 bg-transparent absolute rounded-full w-77 h-77 spin-right"></div>
            <div className="shadow-md shadow-violet-700 bg-transparent absolute rounded-full w-76 h-76 spin-left"></div>
            <div className="shadow-md shadow-cyan-500 bg-transparent absolute rounded-full w-75 h-75 spin-right-fast"></div>
          </div>
        </div>
        <Image className="h-75 w-60 rounded-full"
          src="/images/mypic.png"
          height={100}
          width={300}
          alt="My Picture"
          layout=""
        />
      </div>
    </div>
  );
}