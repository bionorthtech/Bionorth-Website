import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import OurProduct from "./pages/OurProduct.jsx";
import Team from "./pages/Team.jsx";
import Contact from "./pages/Contact.jsx";
import SideProjects from "./pages/SideProjects.jsx";

function ScrollManager() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash;
      // wait for the target route to render before scrolling
      const t = setTimeout(() => {
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-product" element={<OurProduct />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/side-projects" element={<SideProjects />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
