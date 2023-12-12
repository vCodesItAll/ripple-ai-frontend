import React, { useRef } from "react";
import Navbar from "./navbar";
import Link from "next/link";
import Logo from "./ripple-logo";
import Moon from "./moon";
import Footer from "./footer";
import ParticlesContainer from "./particles";

function Dashboard() {
  const scrollDownRef = useRef(null);
  const handleScrollDown = () => {
    if (scrollDownRef.current) {
      scrollDownRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ParticlesContainer />
      <Navbar />
      <section className="bg-inherit">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-screen items-center">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Welcome to RiPPLE.<span style={{ color: "orange" }}>ai</span>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              The story-generated adventure experience. Designed for the
              everyday reader and the casual gamer. Which one are you?
            </p>
            <Link
              href="/stories"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-amber-500 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 border border:amber-500 dark:border-amber-500"
            >
              Select A Story
            </Link>
            <Link
              href="/submissions"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 rounded-lg hover:bg-amber-500 focus:ring-4 focus:ring-gray-100 dark:text-white dark:hover:bg-amber-500 dark:focus:ring-gray-800 border border:amber-500 dark:border-orange-400"
            >
              Suggest A Story
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Logo />
          </div>
        </div>
        <div
          ref={scrollDownRef}
          style={{
            position: "fixed",
            bottom: "50px",
            cursor: "pointer",
            fontSize: "30px",
          }}
          className="w-screen flex justify-center animate-bounce"
          onClick={handleScrollDown}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#FFA500"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </section>

      <section className="bg-inherit">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-screen items-center">
          <div className="lg:col-span-5 lg:flex">
            <Moon />
          </div>
          <div className="ml-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-right">
              Immerse yourself into worlds{" "}
              <span style={{ color: "orange" }}>un</span>known.
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-right">
              You are the reader, the explorer and the creator of imagination.
              Discover the magic woven into the fabric of storytelling.
            </p>
          </div>
        </div>
      </section>

      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-100 items-center">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white underline decoration-orange-400">
            Choose A Story
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            With multiple options - and many more to come, our library doesn't
            disappoint! Dive into stories like "The Butterfly Effect", where
            slight changes to the past, dramatically alter the fate of the
            future.
          </p>
        </div>
      </div>
      <section className="bg-inherit">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-100 items-center">
          <div className="lg:col-span-5 lg:flex"></div>
          <div className="ml-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-right underline decoration-orange-400">
              Or Give Us A Prompt
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-right">
              Have a story in mind? We want to hear it! Stop by the Submissions
              tab to drop a prompt for future stories. After all, the
              possibilities are endless.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Dashboard;
