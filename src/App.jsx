import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./home/page"
import About from "./About/page"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/about" element={<About/>}  />
      </Routes>
    </Router>
  );
}
export default App;
