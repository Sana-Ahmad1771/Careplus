import contactusbg from "../../../assets/Contactus-bg.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Contactus = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-0 h-[510px] py-20 px-5 lg:px-32 xl:px-40 flex justify-center items-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${contactusbg})` }}
      >
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:text-[44px] text-4xl font-medium mb-5"
          >
            Get in Touch
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-x-2 cursor-pointer text-2xl font-roboto font-normal"
          >
            <Link to="/">Home /</Link>
            <span>Contact Us</span>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative z-10 -top-20 px-5 lg:px-32 xl:px-40 py-10"
      >
        <div className="flex flex-col md:flex-row gap-10 bg-white rounded-lg shadow-md font-poppins">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6 p-6 text-[#1E1E1E]"
          >
            <h2 className="text-2xl font-medium">Send a Message</h2>
            <p>
              Safecare Medical Industries was conceived and established in the
              year of 2016.
            </p>
            <form className="space-y-4 grid md:grid-cols-2 grid-cols-1  gap-4">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full border-b placeholder-[#1E1E1E] border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full border-b placeholder-[#1E1E1E] border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 "
              />

              <select
                id="interest"
                name="interest"
                className="w-full border-b placeholder-[#1E1E1E] border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
              >
                <option value="" disabled>
                  Interested In
                </option>
                <option value="Product Inquiry">Product Inquiry</option>
                <option value="Partnership">Partnership</option>
                <option value="Support">Support</option>
                <option value="Careers">Careers</option>
                <option value="Other">Other</option>
              </select>

              <input
                type="number"
                id="contactno"
                name="contactno"
                placeholder="Phone No."
                className="w-full border-b placeholder-[#1E1E1E] border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="4"
                className="md:col-span-2 border-b placeholder-[#1E1E1E] border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-[#1E3D69] text-white px-6 py-2 hover:bg-[#A9D6EB] hover:text-black transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-8 font-normal font-poppins bg-[#A9D6EB] flex flex-col justify-center items-center lg:p-10 p-5"
          >
            <div>
              <h2 className="text-xl font-medium mb-2">Call Us</h2>
              <p className=" mb-1">
                Safecare Medical Industries was conceived and established in the
                year of 2016.
              </p>
              <div className="flex items-center gap-4">
                <span className="bg-[#F7F7F7] text-[#0f2f5d] p-2 rounded-4xl">
                  <FaPhoneAlt />
                </span>
                <span className="text-[#1E3D69] text-[16px] font-medium">
                  +971554334560
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-medium mb-2">Visit Us</h2>
              <p className=" mb-1">
                Safecare Medical Industries was conceived and established in the
                year of 2016.
              </p>
              <div className="flex items-center gap-4">
                <span className="bg-[#F7F7F7] text-[#0f2f5d] text-[16px] p-2 rounded-4xl">
                  <FaLocationDot />
                </span>
                <span className="text-[#1E3D69] font-medium">
                  KHI-8-18 - Abu Dhabi - <br /> United Arab Emirates
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Contactus;
