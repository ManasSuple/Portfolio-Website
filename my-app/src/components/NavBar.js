import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import {
  TwitterIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  MoonIcon,
  SunIcon,
} from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block bg-dark 
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"} dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(href);
    toggle();
  };
  return (
    <button
      href={href}
      className={`${className} relative group`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`h-[1px] inline-block bg-dark 
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"} dark:bg-light`}
      >
        &nbsp;
      </span>
    </button>
  );
};
const NavBar = () => {
  const { mode, setMode } = useThemeSwitcher();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const toggleLabel =
    mode === "dark"
      ? "Toggle theme, currently dark"
      : "Toggle theme, currently light";

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative">
      
      {/* ------------------HAMBRGER MENU------------------ */}
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="flex-col justify-center items-center lg:hidden text-light dark:text-dark my-2"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="hidden w-full justify-between items-center lg:flex">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink
            href="/certificates"
            title="Certificates"
            className="ml-4"
          />
        </nav>

        {/* ------------------DESKTOP VIEW------------------ */}
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com/ManasSuple"
            target={"_blank"}
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/manas-suple/"
            target={"_blank"}
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 bg-light rounded-full"
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
          >
            <DribbbleIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            aria-label={toggleLabel}
            aria-pressed={mode === "dark"}
            title={toggleLabel}
            className={`ml-5 flex items-center justify-center rounded-full p-1
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {/* ------------------MOBILE VIEW------------------ */}
      {
        isOpen ?
        <motion.div
        initial={{ scale: 0, opacity: 0, }}
        animate={{ scale: 1, opacity: 1 }}
        id="mobile-menu"
        className={`${
          isOpen ? "flex" : "hidden"
        } min-w-[70vw] flex-col justify-between items-center fixed top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 z-30 bg-light/30 dark:bg-dark/45 rounded-lg py-8 backdrop-blur-md lg:hidden`}
      >
        <nav className="flex flex-col items-center">
          <CustomMobileLink
            href="/"
            title="Home"
            className="py-2"
            toggle={handleClick}
          />
          <CustomMobileLink
            href="/about"
            title="About"
            className="py-2"
            toggle={handleClick}
          />
          <CustomMobileLink
            href="/projects"
            title="Projects"
            className="py-2"
            toggle={handleClick}
          />
          <CustomMobileLink
            href="/certificates"
            title="Certificates"
            className="py-2"
            toggle={handleClick}
          />
        </nav>

        <nav className="flex items-center justify-center flex-wrap mt-4">
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://github.com/ManasSuple"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/manas-suple/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1 bg-light rounded-full"
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3 sm:mx-1"
          >
            <DribbbleIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            aria-label={toggleLabel}
            aria-pressed={mode === "dark"}
            title={toggleLabel}
            className={`ml-5 flex items-center justify-center rounded-full p-1
        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </motion.div>
        : null
      }

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
