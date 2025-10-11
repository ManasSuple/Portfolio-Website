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
      <div className="w-full mt-16 flex justify-center ">
        {/* Main content box with Tech Stack and IconCloud */}
        <div className="relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-2 w-full max-w-6xl">
          <div className="absolute top-0 -right-3 w-[102%] h-[103%] bg-dark dark:bg-light rounded-[2rem] -z-10" />
          <div className="w-full h-[400px] rounded-2xl bg-light dark:bg-dark p-4">
            {/* Desktop/Tablet: 2-column layout */}
            <div className="hidden md:flex h-full gap-6">
              {/* Left side - Tech Stack Description */}
              <div className="w-1/2 flex flex-col items-start justify-start">
                <h2 className="text-2xl mb-4 font-bold uppercase text-dark/75 dark:text-light/75">
                  Tech Stack
                </h2>
                
                <p className="font-medium mb-4 text-sm dark:text-light/75">
                  I specialize in modern web development using cutting-edge technologies. 
                  My expertise spans across frontend and backend development, with a strong 
                  focus on creating responsive and interactive user experiences.
                </p>

                <p className="font-medium mb-4 text-sm dark:text-light/75">
                  From React and JavaScript for dynamic frontend development to Python and 
                  PostgreSQL for robust backend solutions, I bring comprehensive technical 
                  skills to every project.
                </p>

                <p className="font-medium text-sm dark:text-light/75">
                  I'm passionate about staying up-to-date with the latest technologies and 
                  frameworks, ensuring that every solution I deliver is both modern and 
                  future-proof.
                </p>
              </div>

              {/* Right side - IconCloud */}
              <div className="w-1/2 flex items-center justify-center">
                <div className="w-full h-full max-w-sm">
                  <IconCloud images={images} />
                </div>
              </div>
            </div>

            {/* Mobile: Stacked layout */}
            <div className="md:hidden flex flex-col h-full">
              {/* Top - IconCloud */}
              <div className="flex-1 flex items-center justify-center mb-4">
                <div className="w-full h-full max-w-xs">
                  <IconCloud images={images} />
                </div>
              </div>

              {/* Bottom - Tech Stack Description */}
              <div className="flex flex-col items-start justify-start">
                <h2 className="text-lg mb-4 font-bold uppercase text-dark/75">
                  Tech Stack
                </h2>
                
                <p className="font-medium mb-3 text-sm">
                  I specialize in modern web development using cutting-edge technologies. 
                  My expertise spans across frontend and backend development.
                </p>

                <p className="font-medium mb-3 text-sm">
                  From React and JavaScript for dynamic frontend development.
                </p>

                <p className="font-medium text-sm">
                  I'm passionate about staying up-to-date with the latest technologies and 
                  frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Skills;
