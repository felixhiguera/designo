import React from "react";
import phone from "../assets/home/phone.png";
import { HashLink as Link } from "react-router-hash-link";

const Header = (headerId) => {
  return (
    <div className="header" id="home-header">
      <div className="header-text">
        <h2> Award-winning custom designs and digital branding solutions</h2>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and f brand experiences. Find
          out more about our services.
        </p>
        <Link to="/contact#contact-header">
          <button>LEARN MORE</button>
        </Link>
      </div>
      <img className="header-phone" src={phone} alt="phone" />
    </div>
  );
};

export default Header;
