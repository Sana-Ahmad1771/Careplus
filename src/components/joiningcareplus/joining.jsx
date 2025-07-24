

const JoiningSafeCare = () => {
  return (
    <div className="py-10 px-5 lg:px-32 xl:px-40 text-center flex flex-col lg:flex-row items-center justify-between overflow-hidden">
      <p className="text-[20px] font-medium text-[#1E3D69]">
        Join our newsletter to <br />
        keep up to date with us!
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <input to
          type="email"
          placeholder="Enter your email"
          className="border border-[rgba(50,50,50,0.20)] bg-[rgba(255,255,255,0.90)] text-[#bebebe] px-4 py-2 rounded-md w-72  "
        />
        <button className="bg-[#1FBAFC] text-white px-6 py-2 rounded-md hover:bg-[#1E3D69] transition duration-300">
          Submit
        </button>
      </div>
    </div>
  );
};

export default JoiningSafeCare;
