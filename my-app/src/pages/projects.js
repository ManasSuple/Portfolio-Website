import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/KJ-Somaiya-IV-Portal.jpg";
import project2 from "../../public/images/projects/rag-pdf-reader.jpg";
import project3 from "../../public/images/projects/linkedin-post-generator.jpg";
import project4 from "../../public/images/projects/No-Image.jpg"; //TimeTable generator change later
import project5 from "../../public/images/projects/travel-ai-agent.jpg";
import { motion, scale } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="p-12 w-full flex items-center justify-between relative rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-light shadow-2xl dark:bg-dark dark:border-light
    max-lg:flex-col max-lg:p-8 max-xs:rounded-2xl max-xs:rounded-br-3xl max-xs:p-4"
    >
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg max-lg:w-full"
      >
        <div
          className="absolute top-0 -right-3 w-[101%] h-[103%] bg-dark dark:bg-light rounded-[2.5rem] -z-10
        rounded-br-3xl max-xs:-right-2 max-sm:h-[102%] max-xs:w-full max-xs:rounded-[1.5rem]"
        />
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
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 max-lg:w-full max-lg:pl-0 max-lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark max-xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light max-sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light max-sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
            max-sm:px-4 max-sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center 
    rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light max-xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 w-[101%] h-[103%] bg-dark dark:bg-light rounded-[2rem] -z-10
        rounded-br-3xl max-md:-right-2 max-md:w-[101%] max-sm:h-[102%] max-xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark max-lg:text-lg max-md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold max-lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" px-6 text-lg font-semibold underline max-md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 max-md:w-6">
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects Page | Manas Suple</title>
        <meta name="description" content="About Manas Suple" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 ">
          <AnimatedText
            text="Projects That Define Me!"
            className="mb-16 max-lg:!text-7xl max-sm:!text-5xl max-xs:!text-4xl max-sm:mb-8"
          />

          <div className="grid grid-col-12 gap-24 gap-y-32 max-xl:gap-x-16 max-lg:gap-x-8 max-md:gap-y-24 max-sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="KJ-Somaiya-IV-Portal"
                summary=" A full-stack web application that streamlines industrial visit management 
                for KJ Somaiya College of Engineering. Students can easily browse, register, 
                and track industrial visits, while admins can schedule visits, manage registrations, 
                and upload content—all from a secure, role-based dashboard. Built with React, 
                TypeScript, TailwindCSS, and Supabase, the system features real-time data fetching, 
                cloud-based image storage, responsive design, and a robust authentication system, 
                providing a seamless experience for both students and faculty."
                link="https://github.com/ManasSuple/KJ-Somaiya-Project"
                type="Featured Project"
                github="https://github.com/ManasSuple/KJ-Somaiya-Project"
                img={project1}
              />
            </div>

            <div className="col-span-6 max-sm:col-span-12">
              <Project
                title="RAG-PDF-Reader"
                summary=" An interactive web app that lets you chat with your PDF 
                documents using Retrieval-Augmented Generation (RAG). Upload any PDF, 
                and the system parses and chunks the text, generates embeddings with Google Gemini, 
                stores them in ChromaDB, and answers your questions in real time. 
                Built with Streamlit, LangChain, and ChromaDB, this project demonstrates 
                practical AI integration, instant document querying, and an end-to-end pipeline 
                for intelligent document understanding."
                link="https://rag-pdfreader-manas-suple.streamlit.app/"
                type="Hands-on Ai Project"
                github="https://github.com/ManasSuple/RAG-PDFReader"
                img={project2}
              />
            </div>

            <div className="col-span-6 max-sm:col-span-12">
              <Project
                title="Travel Ai Agent"
                summary=" An intelligent travel planning agent that generates real-time travel 
                reports for any destination. Using LangChain and Google Gemini API, the app 
                provides weather updates, top attractions, budget estimates, simulated flights 
                from Mumbai, and travel tips—all in a single report. Built as a Python CLI app, 
                it demonstrates practical AI integration, live data fetching, 
                and automated itinerary generation, offering a seamless planning experience."
                link="https://travel-ai-agent-manas-suple.streamlit.app/"
                type="Hands-on Ai Project"
                github="https://github.com/ManasSuple/Travel-Ai-Agent"
                img={project3}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="TimeTable Generator"
                summary=" Currently in development."
                link="/"
                type="In-Progress Project"
                github="https://github.com/ManasSuple/TimeTable-Generator"
                img={project4}
              />
            </div>

            <div className="col-span-6 max-sm:col-span-12">
              <Project
                title="LinkedIn Post Generator"
                summary=" A Streamlit web app that creates professional, 
                engaging LinkedIn posts from any topic using Google Gemini and LangChain. 
                Users input a topic, and the app generates full-length posts 
                (150–300 words) with proper tone, formatting, and relevant hashtags. 
                Built with Streamlit, this project demonstrates AI-powered content generation, 
                context-aware prompting, and an intuitive user interface for professionals, 
                marketers, and thought leaders."
                link="/"
                type="Fetured Project"
                github="/"
                img={project5}
              />
            </div>

            {/* <div className="col-span-6 max-sm:col-span-12">
              <Project
                title="LinkedIn Post Generator"
                summary=" A Streamlit web app that creates professional, 
                engaging LinkedIn posts from any topic using Google Gemini and LangChain. 
                Users input a topic, and the app generates full-length posts 
                (150–300 words) with proper tone, formatting, and relevant hashtags. 
                Built with Streamlit, this project demonstrates AI-powered content generation, 
                context-aware prompting, and an intuitive user interface for professionals, 
                marketers, and thought leaders."
                link="/"
                type="Fetured Project"
                github="/"
                img={project1}
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
