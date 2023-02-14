import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
function Footer() {
  const getYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p>
        copyright <AiOutlineCopyrightCircle /> {getYear}
      </p>
    </div>
  );
}

export default Footer;
