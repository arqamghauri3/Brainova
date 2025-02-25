import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/FrontPage/Register";
import Login from "./pages/FrontPage/Login";
import LandingPage from "./pages/FrontPage/LandingPage";
import Profile from "./pages/Dashboard/Profile";
import UploadPage from "./pages/Dashboard/UploadPage";
import ContactUs from "./pages/FrontPage/ContactUs";
import HowItWorks from "./pages/FrontPage/HowItWorks";
import AccountSettings from "./components/Dashboard/AccountSettings";
import ReportPage from "./pages/Dashboard/ReportPage";
import FaqPage from "./pages/FrontPage/FaqPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/upload" element={<UploadPage />} />
        <Route path="/dashboard/settings" element={<AccountSettings />} />
        <Route path="/dashboard/reports" element={<ReportPage />} />

      </Routes>
    </Router>
  );
}

export default App;
