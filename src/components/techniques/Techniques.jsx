import manfacturing from "../../assets/Manufacturing-industry.png";

const Techniques = () => {
  return (
    <section className="py-20 px-5 lg:px-32 xl:px-40 bg-white ">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        
        <div className="max-w-[467px] space-y-5 lg:text-left">
          <h2 className="text-[#1E3D69] text-[32px] lg:text-[44px] font-bold">
            Manufacturing Techniques
          </h2>
          <p className="text-[18px] lg:text-[20px] font-normal">
            Our manufacturing includes a wide variety of processes including
            <strong> Injection moulding, Blow Moulding, Thermoforming etc. </strong>
            and all those that are required for a World Class Medical
            Manufacturing Facility.
          </p>
        </div>
        <div className="w-full lg:w-[50%] flex justify-center">
          <img src={manfacturing} alt="Manufacturing" className="object-cover max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Techniques;
