import React from 'react'

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-tr from-slate-950 to-stone-950 flex justify-center items-center p-4 text-stone-300 font-comme"
    >
      <form
        method="POST"
        action="https://getform.io/f/6a1e9028-9932-4b33-91e1-23e829589c84"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-semibold inline border-b-4 border-[#EA5955] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or send me an email - mermaia33@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 border-[#EA5955] hover:bg-gradient-to-r from-[#EA5955] to-[#e84c4a] hover:border-1 hover:border-[#EA595] px-4 py-3 my-8 mx-auto flex items-center rounded-md">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact