import About from "./components/about/About";
import Mission from "./components/about/Mission";
import ClientsSection from "./components/cards/ClientsSection";
import Productsection from "./components/cards/ProductSection";
import Header from "./components/common/header";
import History from "./components/history/History";
import Hero from "./components/home/Hero";

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
    </div>
  );
}
export default App;
