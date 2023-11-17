import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
import  { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import NavConatct from "../components/NavContact";

const Contact = () => {
  const form = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ep962r6', 'template_icna3ff', form.current, 'UtNeLGIo22vCCspSj')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="h-auto w-full flex justify-center bg-[#f2f2f2]">
      <NavConatct />
      <div className="container h-auto min-w-[355px]">
      <div className='py-[120px]'>
      <div className='px-5 max-w-[1260px] w-full mx-auto min-h-[20px]'>
        <div className='flex md:flex-row justify-between items-start xsm:flex-col gap-5'>
          <div className='max-w-[305px] w-full '>
            <div className='text-base font-semibold mb-4 text-[#4c5057]'>contact</div>
            <h3 className='text-black m-0 text-2xl font-semibold leading-8 mb-8'>
              Contact us through the following channels.
            </h3>
            <a
              href='mailto:mandalosy13@gmail.com'
              class='color-black underline mb-4'>
              mandalosy13@gmail.com
            </a>
            <div className='gap-x-4 gap-y-4 items-center flex mt-6 mb-6'>
              <a href="https://twitter.com/mandalosy"><FaInstagram className='icon' size={30} style={{ color: "rgb(255 43 55)" }} /></a>
              <a href="https://twitter.com/mandalosy"><FaFacebook className='icon' size={30} style={{ color: "rgb(255 43 55)" }} /></a>
              <a href="https://twitter.com/mandalosy"><FaYoutube className='icon' size={30} style={{ color: "rgb(255 43 55)" }} /></a>
              <a href="https://twitter.com/mandalosy"><FontAwesomeIcon icon={faXTwitter} size={30} style={{ color: "rgb(255 43 55)", fontSize: '30px' }}/></a> 
            </div>
          </div>
          <div className='max-w-[630px] w-full '>
            <h2 className="text-black m-0 text-2xl font-semibold leading-5 mb-8">For any questions, Please contact with us</h2>
            <p className="mb-10">Fill the form below.</p>
            <div>
                <form action="" method="get" ref={form} onSubmit={sendEmail}>
                    <input type="text" name="from_name" required placeholder="Name" className="w-full min-h-[40px] text-gray-700 bg-white rounded mb-4 h-[40px] px-2 py-3 text-base leading-7 block out border border-[#e6e7e8]" />
                    <input type="email" name="user_email" required placeholder="Email" className="w-full min-h-[40px] text-gray-700 bg-white rounded mb-4 h-[40px] px-2 py-3 text-base leading-7 block out border border-[#e6e7e8]" />
                    <input type="phone" name="number_phone" required placeholder="Phone" className="w-full min-h-[40px] text-gray-700 bg-white rounded mb-4 h-[40px] px-2 py-3 text-base leading-7 block out border border-[#e6e7e8]" />
                    <input type="text" name="subject_title" required placeholder="Subject (Optional)" className="w-full min-h-[40px] text-gray-700 bg-white rounded mb-4 h-[40px] px-2 py-3 text-base leading-7 block out border border-[#e6e7e8]" />
                    <textarea type="text" name="message" maxLength={5000} required placeholder="Message ...." className="w-full h-[auto] text-gray-700 bg-white rounded mb-4 px-2 py-3 text-base leading-7 block out border border-[#e6e7e8]"></textarea>
                    <input className="w-24 h-10 border-2 rounded  brhover cursor-pointer hover:text-white transition duration-500 mt-4" type="submit" value="Send"/>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}
export default Contact;