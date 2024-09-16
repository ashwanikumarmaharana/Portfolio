import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiNextdotjs, SiTailwindcss, SiFramer, SiExpress, SiMysql, SiPython } from 'react-icons/si';

const skillIcons = [
    { icon: <FaHtml5 color="#E34F26" />, label: "HTML" },
    { icon: <FaCss3Alt color="#1572B6" />, label: "CSS" },
    { icon: <FaJsSquare color="#F7DF1E" />, label: "JavaScript" },
    { icon: <SiTailwindcss color="#06B6D4" />, label: "Tailwind CSS" },
    { icon: <SiFramer color="#FF0054" />, label: "Framer Motion" },
    { icon: <SiMongodb color="#47A248" />, label: "MongoDB" },
    { icon: <SiExpress color="black" />, label: "Express.js" },
    { icon: <FaReact color="#61DAFB" />, label: "React" },
    { icon: <FaNodeJs color="#339933" />, label: "Node.js" },
    { icon: <SiNextdotjs color="black" />, label: "Next.js" },
    { icon: <SiMysql color="#4479A1" />, label: "SQL" },
    { icon: <SiPython color="#306998" />, label: "Python" }
];

const Skills = () => {
    return (
        <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-20'>
            <div className="text-white w-full max-w-[400px] md:max-w-[950px] mx-auto p-6 text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">What I Do</h2>
                
                {/* Responsive Grid Layout */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
                    {skillIcons.map((skill, index) => (
                        <div
                            key={index}
                            className="relative h-[140px] w-[140px] sm:h-[160px] sm:w-[160px] md:h-[180px] md:w-[200px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl overflow-hidden group">
                            {React.cloneElement(skill.icon, {
                                size: index < 4 ? 70 : 90
                            })}
                            <p className="mt-2 text-sm md:text-lg">{skill.label}</p>
                            
                            {/* Reflection effect */}
                            <div className="absolute inset-0 bottom-[-100%] bg-gradient-to-t from-white/40 to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
