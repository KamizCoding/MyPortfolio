import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex items-right min-h-screen font-sans w-full">
      <div className="flex flex-col pt-40 pl-20">
        <h1 className="flex text-3xl font-bold">Hey there</h1>
        <h1 className="text-3xl font-semibold">I'm <span className="text-4xl font-bold animate-pulse text-blue-300">Lukmaan Kamiss</span></h1>
        <p className="text-4xl font-bold">Im a
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
      </div>

      <div className="pt-20 pl-30">
        <Image className="h-75 w-75 rounded-full "
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