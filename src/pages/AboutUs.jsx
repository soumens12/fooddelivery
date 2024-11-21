import React from 'react'
import InnerHero from '../components/InnerHero';
import aboutHero from "../img/photo-9.jpg";
import heroBg from "../img/hero-bg.png";
import missionImage from "../img/illustration-5.png"

function AboutUs() {
  return (
    <>
        <InnerHero heroTitle="Nothing to worry about with Quickeat" heroText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." heroImage={aboutHero} imageUrl={heroBg}></InnerHero>
        <section className='our-mission-section'>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 aos-init aos-animate" data-aos="flip-up" data-aos-delay="300" data-aos-duration="400">
                <div className="our-mission-img">
                  <img alt="Illustration" src={missionImage}/>
                </div>
              </div>
              <div className="offset-xl-1 col-lg-5 col-md-12 col-sm-12 aos-init aos-animate" data-aos="flip-up" data-aos-delay="400" data-aos-duration="500">
                <div className="our-mission-text">
                  <h2>Our mission is
                      to save you time</h2>
                    <p>Viverra vitae congue eu consequat ac felis. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor.<br/><br/>
                    Eget egestas purus viverra accumsan in nisl nisi scelerisque. Tincidunt augue interdum velit euismod in pellentesque.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default AboutUs