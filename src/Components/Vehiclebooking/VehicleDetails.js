import React from "react";
import "../style.css";
import "@fontsource/open-sans";
import Charges from "./charges";
import Passenger from "./Passenger";
import Navbar from "../Homepage/navbar";
import Footer from "../Homepage/footer";

const VehicleDetails = () => {
  return (
    <>
    <Navbar/>
      <div className="vehicle">
        <h2 className="title">Vehicle Details</h2>
        <div className="block">
          <div className="column">
            <p className="chargedetails">
              <b>Car - </b>
              Dezire
            </p>
            <p className="chargedetails">
              <b>Type - </b>
              One Way
            </p>
          </div>
          <div className="column">
            <p className="chargedetails">
              <b>Source - </b>Jamshedpur
            </p>
            <p className="chargedetails">
              <b>Speed Limit - </b>60kmph
            </p>
          </div>
          <div className="column1">
            <p className="chargedetails">
              <b>Destination - </b>Ranchi
            </p>
          </div>
          <div className="column1">
            <p className="chargedetails">
              <b>Seat - </b>4
            </p>
          </div>
        </div>
        </div>
      <Charges />
      <Passenger />
      <Footer/>
    </>
    //
  );
};

export default VehicleDetails;
