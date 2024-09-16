"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Variants for hamburger menu lines to create cross animation
const line1Variants = {
  open: { rotate: 45, y: 8, transition: { duration: 0.3, ease: "easeInOut" } },
  closed: { rotate: 0, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

const line2Variants = {
  open: { rotate: -45, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  closed: { rotate: 0, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

const line3Variants = {
  open: { opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  closed: { opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
};

// Variants for menu animation
const menuVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50, // Increased stiffness for a faster open
      damping: 15,
    },
  },
  closed: {
    x: "-100%",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
    },
  },
};

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Contact me", path: "#contact" },
];

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  // Disable body scrolling when the mobile menu is open
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Clean up the effect on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [nav]);

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="text-white/70 pt-6">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-xl shadow-lg z-50">
        <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px]">
          <ul className="flex flex-row p-4 space-x-8">
            {navLinks.map((link, index) => (
              <li key={index} className="group">
                <Link href={link.path}>
                  <p className="text-lg font-bold cursor-pointer">
                    {link.title}
                  </p>
                </Link>
                {link.title === "Contact me" && (
                  <div className="relative">
                    <div className="absolute w-2/3 h-1 transition-all duration-400 ease-out bg-orange-400 rounded-full group-hover:w-full"></div>
                    <div className="mt-1 absolute w-1/3 h-1 transition-all duration-600 ease-out bg-orange-700 rounded-full group-hover:w-full"></div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Hamburger Menu Icon */}
      <div
        onClick={toggleNav}
        className="md:hidden fixed top-5 right-5 p-2 z-50 cursor-pointer"
      >
        <motion.div initial={false} animate={nav ? "open" : "closed"} className="flex flex-col justify-center items-center">
          <motion.div
            className="w-8 h-1 bg-white mb-1"
            variants={line1Variants}
          />
          <motion.div
            className="w-8 h-1 bg-white mb-1"
            variants={line2Variants}
          />
          <motion.div
            className="w-8 h-1 bg-white"
            variants={line3Variants}
          />
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={nav ? "open" : "closed"}
        variants={menuVariants}
        className="fixed left-0 top-0 w-full h-screen z-40 bg-black/90"
      >
        <ul className="text-4xl font-semibold my-24 text-center space-y-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} onClick={closeNav}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default NavBar;
