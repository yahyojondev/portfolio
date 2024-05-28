import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/contact/Contact";
import Project from "./pages/project/Project";
import Footer from "./components/footer/Footer";
import loading from "./assets/images/382.gif";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Loading from "./components/loading/Loading";

function App() {
  return (
    <>
      <div className="loading">
        <iframe src={loading} frameborder="0"></iframe>
      </div>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Loading />
        <Footer />
      </div>
    </>
  );
}

export default App;
