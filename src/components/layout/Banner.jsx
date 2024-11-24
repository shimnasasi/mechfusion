import React from "react";
import "./Banner.css";
import banner from "../../Assets/home/documentation.webp";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="bannerShadow">
        <div className="banner">
          <div className="bannerShadowheading">The Art of Engineering</div>
          <p>
            Welcome to the world of artful engineering, where creativity meets
            precision, and innovation thrives on a foundation of technical
            excellence. At Mechfusion we believe that engineering is not just
            about solving problems, it's about crafting elegant solutions that
            seamlessly blend form and function. From conceptualization to
            realization, our team of dedicated engineers harnesses the power of
            imagination and expertise to turn ideas into reality.
          </p>

          <button className="bannerReadmore">ReadMore</button>
          {/* <button className="bannerReadmore2">ReadMore</button> */}
        </div>
        {/* <img className="bannerimg" src={banner} alt="" /> */}
      </div>
    </div>
  );
};

export default Banner;
