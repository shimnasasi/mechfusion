import React from "react";
import "./HomeAbout.css";
import about11 from "../../Assets/about1.jpeg";
import about22 from "../../Assets/about2.jpg";

const HomeAbout = () => {
  return (
    <div className="homeAbout">
      <div className="aboutCol">
        <div className="about1">What we Aimed about?</div>
        <p>
          Mechfusion, your premier provider of Engineering services tailored to
          meet your design and manufacturing needs. With years of expertise in
          the industry, we pride ourselves on delivering innovative solutions
          that streamline your production processes and bring your ideas to life
          with precision and efficiency. Our dedicated team of skilled
          professionals utilizes cutting-edge technology and software to deliver
          high-quality designs, prototyping, and manufacturing services that
          exceed expectations. We are committed to provide personalized
          attention and customized solutions to help you achieve your goals. <br /> We
          deliver professional services including full range of Mechanical
          CAD/CAM services, Engineering documentation, Costing, etc
        </p>
        <button className="homeaboutButton">ReadMore</button>
      </div>
      <div className="aboutBox">
        <div className="aboutImages">
          <div className="aboutpara">
            <div className="mission">Mission</div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              
            </p>
          </div>
          <img src={about11} className="about11images" alt="" />
        </div>
        <div className="aboutImages">
          <img src={about22} className="about11images" alt="" />
          <div className="aboutpara">
            <div className="mission">Vision</div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
