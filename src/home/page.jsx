import Header from "../components/common/Header";
import Hero from "../components/Pages/home/Hero";
import About from "../components/Pages/home/About";
import Mission from "../components/Pages/home/Mission";
import Productsection from "../components/Pages/home/cards/ProductSection";
import ClientsSection from "../components/Pages/home/cards/ClientsSection";
import History from "../components/Pages/home/History";
import Techniques from "../components/Pages/home/Techniques";
import OurKeyStrengths from "../components/Pages/home/Keystrength";
import NewsAndEvents from "../components/Pages/home/NewsAndEvents";
import QualityCertification from "../components/Pages/home/QualityCertification";
import JoiningSafeCare from "../components/Pages/home/joining";
import Footer from "../components/common/Footer";

function Page() {
  return (
    <div className="bg-[#F5F5F5]">
      <Header />
      <Hero />
      <About />
      <Mission />
      <History />
      <Productsection />
      <ClientsSection />
      <Techniques />
      <OurKeyStrengths />
      <NewsAndEvents />
      <QualityCertification />
      <JoiningSafeCare />
      <Footer />
    </div>
  );
}
export default Page;
