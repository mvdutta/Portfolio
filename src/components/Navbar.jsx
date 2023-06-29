import {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/MVD-Logo7.png'
import { Link} from "react-scroll";
import { scrollToLocation } from "../utilities/scrollToLocation";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    
  return (
    <div className="sticky z-40 w-full h-[85px] top-0 flex items-center justify-between font-comme text-gray-300 bg-gradient-to-br from-slate-950 to-stone-950">
      <div>
        <img
          src={Logo}
          alt="logo image"
          className="w-16 sm:w-20 mt-6 ml-4 sm:ml-[45px] pb-4 hover:cursor-pointer"
          onClick={() => {
            scrollToLocation("home");
          }}
        />
      </div>
      {/* Menu */}
      <div className="text-lg mr-10">
        <ul className="hidden md:flex">
          <li>
            <Link to="home" smooth={true} duration={500} isDynamic={true}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} isDynamic={true}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} isDynamic={true}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500} isDynamic={true}>
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-100} isDynamic={true}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 mr-8">
        {nav ? <FaTimes /> : <FaBars size="30" />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-gradient-to-tr from-slate-950 to-stone-950 flex flex-col justify-center items-center font-comme"
        }
      >
        <ul>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={200}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Social Menu */}
      <div className="hidden lg:flex fixed flex-col top-[45%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#f87b54]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/maia-v-dutta/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/mvdutta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              onClick={() => {
                scrollToLocation("contact");
              }}
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1GLE8z61u6DWOfnKFYEUzjRcmphNP1mEB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar