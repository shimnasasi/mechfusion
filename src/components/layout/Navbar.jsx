import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiCellphoneFill } from "react-icons/ri";

const Navbar = () => {
  const [view, setview] = useState();
  return (
    <div className="navbarContainer">
      <Link to={"/"}>
        {/* <h1 className="logo">Mech<span className="logo2">fusion</span></h1> */}
        <div className="mech1">Mech<span className="fusion1">fusion</span></div>
     {/* <div className=""></div> */}
     <div className="engineeringSolution1">
            E N G I N E E R I N G S O L U T I O N S
          </div>
     
      </Link>
      <FaBarsStaggered
        className="navIcon"
        onClick={() => {
          setview(!view);
        }}
      />
      {view ? (
        <ul className="listmobile">
          <Link to={"/"}>
            <li>home</li>
          </Link>
          <Link to={"/about"}>
            <li>About us</li>
          </Link>
          <Link to={"/services"}>
            <li>Services</li>
          </Link>
          <Link to={"/career"}>
            <li>Career</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact us</li>
          </Link>
          <div className="navDetailsWrapper">
            {/* <h1>TechniTrust</h1> */}
            {/* <span className="dimark">
              Powered by DiMark Marketing Management LLC
            </span> */}
          </div>
        </ul>
      ) : null}
      <ul className="listDesk">
        <Link to={"/"}>
          <li>home</li>
        </Link>
        <Link to={"/about"}>
          <li>About us</li>
        </Link>
        <Link to={"/services"}>
          <li>Services</li>
        </Link>
        <Link to={"/career"}>
          <li>career</li>
        </Link>
        <Link to={"/contact"}>
          <li>Contact us</li>
        </Link>
      </ul>
      <div className="navContact">
        <RiCellphoneFill className="navContactIcon" />
        <span>+971-87654321</span>
      </div>
    </div>
  );
};

export default Navbar;