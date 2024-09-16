"use client";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import profilepic from "../assets/profpic.png";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const floatingAnimation = {
  y: [-20, 20], // Y-axis floating motion
  transition: {
    repeat: Infinity,
    repeatType: "reverse" as const, // Correct typing for repeatType
    duration: 1.5,
    ease: "easeInOut",
  },
};

const Hero = () => {
  const cursorControls = useAnimation();
  const lightningControls = useAnimation();

  useEffect(() => {
    cursorControls.start(floatingAnimation);
    lightningControls.start(floatingAnimation);
  }, [cursorControls, lightningControls]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[linear-gradient(to_bottom,#000,#4b177b_25%,#c74f8bb3_50%,#ad7a56d9_65%)] overflow-hidden">
      {/* Radial background circle */}
      <div className="absolute rounded-[50%] w-[1500px] h-[750px] md:w-[3000px] md:h-[1300px] top-[500px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#4B2655)]"></div>

      {/* Content container */}
      <div className="relative z-10 text-center">
        {/* Header text */}
        <div className="text-4xl top-[-100px] md:top-0 md:text-6xl lg:text-8xl font-bold">
          <h1 className="text-[#98B4CE]">Hi, I am</h1>
          <h1 className="text-[#e3694d]">Ashwani Maharana</h1>
        </div>

        {/* Draggable Icons with Y-axis animations */}
        <motion.div
          className="hidden md:block absolute left-[-35%] top-[240px]"
          drag
          animate={cursorControls} // Controlled animation
          whileDrag={{ y: 0 }} // Disable animation while dragging
          dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }} // Optional drag constraints
          onDragEnd={() => cursorControls.start(floatingAnimation)} // Restart animation after drag ends
        >
          <Image src={cursor} height="190" width="190" alt="cursor" draggable="false" />
        </motion.div>

        <motion.div
          className="hidden md:block absolute right-[-40%] top-[10%]"
          drag
          animate={lightningControls} // Controlled animation
          whileDrag={{ y: 0 }} // Disable animation while dragging
          dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }} // Optional drag constraints
          onDragEnd={() => lightningControls.start(floatingAnimation)} // Restart animation after drag ends
        >
          <Image src={lightning} height="120" width="120" alt="lightning" draggable="false" />
        </motion.div>

        {/* Hero Description */}
        <p className="font-semibold text-2xl md:text-3xl max-w-xl mx-4 md:mx-auto mt-8 text-white/90 leading-relaxed">
          A full-stack developer who enjoys the journey from idea inception to project success.
        </p>

        {/* Profile Image */}
        <div className="mt-10 flex justify-center">
          <Image
            src={profilepic}
            alt="Profile Picture"
            className="h-[200px] w-[200px] sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px]  rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
