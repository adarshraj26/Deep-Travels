import { getFormHelperTextUtilityClasses } from "@mui/material";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
const Passenger = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    sourceLocation: "",
    destinationLocation: "",
    journeyDate: "",
    pickupTime: "",
    pickupAddress: "",
    phoneNumber: "",
  });
  // const [disabled, setDisabled] = useState("typing");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [valid, setValid] = useState(true);
  // const [name, setName] = useState("");
  // const [journeyDate, setJourneydate] = useState("");
  // const [sourceLocation, setSourcelocation] = useState("");
  // const [email, setEmail] = useState("");
  // const [pickupTime, setPickuptime] = useState("");
  // const [destinationLocation, setDestinationlocation] = useState("");
  // const [pickupAddress, setPickupaddress] = useState("");
  const handleChange = (value) => {
    setPhoneNumber(value);
  };
function submitData(){
console.log(data)
navigate("");
}
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(name, value);
  };

  // const handle = () => {
  //   localStorage.setItem("Name", name);
  //   localStorage.setItem("Email", email);
  //   localStorage.setItem("Pickup Time", pickupTime);
  //   localStorage.setItem("Journey Date", journeyDate);
  //   localStorage.setItem("Pickup Address", pickupAddress);
  //   localStorage.setItem("Source Location", sourceLocation);
  //   localStorage.setItem("Destination Location", destinationLocation);
  //   localStorage.setItem("Phone Number", phoneNumber);
  // };
  const Onsubmit = () => {
    console.log(data);
    // setDisabled("submitted");
  };

  return (
    <>
      <section className="section-passenger-details">
        <h2 className="passDetails">Passenger Details</h2>
        <form onSubmit={Onsubmit}>
      
        <div className="container-1">
          <div className="card-2">
          
            <div className="card-group">
              <div className="card-img-card-img-overlay">
                <div className="card-body-1">
                
                  <label for="InputName col-sm-4">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="InputName"
                    placeholder=" Enter Name"
                    value={data.name}
                    name="name"
                    onChange={handleChanges}
                  />
                  <label for="inputJourney col-sm-4">Journey Date</label>
                  <input
                    type="date"
                    class="form-control"
                    id="inputJourney"
                    value={data.journeyDate}
                    name="journeyDate"
                    onChange={handleChanges}
                  />
                  <label htmlFor="inputSource col-sm-4"> Source Location</label>
                  {/* <input type="text" class="form-control" id="inputSource" /> */}
                  <select
                    className="locate"
                    required
                    value={data.sourceLocation}
                    name="sourceLocation"
                    onChange={handleChanges}
                  >
                    <option disabled selected hidden>
                      Source Location
                    </option>
                    <option>Ranchi</option>
                    <option>Jamshedpur</option>
                  </select>
                </div>
              </div>
              <div className="card-img-card-img-overlay">
                <div className="card-body-2">
                  <label for="inputEmail col-sm-4">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Enter Email"
                    value={data.email}
                    name="email"
                    onChange={handleChanges}
                  />
                  <label for="inputTime col-sm-4" placeholder="Pickup Time">
                    Pickup Time
                  </label>
                  <input
                    type="time"
                    class="form-control"
                    id="inputTime"
                    value={data.pickupTime}
                    name="pickupTime"
                    onChange={handleChanges}
                  />
                  <label for="inputAddress2 col-sm-4">
                    Destination Location
                  </label>
                  {/* <input type="text" class="form-control" id="inputAddress2" /> */}
                  <select
                    className="locate"
                    required
                    value={data.destinationLocation}
                    name="destinationLocation"
                    onChange={handleChanges}
                  >
                    <option disabled selected hidden>
                      Destination Location
                    </option>
                    <option>Ranchi</option>
                    <option>Jamshedpur</option>
                  </select>
                </div>
              </div>
              <div className="card-img-card-img-overlay">
                <div className="card-body-11">
                  <label for="phone col-sm-6">Mobile Number</label>

                  <PhoneInput
                    country={"in"}
                    class="form-control"
                    id="phone"
                    placeholder="xxx-xxx-xxxx"
                    pattern="[6789][0-9]{9}"
                    required
                    value={data.phoneNumber}
                    onChange={handleChanges}
                    inputProps={{ required: true }}
                  />

                  <label
                    for="inputDestination col-sm-6"
                    style={{ paddingBottom: "2px" }}
                  >
                    Pickup Address
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputDestination"
                    placeholder="Pickup Address"
                    value={data.pickupAddress}
                    name="pickupAddress"
                    onChange={handleChanges}
                  />
                </div>
              </div>
            </div>
           
            <div className="card-img-1">
              <button
               onClick={submitData}
                type="submit"
                className="btn-1 bg-black text-white"
                value="data saved"

                // disabled={
                //   data.name.length === 0 ||
                //   data.email.length === 0 ||
                //   data.phoneNumber.length === 0 ||
                //   data.sourceLocation.length === 0 ||
                //   data.destinationLocation.length === 0 ||
                //   data.journeyDate.length === 0 ||
                //   data.pickupTime.length === 0 ||
                //   data.pickupAddress.length === 0 ||
                //   disabled === "submitted"
                
               
                
              >
                Submit
              </button>
              
            </div>
          </div>
          
        </div>
        </form>
      </section>
    </>
  );
};

export default Passenger;
