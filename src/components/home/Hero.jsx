import BackgroundImage from "../../assets/Rectangle3173.png";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center min-h-[100vh] pb-5 mb-5 pt-30 px-5 lg:px-32 xl:px-40 relative"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="flex justify-start items-center h-full">
        <div
          className="relative lg:px-[54px] px-4 pt-16 pb-11 border-l-[6.905px] border-[#1E3D69] backdrop-blur-[8.06px] 
          bg-[linear-gradient(160deg,rgba(169,214,235,0.5)_-8.93%,rgba(203,233,247,0.5)_86.48%)] max-w-[650px] w-full"
        >
          <h3 className="bg-white py-2 px-4 lg:py-3 lg:px-6 text-[20px] lg:text-[34px] font-medium text-[#1E3D69] absolute -top-6 left-4 lg:-top-7 lg:-left-14">
            Welcome!
          </h3>
          <div className="max-w-[588px]">
            <h1 className="text-3xl lg:text-[42px] leading-[38px] lg:leading-[48px] font-normal mb-6">
              Revolutionise care.
              <br />
              For People and planet.
            </h1>
            <p className="text-lg lg:text-2xl font-normal">
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
