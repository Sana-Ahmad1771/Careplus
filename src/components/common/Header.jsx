import { useState } from "react";
import Logo from "../../assets/Mask-group-logo.png";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { RxLinkedinLogo } from "react-icons/rx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // This state variable controls the visibility of the dropdown menu at first it sets the initial value false . 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);//  "☰" or "✕" This function toggles the state of the menu between open and closed.
  const closeMenu = () => setIsMenuOpen(false);//this is helper function to force close the menu after clicking on "x" button

  return (
    <div className="sticky top-0 z-50 w-full bg-[#F5F5F5] font-inter font-normal text-[16px] shadow-md">
      {/* Top Bar */}
      <div className="bg-[#1E3D69] hidden sm:flex justify-center lg:justify-between items-center h-12 md:px-40">
        <div className="flex items-center text-white space-x-4">
          <div className="w-[1.5px] h-12 bg-[rgba(255,255,255,0.20)]"></div>
          <span><FiPhone /></span>
          <span><a href="#contactno">(239) 555-0108</a></span>
          <div className="w-[1.5px] h-12 bg-[rgba(255,255,255,0.20)]"></div>
          <span><MdOutlineEmail /></span>
          <span><a href="#emailadress">info@safecareind.xyz</a></span>
          <div className="w-[1.5px] h-12 bg-[rgba(255,255,255,0.20)]"></div>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <div className="w-[1.5px] h-12 bg-[rgba(255,255,255,0.20)]"></div>
          <a href="#facebook"><RiFacebookFill color="white" /></a>
          <div className="w-[1.5px] h-12 bg-[rgba(255,255,255,0.20)]"></div>
          <a href="#twitter"><FaXTwitter color="white" /></a>
          <div className="w-[1.5px] h-12 bg-[rgba(255,255,255,0.20)]"></div>
          <a href="#instagram"><LuInstagram color="white" /></a>
          <div className="w-[1.5px] h-12 bg-[rgba(255,255,255,0.20)]"></div>
          <a href="#linkedin"><RxLinkedinLogo color="white" /></a>
          <div className="w-[1.5px] h-12 bg-[rgba(255,255,255,0.20)]"></div>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex justify-between items-center px-5 !lg:pr-[478px] xl:mx-40 bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] h-20">
        <div className="flex-shrink-0">
          <img src={Logo} alt="logo" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:block">
          <ul className="flex justify-center items-center space-x-10 list-none">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#career">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Hamburger Button */}
        <div className="lg:hidden relative">
          <button
            onClick={toggleMenu}
            className="text-2xl text-[#1E3D69] "
          >
            {isMenuOpen ? "✕" : "☰"}// condition ? if true then "✕" else if false "☰"
          </button>

          {/* Small Dropdown Menu */}
          {isMenuOpen && ( // This checks if the menu is open
            <div className="absolute place-items-center right-0 mt-2 w-44 bg-white shadow-lg rounded-md py-2 z-50">
              <a href="#home" onClick={closeMenu}
                className="block px-4 py-2 ">
                Home
              </a>
              <a href="#about" onClick={closeMenu}
                className="block px-4 py-2 ">
                About
              </a>
              <a href="#products" onClick={closeMenu}
                className="block px-4 py-2">
                Products
              </a>
              <a href="#contact" onClick={closeMenu}
                className="block px-4 py-2">
                Contact
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
