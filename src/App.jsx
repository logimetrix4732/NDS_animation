import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
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
import TenderPage from "./Pages/TenderPage";
import AnnualReport from "./Pages/AnnualReport";
import HRCompliances from "./Pages/HRCompliances";
import PoliciesPage from "./Pages/PoliciesPage";
import AdminPage from "./Pages/AdminPage";
import AdminLogin from "./AdminComponents/AdminLogin";
import AdminTender from "./AdminComponents/AdminTender";
import AdminCareer from "./AdminComponents/AdminCareer";
import AdminPublication from "./AdminComponents/AdminPublication";
import AdminLogs from "./AdminComponents/AdminLogs";
import PrivacyPage from "./Pages/PrivacyPolicyPage";
import DynamicData from "./AdminComponents/DynamicData";
import AdminCache from "./Pages/AdminCache";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // No token found, redirect to login
    return <Navigate to="/AdminLogin" replace />;
  }

  // Token exists, render the protected component
  return children;
};

// Public Route Component (for login page)
const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (token) {
    // Token exists, redirect to admin dashboard
    return <Navigate to="/AdminPage" replace />;
  }

  // No token, render the login component
  return children;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const adminRoutes = [
    "/AdminPage",
    "/AdminTender",
    "/AdminPublication",
    "/AdminLogs",
    "/dynamicData",
    "/AdminCache",
  ];
  const isAdminRoute = adminRoutes.includes(location.pathname);

  return (
    <>
      {!isHomePage && !isAdminRoute && <Header />}

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
        <Route path="/policies" element={<PoliciesPage />} />
        <Route path="/privacyPage" element={<PrivacyPage />} />
        <Route path="/dynamicData" element={<DynamicData />} />

        {/* Admin Routes - Protected */}
        <Route
          path="/AdminLogin"
          element={
            <PublicRoute>
              <AdminLogin />
            </PublicRoute>
          }
        />
        <Route
          path="/AdminPage"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/AdminTender"
          element={
            <ProtectedRoute>
              <AdminTender />
            </ProtectedRoute>
          }
        />
        <Route
          path="/AdminCareer"
          element={
            <ProtectedRoute>
              <AdminCareer />
            </ProtectedRoute>
          }
        />
        <Route
          path="/AdminPublication"
          element={
            <ProtectedRoute>
              <AdminPublication />
            </ProtectedRoute>
          }
        />
        <Route
          path="/AdminLogs"
          element={
            <ProtectedRoute>
              <AdminLogs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/AdminCache"
          element={
            <ProtectedRoute>
              <AdminCache />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Errors />} />
      </Routes>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && (
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
      )}
    </>
  );
};

export default App;
