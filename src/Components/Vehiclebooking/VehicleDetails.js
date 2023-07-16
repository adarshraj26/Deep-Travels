import React from "react";
import '../style.css';
import "@fontsource/open-sans";
import Charges from "./charges";
import Passenger from "./Passenger";

const VehicleDetails = () => {
  return (
    <div className="vehicle">
      <h2 className="title">Vehicle Details</h2>
      {/* <div className="row"> */}
      <div className="column">
        <p>
          <b>Car - </b>
          Dezire
        </p>
        <p>
          <b>Type - </b>
          One Way
        </p>
      </div>
      <div className="column">
        <p><b>Source - </b>Jamshedpur</p>
        <p><b>Speed Limit - </b>60kmph</p>
      </div>
      <div className="column1">
        <p>
          <b>Destination - </b>Ranchi
        </p>
        <p></p>
      </div>
      <div className="column1">
        <p>
          <b>Seat - </b>4
        </p>
      </div>
    <Charges/>
    <Passenger/>
    </div>
    // </div>
  );
};

export default VehicleDetails;
