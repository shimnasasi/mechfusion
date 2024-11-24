import React from "react";
import "./AboutPage.css";
import about from "../../Assets/about1.jpeg";
const AboutPage = () => {
  return (
    <div className="aboutContainer">
      <img className="aboutImg" src={about} alt="" />
      <div className="about">
        <div className="aboutUs">About Us</div>

        <div className="who">
          What we Aimed
          <span className="we"> About?</span>
        </div>
        <p className="aboutp">
          Mechfusion, your premier provider of Engineering services tailored to
          meet your design and manufacturing needs. With years of expertise in
          the industry, we pride ourselves on delivering innovative solutions
          that streamline your production processes and bring your ideas to life
          with precision and efficiency. Our dedicated team of skilled
          professionals utilizes cutting-edge technology and software to deliver
          high-quality designs, prototyping, and manufacturing services that
          exceed expectations. We are committed to provide personalized
          attention and customized solutions to help you achieve your goals. We
          deliver professional services including full range of Mechanical
          CAD/CAM services, Engineering documentation, Costing, etc.
        </p>
        {/* <div className="missionvision">
          <div className="aboutmission">
            <div className="mission">Mission</div>
            <h6 className="missionpara">
              personalized attention and customized solutions to help you
              achieve your goals
            </h6>
          </div>
          <div className="aboutmission">
            <div className="mission">Vision</div>
            <h6 className="missionpara">
              personalized attention and customized solutions to help you
              achieve your goals
            </h6>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutPage;
