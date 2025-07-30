import aboutbg from "../../../assets/unsplash_12Tdn6oLvSU.png";
import vissionbg from "../../../assets/bg-about-vission.png";
import Header from "../../common/Header";

export const AboutUsPage = () => {
  return (
    <>
      <Header />
      {/* Top Banner */}
      <div
        className="bg-cover bg-no-repeat min-h-[50vh] pt-12 2xl:pt-24 text-center space-y-2 font-roboto text-[#121212] relative"
        style={{ backgroundImage: `url(${aboutbg})` }}
      >
        <h1 className="text-[42px] font-medium">About Us</h1>
        <div className="space-x-2 text-2xl font-normal">
          <a href="#home">Home /</a>
          <a href="#aboutUs">About Us /</a>
          <a href="#overView">Overview</a>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="px-5 lg:px-36 xl:px-48">
        <div className="bg-white font-normal relative w-fit -mt-16 2xl:-mt-36 z-30 px-8 pt-4 pb-40">
          <h1 className="font-roboto text-[44px] mb-[36px]">Who We Are?</h1>
          <div className="text-[16px] font-poppins space-y-6">
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
        <div className="flex h-[402px] font-roboto font-normal flex-wrap ">
          {/* Mission */}
          <div className="bg-[#1E3D69] text-white flex justify-center flex-col p-10 w-1/2">
            <h1 className="text-[44px] mb-2">Our Mission</h1>
            <p className="font-poppins">
              Our mission is to become an admired, customer-friendly, and
              innovative medical solutions provider.
            </p>
          </div>

          {/* Vision */}
          <div
            className="bg-no-repeat bg-cover flex justify-center flex-col p-10 w-1/2 "
            style={{ backgroundImage: `url(${vissionbg})` }}
          >
            <h1 className="text-[44px] mb-2">Our Vision</h1>
            <p className="font-poppins">
              Safecare Medical Industries exists to improve human life quality
              through affordable and reliable innovations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
