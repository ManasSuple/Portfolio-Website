import React from "react";
import IconCloud from "@/components/icon-cloud";

const Skills = () => {
  const images = [
    "/images/logos/css3.svg",
    "/images/logos/git.svg",
    "/images/logos/html5.svg",
    "/images/logos/javascript.svg",
    "/images/logos/microsoft.svg",
    "/images/logos/react.svg",
    "/images/logos/sqlite.svg",
    "/images/logos/tailwindcss.svg",
    "/images/logos/vitejs.svg",
    "/images/logos/figma.svg",
    "/images/logos/kali-linux.svg",
    "/images/logos/streamlit.svg",
    "/images/logos/postgresql.svg",
    "/images/logos/github.svg",
    "/images/logos/python.svg",
    "/images/logos/google-colab.svg",
  ];

  return (
    <>
      <h2 className="font-bold text-4xl md:text-6xl lg:text-8xl mt-16 md:mt-32 lg:mt-64 w-full text-center">
        Skills
      </h2>
      <div className="grid w-full grid-cols-8 gap-16 mt-16">
        {/* Left side - Tech Stack Description */}
        <div className="col-span-3 flex flex-col items-start justify-start">
          <h2 className="text-lg mb-4 font-bold uppercase text-dark/75">
            Tech Stack
          </h2>
          
          <p className="font-medium mb-4">
            I specialize in modern web development using cutting-edge technologies. 
            My expertise spans across frontend and backend development, with a strong 
            focus on creating responsive and interactive user experiences.
          </p>

          <p className="font-medium mb-4">
            From React and JavaScript for dynamic frontend development to Python and 
            PostgreSQL for robust backend solutions, I bring comprehensive technical 
            skills to every project.
          </p>

          <p className="font-medium">
            I'm passionate about staying up-to-date with the latest technologies and 
            frameworks, ensuring that every solution I deliver is both modern and 
            future-proof.
          </p>
        </div>

        {/* Right side - IconCloud in styled box */}
        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-2">
          <div className="absolute top-0 -right-3 w-[102%] h-[103%] bg-dark rounded-[2rem] -z-10" />
          <div className="w-full h-[400px] rounded-2xl bg-light p-4 flex items-center justify-center">
            <div className="w-full h-full max-w-sm">
              <IconCloud images={images} />
            </div>
          </div>
        </div>

        {/* Right side stats */}
        <div className="col-span-2 flex flex-col items-end justify-between">
          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-4xl font-bold">16+</span>
            <h2 className="text-lg font-medium capitalize text-dark/75">
              Technologies
            </h2>
          </div>

          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-4xl font-bold">3D</span>
            <h2 className="text-lg font-medium capitalize text-dark/75">
              Interactive
            </h2>
          </div>

          <div className="flex flex-col items-end justify-center">
            <span className="inline-block text-4xl font-bold">100%</span>
            <h2 className="text-lg font-medium capitalize text-dark/75">
              Responsive
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
