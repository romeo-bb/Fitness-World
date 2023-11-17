import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import myLogo from "../image/F-logo .png";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleNav = () => {
    setNav(!nav);
  };

  // Function to handle the click on a link and set it as active
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  // Define your navigation links
  const links1 = [{ to: "/", label: "Home" }];

  const links2 = [
    { to: "/products", label: "Products" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <div className="flex w-full items-center h-20 z-30 px-20 xsm:px-2 text-black justify-center bg-transparent absolute">
        <div className="flex justify-between w-full max-w-[1600px] items-center">
          <div>
            <Link to="/">
              <img
                className="z-0 w-16 h-16 cursor-pointer"
                src={myLogo}
                alt="myLogo"
              />
            </Link>
          </div>
          <ul className="hidden md:flex">
            {links1.map((link, index) => (
              <Link to={link.to} key={index}>
                <li
                  onClick={() => handleLinkClick(index)}
                  className="p-4 text-lg hover:text-white transition duration-300"
                >
                  {link.label}
                </li>
              </Link>
            ))}
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <li className="p-4 text-lg hover:text-white transition duration-300">
                About
              </li>
            </ScrollLink>
            {links2.map((link, index) => (
              <Link to={link.to} key={index}>
                <li
                  onClick={() => handleLinkClick(index)}
                  className="p-4 text-lg hover:text-white transition duration-300"
                >
                  {link.label}
                </li>
              </Link>
            ))}
          </ul>
          {/* Hamburger */}
          <div onClick={handleNav} className="md:hidden z-10">
            {nav ? "" : <HiOutlineMenuAlt4 size={30} />}
          </div>
        </div>
      </div>
      {/* Mobile menu dropdown */}
      <div
        onClick={handleNav}
        style={{
          color: "black",
          transition: "transform 1s",
          transform: nav ? "translateY(0%)" : "translateX(-100%)",
          opacity: 1,
        }}
        className={
          nav
            ? "h-full z-40 fixed left-0 top-0 w-[80%] bg-black px-4 flex flex-col rounded-r-[30px] drop-shadow-lg"
            : "absolute left-[-100%]"
        }
      >
        <div className="flex justify-between w-full relative top-0 mt-1 items-center">
          <img className="w-16 h-16" src={myLogo} alt="myLogo" />
          <AiOutlineClose className="text-white" size={25} />
        </div>
        <ul className="text-center relative top-[20%]">
          {links1.map((link, index) => (
            <Link to={link.to} key={index}>
              <li
                onClick={() => handleLinkClick(index)}
                className="p-4 text-3xl font-primary text-white"
              >
                {link.label}
              </li>
            </Link>
          ))}
          <ScrollLink to="about" spy={true} smooth={true} duration={500}>
            <li className="p-4 text-3xl font-primary text-white">About</li>
          </ScrollLink>
          {links2.map((link, index) => (
            <Link to={link.to} key={index}>
              <li
                onClick={() => handleLinkClick(index)}
                className="p-4 text-3xl font-primary text-white"
              >
                {link.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
