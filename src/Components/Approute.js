import React from "react";
import TopBanner from "./Homepage/Topbanner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carbook from "./Car";
import VehicleDetails from "./Vehiclebooking/VehicleDetails";
import Contactform from "./Contact";
import AddCarDetails from "./add-car-details";

const Approute = () =>{
    return(
        <>
    <BrowserRouter>
        <Routes>
          <Route path ='/' element={<TopBanner/>}/>
          <Route path="Car" element={<Carbook/>}/>
          <Route path="VehicleDetails" element={<VehicleDetails/>}/>
          <Route path="Contact" element={<Contactform/>}/>
          <Route path="add-car-details" element={<AddCarDetails/>}/>
          
        </Routes>
    </BrowserRouter> 
        </>
    )
}

export default Approute;