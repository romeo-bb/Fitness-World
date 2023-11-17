import React from "react";
import RedTitle from "../image/title-bg.svg";
import img1 from "../image/svgimg.png";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-auto flex justify-center py-10 relative"
    >
      <div className="container min-w-[355px] flex flex-col-reverse lg:flex-row justify-between h-full items-center lg:px-5 xsm:px-1">
        <div className="mb-14 relative">
          <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8">
            A little background
          </p>
          <img
            src={RedTitle}
            alt="text_bg"
            className="w-[16rem] absolute top-[-9px] left-[-45px]"
          />
          <h1 className="h1">Who We Are</h1>
          <p className="text-[18px] text-gray-500">
            Today I’m a successful entrepreneur and in-demand coach who’s <br />{" "}
            produced thousands of fitness videos, written a best-selling book,
            <br /> and launched a number of high-grossing digital training and{" "}
            <br />
            nutrition programs My content, programs, and products have <br />{" "}
            impacted millions of lives and frankly, life is pretty amazing —
            sometimes <br /> I still pinch myself.
          </p>
          <ScrollLink
            to="wework"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <button className="w-40 font-primary bg-red-600 text-xl rounded py-3 text-white border border-red-600 hover:bg-black hover:border-black hover:text-white transition duration-500 mt-4">
              How We Work?
            </button>
          </ScrollLink>
        </div>
        <div className="md:h-[500px] md:w-[500px] sm:w-[500px] sm:h-[500px] xsm:w-[350px] xsm:h-[350px] flex items-center mb-10">
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
