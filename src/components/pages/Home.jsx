import React from "react";
import Layout from "../layout/Layout";
import Banner from "../layout/Banner";
// import HomeAbout from "../layout/HomeAbout";
import HomeService from "../layout/HomeService";
import AboutPage from "../layout/AboutPage";
import WhyChoose from "../layout/WhyChoose";

const Home = () => {
  return (
    <Layout>
      <Banner />
      {/* <HomeAbout/> */}
      <AboutPage />
      <HomeService/>
      
      <WhyChoose/>
    </Layout>
  );
};

export default Home;
