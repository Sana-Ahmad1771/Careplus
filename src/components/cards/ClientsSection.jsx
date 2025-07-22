import client1 from "../../assets/client-1.png";
import client2 from "../../assets/client-2.png";
import client3 from "../../assets/client-3.png";
import client4 from "../../assets/client-4.png";
import client5 from "../../assets/client-5.png";
import client6 from "../../assets/client-6.png";

const ourclients = [
  { Image: client1, name: "Client 1" },
  { Image: client2, name: "Client 2" },
  { Image: client3, name: "Client 3" },
  { Image: client4, name: "Client 4" },
  { Image: client5, name: "Client 5" },
  { Image: client6, name: "Client 6" },
];

const ClientsSection = () => {
  return (
    <div className="py-20 px-5 lg:px-32 xl:px-40">
      <h2 className="text-[32px] lg:text-[44px] font-semibold text-[#1E3D69] text-center mb-12">
        Our Clients
      </h2>

      <div className="flex flex-wrap justify-center gap-x-10 gap-y-10">
        {ourclients.map((client, index) => (
          <div
            key={index}
            className="w-[280px] h-[120px] bg-white flex items-center justify-center 
            shadow-md rounded-lg hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={client.Image}
              alt={client.name}
              className="max-h-[60px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsSection;
