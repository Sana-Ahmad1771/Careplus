import { LayoutGrid, Cpu, Pill } from "lucide-react";
import Backgroundmolecule from "../../assets/Molecular-bg.png";
import { motion } from "framer-motion";

const strengths = [
  {
    icon: <LayoutGrid size={30} />,
    badge: "ISO 7, ISO 8",
    title: "Clean Rooms",
    description:
      "Spread over a total area of 1500 sq meters. Safecare manufacturing takes place in the ISO 7, ISO 8 classified clean room environment that has a low level of pollutants such as dust, airborne microbes, aerosol particles and chemical vapours.",
  },
  {
    icon: <Cpu size={30} />,
    badge: "High Tech Automated",
    title: "Storage System",
    description:
      "Safecare holds the unique accomplishment of having the world's finest automated storage system spread over a vast area of 30000 sq ft. The system ensures 100% efficiency in storage without involving any manual interventions.",
  },
  {
    icon: <Pill size={30} />,
    badge: "Made with Supreme",
    title: "Pharma Grade",
    description:
      "Spread over a total area of 1500 sq meters. Safecare manufacturing takes place in the ISO 7, ISO 8 classified clean room environment that has a low level of pollutants such as dust, airborne microbes, aerosol particles and chemical vapours.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1, y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function OurKeyStrengths() {
  return (
    <section
      className="bg-no-repeat bg-cover bg-left-top w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 pt-30 pb-40 overflow-hidden"
      style={{ backgroundImage: `url(${Backgroundmolecule})` }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-roboto lg:text-[44px] font-medium text-[#1E3D69] mb-9">
          Our Key Strengths
        </h1>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-20 ">
            {strengths.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white hover:bg-[#f0f9ff] shadow-lg rounded-xl font-poppins p-6 border border-gray-100 w-full max-w-[388px] 
                transition-all duration-300 hover:shadow-blue-300 place-items-center"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
              >
                <div className="w-fit p-2 rounded-[4px] text-[#1E3D69]">{item.icon}</div>
                <div className="bg-[#A9D6EB] text-[#1E3D69] px-2 py-1 text-[18px] font-medium inline-block mb-2 rounded-2xl">
                  {item.badge}
                </div>
                <h3 className="text-[28px] font-medium mb-2">{item.title}</h3>
                <p className="text-[16px] text-[#323232]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
