import React, { useEffect } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {

  return (
    <>
      {/* <div className="sm:hidden py-36 bg-gradient-to-tr from-slate-950 to-stone-950 "></div> */}
      <div
        name="contact"
        className="w-full h-screen bg-stone-950 flex justify-center items-center p-4 text-stone-300 font-comme pt-20 lg-pt-0 mt-40 lg-mt-0"
      >
        <form
          method="POST"
          action="https://getform.io/f/6a1e9028-9932-4b33-91e1-23e829589c84"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-semibold inline border-b-4 border-[#00d6fe] text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 py-4">
              Submit the form below or send me an email - mermaia33 at gmail
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="7"
            placeholder="Message"
          ></textarea>
          <button className="text-white border-2 border-[#00d6fe] hover:bg-gradient-to-l from-[#00d6fe] to-[#2999ad] hover:border-1 px-4 py-3 my-6 mx-auto flex items-center rounded-md">
            Let's Connect!
          </button>
          <div className="flex justify-center gap-4 lg:hidden">
            <div>
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://www.linkedin.com/in/maia-v-dutta/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
            <div>
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://github.com/mvdutta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </a>
            </div>
            <div>
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://drive.google.com/file/d/1GLE8z61u6DWOfnKFYEUzjRcmphNP1mEB/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFillPersonLinesFill size={30} />
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact