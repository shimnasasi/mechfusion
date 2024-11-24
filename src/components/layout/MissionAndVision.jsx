import React from "react";
import "./MissionAndVision.css";
import missionimage from "../../Assets/documentation.webp";
import visionimage from "../../Assets/about1.jpeg"

const MissionAndVision = () => {
  return (
    <div className="missionAndvision-Container">
      <div className="mission-container">
        <div className="mission-content">
          <div className="ourMissionn">About Our Mission</div>
          <p>
            Mechfusion is committed to providing quality professional
            engineering services to enhance the communities where our clients
            live and work. Our approach combines exceptional design, innovative
            solutions, and proven performance.
          </p>
          <ul className="mission-ul">
            <li>
              To Remain Focused on controlled organizational growth and
              delivering innovations to the future
            </li>
            <li>
              To Build value for the organization in order to become a unique
              and distinct firm.
            </li>
          </ul>
        </div>
        
        <img className="mission-image" src={missionimage} alt="" />
      </div>

      <div className="mission-container">
        <img className="mission-image" src={visionimage} alt="" />
        <div className="mission-content">
          <div className="ourMissionn">About Our Vision</div>
          <p>
            To be the leading multi discipline Engineering consulting service
            company providing Mechanical Engineering Services.
          </p>
          <ul className="mission-ul">
            <li>Building Healthy Client Loyalty</li>
            <li>Adopting Optimal Engineering Methodologies</li>
            <li>Empowering Effective Corporate Communication</li>
            <li>Endorsing Proactive Planning</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision;
