import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);
const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{
          backgroundColor: [
            "#121212", // deep blackish base
            "rgba(88,28,135,1)", // deep violet
            "rgba(131,58,180,1)", // purple
            "rgba(180,50,150,1)", // magenta transition
            "rgba(220,50,100,1)", // pinkish red
            "rgba(253,29,29,1)", // strong red
            "rgba(253,87,50,1)", // reddish orange
            "rgba(252,120,60,1)", // mid orange
            "rgba(252,176,69,1)", // bright orange/yellow
            "rgba(200,130,180,1)", // light violet transition
            "rgba(131,58,180,1)", // purple again
            "rgba(70,30,100,1)", // darker purple
            "#121212", // fade back to dark
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        MS
      </MotionLink>
    </div>
  );
};

export default Logo;
