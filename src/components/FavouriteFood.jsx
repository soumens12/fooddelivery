import React from 'react';
import favFood from "../img/photo-3.png"
import { Link } from 'react-router-dom';

function FavouriteFood() {
  return (
    <section className='favourite-food'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5"  data-aos="fade-up" data-aos-delay="200" data-aos-duration="300">
                <div className="food-photo-section">
						<img alt="favFood" src={favFood}/>
						<Link href="/" className="one"><i className="fa-solid fa-burger"></i>Burgers</Link>
						<Link href="/" className="two"><i className="fa-solid fa-cheese"></i>Steaks</Link>
						<Link href="/" className="three"><i className="fa-solid fa-pizza-slice"></i>Pizza</Link>
					</div>
                </div>
                <div className="col-lg-6 offset-lg-1" data-aos="fade-up" data-aos-delay="300" data-aos-duration="400">
                <div className="food-content-section">
						<h2>Food from your favorite restaurants
							to your table
                        </h2>
						<p>Pretium lectus quam id leo in vitae turpis massa sed. Lorem donec massa sapien faucibus et molestie. Vitae elementum curabitur vitae nunc.</p>
						<a href="/" className="button button-2">Order Now</a>
					</div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FavouriteFood