import React from 'react';
import '../style.css';

const BottomBanner = () => {
  return (
    <section className="bottom-banner-section">
      <div className="banner-image-div">
        <img className="banner-image" src={require('../assets/Banner.png')} alt="Banner Image" />
      </div>
      <div className="banner-overlay-div"></div>
      <div className="banner-text-div">
        <span className="banner-text">
          <p className="text-end small-text">Find the right type of car with us</p>
          <p className="text-end big-text">Find the right car with<br /> us with over 500 +<br /> options</p>
        </span>
      </div>
    </section>
  );
}

export default BottomBanner;

