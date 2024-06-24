import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-15"
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="text-center font-extrabold text-[32px] md:text-2xl lg:text-4xl">
          Ready to discover emerging talent in tech?
          <br /> Explore my journey and potential through my resume – where
          passion meets practice!
        </div>
      </div>
    </footer>
  );
};

export default Footer;
