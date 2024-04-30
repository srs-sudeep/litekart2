import React, { useState, useEffect } from "react";
// import "./Header.css"; // Import your CSS file for styling

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* First layer */}
      <div className={`first-layer ${isScrolled ? "hide" : ""}`}>
        Single line of text
      </div>

      {/* Second layer */}
      <div className="second-layer">
        {/* Your component with two rows */}
        {/* <YourComponent /> */}
      </div>
    </div>
  );
};

export default Header;
