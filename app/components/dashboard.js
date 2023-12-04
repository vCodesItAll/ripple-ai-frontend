import React from "react";
import Navbar from "./navbar";
import Link from "next/link";
import Logo from "./logo";


function Dashboard() {
  return (
    <>
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
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-orange-500 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Select Your Story
            </Link>
            <Link
              href="/submissions"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-orange-400 dark:hover:bg-orange-500 dark:focus:ring-gray-800"
            >
              Suggest A Story
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Logo />
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
