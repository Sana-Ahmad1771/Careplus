import BackgroundImage from "../../assets/Rectangle3173.png";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center h-[90vh] px-5 lg:px-32 xl:px-40"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="flex lg:justify-start justify-center items-center h-full">
        <div
          className="lg:px-[54px] px-4 py-11 border-l-[6.905px] border-[#1E3D69] backdrop-blur-[8.06px] 
          bg-[linear-gradient(160deg,rgba(169,214,235,0.5)_-8.93%,rgba(203,233,247,0.5)_86.48%)]"
        >
          <h3 className="bg-white py-3 px-6 absolute -top-10 left-0 lg:-left-10 text-[28px] lg:text-[34px] font-medium text-[#1E3D69] ">
            Welcome!
          </h3>
          <div className="max-w-[588px]">
            <h1 className="text-4xl lg:text-[42px] leading-[48px] font-normal mb-6">
              Revolutionise care.
              <br />
              For People and planet.
            </h1>
            <p className="text-xl lg:text-2xl font-normal">
              Safecare Medical Industries was conceived and established in the
              year of 2016.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
