import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/contact/Contact";
import Project from "./pages/project/Project";
import Footer from "./components/footer/Footer";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Loading from "./components/loading/Loading";

function App() {
  return (
    <>
      <iframe
        src="https://lottie.host/embed/6a5a122e-eb35-43a7-90d5-0355832b97a2/dJOHBc0kfr.json"
        frameborder="0"
      ></iframe>
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
