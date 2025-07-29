import client1 from "../../assets/client-1.png";
import client2 from "../../assets/client-2.png";
import client3 from "../../assets/client-3.png";
import client4 from "../../assets/client-4.png";
import client5 from "../../assets/client-5.png";
import client6 from "../../assets/client-6.png";
import { motion } from "framer-motion";

const ourclients = [
  { Image: client1, name: "Client 1" },
  { Image: client2, name: "Client 2" },
  { Image: client3, name: "Client 3" },
  { Image: client4, name: "Client 4" },
  { Image: client5, name: "Client 5" },
  { Image: client6, name: "Client 6" },
];

// Variants for card animation
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ClientsSection = () => {
  return (
    <div className="py-30 px-5 lg:px-32 xl:px-40 overflow-hidden">
      {/* Heading */}
      <motion.h1
        className="text-4xl font-roboto lg:text-[44px] font-medium text-[#1E3D69] text-center mb-9"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Clients
      </motion.h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:gap-4 gap-2">
        {ourclients.map((client, index) => (
          <motion.div
            key={index}
            className="w-full h-[160px] bg-white flex items-center justify-center
             shadow-md rounded-lg hover:shadow-lg px-2"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={client.Image}
              alt={client.name}
              className="max-h-[160px] object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ClientsSection;
