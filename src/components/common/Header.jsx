import { useState } from "react";
import Logo from "../../assets/Mask-group-logo.png";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { RxLinkedinLogo } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // This state variable controls the visibility of the dropdown menu at first it sets the initial value false .
  const [copied, setCopied] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); //  "☰" or "✕" This function toggles the state of the menu between open and closed.
  const closeMenu = () => setIsMenuOpen(false); //this is helper function to force close the menu after clicking on "x" button

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };
  return (
    <div className="sticky top-0 z-50 w-full bg-[#F5F5F5] font-inter font-normal text-[16px] shadow-md">
      {/* Top Bar */}
      <div className="bg-[#1E3D69] hidden sm:flex justify-center lg:justify-between items-center h-12 md:px-40">
        <div className="flex items-center text-white space-x-4">
          <div className="w-[1.5px] h-12 bg-[rgba(255,255,255,0.20)]"></div>

          <span>
            <FiPhone />
          </span>
          <span
            onClick={() => copyToClipboard("(239) 555-0108")}
            className="cursor-pointer hover:underline underline-offset-4"
          >
            (239) 555-0108
          </span>

          <div className="w-[1.5px] h-12 bg-[rgba(255,255,255,0.20)]"></div>

          <span>
            <MdOutlineEmail />
          </span>
          <span
            onClick={() => copyToClipboard("info@safecareind.xyz")}
            className="cursor-pointer hover:underline underline-offset-4"
          >
            info@safecareind.xyz
          </span>

          <div className="w-[1.5px] h-12 bg-[rgba(255,255,255,0.20)]"></div>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <div className="w-[1.5px] h-12 bg-[rgba(255,255,255,0.20)]"></div>
          <a href="#facebook" className="hover:scale-125">
            <RiFacebookFill color="white" />
          </a>

          <div className="w-[1.5px] h-12 bg-[rgba(255,255,255,0.20)]"></div>
          <a href="#twitter" className="hover:scale-125">
            <FaXTwitter color="white" />
          </a>

          <div className="w-[1.5px] h-12 bg-[rgba(255,255,255,0.20)]"></div>
          <a href="#instagram" className="hover:scale-125">
            <LuInstagram color="white" />
          </a>

          <div className="w-[1.5px] h-12 bg-[rgba(255,255,255,0.20)]"></div>
          <a href="#linkedin" className="hover:scale-125">
            <RxLinkedinLogo color="white" />
          </a>

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
            <li>
              <a href="#home" className="hover:text-[#1E3D69]">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#1E3D69]">
                About Us
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-[#1E3D69]">
                Products
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-[#1E3D69]">
                Gallery
              </a>
            </li>
            <li>
              <a href="#career" className="hover:text-[#1E3D69]">
                Careers
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#1E3D69]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile View*/}
        <div className="lg:hidden relative">
          <button onClick={toggleMenu}>
            {isMenuOpen ? "" : <RxHamburgerMenu  size={30} color={"#1E3D69"}/>}
          </button>

          {isMenuOpen && (
            <div className="fixed inset-0 bg-white z-50 p-6">

              <div className="flex justify-between items-center mb-6">
                {/* logo */}
                <img src={Logo} alt="logo" className="w-32" />

                <button onClick={closeMenu}>
                  <IoCloseSharp size={30} color={"#1E3D69"} />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col text-[20px] space-y-6 px-2">
                <a
                  href="#home"
                  onClick={closeMenu}
                >
                  Home
                </a>
                <a
                  href="#about"
                  onClick={closeMenu}
                >
                  About
                </a>
                <a
                  href="#products"
                  onClick={closeMenu}
                >
                  Products
                </a>
                <a
                  href="#gallery"
                  onClick={closeMenu}
                >
                  Gallery
                </a>
                <a
                  href="#career"
                  onClick={closeMenu}
                >
                  Careers
                </a>
                <a
                  href="#contact"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      {copied && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-[#1E3D69] text-white px-4 py-2 rounded shadow-md text-sm z-50">
          Copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default Header;

// {isMenuOpen && ()... This checks if the menu is open
// condition ? if true "x" : else false "☰" This is a ternary operator that checks the state of the menu and displays either "x" or "☰" based on whether the menu is open or closed.
