import React from 'react'
import ChangingText from '../utilities/ChangingText';
import camel from "../assets/camel-pic1.jpeg";

const About = () => {
  return (
    <>
      <div
        name="about"
        className="w-full h-screen bg-gradient-to-br from-slate-950 to-stone-950 text-gray-300 font-comme"
      >
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className=" w-full flex justify-center">
            <div className="sm:text-right pb-6 sm:pb-8">
              <p className="text-4xl font-semibold inline border-b-4 border-[#00d6fe]">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="text-xl sm:text-2xl text-[#e5d8af] mb-4 sm:mb-12 flex justify-items-center">
            <ChangingText />
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-4 px-3">
            <div className="flex flex-col items-center text-center sm:text-right text-2xl sm:text-3xl font-light">
              <p>Hello, nice to meet you!</p>
              <img
                src={camel}
                alt="camel photo"
                className=" w-48 h-48 sm:w-[300px] sm:h-[300px] mb-6 mt-6 sm:mt-8 rounded-full"
              />
            </div>
            <div className="h-[150px] px-2 overflow-y-scroll sm:w-full pl-10 sm:h-full -mt-4 sm:mt-0 sm:pt-2 sm:text-lg">
              <p>
                I'm a software developer with a diverse background in biology,
                food-service management, and clinical dietetics. While working
                as a dietitian, I needed a nutrition calculator so I could spend
                less time performing calculations, and more time with patients.
                I couldn't find a suitable one, so I learned the basics of
                programming and built one myself! After that, I fell in love
                with programming and ultimately switched careers to become a
                software developer.
              </p>
              <p>
                I take pride in delivering high-quality solutions that meet the
                needs of users, whether it's creating intuitive user interfaces
                or building robust backend systems.
              </p>
              <p>
                If you have any questions or if you're interested in
                collaborating, I’d love to hear from you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About