import ContactPageComponents from "@/components/LandingPage/ContactPageComponents";
import Footer from "@/components/LandingPage/Footer";
import Navbar from "@/components/LandingPage/Navbar";
import React from "react";

function ContactUs() {
  return (
    <div className="min-h-screen bg-background dark">
      <Navbar />
      <ContactPageComponents />
      <Footer />
    </div>
  );
}

export default ContactUs;
