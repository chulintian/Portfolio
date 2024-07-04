"use client"
import React, { useState } from "react";

function NavBar() {
  const headers = ["about", "projects", "testimonials"];
  const [selectedHeader, setSelectedHeader] = useState(headers[0]);

  const scrollToSection = (header) => {
    const element = document.getElementById(header);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setSelectedHeader(header);
    }
  };

  return (
    <div className="top-0 right-0 left-0 fixed flex justify-center z-50">
      <div className="text-white my-5 flex flex-row gap-5 bg-gray rounded-full py-3 px-5 opacity-95">
        {headers.map((header, index) => (
          <div
            key={index}
            onClick={() => scrollToSection(header)}
            className={`cursor-pointer rounded-full py-2 px-5 ${selectedHeader === header ? 'bg-lighter-gray text-green' : ''}`}
          >
            {header}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
