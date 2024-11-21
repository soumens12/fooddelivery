import React from 'react'

function InnerHero({heroTitle, heroText, heroImage, imageUrl}) {

    const backgroundImage ={
        backgroundImage: `url(${imageUrl})`,
    }

  return (
    <section className='hero-section inner-hero' style={backgroundImage}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <h2 className='fw-bold'>{heroTitle}</h2>
                    <p>
                        {heroText}
                    </p>
                </div>
                <div className="col-lg-6">
                    <div className='about-img'>
                        <img src={heroImage} alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default InnerHero