import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { IoCall } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer-column">
        <div className="keen">
          <div className="mech">
            Mech<span className="fusion">fusion</span>
          </div>
          <div className="engineeringSolution">
            E N G I N E E R I N G S O L U T I O N S
          </div>

          {/* <img
            src="https://sociolib.com/html/keen/assets/image/logo.png"
            alt=""
          /> */}
          <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>
          <div className="footerthree-icons">
            <FaFacebook className="footer-icons" />
            <FaInstagram className="footer-icons" />
            <IoLogoWhatsapp className="footer-icons" />
            <FaLinkedin className="footer-icons" />
          </div>
        </div>
        <div className="office">
          {/* <h4>OFFICE</h4> */}
          <h4 className="menu"> ADDRESS </h4>
          <ul className="footer-list">
            <li>Yelahanka Newtown</li>
            <li>Bangalore</li>
            <li>Karnataka India – 560064</li>
            {/* <li>Testimonials</li> */}
          </ul>

          <div className="footer-mail">
            <CiMail className="footer-icons" />
            <div>enquiry.mechfusion@gmail.com</div>
          </div>
          {/* <div className="footer-mail">
            <IoCall className="footer-icons" />
            <div> +123 456 789</div>
          </div> */}
        </div>
        <div>
          <h4 className="menu"> SERVICES </h4>
          <ul className="footer-list">
            <li>Mechanical Design</li>
            <li>CNC Programming</li>
            <li>Engineering Documentation</li>
            <li>Other Services</li>
          </ul>
        </div>
        <div className="footer-servicelist">
          <h4 className="menu"> LINK </h4>
          <ul className="footer-list">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="last-border"></div>
    </div>
  );
};

export default Footer;
