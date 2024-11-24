import React from "react";
import Layout from "../layout/Layout";
import "./Career.css";

const Career = () => {
  return (
    <div>
      <Layout>
        <div className="career-container">
          <div className="career-banner">
            <div className="career">Career</div>
            <p>
              "Design the Future, Craft with Precision, Deliver Excellence –
              Together, We Engineer Possibilities."
            </p>
          </div>
          <div className="career-opportunities">
            <div className="mechfusion-career">
              Mechfusion Career Opportunities
            </div>
            <p>
              Mechfusion seeks highly talented and hardworking individuals with
              a passion for developing their careers and the desire to excel in
              the information technology industry.
            </p>
            <p>
              We offer a creative collaborative & challenging environment and we
              are committed to diversity and professional development
            </p>
            <h3>
              If you are interested in current or future career opportunities
              with Mechfusion, please complete the form below and submit your
              resume.
            </h3>
          </div>
          <div>
            <form action="">
              <div className="inputt">
                <div className="inputcareer">
                  <input
                    className="careerinput"
                    type="text"
                    placeholder="FirstName"
                  />
                  <input
                    className="careerinput"
                    type="text"
                    placeholder="LastName"
                  />
                </div>
                <div className="inputcareer">
                  <input
                    className="careerinput"
                    type="text"
                    placeholder="Contact Number"
                  />
                  <input
                    className="careerinput"
                    type="text"
                    placeholder="Email Address"
                  />
                </div>
                <div className="inputcareer">
                  <input
                    className="careerinput"
                    type="text"
                    placeholder="Qualification"
                  />
                  <input
                    className="careerinput"
                    type="text"
                    placeholder="Position Applied For"
                  />
                </div>
                <input
                  className="careerinput"
                  type="file"
                  placeholder="Position Applied For"
                />
                <button className="careerbutton">Send</button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Career;
