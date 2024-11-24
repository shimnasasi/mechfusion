import React from 'react'
import Layout from '../layout/Layout'
import AboutBanner from '../layout/AboutBanner'
import AboutPage from '../layout/AboutPage'
import WhyChoose from '../layout/WhyChoose'
import MissionAndVision from '../layout/MissionAndVision'

const About = () => {
  return (
    <div>
        <Layout>
            <AboutBanner/>
            <AboutPage/>
            <MissionAndVision/>

            <WhyChoose/>

        </Layout>
    </div>
  )
}

export default About