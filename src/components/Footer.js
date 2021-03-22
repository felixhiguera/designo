import React from "react";
import LetsTalk from "./LetsTalk";
import Oval from "../assets/navbar-images/Oval.png";
import facebook from "../assets/home/facebook.png";
import youtube from "../assets/home/youtube.png";
import twitter from "../assets/home/twitter.png";
import pringles from "../assets/home/pringles.png";
import instagram from "../assets/home/instagram.png";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="footer">
      <LetsTalk />
      <div className="footer-logo">
        <div className="logo">
          <Link to="/#home-header">
            <img src={Oval} alt="" />

            <h1 className="navbar-logo-text">DESIGNO</h1>
          </Link>
        </div>
        <div className="footer-menu">
          <Link to="/about#about-header" className="footer-menu-link">
            <h3>Our company</h3>
          </Link>
          <Link to="/location#location-header" className="footer-menu-link">
            <h3> Locations</h3>
          </Link>
          <Link to="/contact#contact-header" className="footer-menu-link">
            <h3>Contact</h3>
          </Link>
        </div>
        <div className="footer-address">
          <h4>
            <span>Designo Central Office</span>
            <br /> 3886 Wellington Street <br />
            Toronto, Ontario M9C 3J5
          </h4>
        </div>
        <div className="footer-contact">
          <h4>
            <span>Contact Us (Central Office) </span>
            <br /> P : +1 253-863-8967 <br /> M : contact@designo.co
          </h4>
        </div>
        <div className="footer-icons">
          <img src={facebook} alt="" />
          <img src={youtube} alt="" />
          <img src={twitter} alt="" />
          <img src={pringles} alt="" />
          <img src={instagram} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
