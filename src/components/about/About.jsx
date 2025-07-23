import NurseImg1 from "../../assets/Nurse-1.png";

const About = () => {
  return (
    <section className="relative z-[30]  sm:px-10 mt-10 lg:-mt-4 xl:-mt-10 px-5 lg:px-35 xl:px-50 ">

      <div className="mx-auto bg-white py-[66px] px-5 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-[100px] ">
        {/* Nurse Image */}
        <div className="max-w-sm w-full">
          <img src={NurseImg1} alt="Nurse" className="w-full h-auto object-cover shadow-lg rounded-2xl" />
        </div>

        {/* Text Section */}
        <div className="space-y-4 max-w-xl text-center lg:text-left">
          <h2 className="text-4xl lg:text-[44px] font-semibold text-[#1E3D69]">
            Who we are?
          </h2>
          <p className="text-[#1E3D69] text-[18px] lg:text-[20px] font-medium">
            <strong>Safecare Medical Industries</strong> was conceived and
            established in 2016 to bring a new dimension to the medical
            industry across the Middle East.
          </p>
          <button className="bg-[#1E3D69] text-white px-6 py-2 rounded hover:bg-[#163154] transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
