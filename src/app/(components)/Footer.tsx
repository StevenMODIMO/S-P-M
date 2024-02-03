import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="text-[#DEC544] text-center">
      <p>&copy; Copyright {year}, StevenMODIMO</p>
    </div>
  );
};

export default Footer;
