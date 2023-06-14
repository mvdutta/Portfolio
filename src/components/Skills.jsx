import React from 'react'
import JavaScript from '../assets/javascript.png'
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import GitHub from "../assets/github.png";
import CSS from "../assets/css.png";


const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300 ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full font-comme">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-4 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript Icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React Icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind Icon" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS Icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="Github Icon" />
            <p className="my-4">Github</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="Python Icon" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="Python Icon" />
            <p className="my-4">Django</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="Python Icon" />
            <p className="my-4">SQL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills