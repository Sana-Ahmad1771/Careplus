import news1 from "../../assets/news-1.png";
import news2 from "../../assets/news-2.png";
import news3 from "../../assets/news-3.png";
import { MoveRight } from "lucide-react";

const NewsAndEvents = () => {
  return (
    <section
      className="py-20 px-5 lg:px-32 xl:px-40 bg-white overflow-hidden"
      data-aos="fade-up"
    >
      <h1
        className="text-4xl font-roboto lg:text-[44px] font-normal text-[#1E3D69] mb-9"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        News and Events
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 font-poppins">
        {/* Left Main Card */}
        <div className="w-full" data-aos="fade-right" data-aos-delay="200">
          <div className="bg-[#F7F7F7] shadow-md rounded-lg overflow-hidden flex flex-col px-5 sm:px-10 py-9 h-full">
            <img
              src={news1}
              alt="Featured News"
              className="w-full max-h-[400px] object-cover rounded-md"
            />
            <div className="py-10 flex flex-col gap-6 font-normal leading-normal">
              <h3 className="text-[28px]">
                Improve Workflow With Agile Yoga
              </h3>
              <p className="text-[18px] lg:text-[20px]">
                Safecare manufacturing takes place in the ISO 7, ISO 8
                classified clean room environment that has a low level of
                pollutants such as dust and chemical vapours.
              </p>
              <button className="mt-3 font-medium text-[16px] hover:underline transition duration-300 self-start flex items-center gap-2">
                Read More
                <MoveRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Cards */}
        <div className="flex flex-col gap-6 font-normal leading-normal">
          {/* Card 1 */}
          <div
            className="bg-[#F7F7F7] shadow-md rounded-lg overflow-hidden flex flex-col lg:flex-row !xl:flex-wrap p-4 gap-6 lg:px-5 sm:px-10 py-9"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="w-full lg:w-auto">
              <img
                src={news2}
                alt="News 2"
                className="w-full max-h-full lg:h-[297px] lg:w-[440px] object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col justify-center gap-4">
              <h3 className="text-[28px]">
                Improve Workflow With Agile Yoga
              </h3>
              <p className="text-[18px] lg:text-[20px]">
                Safecare manufacturing takes place in the ISO 7, ISO 8
                classified clean room environment.
              </p>
              <button className="mt-1 font-medium text-[16px] hover:underline transition duration-300 self-start flex items-center gap-2">
                Read More
                <MoveRight size={20} />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="bg-[#F7F7F7] shadow-md rounded-lg overflow-hidden flex flex-col lg:flex-row !xl:flex-wrap p-4 gap-6 lg:px-5 sm:px-10 py-9"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="w-full lg:w-auto">
              <img
                src={news3}
                alt="News 3"
                className="w-full max-h-full lg:h-[297px] lg:w-[440px] object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col justify-center gap-4">
              <h3 className="text-[28px]">
                Improve Workflow With Agile Yoga
              </h3>
              <p className="text-[18px] lg:text-[20px]">
                Safecare manufacturing takes place in the ISO 7, ISO 8
                classified clean room environment.
              </p>
              <button className="mt-1 font-medium text-[16px] hover:underline transition duration-300 self-start flex items-center gap-2">
                Read More
                <MoveRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndEvents;
