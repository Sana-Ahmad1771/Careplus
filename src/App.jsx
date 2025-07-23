import About from "./components/about/About";
import Mission from "./components/about/Mission";
import ClientsSection from "./components/cards/ClientsSection";
import Productsection from "./components/cards/ProductSection";
import Header from "./components/common/Header";
import History from "./components/history/History";
import Hero from "./components/home/Hero";
import Techniques from "./components/techniques/Techniques";
import OurKeyStrengths from "./components/techniques/Keystrength";
import NewsAndEvents from "./components/news&events/NewsAndEvents";
import QualityCertification from "./components/qualityandcertifications/QualityCertification";
import JoiningSafeCare from "./components/joiningcareplus/joining";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="bg-[#F5F5F5]">
      <Header/>
      <Hero />
      <About />
      <Mission/>
      <History/>
      <Productsection />
      <ClientsSection/>
      <Techniques/>
      <OurKeyStrengths />
      <NewsAndEvents />
      <QualityCertification/>
      <JoiningSafeCare/>
      <Footer/>
    </div>
  );
}
export default App;
