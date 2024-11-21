import React from 'react';
import illustration1 from "../img/illustration-1.png";
import illustration2 from "../img/illustration-2.png";
import illustration3 from "../img/illustration-3.png";

function Howitwork() {

    const workData =[
        { id: 1, title: "Select Restaurant", description: "Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.", image: illustration1, animation: "flip-up" },
        { id: 2, title: "Select menu", description: "Eu mi bibendum neque egestas congue quisque. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Odio ut sem nulla pharetra diam sit amet.", image: illustration2, animation: "flip-down" },
        { id: 3, title: "Wait for delivery", description: "Nunc lobortis mattis aliquam faucibus. Nibh ipsum consequat nisl vel pretium lectus quam id leo. A scelerisque purus semper eget. Tincidunt arcu non.", image: illustration3, animation: "flip-up" },
    ]

  return (
    <section className='work-section'>
        <div className="container">
            <div className='heading text-center' data-aos="fade-up"  data-aos-delay="500" data-aos-duration="300">
                <h2 className='fw-bold mx-auto'>How it works</h2>
                <p className='mx-auto'>
                Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus in
                metus vulputate eu scelerisque felis.
                </p>
            </div>
            <div className="row">
            {workData.map((card) => (
                <div className="col-lg-4" key={card.id}  data-aos={card.animation} >
                    <div className="work-card">
                            <img src={card.image} alt={card.title} />
                            <h4><span>{card.id}</span> {card.title}</h4>
                            <p>
                                {card.description}
                            </p>
                        
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Howitwork