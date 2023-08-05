import React from "react";
import "../style.css";
import "@fontsource/open-sans";
import Charges from "./charges";
import Passenger from "./Passenger";
import Navbar from "../Homepage/navbar";
import Footer from "../Homepage/footer";
import { useLocation } from "react-router-dom";
const VehicleDetails = (props) => {
  const location= useLocation();
  console.log( location.state,"hello");
  console.log(location.state.name, "name");
  console
  // const {state}=props.location;
  // console.log(state, "hello");
  return (
    <>
    <Navbar/>
    <section className="section-vehicle-details">
     <h2 className="title">Vehicle Details</h2>
      <div className="container-4">
       
        <div className="card-4">
          <div className="card-body-7">
            <p className="chargedetails">
              <b>Car - </b>
              Dezire
            </p>
            <p className="chargedetails">
              <b>Type - </b>
              One Way
            </p>
          </div>
          <div className="card-body-8">
            <p className="chargedetails">
              <b>Source - </b>Jamshedpur
            </p>
            <p className="chargedetails">
              <b>Speed Limit - </b>60kmph
            </p>
          </div>
          <div className="card-body-9">
            <p className="chargedetails">
              <b>Destination - </b>Ranchi
            </p>
          </div>
          <div className="card-body-10">
            <p className="chargedetails">
              <b>Seat - </b>4
            </p>
          </div>
        </div>
        </div>
        </section>
      <Charges />
      <Passenger />
      <Footer/>
    </>

  );
};

export default VehicleDetails;
