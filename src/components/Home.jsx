import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import '.././index.css'

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-tr from-slate-950 to-stone-950 font-comme"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-6xl text-slate-300">
          Hi, I'm <span className="text-[#EA5955]">Maia Dutta</span>
        </h1>
        <p className="text-slate-300 text-2xl sm:text-3xl py-4 max-w[700px]">
          A full-stack software developer located in Nashville, TN.
        </p>
        <div>
          <button className="relative text-white group shadow-sm px-6 py-3 my-2 rounded-md flex items-center hover:bg-gradient-to-r from-[#EA5955] to-[#e84c4a] hover:border-1 hover:border-[#EA5955]">
            <div className="absolute z-0 inset-0 w-full h-full ring-2 ring-[#EA5955] rounded-md animate-pulse ring-opacity-80"></div>
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