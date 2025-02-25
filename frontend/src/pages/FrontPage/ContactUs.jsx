import ContactPageComponents from "@/components/LandingPage/ContactPageComponents";
import Footer from "@/components/LandingPage/Footer";
import Navbar from "@/components/LandingPage/Navbar";
import React from "react";

function ContactUs() {
  return (
    <div className="min-h-screen dark:bg-black dark:text-foreground">
      <Navbar />
      <ContactPageComponents />
      <Footer />
    </div>
  );
}

export default ContactUs;
