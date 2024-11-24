import React from "react";
import Layout from "../layout/Layout";
import "./Service.css";
import design from "../../Assets/design1.webp";
import cam from "../../Assets/cam.jpeg";
import documentation from "../../Assets/documentation.webp";
import others from "../../Assets/other.webp";

const Service = () => {
  return (
    <div>
      <Layout>
        <div className="service-container">
          <div className="service-banner">
            <div className="service-heading">Service</div>
            <p>"Turning Ideas into Reality with Precision, Innovation, and Unmatched Excellence."</p>
          </div>

          <div className="service-list">
            <div className="service-box">
              <div>
                <div className="mechanical-design">Mechanical Design</div>
                <div className="servicelist-box">
                  <ul className="service-ul">
                    
                    <li>Jigs and Fixtures</li>
                    <li>Moulds</li>
                    <li>Product Design</li>
                    <li>Gauges</li>
                    <li>Electrode Design</li>
                    <li>Sheet metal</li>
                    <li>2D to 3D Conversion</li>
                    <li>Conceptual Design</li>
                  </ul>
                  <ul className="service-ul">
                   <li>Legacy Data Migration</li>
                   <li>3D to 2D Detailing or Manufacturing Drawing</li>
                   <li>Reverse Engineering</li>
                   <li>Mechanism Designs</li>
                   <li>Prototype Design</li>
                   <li>Machining Stage drawings</li>
                   <li>VAVE Design</li>
                   <li>R&D Design</li>
                  </ul>
                  
                  {/* <button className="service-button">ReadMore</button> */}
                </div>
              </div>
              <img className="design-image" src={design} alt="" />
            </div>

            <div className="service-box">
              <img className="design-image" src={cam} alt="" />
              <div>
                <div className="mechanical-design">CNC Programming</div>
                {/* <div className="servicelist-box"> */}
                <ul className="service-ul">
                  <li>Milling</li>
                  <li>Turning</li>
                  <li>CAM Sheet Generation</li>
                  <li>Prototype Support</li>
                  <li>CNC Process Planning</li>
                  <li>CNC Programming Optimization</li>
                </ul>
                {/* </div> */}
              </div>
            </div>

            <div className="service-box">
              <div>
                <div className="mechanical-design"> Documentation</div>
                {/* <div className="servicelist-box"> */}
                <ul className="service-ul">
                  <li>Work Instruction (WI)</li>
                  <li>Standard Operation Procedure</li>
                  <li>Control Plan</li>
                  <li>Setup Approval Sheet</li>
                  <li>CAM Sheet</li>
                  <li>Inspection Plan / Inspection Report</li>
                  <li>Document Digitalization</li>
                  <li>Design For Manufacturing (DFM)</li>
                  <li>PPT Presentations</li>
                  <li>First Article Inspection Report (FAIR)</li>
                </ul>
                {/* </div> */}
              </div>
              <img className="design-image" src={documentation} alt="" />
            </div>

            <div className="service-box">
              <img className="design-image" src={others} alt="" />
              <div>
                <div className="mechanical-design">Others</div>
                {/* <div className="servicelist-box"> */}
                <ul className="service-ul">
                  <li>Mould Flow Analysis</li>
                  <li>Part Costing</li>
                  <li>Fixture Costing</li>
                  <li>Prototype Manufacturing Support</li>
                  <li>IT Training</li>
                  
                </ul>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Service;
