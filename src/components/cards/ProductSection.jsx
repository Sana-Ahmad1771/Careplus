import product1 from "../../assets/product-1.png";
import product2 from "../../assets/product-2.png";
import product3 from "../../assets/product-3.png";
import product4 from "../../assets/product-4.png";

const products = [
  { title: "Surgical Packs", image: product1 },
  { title: "Sterile Drapes", image: product2 },
  { title: "Surgical Kits", image: product3 },
  { title: "CSSD Wrappers", image: product4 },
];

const Productsection = () => {
  return (
    <div className="py-30 px-5 lg:px-32 xl:px-40 leading-normal">
      {/* Heading Section */}
      <div
        className="text-center"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="800"
      >
        <h1 className="text-4xl font-roboto lg:text-[44px] font-medium text-[#1E3D69]">
          Our Product Category
        </h1>
        <p className="text-[18px] lg:text-[20px] font-poppins font-normal mt-6 max-w-4xl mx-auto">
          Our solutions encompass the entire gamut of healthcare delivery,
          ranging from: Turnkey solutions, Surgical, Clinical, Life Sciences,
          Laboratory Medicine etc.
        </p>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12 overflow-hidden">
        {products.map((item, index) => (
          <div
            key={index}
            className="flex justify-center"
            data-aos="zoom-in-up"
            data-aos-delay={`${index * 200}`}
            data-aos-duration="800"
          >
            <div className="w-[308px] relative shadow-md rounded-lg hover:shadow-lg transition-transform transform hover:scale-105 duration-300">
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 w-full font-poppins bg-[#A9D6EBE5] text-[#1E3D69] text-[18px] font-medium text-center py-2 hover:bg-[#7eb9d4e5] transition duration-300">
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productsection;
