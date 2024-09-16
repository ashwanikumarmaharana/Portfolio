"use client";
import Image from "next/image";
import { motion } from 'framer-motion';
import project from "../assets/crm.png";
import project1 from "../assets/landing page.jpg";
import project2 from "../assets/slider.png";

const Projects = [
  {
    title: "Customer Relationship Management System",
    desc: "Customer Relationship Management (CRM) is a system businesses use to manage interactions with current and potential customers. It streamlines processes, improves service, and boosts sales by organizing data and automating tasks.",
    devStack: "React,Express,Node Js, MongoDB",
    src: project,
  },
  {
    title: "Exclusive Landing Pages",
    desc: "A landing page goes beyond making a first impression—it's a key tool for driving conversions. By presenting a clear and focused message, it turns visitors into active users, delivering measurable results efficiently.",
    devStack: "Next.js, Tailwind CSS",
    src: project1,
  },
  {
    title: "Customized Elements",
    desc: "Displaying multiple real-time sliders on a single page offers an effective way to showcase your sub-business models, providing dynamic exposure and elevating your business to the next level.",
    devStack: "Html,Css,Js, jQuery, Vanilla Js",
    src: project2,
  },
];

const Portfolio = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black via-[#802727] to-[#381a5f] py-12 md:py-18 overflow-hidden" id="portfolio">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-full mx-auto font-semibold my-6 text-center">
        Selected <span className="block text-orange-400">Project</span>
      </h1>

      <div className="px-4 sm:px-6 md:px-8 lg:px-12 mx-auto mt-12 md:mt-16 space-y-12 md:space-y-20 max-w-[1200px]">
        {Projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}  // Start from left for even, right for odd
            whileInView={{ opacity: 1, x: 0 }}  // Move to original position when in view
            viewport={{ amount: 0.25 }}  // Trigger when 50% of the element is in view
            transition={{ duration: 0.4, delay: 0.2 }}
            className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-6 md:gap-12`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl my-2 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">{project.title}</h2>
              <p className="text-sm sm:text-base md:text-lg text-white/70 p-2 md:p-4">{project.desc}</p>
              <p className="text-base sm:text-lg md:text-xl text-orange-500 font-semibold">{project.devStack}</p>
              <div className="w-full h-[1px] bg-gray-400 my-2 md:my-4"></div>
            </div>
            <div className="flex justify-center w-full">
              <Image
                src={project.src}
                alt={project.title}
                className="h-[350px] w-[500px] object-cover border rounded border-none"
                // sizes="(max-width: 400px), (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
