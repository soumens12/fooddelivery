import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../img/photo-1.png';
import heroImg2 from '../img/photo-2.jpg';




function Hero() {
  return (
    <section className='hero-section home-hero'>
      <div className='container'>
        <div className='row align-items-center'>
            <div className="col-lg-6" data-aos="fade-up"  data-aos-delay="200" data-aos-duration="300">
                <div className='restaurant'>
                    <h1>The Best restaurants in your home</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <Link className="button button-2 mt-3" to="/menu">Order Now</Link>
                </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up"  data-aos-delay="300" data-aos-duration="400">
            <div className="img-restaurant">
						<img alt="man" src={heroImg}/>
						<div className="wilmington">
							<img alt="img" src={heroImg2}/>
							<div>
								<p>Restaurant of the Month</p>
								<h6>The Wilmington</h6>
								<div>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star-half'></i>
								</div>
							</div>
						</div>
						<div className="wilmington location-restaurant">
                        <i className='bx bxs-map'></i>
							<div>
								<h6>12 Restaurant</h6>
								<p>In Your city</p>
							</div>
						</div>
					</div>
            </div>
          
        </div>
          
      </div>
    </section>
  )
}

export default Hero