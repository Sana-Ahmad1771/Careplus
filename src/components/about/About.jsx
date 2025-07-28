import NurseImg1 from "../../assets/Nurse-1.png";

const About = () => {
  return (
    <section className="relative z-[30] sm:px-10 mt-10 lg:-mt-4 xl:-mt-10 px-5 lg:px-35 xl:px-50 overflow-hidden">
      <div className="mx-auto bg-white py-[66px] px-5 flex flex-col lg:flex-row items-center justify-center font-normal leading-normal font-poppins gap-6 lg:gap-[100px]">
        {/* Nurse Image */}
        <div
          className="max-w-sm w-full"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <img
            src={NurseImg1}
            alt="Nurse"
            className="w-full h-auto object-cover shadow-lg rounded-2xl"
          />
        </div>

        {/* Text Section */}
        <div
          className="space-y-4 max-w-xl text-center lg:text-left"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <h1
            className="text-4xl lg:text-[44px] font-roboto text-[#1E3D69]"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="800"
          >
            Who we are?
          </h1>
          <p
            className="text-[18px] lg:text-[20px]"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="800"
          >
            <span className="font-medium">Safecare Medical Industries</span> was conceived and
            established in 2016 to bring a new dimension to the medical
            industry across the Middle East.
          </p>
          <button
            className="bg-[#1E3D69] text-white px-6 py-2 cursor-pointer rounded hover:bg-[#163154] transition"
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-duration="600"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
