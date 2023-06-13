import React from "react";
import { images, contactLinks } from "../utils/data.utils";
import { Line, Btn } from "./btn.component";
import ContactLinks from "./contact-links.component";

const Hero: React.FC = () => {
  const handleDownloadResume = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "../assets/Johnny-Ekparam-resume.pdf";
    downloadLink.download = "resume.pdf";
    downloadLink.click();
  };

  return (
    <div className="relative text-center overflow-hidden px-2.5">
      <div className="max-w-[1200px] m-auto">
        <div className=" w-56 m-auto  bg-text2 bg-opacity-5 md:bg-inherit md:w-full">
          <ContactLinks links={contactLinks} />
        </div>
        <div className="relative md:text-left  ">
          <img
            src={images.patterRings}
            alt="pattern rings image"
            className="absolute  z-[-1] -left-44 top-24 opacity-70 md:-left-80 md:top-2 lg:-left-96 "
          />

          <img
            src={images.patterCircle}
            alt="pattern circle image"
            className="absolute z-[-1] -right-14 top-48 opacity-40 w-24 md:w-20 md:opacity-100 md:top-[18.5rem] md:right-3 lg:right-[17.3rem] lg:w-16"
          />
          <div className="relative overflow-hidden  w-56  bg-text2 bg-opacity-5 border-separate h-[300px] md:h-[480px] mx-auto md:w-80 md:z-[-2] md:absolute md:-right-3 md:-top-20 ">
            <img
              src={images.profilePictureGray}
              alt="Profile Picture"
              className="absolute bottom-0 md:w-96  hover:scale-110 transition-all duration-300"
            />
          </div>
          <div className="md:py-10">
            <h1 className="text-4xl font-bold py-5 md:text-6xl">
              Nice to meet you! <br /> I'm{" "}
              <span className="relative   after:bg-accent after:absolute after:w-full after:h-[0.2rem] after:left-0 after:-bottom-0 after:rounded lg:text-7xl">
                Johnny Ekparam.
              </span>
            </h1>
            <p className="py-1 text-text2 max-w-[50ch]">
              Based in Nigeria, I'm a front-end software engineer who loves
              crafting funtional and immersive web experiences that captivate
              and inspire{" "}
            </p>
          </div>
          <div>
            <Btn title="CONTACT ME" url="#contact-me" />
            {/* <Btn title="Download Resume" /> */}
            <Btn title="Download Resume" onClick={handleDownloadResume} />
          </div>
        </div>
      </div>
      <div className="my-14 max-w-[1200px] m-auto">
        <Line />
      </div>
    </div>
  );
};

export default Hero;
