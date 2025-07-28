import { LayoutGrid, Cpu, Pill } from "lucide-react";
import Backgroundmolecule from "../../assets/Molecular-bg.png";

const strengths = [
  {
    icon: <LayoutGrid size={30} />,
    badge: "ISO 7, ISO 8",
    title: "Clean Rooms",
    description:
      "Spread over a total area of 1500 sq meters. Safecare manufacturing takes places in the ISO 7, ISO 8 classified clean room environment that has a low level of pollutants such as dust, airborne microbes, aerosol particles and chemical vapours.",
  },
  {
    icon: <Cpu size={30} />,
    badge: "High Tech Automated",
    title: "Storage System",
    description:
      "Safecare holds the unique accomplishment of having the worlds finest automated storage system spread over a vast area of 30000 sq ft. The system ensures 100 percent efficiency in storage without involving any manual interventions",
  },
  {
    icon: <Pill size={30} />,
    badge: "Made with Supreme",
    title: "Pharma Grade",
    description:
      "Spread over a total area of 1500 sq meters. Safecare manufacturing takes places in the ISO 7, ISO 8 classified clean room environment that has a low level of pollutants such as dust, airborne microbes, aerosol particles and chemical vapours.",
  },
];

export default function OurKeyStrengths() {
  return (
    <section
      className="bg-no-repeat bg-cover bg-left-top w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 pt-30 pb-40  overflow-hidden"
      style={{ backgroundImage: `url(${Backgroundmolecule})` }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-roboto lg:text-[44px] font-medium text-[#1E3D69] mb-9">
          Our Key Strengths
        </h1>

        {/* Responsive & Centered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl justify-items-center font-poppins p-6  border border-gray-100 w-full max-w-[388px] 
               hover:shadow-blue-300 transition-shadow duration-300 leading-normal"
              data-aos="fade-up"
              data-aos-delay={index * 200}
              data-aos-duration="1000"
            >
              <div className="bg-blue-100 w-fit p-2 just-ite mb-2 rounded-[4px]">
                {item.icon}
              </div>
              <h3 className="text-[28px] font-medium mb-2">{item.title}</h3>
              <p className="text-[16px] text-[#323232] ">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
