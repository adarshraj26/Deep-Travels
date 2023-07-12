import React from 'react';
import '../style.css';

const BottomBanner = () => {
  return (
    <section className="top-banner-section">
      <div className="banner-image-div">
        <img className="banner-image" src={require('../assets/Banner.png')} alt="Banner Image" />
      </div>
      <div className="banner-overlay-div"></div>
      <div className="banner-text-div">
        <span className="banner-text">
          <p className="banner-h1-text">Find the right type of car with us</p>
          <p className="banner-body-text">Find the right car with<br /> us with over 500 +<br /> options</p>
        </span>
      </div>
    </section>
  );
}

export default BottomBanner;

