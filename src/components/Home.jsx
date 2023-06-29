import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import '.././index.css'
import camel from "../assets/camel-pic1.jpeg";
import { Link} from "react-scroll";
import { scrollToLocation } from '../utilities/scrollToLocation';

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-tr from-slate-950 to-stone-950 font-comme -mb-20"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto pl-4 sm:pr-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-5xl text-slate-300">
          Hi, I'm <span className="text-[#00d6fe]">Maia Dutta</span>
        </h1>
        <p className="text-slate-300 text-2xl sm:text-3xl py-4 max-w[700px]">
          A full-stack software developer located in Nashville, TN.
        </p>
        <div>
          <button
            className="relative text-white group shadow-sm px-6 py-3 my-2 rounded-md flex items-center hover:bg-gradient-to-l from-[#00d6fe] to-[#2999ad] hover:border-1 hover:border-[#2999ad]"
            onClick={() => {
              scrollToLocation("work");
            }}
          >
            <div className="absolute z-0 inset-0 w-full h-full ring-2 ring-[#00d6fe] rounded-md animate-pulse ring-opacity-80"></div>
            <span>View My Work</span>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home