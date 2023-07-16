import React from "react";
import TopBanner from "./Homepage/Topbanner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carbook from "./Car";
import VehicleDetails from "./Vehiclebooking/VehicleDetails";

const Approute = () =>{
    return(
        <>
    <BrowserRouter>
        <Routes>
          <Route path ='/' element={<TopBanner/>}/>
          <Route path="Car" element={<Carbook/>}/>
          <Route path="VehicleDetails" element={<VehicleDetails/>}/>
        </Routes>
    </BrowserRouter> 
        </>
    )
}

export default Approute;