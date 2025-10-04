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
      <main className="flex flex-col items-center justify-center w-full dark:text-light">
        <Layout className="pt-16 ">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start ">
              <h2 className="text-lg mb-4 font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>

              <p className="font-medium">
                A web developer with a knack for clean design and smart
                solutions. I build responsive websites and apps using ReactJS
                and FlutterFlow, blending creativity with real-world
                functionality
              </p>

              <p className=" my-4 font-medium">
                I’m an EXTC student at KJ Somaiya Institute of Technology with a
                strong programming base from my Diploma in Computer Engineering.
                I specialize in building user-focused web and mobile experiences
                that are both functional and visually engaging.
              </p>

              <p className="font-medium">
                My work includes real-world projects like e-commerce and service
                websites, always aiming to solve practical problems with clean,
                responsive design. I bring creativity, attention to detail, and
                a calm, collaborative approach to every project. Passionate
                about continuous learning, I’m eager to contribute to impactful,
                meaningful work.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light">
              <div className="absolute top-0 -right-3 w-[102%] h-[103%] bg-dark dark:bg-light rounded-[2rem] -z-10 rounded-br-3xl" />
              <Image
                src={profilePic}
                alt="Manas Suple"
                className="w-full h-auto rounded-2xl bg-light p-8"
                priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  Experience
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  Experience
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
