import React from "react";
import '../style.css';
import "@fontsource/open-sans";
const Charges = () => {
  return (
    <div className="charges">
      <h2 className="heading">Charges</h2>
      <div className="block"> 
        <div className="column2">
          <p>
            <b>One Way Rate - </b>
            ₹2000
          </p>
          <p>
            <b>Parking Rate - </b>
            ₹0
          </p>
        </div>
        <div className="column6">
          <p>
            <b>GST(5%) - </b>₹100
          </p>
        </div>
        <div className="column7">
          <p>
            <b>Other Charges - </b>₹0
          </p>
        </div>
        <div className="column8">
          <p>
            <b>Total Amount - </b>₹2100
          </p>
        </div>
      </div>
    </div>
  );
};

export default Charges;
