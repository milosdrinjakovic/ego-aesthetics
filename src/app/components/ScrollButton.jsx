"use client"
import React from "react";

const ScrollButton = ({ targetId, label }) => {
  const handleScroll = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <a
      href={targetId}
      onClick={handleScroll}
      className=" border-2 border-white text-white px-6 py-3 hover:bg-salmon rounded hover:border-salmon transition duration-300 w-1/2 text-center"
    >
      {label}
    </a>
  );
};

export default ScrollButton;
