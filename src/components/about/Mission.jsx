import NurseImg2 from "../../assets/Nurse-2.png";
import Nursebg from "../../assets/Nurse-bg.png";

const Mission = () => {
  return (
    <section className=" z-[10] relative sm:px-10 -mt-16 mx-auto px-5 lg:px-32 xl:px-40  ">
      <div
        className=" bg-[#ECECEC] mx-auto px-3 bg-no-repeat bg-right pt-17"
        style={{ backgroundImage: `url(${Nursebg})` }}
      >
        <div className="flex flex-col lg:flex-row items-center min-h-[623px] pt-3">
          {/* Text Section */}
          <div className="max-w-[650px] mt-20 lg:mx-24 p-5 xl:p-10 border-l-[5.399px] border-[#1E3D69] bg-white/70 backdrop-blur-[7.56px] relative mb-6 lg:mb-0">
            <h2 className="bg-[#A9D6EB] py-3 px-6 absolute -top-12 left-0 lg:-left-10 text-3xl font-normal text-[#1E3D69]">
              Our Mission
            </h2>
            <p className="text-[#1E3D69] text-[18px]">
              Advancing Life – That’s what we at Safecare aim to do. With our
              products & our focus every day, it’s our goal to push boundaries
              for the benefit of those who rely on our care the most.
            </p>
          </div>
          {/* Image */}
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <img
              src={NurseImg2}
              alt="Nurse"
              className="max-w-full max-h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
