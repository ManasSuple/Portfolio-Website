import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value, className = "" }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>About Page | Manas Suple</title>
        <meta name="description" content="About Manas Suple" />
      </Head>
      <TransitionEffect/>
      <main className="flex flex-col items-center justify-center w-full dark:text-light">
        <Layout className="pt-16 ">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16 max-lg:!text-7xl max-sm:!text-6xl max-xs:!text-4xl max-sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-16 max-sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start max-xl:col-span-4 max-md:order-2 max-md:col-span-8">
              <h2 className="text-lg mb-4 font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>

              <p className="font-medium">
                I’m an EXTC student at KJ Somaiya Institute of Technology 
                with a strong programming base from my Diploma in Computer Engineering. 
                I specialize in building user-focused web and mobile experiences that are 
                both functional and visually engaging.
              </p>

              <p className=" my-4 font-medium">
                My work includes real-world projects like e-commerce and service websites, 
                always aiming to solve practical problems with clean, responsive design. 
                I bring creativity, attention to detail, and a calm, collaborative approach to every project.
              </p>

              <p className="font-medium">
                My work includes real-world projects always aiming to solve practical problems with clean,
                responsive design. I bring creativity, attention to detail, and
                a calm, collaborative approach to every project. Passionate
                about continuous learning, I’m eager to contribute to impactful,
                meaningful work.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
             bg-light p-2 dark:bg-dark dark:border-light max-xl:col-span-4 max-md:order-1 max-md:col-span-8">
              <div className="absolute top-0 -right-3 w-[102%] h-[103%] bg-dark dark:bg-light rounded-[2rem] -z-10 " />
              <Image
                src={profilePic}
                alt="Manas Suple"
                className="w-full h-auto rounded-2xl  p-8"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between max-xl:col-span-8 max-xl:flex-row max-xl:items-center max-md:order-3">
              <div className="flex flex-col items-end justify-center max-xl:items-center">
                <span className="inline-block text-7xl font-bold max-md:text-6xl max-sm:text-5xl max-xs:text-4xl">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 max-xl:text-center max-md:text-lg max-sm:text-base max-xs:text-sm">
                  Experience
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center max-xl:items-center">
                <span className="inline-block text-7xl font-bold max-md:text-6xl max-sm:text-5xl max-xs:text-4xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 max-xl:text-center max-md:text-lg max-sm:text-base max-xs:text-sm">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center max-xl:items-center">
                <span className="inline-block text-7xl font-bold max-md:text-6xl max-sm:text-5xl max-xs:text-4xl">
                  <AnimatedNumbers value={7} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 max-xl:text-center max-md:text-lg max-sm:text-base max-xs:text-sm">
                  Certificate
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};
export default about;
