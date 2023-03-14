import { useState } from "react";
import React from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    console.log(e.target.innerText);
  };

  return (
    <div className="relative">
      <button
        className="font-semibold rounded inline-flex items-center"
        onClick={toggleDropdown}
      >
        <span>Services</span>
        <svg
          className={`fill-current h-4 w-4 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 13l-5-5h10l-5 5z" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-50 bg-[#c09559] py-2 w-32 shadow-lg rounded left-4 top-7">
          <a href="#" className="block px-4 py-2" onClick={handleLinkClick}>
            Residential
          </a>
          <a href="#" className="block px-4 py-2 " onClick={handleLinkClick}>
            Commercial
          </a>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
