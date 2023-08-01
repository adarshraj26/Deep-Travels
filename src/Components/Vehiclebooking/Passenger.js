import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const Passenger = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);
  const handleChange = (value) => {
    setPhoneNumber(value);
  };

  return (
    <>
    <section className="section-passenger-details">
      <h2 className="passDetails">Passenger Details</h2>
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
                />
                <label for="inputJourney col-sm-4">Journey Date</label>
                <input type="date" class="form-control" id="inputJourney" />
                <label htmlFor="inputSource col-sm-4"> Source Location</label>
                {/* <input type="text" class="form-control" id="inputSource" /> */}
                <select className="locate" required>
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
                />
                <label for="inputTime col-sm-4" placeholder="Pickup Time">Pickup Time</label>
                <input type="time" class="form-control" id="inputTime" />
                <label for="inputAddress2 col-sm-4">Destination Location</label>
                {/* <input type="text" class="form-control" id="inputAddress2" /> */}
                <select className="locate" required>
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
                  value={phoneNumber}
                  onChange={handleChange}
                  inputProps={{ required: true }}
                />

                <label for="inputDestination col-sm-6" style={{paddingBottom:'2px'}}>Pickup Address</label>
                <input type="text" class="form-control" id="inputDestination" placeholder="Pickup Address" />
              </div>
            </div>
          </div>
          <div className="card-img-1">
            <button type="submit" className="btn-1 bg-black text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Passenger;
