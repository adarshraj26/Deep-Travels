import React from "react";

const AddCarDetails = () =>{
    return(
        <>
        <section className="section-cardetails">
            <div className="addCardetails">
                <form className="admin-form">
                    <div className="inputContainer">
                        <label>Car Name:</label>
                        <input type="text"  name="carname" placeholder="Enter Car Name"/>
                    </div>
                    <div className="inputContainer">
                        <label>Type:</label>
                        <input type="text"  name="type" placeholder="Enter Car type"/>
                    </div>
                    <div className="inputContainer">
                        <label>Source:</label>
                        <input type="text"  name="source" placeholder="Source Location"/>
                    </div>
                    <div className="inputContainer">
                        <label>Speed Limit (in Kmph):</label>
                        <input type="number"  name="speedlimit" placeholder="Enter Speed Limit"/>
                    </div>
                    <div className="inputContainer">
                        <label>Destination:</label>
                        <input type="text"  name="destination" placeholder="Destination Location"/>
                    </div>
                    <div className="inputContainer">
                        <label>One Way Rate:</label>
                        <input type="number"  name="onewayrate" placeholder="Enter rate"/>
                    </div>
                    <div className="inputContainer">
                        <label>Parking Rate:</label>
                        <input type="number"  name="parkingrate" placeholder="Enter parking rate"/>
                    </div>
                    <div className="inputContainer">
                        <label>GST:</label>
                        <input type="number"  name="gst" placeholder="Enter GST%"/>
                    </div>
                    <div className="inputContainer">
                        <label>Other Charges:</label>
                        <input type="number"  name="othercharges" placeholder="Enter other charges"/>
                    </div>
                    <div className="inputContainer">
                        <label>Total Amount:</label>
                        <input type="number"  name="totalamount" placeholder="Enter total amount"/>
                    </div>
                </form>
                <div className="submit-btn">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default AddCarDetails;