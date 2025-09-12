import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Gallery from "./Pages/Gallery";
import Book from "./Pages/Book";
import Faq from "./Components/Faq";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/book" element={<Book />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
