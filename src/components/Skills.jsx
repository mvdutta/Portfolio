import React from 'react'
import JavaScript from '../assets/javascript.png'
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import GitHub from "../assets/github.png";

const Skills = () => {
  return (
    <div name='skills'>
    {/* Container */}
    <div>
        <div>
            <p>Experience</p>
            <p>//These are the technologies I've worked with</p>
        </div>
        <div>
            <div>
                <img src={JavaScript} alt='JavaScript Icon' />
                <p>JavaScript</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Skills