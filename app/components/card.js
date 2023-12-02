import React from "react";

function Card({ title, description, image }) {
  return (
    <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img src={image} alt={title} className="object-cover w-full h-48" />
      <div className="p-6">
        <h2 className="mb-3 text-xl font-bold text-gray-800 dark:text-white">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default Card;