import React from "react";

const ContactCard = () => {
  return(
  <section className="bg-inherit">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-screen items-center">
      <div className="lg:col-span-5 lg:flex">
      </div>
      <div className="ml-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-right">
          Contact the creator.
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-right">
          I would love to hear from you about your experience and any improvements you have to suggest.
        </p>
      </div>
    </div>
  </section>
)};

export default ContactCard;
