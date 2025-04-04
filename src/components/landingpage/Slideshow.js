import React from 'react';
import { Link } from 'react-router-dom';

const slidesData = [
  {
    text: 'Store, share, and sort sheet musics with ease!',
    imageslide : "store-slide.png",
  },
  {
    text: 'Organize your sheet musics library effortlessly!',
    imageslide : "organize-slide.png",
  },
  {
    text: 'Collaborate with others and share your sheet musics!',
    imageslide : "collaborate-slide.png",
  }
];

const Slideshow = () => {
  return (
    <div className="landingpage-slideshow-box-top">
      <div
        id="carouselExampleIndicators"
        className="carousel slide landingpage-slideshow-top"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {slidesData.map((_, index) => (
            <li
              key={index}
              data-target="#carouselExampleIndicators"
              data-slide-to={index}
              className={index === 0 ? 'active' : ''}
            ></li>
          ))}
        </ol>

        <div className="carousel-inner">
          {slidesData.map((slide, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="landingpage-slideshow-container">
                <div className="landingpage-slide-top-title">
                  <p>
                    <b>{slide.text}</b>
                  </p>
                </div>
                <div className="svglink d-none d-md-block">
                <img
                            src={`images/landingpage-icons/${slide.imageslide}`}
                            alt="member"
                          />

                </div>
              </div>
            </div>
          ))}
        </div>

        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="landingpage-slide-top-button">
        {/* <Link to="/signin" className="sign-link">
          Sign In
        </Link> */}
        <Link to="/signup" className='link-getstart'>
        <div className="sign-link mx-5">
        Get Started
        </div>

        </Link>
      </div>
    </div>
  );
};

export default Slideshow;
