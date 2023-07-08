import React, { useState } from 'react'
import project1 from "../assets/wt3.png";
import project2 from "../assets/parker2.png";
import DetailModal from './DetailModal';



const Work = () => {

  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState({title:"", text:""})


  return (
    <>
      <div
        name="work"
        className=" bg-stone-950 w-full h-screen text-gray-300 font-comme pt-72 sm:pt-0 pb-40 sm:pb-0"
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
              className=" group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Healthcare Application
                </span>
                <div className="pt-8 text-center ">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg"
                    onClick={() => {
                      setShowModal(true);
                      setModalContent({
                        title: "WeightTracker",
                        text: "A responsive full-stack web application to minimize unintentional weight loss in healthcare facilities. The app works with the facility's EMR to allow for timely and systematic weight tracking, identifying patients at risk, monitoring weight trends, and communication between healthcare teams. Features full CRUD functionality using React, Python, Django, SQLite, and Tailwind CSS.",
                      });
                    }}
                  >
                    Details
                  </button>
                  <a
                    href="https://weight-tracking-client.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
                      Try It
                    </button>
                  </a>
                  <a
                    href="https://github.com/mvdutta/weight-tracking-client"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${project2})` }}
              className="group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  Pet Sitting Service
                </span>
                <div className="pt-8 text-center ">
                  <a>
                    <button
                      className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg"
                      onClick={() => {
                        setShowModal(true);
                        setModalContent({
                          title: "Parker's Pet Sitting",
                          text: "A website for a premium pet-sitting service. Created the front-end UI as a single-page application that includes profile creation, appointment setting, and a matching service for clients and pet sitters. Features full CRUD functionality and was developed using React, Vanilla CSS, React-Bootstrap, and JSON-server backend.",
                        });
                      }}
                    >
                      Details
                    </button>
                  </a>
                  <a
                    href="parkers-pets-capstone.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
                      Try It
                    </button>
                  </a>
                  <a
                    href="https://github.com/mvdutta/Parkers-Pets-Capstone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-800 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DetailModal
        showModal={showModal}
        setShowModal={setShowModal}
        modalContent={modalContent}
      />
    </>
  );
}

export default Work