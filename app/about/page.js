import React from "react";
import Navbar from "../components/navbar";
import OrangeGlow from "../components/orange-glow";
import Image from "next/image";
import Footer from "../components/footer";

function About() {
  return (
    <div>
      <Navbar />
      <section className="bg-inherit">
        <div className="flex max-w-screen-xl px-4 py-8 mx-auto h-screen items-center">
          <div className="lg:col-span-2 lg:flex"></div>
          {/* <OrangeGlow /> */}
          <Image
            src="/images/orange-glow.png"
            alt="ripple image"
            height={400}
            width={600}
          />
          <div className="ml-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-right">
              About RiPPLE.<span style={{ color: "orange" }}>ai</span>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-right">
              Welcome to RiPPLE.ai, where stories come to life and imagination
              knows no bounds. Our platform is a haven for storytellers,
              dreamers, and avid readers, providing a space to explore and share
              captivating narratives from every corner of the creative universe.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-inherit">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-screen items-center">
          <div className="lg:col-span-2 lg:flex"></div>
          <div className="ml-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center">
              What Sets <span style={{ color: "orange" }}>Us</span> Apart:
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center">
              At RiPPLE.ai, we believe in the power of storytelling to connect,
              inspire, and entertain. Our platform goes beyond traditional
              storytelling, offering a dynamic and interactive experience for
              both creators and consumers of stories. Whether you're a seasoned
              storyteller or someone who simply loves to get lost in a good
              tale, RiPPLE.ai is your portal to a world of endless
              possibilities.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
