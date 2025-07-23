import { LayoutGrid, Cpu, Pill } from "lucide-react";
import Backgroundmolecule from "../../assets/Molecular-bg.png";

const strengths = [
  {
    icon: <LayoutGrid className="w-6 h-6" />,
    badge: "ISO 7, ISO 8",
    title: "Clean Rooms",
    description:
      "Spread over a total area of 1500 sq meters. Safecare manufacturing takes places in the ISO 7, ISO 8 classified clean room environment that has a low level of pollutants such as dust, airborne microbes, aerosol particles and chemical vapours.",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    badge: "High Tech Automated",
    title: "Storage System",
    description:
      "Safecare holds the unique accomplishment of having the worlds finest automated storage system spread over a vast area of 30000 sq ft. The system ensures 100 percent efficiency in storage without involving any manual interventions",
  },
  {
    icon: <Pill className="w-6 h-6" />,
    badge: "Made with Supreme",
    title: "Pharma Grade",
    description:
      "Spread over a total area of 1500 sq meters. Safecare manufacturing takes places in the ISO 7, ISO 8 classified clean room environment that has a low level of pollutants such as dust, airborne microbes, aerosol particles and chemical vapours.",
  },
];

export default function OurKeyStrengths() {
  return (
    <section
      className="bg-no-repeat bg-cover bg-left-top w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 py-20"
      style={{ backgroundImage: `url(${Backgroundmolecule})` }}
    >
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1E3D69] mb-12">
          Our Key Strengths
        </h2>

        {/* Responsive & Centered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {strengths.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-100 w-full max-w-[388px] max-h-[342px] hover:shadow-blue-300 transition-shadow duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-blue-100 p-2 rounded-[4px]">{item.icon}</div>
                <span className="text-[13px] bg-[#A9D6EB] text-[#1E3D69] px-2 py-1 rounded-3xl">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
