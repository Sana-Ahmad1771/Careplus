import history1 from "../../assets/History-1-img.png";

const History = () => {
  return (
    <section className="bg-white py-20 px-5 lg:px-32 xl:px-40">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="max-w-full lg:w-1/2">
          <img
            src={history1}
            alt="Our History"
            className="w-full h-auto object-cover "
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-5 lg:text-left">
          <p className="text-[#1E3D69] text-lg font-medium uppercase tracking-wide">
            Our History
          </p>
          <h2 className="text-[36px] lg:text-[44px] font-semibold text-[#1E3D69] leading-snug">
            Safecare Medical Industries
          </h2>
          <p className="text-[18px] lg:text-[20px] text-[#1E3D69] leading-relaxed">
            Headquartered in Abu Dhabi, UAE, Safecare is a Domestic Profit Corporation providing quality medical plastic consumable products across all GCC countries. 
            <br className="hidden lg:block" />
            With registered subsidiary factories and offices in the UK, USA, Germany, and China, Safecare thrives on delivering quality medical products across the globe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;
