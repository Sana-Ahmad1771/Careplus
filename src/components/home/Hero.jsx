import BackgroundImage from "../../assets/Rectangle3173.jpg";

const Hero = () => {
  return (
    <section className="bg-cover bg-center min-h-[100vh] pb-5 mb-5 pt-30 md:pt-40 2xl:pt-70 px-5 lg:px-42 xl:px-53 relative overflow-hidden"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="flex justify-start items-center h-full font-normal leading-normal">
        <div
          className="relative lg:px-[54px] px-4 pt-16 pb-11 border-l-[6.905px] border-[#1E3D69] backdrop-blur-[8.06px] max-w-[650px] w-full"
          style={{
            background: "linear-gradient(160deg, rgba(169,214,235,0.5) -8.93%, rgba(203,233,247,0.5) 86.48%)"
          }}
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          <span
            className={`
              bg-white font-roboto text-[#1E3D69] py-2 px-4
              lg:py-3 lg:px-6 text-[20px] lg:text-[34px] font-medium
              absolute -top-6 left-4 lg:-top-7 lg:-left-14
            `}
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="600"
          >
            Welcome!
          </span>
          <div className="max-w-[588px]">
            <h1
              className="text-4xl lg:text-[42px] font-roboto mb-6"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              Revolutionise care.
              <br />
              For People and planet.
            </h1>
            <p
              className="text-lg lg:text-[23px] font-poppins"
            >
              <span className="font-medium">Safecare Medical Industries</span> was conceived and established in the
              year of 2016.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
