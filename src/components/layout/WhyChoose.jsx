import React from "react";
import "./WhyChoose.css";
import progmer from "../../Assets/cam.jpeg";

const WhyChoose = () => {
  return (
    <div className="whychooseContainer">
      <div className="whyyy">Why Choose Us</div>
      <div className="whyChoose">
        Why Choose Our
        <span className="do"> Mechfusion</span>
      </div>
      <div className="whychoosemech">
        <img className="whychooseImg" src={progmer} alt="" />
        <div className="iconss">
          <div>
            <div>
              <img
                className="priceImg"
                src="https://www.shutterstock.com/image-vector/technical-expert-icon-vector-illustration-260nw-2135514499.jpg"
                alt=""
              />
              <div className="affordable">Technical Expertise</div>
              <p>
                Lorem Ipsum is simply dummy text of <br /> the printing and
                typesetting industry.{" "}
              </p>
            </div>
            <div>
            <img
                className="priceImg"
                src="https://www.shutterstock.com/image-vector/save-money-icon-salary-invest-600nw-1437532463.jpg"
                alt=""
              />
              <div className="affordable">Affordable Price</div>
              <p>
                Lorem Ipsum is simply dummy text of <br /> the printing and
                typesetting industry.{" "}
              </p>
            </div>
          </div>
          <div>
            <div>
            <img
                className="priceImg"
                src="https://media.istockphoto.com/id/956955682/vector/stopwatch-in-motion-line-icon.jpg?s=612x612&w=0&k=20&c=ouraifW3pOIPHEMtLnzGReBCjkmzoY6ZHtwGmBDvj8E="
                alt=""
              />
              <div className="affordable">Timely Delivery and Flexibility:</div>
              <p>
                Lorem Ipsum is simply dummy text of <br /> the printing and
                typesetting industry.{" "}
              </p>
            </div>
            <div>
              <img
                className="priceImg"
                src="https://thumbs.dreamstime.com/b/customer-centricity-icon-isolated-white-background-customer-centricity-icon-isolated-white-background-your-web-133860856.jpg"
                alt=""
              />
              <div className="affordable">Customer-Centric Approach:</div>
              <p>
                Lorem Ipsum is simply dummy text of <br /> the printing and
                typesetting industry.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
