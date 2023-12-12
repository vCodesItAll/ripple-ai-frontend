import React from "react";
import Navbar from "../components/navbar";
import ContactCard from "../components/contact-card";
import Footer from "../components/footer";

function Contact() {
  return (
    <div className="flex flex-col justify-content-between">
      <Navbar />
      <ContactCard />
      <Footer />
    </div>
  );
}

export default Contact;
