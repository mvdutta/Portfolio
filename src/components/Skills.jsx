import React from 'react'
import JavaScript from '../assets/javascript.png'
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import GitHub from "../assets/github.png";
import CSS from "../assets/css.png";
import Python from "../assets/python3.png";
import Django from "../assets/django3.png";
import SQL from "../assets/SQL.png";


const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen bg-gradient-to-tr from-slate-950 to-stone-950 text-gray-300 font-comme"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-stone-300 font-comme">
        <div>
          <p className="text-4xl font-semibold inline border-b-4 border-[#EA5955] ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-4 sm:grid-cols-4 gap-4 text-center py-8">
          <div className=" bg-gradient-to-tr from-slate-900 to-stone-950 shadow-md shadow-stone-800 hover:scale-105 duration-500">
            <img
              className="w-20 mx-auto pt-4"
              src={JavaScript}
              alt="JavaScript Icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="bg-gradient-to-tr from-slate-900 to-stone-950 shadow-md shadow-stone-800 hover:scale-105 duration-500">
            <img
              className="w-20 mx-auto pt-4"
              src={ReactImg}
              alt="React Icon"
            />
            <p className="my-4">React</p>
          </div>
          <div className="bg-gradient-to-tr from-slate-900 to-stone-950 shadow-md shadow-stone-800 hover:scale-105 duration-500">
            <img
              className="w-20 mx-auto pt-4"
              src={Tailwind}
              alt="Tailwind Icon"
            />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="bg-gradient-to-tr from-slate-900 to-stone-950 shadow-md shadow-stone-800 hover:scale-105 duration-500">
            <img className="w-20 mx-auto pt-4" src={CSS} alt="CSS Icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="bg-gradient-to-tr from-slate-900 to-stone-950 shadow-md shadow-stone-800 hover:scale-105 duration-500">
            <img className="w-20 mx-auto pt-4" src={GitHub} alt="Github Icon" />
            <p className="my-4">Github</p>
          </div>
          <div className="bg-gradient-to-tr from-slate-900 to-stone-950 shadow-md shadow-stone-800 hover:scale-105 duration-500">
            <img
              className="w-20 mx-auto pt-4"
              src={Python}
              alt="Python Icon"
            />
            <p className="my-4">Python</p>
          </div>
          <div className="bg-gradient-to-tr from-slate-900 to-stone-950 shadow-md shadow-stone-800 hover:scale-105 duration-500">
            <img
              className="w-20 mx-auto mt-8 pt-3 sm:pt-3"
              src={Django}
              alt="Django Icon"
            />
            <p className="my-4 mt-8">Django</p>
          </div>
          <div className="bg-gradient-to-tr from-slate-900 to-stone-950 shadow-md shadow-stone-800 hover:scale-105 duration-500">
            <img
              className="w-20 mx-auto pt-2"
              src={SQL}
              alt="SQL Icon"
            />
            <p className="my-4">SQL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills