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
  console.log( "name: ",location.state.name);
  console.log( "image: ",location.state.image);
  console.log( "rate: ",location.state.rate);
  console.log( "vehicle details: ",location.state.vehicleDetails);
  console.log( "charges: ",location.state.charges);
  console.log( "source: ",location.state.source);
  console.log( "destination: ",location.state.destination);
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
              {location.state.name}
            </p>
            <p className="chargedetails">
              <b>Type - </b>
              {location.state.type}
            </p>
          </div>
          <div className="card-body-8">
            <p className="chargedetails">
              <b>Source - </b>{location.state.source}
            </p>
            <p className="chargedetails">
              <b>Speed Limit - </b>{location.state.vehicleDetails.speedLimit}
            </p>
          </div>
          <div className="card-body-9">
            <p className="chargedetails">
              <b>Destination - </b>{location.state.destination}
            </p>
          </div>
          <div className="card-body-10">
            <p className="chargedetails">
              <b>Seat - </b>{location.state.vehicleDetails.seat}
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
