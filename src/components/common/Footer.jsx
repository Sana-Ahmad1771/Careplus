import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/Mask-group-logo.png";

const Footer = () => {
  return (
    <section
      className="w-full bg-white border-t border-gray-200 overflow-hidden"
    >
      {/* Main Content */}
      <div className="px-5 lg:px-32 xl:px-40 py-16 flex flex-col lg:flex-row justify-between flex-wrap gap-12">
        {/* Brand Info */}
        <div
          className="flex-1 min-w-[190px]"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <img src={logo} alt="Logo" className="mb-5 w-32" />
          <p className="text-[16px] font-normal mb-6">
            Welcome to a place of refinement and beauty. This is Furniture, a WP
            gem we made for all furniture stores & brands.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[16px]">
              <FiPhone /> (239) 555-0108
            </div>
            <div className="flex items-center gap-2 text-[16px]">
              <MdOutlineEmail /> info@caremedicaltrading.xyz
            </div>
          </div>
        </div>

        {/* Services */}
        <div data-aos="zoom-in" data-aos-delay="200">
          <h4 className="text-2xl font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-[16px]">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div data-aos="zoom-in" data-aos-delay="300">
          <h4 className="text-2xl font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-[16px]">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Location and Socials */}
        <div
          className="flex-1 min-w-[190px]"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <h4 className="text-2xl font-semibold mb-4">Location</h4>
          <p className="text-[16px] mb-6">
            PPGH+X76 - Kizad - Khalifa Industrial Zone - Abu Dhabi
          </p>
          <div className="flex gap-3">
            {[FaFacebookF, FaXTwitter, AiFillInstagram, IoLogoLinkedin].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-[#f4f4f4] rounded hover:bg-gray-300 transition"
                  aria-label={`social-icon-${idx}`}
                >
                  <Icon size={20} />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="px-5 lg:px-32 xl:px-40 border-t border-gray-200 py-6 bg-[#F5F5F5] flex flex-col lg:flex-row justify-between items-center text-center text-[16px] font-normal gap-2"
        data-aos="fade-in"
        data-aos-delay="500"
      >
        <p>
          © CareMedicalTrading. All rights reserved {new Date().getFullYear()}
        </p>
        <p className="text-wrap">Privacy Policy | Terms & Conditions</p>
      </div>
    </section>
  );
};

export default Footer;
