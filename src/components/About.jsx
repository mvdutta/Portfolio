import React from 'react'

const About = () => {
  return (
    <>
      <div
        name="about"
        className="w-full h-screen bg-gradient-to-br from-slate-950 to-stone-900 text-gray-300 font-comme"
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-semibold inline border-b-4 border-[#EA5955]">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-3">
            <div className="sm:text-right text-4xl font-light">
              <p>Hello, nice to meet you.</p>
              <p>Please take a look around.</p>
            </div>
            <div>
              <p>
                Lorem Ipsom....Lorem Ipsom...Lorem Ipsom.....Lorem
                Ipsom....Lorem Ipsom....Lorem Ipsom....Lorem Ipsom....Lorem
                Ipsom....Lorem Ipsom....Lorem Ipsom....Lorem Ipsom....Lorem
                Ipsom....Lorem Ipsom....Lorem Ipsom....Lorem Ipsom....Lorem
                Ipsom....
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About