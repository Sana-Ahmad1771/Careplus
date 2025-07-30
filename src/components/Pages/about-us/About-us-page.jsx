import aboutbg from "../../../assets/unsplash_12Tdn6oLvSU.png";
import vissionbg from "../../../assets/bg-about-vission.png";
import Header from "../../common/Header";
import cleanroomimage from "../../../assets/Clean-room-img.png";
import cleanroomrectangle from "../../../assets/Cleanroom-bg-rectangle.png";

export const AboutUsPage = () => {
  return (
    <>
      <Header />
      {/* Top Banner */}
      <div
        className="bg-cover bg-no-repeat min-h-[60vh] 2xl:min-h-[65vh] lg:min-h-[100vh] flex flex-col justify-center items-center 2xl:items-center 2xl:justify-start 2xl:pt-44 font-roboto text-[#121212] relative px-5"
        style={{ backgroundImage: `url(${aboutbg})` }}
      >
        <h1 className="lg:text-[44px] text-4xl font-medium mb-5">About Us</h1>
        <div className="space-x-2 lg:text-2xl text-[16px] font-normal">
          <a href="#home">Home /</a>
          <a href="#aboutUs">About Us /</a>
          <a href="#overView">Overview</a>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="px-5 lg:px-36 xl:px-50">
        <div className="bg-white font-normal relative w-fit lg:-mt-[100px] 2xl:-mt-[100px] z-30 lg:px-8 pt-4 lg:pt-12 lg:pb-40 my-12">
          <h1 className="font-roboto text-center lg:text-left lg:text-[42px] text-4xl mb-[36px]">
            Who We Are?
          </h1>
          <div className="text-[16px] lg:text-[20px] text-justify font-poppins space-y-6">
            <p>
              Safecare Medical Industries was conceived and established in the
              year of 2016 by Bin Ali group that plans to give a different
              dimension to the medical industries all across the Middle East.
            </p>
            <p>
              Headquartered in Abu Dhabi UAE, SafeCare is a Domestic Profit
              Corporation providing quality Medical plastic consumable products
              across all GCC countries. With its registered subsidiary factories
              and subsidiary offices across the UK, USA, Germany, and China,
              SafeCare thrives on producing and providing quality medical
              products across the globe.
            </p>
            <p>
              Safe care Medical Industries has built a worldwide reputation for
              providing high quality plastic consumables over the years. With a
              production area of 6000 square meters, we manufacture all of our
              products in a controlled environment called Clean Room of class
              10000(IS0 7) and 100000(ISO 8). Our manufacturing includes a wide
              variety of processes including Injection moulding, Blow Moulding,
              Thermoforming etc. and all those that are required for a world
              class medical manufacturing facility.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="pb-30 px-5 lg:px-32 xl:px-40">
        <div className="flex flex-col md:flex-row h-auto md:h-[502px] flex-wrap">
          {/* Mission */}
          <div className="bg-[#1E3D69] text-white flex justify-center flex-col font-normal lg:p-10 px-5 py-10 w-full md:w-1/2">
            <h1 className="text-[44px] mb-2 font-roboto">Our Mission</h1>
            <p className="font-poppins">
              Our mission is to become an admired, customer-friendly, and
              innovative medical solutions provider.
            </p>
          </div>

          {/* Vision */}
          <div
            className="bg-no-repeat bg-cover  flex justify-center flex-col lg:p-10 px-5 py-10 w-full md:w-1/2 font-normal flex-wrap"
            style={{ backgroundImage: `url(${vissionbg})` }}
          >
            <h1 className="text-[44px] mb-2 font-roboto">Our Vision</h1>
            <p className="font-poppins">
              Safecare Medical Industries exists to improve human life quality
              through affordable and reliable innovations.
            </p>
          </div>
        </div>
      </section>
      {/* our key strenght */}
      {/* Our Key Strengths */}
<section className="py-20 px-5 lg:px-32 xl:px-40 bg-white">
  <div className="text-center font-normal mb-16">
    <h1 className="lg:text-[44px] text-4xl mb-5 text-[#1E3D69] font-roboto">
      Our Key Strengths
    </h1>
    <p className="text-[16px] lg:text-[20px] font-poppins max-w-2xl mx-auto">
      Who are in extremely love with eco-friendly system.
    </p>
  </div>

  <div className="flex flex-col lg:flex-row items-center gap-10">
    {/* Image Section */}
    {/* <div
      className="bg-no-repeat  flex justify-center items-center "
      style={{ backgroundImage: `url(${cleanroomrectangle})` }}
    >
      <img
        src={cleanroomimage}
        alt="cleanroomimage"
        className="max-h-[529px] max-w-[528px] object-contain"
      />
    </div> */}

    {/* Text Content */}
    <div className="font-poppins text-[16px] lg:text-[20px] space-y-4 text-justify max-w-xl">
      {/* <h2 className="text-2xl lg:text-3xl font-semibold text-[#1E3D69] font-roboto">
        Clean Rooms
      </h2>
      <p>
        Spread over a total area of 1500 sq meters. Safecare manufacturing takes place
        in the ISO 7 and ISO 8 classified clean room environment that has a low level of
        pollutants such as dust, airborne microbes, aerosol particles, and chemical vapors.
      </p> */}
    </div>
  </div>
</section>

    </>
  );
};
