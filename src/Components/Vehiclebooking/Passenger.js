import React from "react";
import '../style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/open-sans";
const Passenger = () => {
  return (
    <>
      {/* <div className="Passenger"> */}
        <h2 className="passDetails">Passenger Details</h2>
        <div className="card-body ms-4">
          <div class="column3">
            <div class="form-group row">
              <label for="InputName col-sm-4">Name</label>
              <input type="text" class="form-control" id="InputName" />
            </div>
            <div class="form-group row">
              <label for="inputEmail4 col-sm-4">Journey Date</label>
              <input type="date" class="form-control" id="inputEmail" />
            </div>
            <div class="form-group row">
              <label htmlFor="inputMobileNumber col-sm-4">
                Source Location
              </label>
              <input type="text" class="form-control" id="inputMobileNumber" />
            </div>
          </div>
          <div class="column4 ">
            <div class="form-group row">
              <label for="inputJourney col-sm-4">Email</label>
              <input type="text" class="form-control" id="inputAddress" />
            </div>

            <div class="form-group row ">
              <label for="inputTime col-sm-4">Pickup Time</label>
              <input type="time" class="form-control" id="inputTime" />
            </div>
            <div class="form-group row ">
              <label for="inputAddress2 col-sm-4">Destination Location</label>
              <input type="text" class="form-control" id="inputAddress2" />
            </div>
          </div>
          <div class="column5">
            <div class="form-group row">
              <label for="inputState col-sm-6">Mobile Number</label>
              <input type="text" class="form-control" id="inputState" />
            </div>
            <div class="form-group row">
              <label for="inputDestination col-sm-6">Pickup Address</label>
              <input type="text" class="form-control" id="inputDestination" />
            </div>
          </div>
          <div className="button md-block">
            <button type="submit" class="btn-1 bg-black text-white">
              Submit
            </button>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Passenger;
