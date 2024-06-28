import React from "react";
import { skills } from "@/data";

const Grid = () => {
  return (
    <section id="skills" className="py-20">
      <div className="text-center h-full">
        <h1 className="text-center relative font-extrabold text-[32px] md:text-2xl lg:text-4xl mb-8 md:mb-14">
          Tech Stack and Skills
        </h1>
        <div className="relative flex justify-center flex-wrap gap-2 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {skills.map((icon, index) => (
            <div
              key={index}
              className="border border-white/[.2] rounded-full bg-black w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 flex justify-center items-center"
            >
              <img
                src={icon}
                alt="icon"
                className="w-8 h-8 md:w-14 md:h-14 lg:w-16 lg:h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Grid;
