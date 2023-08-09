import React, { useState } from "react";
import Navbar from "./Homepage/navbar";
import Footer from "./Homepage/footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const AddCarDetails = () => {
  const navigate = useNavigate();

  const [formInput, setFormInput] = useState({
    name: "",
    type: "",
    source: "",
    destination: "",
    speedLimit: "",
    oneWayRate: "",
    parking: "",
    gst: "",
    other: "",
    total: "",
    seat: "",
    image: "",
    rate: "",
  });
  const getUniqueKey = () => {
    return Math.floor(Math.random()*10000000000)
}
  
  const OnAdd = async(event) => {
    event.preventDefault();
    try {
      console.log("hello", formInput);
      const uniqueIDd = Math.floor(Math.random() * 10000000000);
      const response = await axios.post("https://jo8aqd7jvb.execute-api.us-east-1.amazonaws.com/dev/details", {...formInput, id: uniqueIDd});
      console.log('Data sent successfully:', response.data);
    setFormInput({
      name: "",
      type: "",
      source: "",
      destination: "",
      speedLimit: "",
      oneWayRate: "",
      parking: "",
      gst: "",
      other: "",
      total: "",
      seat: "",
      image: "",
      rate: "",
    });
    navigate("/add-car-details");
  }
  catch (error) {
    console.error('Error sending data:', error);
  };
    // console.log(event);
    console.log(formInput);
    
  };
  const handleForm = (event) => {
    const { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
    console.log(name, value);
  };
  const submitForm = () => {
  
    console.log(formInput);
    navigate("/add-car-details");
  };
  return (
    <>
      <Navbar />
      <section className="section-cardetails">
        <div className="addCardetails">
          <form onSubmit={OnAdd} className="admin-form">
            <div className="inputContainer">
              <label>Car Name:</label>
              <input
                type="text"
                value={formInput.name}
                onChange={handleForm}
                name="name"
                placeholder="Enter Car Name"
              />
            </div>
            <div className="inputContainer">
              <label>Image</label>
              <input
                type="url"
                name="image"
                value={formInput.image}
                onChange={handleForm}
                placeholder="Enter image link"
              />
            </div>
            <div className="inputContainer">
              <label>Type:</label>
              <select
                className="location"
                name="type"
                value={formInput.type}
                onChange={handleForm}
              >
                <option disabled selected hidden>
                  Select type
                </option>
                <option>One Way</option>
                <option>Two Way</option>
              </select>
            </div>
            <div className="inputContainer">
              <label>Seat:</label>
              <input
                type="number"
                name="seat"
                value={formInput.seat}
                onChange={handleForm}
                placeholder="Enter Seats"
              />
            </div>
            <div className="inputContainer">
              <label>Rate:</label>
              <input
                type="number"
                name="rate"
                value={formInput.rate}
                onChange={handleForm}
                placeholder="Enter Rate"
              />
            </div>
            <div className="inputContainer">
              <label>Source:</label>
              <select
                className="location"
                name="source"
                value={formInput.source}
                onChange={handleForm}
              >
                <option disabled selected hidden>
                  Source Location
                </option>
                <option>Ranchi</option>
                <option>Jamshedpur</option>
              </select>
            </div>
            <div className="inputContainer">
              <label>Destination:</label>
              <select
                className="location"
                name="destination"
                value={formInput.destination}
                onChange={handleForm}
              >
                <option disabled selected hidden>
                  Destination Location
                </option>
                <option>Jamshedpur</option>
                <option>Ranchi</option>
              </select>
            </div>
            <div className="inputContainer">
              <label>Speed Limit (in Kmph):</label>
              <input
                type="number"
                name="speedLimit"
                value={formInput.speedLimit}
                onChange={handleForm}
                placeholder="Enter Speed Limit"
              />
            </div>
            <div className="inputContainer">
              <label>One Way Rate:</label>
              <input
                type="number"
                name="oneWayRate"
                value={formInput.oneWayRate}
                onChange={handleForm}
                placeholder="Enter rate"
              />
            </div>
            <div className="inputContainer">
              <label>Parking Rate:</label>
              <input
                type="number"
                name="parking"
                value={formInput.parking}
                onChange={handleForm}
                placeholder="Enter parking rate"
              />
            </div>
            <div className="inputContainer">
              <label>GST:</label>
              <input
                type="number"
                name="gst"
                value={formInput.gst}
                onChange={handleForm}
                placeholder="Enter GST%"
              />
            </div>
            <div className="inputContainer">
              <label>Other Charges:</label>
              <input
                type="number"
                name="other"
                value={formInput.other}
                onChange={handleForm}
                placeholder="Enter other charges"
              />
            </div>
            <div className="inputContainer">
              <label>Total Amount:</label>
              <input
                type="number"
                name="total"
                value={formInput.total}
                onChange={handleForm}
                placeholder="Enter total amount"
              />
            </div>
            <div className="submit-btn">
            <button onClick={submitForm} className="btn btn-primary">
              Add Car
            </button>
          </div>
          </form>
          
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AddCarDetails;