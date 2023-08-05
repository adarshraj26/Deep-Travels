import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wizard from "./wizard";
import BottomBanner from "./banner";
import Testimonial from "./testimonial";
import Footer from "./footer";
import Navbar from "./navbar";
import cabsDetails from "../cabs";

const TopBanner = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    source: "",
    destination: "",
    journeydate: "",
    pickupTime: "",
  });
  const [disable, setDisable] = useState("typing");
  function goToAbout() {
    console.log(formValue);
    navigate("/Car");

  }
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    console.log(name,value)
  };
  const handleSubmit = () => {
    console.log(formValue);
    setDisable("submitted");
  };
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
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <label>Source</label>
                <select
                  required
                  value={formValue.source}
                  name="source"
                  onChange={handleInput}
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
                  value={formValue.destination}
                  name="destination"
                  onChange={handleInput}
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
                <input
                  type="date"
                  value={formValue.journeydate}
                  name="journeydate"
                  onChange={handleInput}
                />
              </div>
              <div className="inputBox">
                <label>Pickup Time</label>
                <input
                  type="time"
                  value={formValue.pickupTime}
                  name="pickupTime"
                  onChange={handleInput}
                />
              </div>
            </form>
            <div className="btn">
              <button
                onClick={goToAbout}
                className="search-btn"
                disabled={
                  formValue.source.length === 0 ||
                  formValue.destination.length === 0 ||
                  formValue.journeydate.length === 0 ||
                  formValue.pickupTime.length === 0 ||
                  disable === "submitted"
                }
              >
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
