import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import '.././index.css'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0F1119] font-comme">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#e2330f] text-2xl">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl text-[#ccd6f6]">
          {" "}
          Maia Dutta
        </h1>
        <h2 className="text-4xl sm:text-7xl text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w[700px]">
          Lorem ipsum.....Lorem IpsumLorem ipsum.....Lorem IpsumLorem
          ipsum.....Lorem Ipsum Lorem ipsum.....Lorem Ipsum Lorem
          ipsum.....Lorem Ipsum Lorem ipsum.....Lorem Ipsum Lorem
          ipsum.....Lorem Ipsum
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#e2330f] hover:border-[#e2330f]">
            View Work
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