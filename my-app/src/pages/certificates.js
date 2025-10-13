import AnimatedText from "@/components/AnimatedText";
import React, { useRef } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import certificates1 from "../../public/images/articles/Accenture-Forage.jpg";
import certificates2 from "../../public/images/articles/Deloitte-Forage.jpg";
import certificates3 from "../../public/images/articles/GenAi-Shaksham-Certificate.jpg";
import certificates4 from "../../public/images/articles/Generative-AI-The-Evolution-of-Thoughtful-Online-Search.jpg";
import certificates5 from "../../public/images/articles/Figma-training-Certificate.jpg";
import certificates6 from "../../public/images/articles/UI-UX-Certificate.jpg";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>

      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg max-md:!hidden"
      />
    </Link>
  );
};

const Certificate = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
    
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center
    justify-between bg-light text-dark first:mt-0 border border-solid border-dark
    border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
    max-sm:flex-col 
    "
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark max-sm:self-start max-sm:pl-0 max-xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};
const FeaturedCertificate = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div
        className="absolute top-0 -right-3 w-[101%] h-[103%] bg-dark rounded-[2rem] -z-10
        rounded-br-3xl"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline max-xs:text-lg">
          {title}
        </h2>
        <p className="text-sm mb-2">{summary}</p>
        {/* <span className="tetx-primary font-semibold">{time}</span> */}
      </Link>
    </li>
  );
};

const certificates = () => {
  return (
    <>
      <Head>
        <title>Certificates | Manas Suple</title>{" "}
        <meta name="description" content="About Manas Suple" />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Credentials"
            className="mb-16 maxlg:!text-7xl max-sm:!text-6xl max-xs:!text-4xl max-sm:mb-8"
          />

          {/* ------------------FEATURED CERTIFICATES------------------ */}
          <ul className="grid grid-cols-2 gap-16 max-md:grid-cols-1 max-lg:gap-8 max-md:gap-y-16">
            <FeaturedCertificate
              title="Accenture Forage Certificate"
              summary="Completed Accenture Discovery Virtual Experience Program on Forage, 
              exploring business analysis, project management, and digital strategy execution."
              time="9 min read"
              link="/"
              img={certificates1}
            />

            <FeaturedCertificate
              title="Deloitte Forage Certificate"
              summary="Completed Deloitte Technology Consulting Virtual Experience Program on Forage, 
              gaining insights into IT transformation and client solution design.."
              time="9 min read"
              link="/"
              img={certificates2}
            />
          </ul>

          {/* ------------------ALL CERTIFICATES------------------ */}
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Certificates
          </h2>
          <ul>
            <Certificate
              title="GenAI Shaksham "
              img={certificates3}
              date="Apr 13th 2025"
              link="/"
            />
            <Certificate
              title="Generative AI: The Evolution of Thoughtful Online Search"
              img={certificates4}
              date="Oct 18th 2024"
              link="/"
            />
            <Certificate
              title="Figma Training "
              img={certificates5}
              date="Apr 11th 2024"
              link="/"
            />
            <Certificate
              title="UI/UX Design  "
              img={certificates6}
              date="Jul 03rd 2025"
              link="/"
            />

          </ul>
        </Layout>
      </main>
    </>
  );
};

export default certificates;
