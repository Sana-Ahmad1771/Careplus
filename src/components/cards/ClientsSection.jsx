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
    <div className="py-20 px-5 lg:px-32 xl:px-40 bg-white">
      <h2 className="text-[44px] font-semibold text-[#1E3D69] text-center">
        {" "}
        Our Clients
      </h2>
      <div className="flex flex-wrap items-center justify-center p-4">
        {ourclients.map((client, index) => (
          <div key={index}>
            <img src={client.Image} alt="client1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsSection;
