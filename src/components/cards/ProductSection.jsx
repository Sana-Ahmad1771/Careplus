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
    <div className="py-20 px-5 lg:px-32 xl:px-40 h-full">
      <div className="text-center">
        <h2 className="text-[44px] font-semibold text-[#1E3D69]">
          Our Product Category
        </h2>
        <p className="text-[20px] font-normal mt-2 text-gray-600 max-w-4xl mx-auto">
          Our solutions encompass the entire gamut of healthcare delivery,
          ranging from: Turnkey solutions, Surgical, Clinical, Life Sciences,
          Laboratory Medicine etc.
        </p>
      </div>
      <div className="flex flex-wrap justify-center mt-8">
        {products.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-4">
            <div className="relative group shadow-md rounded-lg hover:shadow-lg transition-transform transform hover:scale-110 duration-300 ">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 w-full bg-[#A9D6EBE5] bg-opacity-70 text-[#1E3D69] text-center py-2 hover:bg-[#7eb9d4e5] transition duration-300">
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
