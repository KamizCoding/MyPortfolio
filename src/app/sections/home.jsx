import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="flex items-center h-screen font-sans w-full bg-cover bg-center bg-no-repeat bg-[url('/images/homebg.png')]">
      <div className="flex flex-col pt-20 pl-40 space y-2">
        <h1 className="flex text-6xl font-bold">Hellob,</h1>
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
        <div className="flex">
          <Link href="mycv.pdf" download={"Lukmaan_Kamiss_CV.pdf"}>
            <button className="border-2 rounded-2xl w-40 h-9 mt-2 bg-blue-300 text-black hover:bg-blue-700 hover:text-gray-100 transition-colors duration-300 cursor-pointer">Download CV</button>
          </Link>
          <Link href="https://www.linkedin.com/in/lukmaan-kamiss?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BDD7CzKlAQ86m%2BdDZX5alhw%3D%3D">
            <button className="mt-3 ml-3 border-2 p-1 rounded-full cokor"><FaLinkedin style={{ color: 'white' }} size={20} color="#0077b5" /> </button>
          </Link>
          <Link href="https://github.com/KamizCoding">
            <button className="mt-3 ml-3 border-2 p-1 rounded-full cokor"><FaGithub style={{ color: 'white' }} size={20} color="#0077b5" /> </button>
          </Link>
        </div>
      </div>

      <div className="relative flex items-center justify-center pl-20">
        <div className="absolute">
          <div className="relative flex justify-center items-center w-[200px] h-[200px]">
            <div className="shadow-lg shadow-blue-500 bg-transparent absolute rounded-full w-79 h-79 spin-right"></div>
            <div className="shadow-lg shadow-violet-700 bg-transparent absolute rounded-full w-76 h-76 spin-left"></div>
            <div className="shadow-lg shadow-cyan-500 bg-transparent absolute rounded-full w-75 h-75 spin-right-fast"></div>
          </div>
        </div>
        <Image className="h-75 w-75 rounded-full border-2 border-gray-600"
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