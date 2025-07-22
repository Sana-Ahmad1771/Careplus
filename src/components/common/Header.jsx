import Logo from "../../assets/Mask-group-logo.png";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { RxLinkedinLogo } from "react-icons/rx";
const Header = () => {
  return (
    <div>
      <div className="bg-[#1E3D69] hidden  sm:flex justify-center lg:justify-between items-center h-12 md:px-40  text-white text-[16px] font-normal">
        {/*  */}
        <div className="flex items-center  space-x-4 ">
          <div className="w-[1.5px] h-12 bg-[rgba(255,255,255,0.20)]"></div>
          <span>
            <FiPhone />
          </span>
          <span>(239) 555-0108</span>
          <div className="w-[1.5px] h-12 bg-[rgba(255,255,255,0.20)]"></div>
          <span>
            <MdOutlineEmail />
          </span>
          <span>info@safecareind.xyz</span>
          <div className="w-[1.5px] h-12 bg-[rgba(255,255,255,0.20)]"></div>
        </div>
        {/*  */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="w-[1.5px] h-12 bg-[rgba(255,255,255,0.20)]"></div>
          <span>
            <RiFacebookFill />
          </span>
          <div className="w-[1.5px] h-12 bg-[rgba(255,255,255,0.20)]"></div>
          <span>
            <FaXTwitter />
          </span>
          <div className="w-[1.5px] h-12 bg-[rgba(255,255,255,0.20)]"></div>
          <span>
            <LuInstagram />
          </span>
          <div className="w-[1.5px] h-12 bg-[rgba(255,255,255,0.20)]"></div>
          <span>
            <RxLinkedinLogo />
          </span>
          <div className="w-[1.5px] h-12 bg-[rgba(255,255,255,0.20)]"></div>
        </div>
      </div>
      {/* logo section */}
      <div className="flex justify-between items-center px-5 !lg:pr-[478px]   xl:mx-40 bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)]">
        <div className="flex-shrink-0">
          <img src={Logo} alt="logo" />
        </div>
        <div className="hidden lg:block">
          <ul className="flex justify-center items-center !font-poppins space-x-10 list-none decoration-none font-normal text-[16px]">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#career">Careers</a>
            </li>
          </ul>
        </div>
        {/* Mobile Menu*/}
        <div className="lg:hidden">
          <button className="text-[#1E3D69] focus:outline-none">☰</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
