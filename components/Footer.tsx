import React from "react";
import { LinkPreview } from "./ui/link-preview";
import image_resume from "./image/resume_v.webp";
const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-15"
        />
      </div>
      <div className="flex flex-col justify-center items-center h-[40rem] px-4">
        <p className="text-center font-extrabold text-[20px] md:text-2xl lg:text-4xl mb-10">
          Ready to discover emerging talent in tech?
          <br />
          Explore my journey and potential through my{" "}
          <LinkPreview
            url="https://drive.google.com/file/d/11K8x-Eu9Vl27DbjYEcd9iF7hTXevagF4/view"
            imageSrc={image_resume}
            isStatic
            className="font-bold"
          >
            <span className="text-purple">resume</span>
          </LinkPreview>{" "}
          - where passion meets practice!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
