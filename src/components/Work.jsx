import React from 'react'
import wttracker from "../assets/WeightTracker.png"
// import workImg from "../assets/workImg.jpeg";
// import realestate from "../assets/realestate.jpg";
import project1 from "../assets/wt3.png";
import project2 from "../assets/parker2.png";



const Work = () => {
  return (
    <div
      name="work"
      className="pt-96 sm:pt-20 bg-gradient-to-br from-slate-950 to-stone-950 w-full h-screen text-gray-300 font-comme"
    >
      <div className="sm:max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-semibold inline border-b-4 text-gray-300 border-[#00d6fe]">
            Work
          </p>
          <p className="py-4">Check out my recent projects</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${project1})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center ">
                <a
                  href="https://weight-tracking-client.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/mvdutta/weight-tracking-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${project2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center ">
                <a>
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/mvdutta/Parkers-Pets-Capstone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-60'></div>
      </div>
    </div>
  );
}

export default Work