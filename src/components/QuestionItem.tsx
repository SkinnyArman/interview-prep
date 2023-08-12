"use client";
import React, { useState } from "react";

interface props {
  question: string;
  answer: string;
}

const FAQItem: React.FC<props> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full mb-4">
      <button
        className="flex items-center justify-between w-full bg-gray-200 text-gray-800 px-4 py-3 rounded-md text-left focus:outline-none transition-all duration-300 ease-in-out transform hover:bg-gray-300"
        onClick={toggleExpand}
      >
        <span className="font-semibold">{props.question}</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isExpanded ? "transform rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            className="fill-current"
            d="M16.25 10.25L12 14.5L7.75 10.25L6.34 11.66L12 17.31L17.66 11.66L16.25 10.25Z"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? "h-auto" : "h-0"
        }`}
      >
        <div className="bg-white border border-gray-300 rounded-md shadow-md text-gray-800 px-4 py-3 mt-2">
          {props.answer}
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
