import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-30"
        />
      </div>
      <div className="flex flex-col items-center h-[22rem] px-4 md:px-8 lg:px-16">
        <h1 className="text-center font-extrabold text-[32px] md:text-2xl lg:text-4xl mb-5 md:mb-8">
          Ready to discover emerging talent in tech?
        </h1>
        <h4 className="text-center mb-4 text-[15px] md:text-xl lg:text-2xl ">
          Explore my journey and potential through my{" "}
          <span className="text-purple">resume</span>
        </h4>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/11K8x-Eu9Vl27DbjYEcd9iF7hTXevagF4/view"
        >
          <MagicButton
            title="View Resume"
            icon={<FaLocationArrow />}
            position="right"
          ></MagicButton>
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base mt-2 text-sm md:font-normal font-light">
          Copyright © 2024 Nagaraj
        </p>
        <div className="flex items-center mt-2  md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a target="_blank" href={profile.link}>
                <img
                  src={profile.img}
                  alt={profile.id}
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
