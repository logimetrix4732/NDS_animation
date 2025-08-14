import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import OurExperties from "./Pages/OurExperties";
import MilkProducer from "./Pages/MilkProducer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "remixicon/fonts/remixicon.css";
import OurExperties1 from "./Pages/OurExperties1";
import CarrerPage from "./Pages/CarrerPage";
import CarrerDetailPage from "./components/CarrerComponents/CarrerDetailPage";
import Errors from "./Errors";
import SemenStations from "./Pages/SemenStations";
import NewInitiative from "./Pages/NewInitiative";
import ContactUs from "./Pages/ContactUs";
import GalleryPage from "./Pages/GalleryPage";
import MilkIndiaMap from "./components/MapComponent/MilkIndiaMap";
import TenderPage from "./Pages/TenderPage";
import AnnualReport from "./Pages/AnnualReport";
import HRCompliances from "./Pages/HRCompliances";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const location = useLocation();

  // agar home page par ho, toh Header render na ho
  const isHomePage = location.pathname === "/";

  return (
    <>
      {!isHomePage && <Header />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/ourExperties" element={<OurExperties />} />
        <Route path="/milkproducer" element={<MilkProducer />} />
        <Route path="/ourExperties1" element={<OurExperties1 />} />
        <Route path="/carrer" element={<CarrerPage />} />
        <Route path="/carrerDetail" element={<CarrerDetailPage />} />
        <Route path="/animalProductivity" element={<SemenStations />} />
        <Route path="/newInitiative" element={<NewInitiative />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/tender" element={<TenderPage />} />
        <Route path="/annualReport" element={<AnnualReport />} />
        <Route path="/HR" element={<HRCompliances />} />
        <Route path="*" element={<Errors />} />
      </Routes>
      <Footer />
      <div className="scroll-top">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "307.919",
            }}
          />
        </svg>
      </div>
    </>
  );
};

export default App;
