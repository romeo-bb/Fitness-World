import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="sm:h-[300px] h-[250px] bgsimo flex items-end justify-center">
      <div className="container h-auto min-w-[355px]">
      <div className='max-w-[1240px] mx-auto flex flex-col px-4 mb-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <p className="text-white footertextcolor">© Copyright 2023 <a className="cursor-pointer" href="https://twitter.com/mandalosy">MOHAMMED ANDALOSY</a></p>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <a href="https://twitter.com/mandalosy"><FaInstagram className='icon text-white footertextcolor' size={30} /></a>
            <a href="https://twitter.com/mandalosy"><FaFacebook className='icon text-white footertextcolor' size={30} /></a>
            <a href="https://twitter.com/mandalosy"><FaYoutube className='icon text-white footertextcolor' size={30}  /></a>
            <a href="https://twitter.com/mandalosy"><FontAwesomeIcon className=" text-white text-[30px] footertextcolor" icon={faXTwitter}/></a>             
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
export default Footer;