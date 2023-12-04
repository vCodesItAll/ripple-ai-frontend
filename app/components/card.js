import React from "react";

function Card({ title, description, image }) {
  return (
    <div class="flex justify-center items-center h-screen mx-auto space-x-10">
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-700 dark:border-gray-700">
        <a href="#">
          <img
            class="rounded-t-lg"
            src="https://cdn3.vectorstock.com/i/1000x1000/79/17/water-ripple-logo-design-template-vector-28617917.jpg"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              The Butterfly Effect
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            The butterfly effect posits that small changes can have large,
            unpredictable consequences in complex systems.
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-blue-800"
          >
            Start your adventure
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-700 dark:border-gray-700">
        <a href="#">
          <img
            class="rounded-t-lg"
            src="https://cdn3.vectorstock.com/i/1000x1000/79/17/water-ripple-logo-design-template-vector-28617917.jpg"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              The Crystal of Eldoria
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            A magical place where the far past meets the furthest future. A
            treasure awaits for only the smartest of people.
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-blue-800"
          >
            Start your adventure
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-700 dark:border-gray-700">
        <a href="#">
          <img
            class="rounded-t-lg"
            src="https://cdn3.vectorstock.com/i/1000x1000/79/17/water-ripple-logo-design-template-vector-28617917.jpg"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              The Chuckleberry
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Is there an undiscovered fruit growing that causes laughter? As a
            determined horticulturist, it's up to you to find it.
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-blue-800"
          >
            Start your adventure
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
