
import React from "react";
import "../style.css";
import { useLocation } from "react-router-dom";
import "@fontsource/open-sans";
const Charges = (props) => {
  const location= useLocation();
  return (
    <>
    <section className="section-charges-details">
      <h2 className="heading">Charges</h2>
      <div className="container-3">
        <div className="card-3">
          <div className="card-body-3">
          <p className="chargedetails">
            <b>One Way Rate - </b>
            {location.state.charges.oneWayRate}
          </p>
          <p className="chargedetails" >
            <b>Parking Rate - </b>
          {location.state.charges.parking}
          </p>
          </div>
          <div className="card-body-4">
          <p className="chargedetails">
            <b>GST(5%) - </b>{location.state.charges.gst}
          </p>
          </div>
          <div className="card-body-5">
          <p className="chargedetails">
            <b>Other Charges - </b>{location.state.charges.other}
          </p>
          </div>
          <div className="card-body-6">
          <p className="chargedetails">
            <b>Total Amount - </b>{location.state.charges.total}
          </p>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};
export default Charges;
