import React from 'react'
import close from "../assets/close-icon3.png";
import { CgCloseR } from "react-icons/Cg";

const DetailModal = ({showModal, setShowModal, modalContent}) => {
      return (
        <>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-scroll fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-full sm:w-1/2 lg:w-1/4 my-6 mx-auto">
                  {/*content*/}
                  <div className="border-0 rounded-lg relative flex flex-col w-full bg-[#01040f] outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-stone-400 rounded-t">
                      <h3 className="text-xl font-comme text-stone-300 font-semibold">
                        {modalContent.title}
                      </h3>
                      <button
                        className="p-1 ml-auto float-right leading-none outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="">
                          <CgCloseR size="25" color="#00d6fe" />
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-5 flex-auto">
                      <p className="my-4 text-stone-300 text-lg leading-relaxed">
                        {modalContent.text}
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6">
                      <button
                        className="text-white border-2 border-[#00d6fe] hover:bg-gradient-to-l from-[#00d6fe] to-[#2999ad] hover:border-1 px-3 py-2  rounded-md"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-40 fixed inset-0 z-40 bg-stone-500"></div>
            </>
          ) : null}
        </>
      );
 
};

export default DetailModal