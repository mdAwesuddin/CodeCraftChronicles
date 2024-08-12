import React, { useState } from "react";

const SideNav = ({ headings, headingRefs }) => {
  const [active, setActive] = useState("");

  const handleClick = (id) => {
    console.log("hello")
    const element = document.getElementById(id);
    const yOffset = -80; 
    const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: yPosition, behavior: "smooth" });
    
  };

  return (
    <nav className="sticky top-32 overflow-auto toc-inner">
      <ul>
        {headings?.map((heading, index) => (
         <li
        //  key={heading.uid} // Make sure this line is uncommented if necessary
         className="mt-4 text-lg text-gray-700 dark:text-gray-400 cursor-pointer"
         style={{
           paddingLeft: "1rem",
           color: "#6366f1",
         }}
         onClick={() => {
           handleClick(heading.Title);
         }}
       >
         {heading.Title} {/* Using text directly instead of wrapping in <a> tag */}
       </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
