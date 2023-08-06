import React, { useState } from "react";
import Navbar from "./Homepage/navbar";
import Footer from "./Homepage/footer";
import { useNavigate } from "react-router-dom";

const AddCarDetails = () => {
    const navigate = useNavigate();
    const [formInput, setFormInput] = useState({
        carname: "",
        type: "",
        sourcelocate: "",
        destinationlocate: "",
        speedlimit: "",
        onewayrate: "",
        parkingrate: "",
        gst: "",
        othercharges: "",
        totalamount: "",
    });

    const handleForm = (e) => {
        const { name, value } = e.target;
        setFormInput({ ...formInput, [name]: value });
        console.log(name, value);
    };
    const OnAdd = () => {
        console.log(formInput);
    };
    const submitForm = () => {
        console.log(formInput);
        navigate("/add-car-details");
    }
    return (
        <>
            <Navbar />
            <section className="section-cardetails">
                <div className="addCardetails">
                    <form onSubmit={OnAdd} className="admin-form">
                        <div className="inputContainer">
                            <label>Car Name:</label>
                            <input type="text" value={formInput.carname} onChange={handleForm} name="carname" placeholder="Enter Car Name" />
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
                            <label>Source:</label>
                            <select
                                className="location"
                                name="sourcelocate"
                                value={formInput.sourcelocate}
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
                                name="destinationlocate"
                                value={formInput.destinationlocate}
                                onChange={handleForm}
                            >
                                <option disabled selected hidden>
                                    Destination Location
                                </option>
                                <option>Ranchi</option>
                                <option>Jamshedpur</option>
                            </select>
                        </div>
                        <div className="inputContainer">
                            <label>Speed Limit (in Kmph):</label>
                            <input type="number" name="speedlimit" value={formInput.speedlimit} onChange={handleForm} placeholder="Enter Speed Limit" />
                        </div>
                        <div className="inputContainer">
                            <label>One Way Rate:</label>
                            <input type="number" name="onewayrate" value={formInput.onewayrate} onChange={handleForm} placeholder="Enter rate" />
                        </div>
                        <div className="inputContainer">
                            <label>Parking Rate:</label>
                            <input type="number" name="parkingrate" value={formInput.parkingrate} onChange={handleForm} placeholder="Enter parking rate" />
                        </div>
                        <div className="inputContainer">
                            <label>GST:</label>
                            <input type="number" name="gst" value={formInput.gst} onChange={handleForm} placeholder="Enter GST%" />
                        </div>
                        <div className="inputContainer">
                            <label>Other Charges:</label>
                            <input type="number" name="othercharges" value={formInput.othercharges} onChange={handleForm} placeholder="Enter other charges" />
                        </div>
                        <div className="inputContainer">
                            <label>Total Amount:</label>
                            <input type="number" name="totalamount" value={formInput.totalamount} onChange={handleForm} placeholder="Enter total amount" />
                        </div>
                    </form>
                    <div className="submit-btn">
                        <button onClick={submitForm} className="btn btn-primary">Add Car</button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default AddCarDetails;