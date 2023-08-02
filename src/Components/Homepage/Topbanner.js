import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wizard from "./wizard";
import BottomBanner from "./banner";
import Testimonial from "./testimonial";
import Footer from "./footer";
import Navbar from "./navbar";

const TopBanner = () => {
  const navigate = useNavigate();
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [journeyDate, setJourneyDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  function goToAbout() {
    navigate("/Car");
  }

  return (
    <>
      <Navbar />
      <section className="top-banner">
        <div className="whole-banner">
          <div className="banner-left">
            <div className="banner-text">
              <div className="banner-header">
                <h1 className="text-start">Rent the Best Car in your Area</h1>
              </div>
              <div className="banner-body">
                <p className="text-start">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Incidunt facilis illo laudantium debitis, odio a id, nisi sunt
                  amet delectus reiciendis corrupti odit quod saepe quam modi
                  doloribus? Fugit et id a quasi inventore eligendi velit
                  delectus nobis voluptates optio, incidunt non obcaecati quae
                  perferendis odit pariatur animi debitis totam. Hic veniam
                  reiciendis nisi unde.
                </p>
              </div>
            </div>
          </div>
          <div className="banner-right">
            <div className="color-banner"></div>
            <div className="banner-img"></div>
          </div>
        </div>

        <div className="search">
          <div className="search-car">
            <form>
              <div className="inputBox">
                <label>Source</label>
                <select
                  required
                  value={source}
                  name="source"
                  onChange={(e) => setSource(e.target.value)}
                >
                  <option value={""} disabled selected hidden>
                    Search Location
                  </option>
                  <option>Jamshedpur</option>
                  <option>Ranchi</option>
                </select>
              </div>
              <div className="inputBox">
                <label>Destination</label>
                <select
                  required
                  value={destination}
                  name="destination"
                  onChange={(e) => setDestination(e.target.value)}
                >
                  <option disabled selected hidden>
                    Destination Location
                  </option>
                  <option>Ranchi</option>
                  <option>Jamshedpur</option>
                </select>
              </div>
              <div className="inputBox">
                <label>Journey Date</label>
                <input type="date"  value={journeyDate}
                    name="journeyDate"
                    onChange={(e) => setJourneyDate(e.target.value)}/>
              </div>
              <div className="inputBox">
                <label>Pickup Time</label>
                <input type="time" value={pickupTime}
                    name="pickupTime"
                    onChange={(e) => setPickupTime(e.target.value)}/>
              </div>
            </form>
            <div className="btn">
              <button onClick={goToAbout} className="search-btn">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      <Wizard />
      <BottomBanner />
      <Testimonial />
      <Footer />
    </>
  );
};

export default TopBanner;
