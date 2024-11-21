import React from 'react';
import "../components/NotFound.css";
import notImage from "../img/404.png"
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section class="error-section">
        <div class="container">
            <div class="error-page">
                  <img alt="girl" src={notImage} data-aos="flip-up" data-aos-delay="300" data-aos-duration="400" class="aos-init aos-animate"/>
                    <h2>404</h2>
                    <h4 data-aos="flip-up" data-aos-delay="400" data-aos-duration="500">Sorry, we were unuble to find that page</h4>
                    <p data-aos="flip-up" data-aos-delay="600" data-aos-duration="700">Varius sit amet mattis vulputate enim nulla aliquet porttitor.<br/> Elementum nibh tellus molestie nunc.</p>
                    <div className='mt-4'>
                    <Link to="/" className='button button-2'><i class='bx bx-home-alt me-2'></i>Back to Home</Link>
                    </div>
            </div>
        </div>
  </section>
  )
}

export default NotFound