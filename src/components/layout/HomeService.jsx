import React from "react";
import "./HomeService.css";
import design from "../../Assets/design1.webp";
import cam from "../../Assets/cam.jpeg";
import documentation from "../../Assets/documentation.webp";
import others from "../../Assets/other.webp";

const HomeService = () => {
  return (
    <div className="homeService">
      <div className="service">
      <div>
        <div className="ourServices">Our Services</div>
        
        <div className="what">
          What we
          <span className="do"> Do?</span>
        </div>
        </div>
        <button className="serviceReadmore">ViewMore</button>
      </div>
      <div className="services">
        <div className="serviceBox">
          <img className="design" src={design} alt="" />
          <div className="mechanicalDes">Mechanical Design</div>
        </div>
        <div className="serviceBox">
          <img className="design" src={cam} alt="" />
          <div className="mechanicalDes">CNC Programming</div>
        </div>
        <div className="serviceBox">
          <img className="design" src={documentation} alt="" />
          <div className="mechanicalDes">Engineering Documentation</div>
        </div>
        <div className="serviceBox">
          <img className="design" src={others} alt="" />
          <div className="mechanicalDes">Others</div>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
