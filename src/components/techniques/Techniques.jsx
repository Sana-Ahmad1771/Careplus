import manfacturing from "../../assets/Manufacturing-industry.png";

const Techniques = () => {
  return (
    <section className="py-30 px-5 lg:px-32 xl:px-40 bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">

        <div
          className="max-w-[467px] space-y-5 lg:text-left"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <h1 className="text-4xl font-roboto lg:text-[44px] font-medium text-[#1E3D69]">
            Manufacturing Techniques
          </h1>
          <p className="text-[18px] lg:text-[20px] font-poppins font-normal leading-normal">
            Our manufacturing includes a wide variety of processes including
            <span className="font-medium">
              {" "}
              Injection moulding, Blow Moulding, Thermoforming etc.{" "}
            </span>
            and all those that are required for a World Class Medical
            Manufacturing Facility.
          </p>
        </div>
        
        <div
          className="w-full lg:w-[50%] flex justify-center"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <img
            src={manfacturing}
            alt="Manufacturing"
            className="object-cover max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Techniques;
