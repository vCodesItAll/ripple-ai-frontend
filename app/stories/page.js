'use client'
import React from "react";
import Navbar from "../components/navbar";
import Card from "../components/card";
import ParticlesContainer from "../components/particles";


function Stories() {
  return (
    <>
    <ParticlesContainer />
    <div className="h-screen">
      <Navbar />
      <Card />
    </div>
    </>
  );
}

export default Stories;
