import React from "react";
import Navbar from "../components/navbar";
import ContactCard from "../components/contact-card";

function Contact() {
  return (
    <div className="flex flex-col justify-content-between">
      <Navbar />
      <ContactCard />
    </div>
  );
}

export default Contact;
