import React, { useEffect, useState } from "react";
import ChangingText from "../utilities/ChangingText";
import camel from "../assets/camel-pic1.jpeg";

  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };


const About = () => {
  
  const [windowSize, setWindowSize] = useState(getWindowSize());

    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const findWidthValue = () => {
    const sz1 = 415;
    const sz2 = 640;
    if (windowSize.innerWidth < sz1) return "h-[300px] ";
    if (windowSize.innerWidth >= sz1 && windowSize.innerWidth < sz2)
      return "h-[500px] ";
    if (windowSize.innerWidth >= sz2) return "h-[390px] ";
  };

  return (
    <>
      <div
        name="about"
        className="w-full h-screen bg-stone-950 text-gray-300 font-comme pt-28 md:pt-0"
      >
        <div className="flex flex-col sm:justify-center sm:items-center w-full h-full px-4">
          <div className=" w-full flex sm:justify-center">
            <div className="sm:text-right pb-6  sm:pb-4">
              <p className="text-4xl font-semibold inline border-b-4 border-[#00d6fe]">
                About
              </p>
            </div>
          </div>
          <div className="text-xl sm:text-2xl mb-2 sm:mb-10 sm:mt-6">
            <ChangingText />
          </div>
          <div className="max-w-[725px] lg:max-w-[1000px] w-full grid sm:grid-cols-2 sm:gap-6 lg:gap-0">
            <div className="flex flex-col sm:items-center sm:text-center ">
              <img
                src={camel}
                alt="camel photo"
                className=" w-48 h-48 sm:w-[375px] sm:h-[375px] lg:w-[420px] lg:h-[425px] mb-6 mt-4 sm:mt-2 rounded-lg"
              />
            </div>
            <div
              className={
                findWidthValue() +
                "sm:px-2 overflow-y-scroll scrollbar sm:w-full lg:h-full sm:text-lg"
              }
            >
              <p className="text-[#00d6fe] mb-4 text-2xl font-light">
                Hello, nice to meet you!
              </p>
              <p>
                I'm a software developer with a diverse background in biology,
                food-service management, and clinical dietetics. While working
                as a dietitian, I needed a nutrition calculator so I could spend
                less time performing calculations, and more time with patients.
                I couldn't find a suitable one, so I learned the basics of
                programming and{" "}
                <a
                  href="https://mvdutta.github.io/metabolic-calculator/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#9cdeea] underline"
                >
                  built one myself!
                </a>{" "}
                After that, I fell in love with programming and ultimately
                switched careers to become a software developer.
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
};

export default About;
