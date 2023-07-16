import React from "react";


const Passenger = () => {
  return (
    <>
      <div className="container-1">
        <h2 className="passDetails">Passenger Details</h2>
        <div className="card-group">
          <div className="card-img-card-img-overlay">
            <div className="card-body-1">
              <label for="InputName col-sm-4">Name</label>
              <input type="text" class="form-control" id="InputName" />
              <label for="inputJourney col-sm-4">Journey Date</label>
              <input type="date" class="form-control" id="inputJourney" />
              <label htmlFor="inputSource col-sm-4"> Source Location</label>
              <input type="text" class="form-control" id="inputSource" />
            </div>
          </div>
          <div className="card-img-card-img-overlay">
            <div className="card-body-2">
              <label for="inputEmail col-sm-4">Email</label>
              <input type="text" class="form-control" id="inputEmail" />
              <label for="inputTime col-sm-4">Pickup Time</label>
              <input type="time" class="form-control" id="inputTime" />
              <label for="inputAddress2 col-sm-4">Destination Location</label>
              <input type="text" class="form-control" id="inputAddress2" />
            </div>
          </div>
          <div className="card-img-card-img-overlay">
            <div className="card-body-3">
              <label for="inputState col-sm-6">Mobile Number</label>
              <input type="text" class="form-control" id="inputState" />
              <label for="inputDestination col-sm-6">Pickup Address</label>
              <input type="text" class="form-control" id="inputDestination" />
            </div>
          </div>
          
            <div className="card-text-1">
          <button type="submit" class="btn-1 bg-black text-white">
            Submit
          </button>
          </div>
          </div>
        </div>
    
    </>
  );
};

export default Passenger;