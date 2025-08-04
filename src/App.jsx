import { BrowserRouter as Router, Routes, Route } from "react-router";
import ScrollToTop from "./components/common/ScrollToTop.jsx";
import Home from "./home/page.jsx";
import About from "./about/page.jsx";
import Gallery from "./gallery/page.jsx";
import Contact from "./contact/page.jsx";
import Products from "./products/page.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
