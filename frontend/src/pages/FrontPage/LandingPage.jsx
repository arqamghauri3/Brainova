import React from "react";
import Navbar from "../../components/LandingPage/Navbar";
import HeroSection from "../../components/LandingPage/HeroSection";
import AboutSection from "../../components/LandingPage/AboutSection";
import FeaturesSection from "../../components/LandingPage/FeaturesSection";
import TeamSection from "../../components/LandingPage/TeamSection";
import Footer from "../../components/LandingPage/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen dark:bg-black dark:text-foreground px-4">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
