import history1 from "../../assets/History-1-img.png";

const History = () => {
  return (
    <section className="bg-white py-20 px-5 lg:px-32 xl:px-40 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div
          className="max-w-full lg:w-1/2"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <img
            src={history1}
            alt="Our History"
            className="w-full h-auto object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Text Section */}
        <div
          className="max-w-[650px] lg:w-1/2 flex flex-col gap-6 font-normal leading-normal"
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <span
            className="text-[#1E3D69] font-roboto bg-[#A9D6EB] px-4 py-2 text-[20px] w-fit"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            Our History
          </span>
          <h1 className="text-4xl font-roboto lg:text-[42px] text-[#1E3D69]">
            Safecare Medical Industries
          </h1>
          <p className="font-poppins text-[18px] lg:text-[20px]">
            Headquartered in Abu Dhabi, UAE, Safecare is a Domestic Profit
            Corporation providing quality medical plastic consumable products
            across all GCC countries. With registered subsidiary factories and
            offices in the UK, USA, Germany, and China, Safecare thrives on
            delivering quality medical products across the globe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;
