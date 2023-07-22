
import React from "react";
import "../style.css";
import "@fontsource/open-sans";
const Charges = () => {
  return (
    <>
    <section className="section-charges-details">
      <h2 className="heading">Charges</h2>
      <div className="container-3">
        <div className="card-3">
          <div className="card-body-3">
          <p className="chargedetails">
            <b>One Way Rate - </b>
            ₹2000
          </p>
          <p className="chargedetails" >
            <b>Parking Rate - </b>
            ₹0
          </p>
          </div>
          <div className="card-body-4">
          <p className="chargedetails">
            <b>GST(5%) - </b>₹100
          </p>
          </div>
          <div className="card-body-5">
          <p className="chargedetails">
            <b>Other Charges - </b>₹0
          </p>
          </div>
          <div className="card-body-6">
          <p className="chargedetails">
            <b>Total Amount - </b>₹2100
          </p>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};
export default Charges;
