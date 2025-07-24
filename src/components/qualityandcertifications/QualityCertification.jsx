import cert1 from "../../assets/cert-1.png";
import cert2 from "../../assets/cert-2.png";
import cert3 from "../../assets/cert-3.png";

const QualityCertification = () => {
  return (
    <div
      className="bg-white py-20 px-5 lg:px-32 xl:px-40 text-center mt-10 overflow-hidden"
      data-aos="fade-up"
    >
      <h2
        className="text-[32px] text-[#1E3D69] lg:text-[44px] font-semibold text-center mb-4"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        Quality & Certifications
      </h2>

      <p
        className="text-[20px] font-normal"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        We do care, for your better tomorrow.
      </p>

      <div className="flex flex-col items-center gap-6 mt-10 lg:flex-row lg:justify-center lg:gap-12">
        <img
          src={cert1}
          alt="CE Certification"
          className="w-[120px] lg:w-[160px]"
          data-aos="zoom-in"
          data-aos-delay="300"
        />

        <div
          className="w-12 h-[1.5px] lg:h-[100px] lg:w-[2px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.20) 50%, rgba(0, 0, 0, 0.00) 100%)",
          }}
        ></div>

        <img
          src={cert2}
          alt="GMP Certification"
          className="w-[120px] lg:w-[160px]"
          data-aos="zoom-in"
          data-aos-delay="300"
        />

        <div
          className="w-12 h-[1.5px] lg:h-[100px] lg:w-[2px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.20) 50%, rgba(0, 0, 0, 0.00) 100%)",
          }}
        ></div>

        <img
          src={cert3}
          alt="ISO Certification"
          className="w-[120px] lg:w-[160px]"
          data-aos="zoom-in"
          data-aos-delay="300"
        />
      </div>
    </div>
  );
};

export default QualityCertification;
