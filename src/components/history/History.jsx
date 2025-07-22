import history1 from "../../assets/History-1-img.png";

const History = () => {
  return (
    <section className="bg-white py-20 px-5 lg:px-32 xl:px-40">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="max-w-full lg:w-1/2">
          <img
            src={history1}
            alt="Our History"
            className="w-full h-auto object-cover rounded-xl shadow-md"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-6">
          <span className="text-[#1E3D69] bg-[#A9D6EB] inline-block px-4 py-2 text-[18px] font-medium uppercase tracking-wide rounded">
            Our History
          </span>
          <h2 className="text-[30px] !lg:text-[42px] font-bold text-[#1E3D69] leading-snug">
            Safecare Medical Industries
          </h2>
          <p className="text-[15px] !lg:text-[20px] text-[#1E3D69] leading-relaxed">
            Headquartered in Abu Dhabi, UAE, Safecare is a Domestic Profit Corporation providing quality medical plastic consumable products across all GCC countries.
            With registered subsidiary factories and offices in the UK, USA, Germany, and China, Safecare thrives on delivering quality medical products across the globe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;
