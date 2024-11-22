import React from 'react';
import restaurantData from '../components/restaurant/RestaurantData';
import { Link } from 'react-router-dom';

function RestaurantDetails() {
  return (
    <div>
       <section className='bg-light'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 d-flex mb-4">
                    <div className="heading city-restaurant">
                        <h2 className='fw-bold'>12 Best Restaurants in Your City</h2>
                        <p>Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus in metus vulputate.</p>
                    </div>
                </div>
                {/* Display only the first 3 cards */}
                {restaurantData.map((data) => (
                    <div className='col-lg-6 d-flex mb-4' key={data.id} data-aos={data.animation}>
                        <div className="card w-100 rest-card">
                            <div className="card-body">
                                <img src={data.image} alt={data.title} className="img-fluid mb-3 cafa-img" />
                                <div className='cafa ms-md-4'>
                                    <h4>{data.title}</h4>
                                    <div className='d-flex gap-3 cafa-button'>
                                        {data.buttons.map((btn, index) => (
                                            <Link key={index} className='' to="/">
                                                {btn}
                                            </Link>
                                        ))}
                                    </div>
                                    <p>{data.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    </div>
  )
}

export default RestaurantDetails