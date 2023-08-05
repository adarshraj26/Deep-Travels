import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Homepage/navbar';
import Footer from './Homepage/footer';
import carDetails from './cardetails';
import { useNavigate } from 'react-router-dom';
import cabsDetails from './cabs';

const Carbook = (props) => {
    console.log("Cabsdetails: ",cabsDetails);
   const navigate = useNavigate();
    return (
        <>
        <Navbar/>
                <div className='card-header'>
                    <h1 class="text-start">Cabs from Jamshedpur to Ranchi</h1>
                </div>
            <section className='section-card'>
                <div className='main-card row'>
                {carDetails?.map((item,index)=>(
                   <div class="card col-sm-12 col-md-4 col-lg-4" style={{ width: "22rem" }}>
                   <img src={item.image} class="card-img-top" alt="Maruti Suzuki Dezire" />
                   <div class="card-body">
                       <h5 class="card-title">{item.name}</h5>
                       <p class="card-text">&#8377; {item.rate}</p>
                       <button className='btn btn-primary' onClick={()=>navigate("/VehicleDetails",{state:item})} >Book now</button>

                       {/* <Link to={{ pathname:"/VehicleDetails",state:item} }className='btn btn-primary'>Book Now</Link> */}
                   </div>
               </div> 
                ))}
                    {/* <div class="card col-sm-12" style={{ width: "22rem" }}>
                        <img src={require("./assets/Car-4.jpg")} class="card-img-top" alt="Maruti Suzuki Dezire" />
                        <div class="card-body">
                            <h5 class="card-title">Maruti Suzuki Dezire</h5>
                            <p class="card-text">&#8377; 2000</p>
                            <Link to={"/VehicleDetails"} className='btn btn-primary'>Book Now</Link>
                        </div>
                    </div>
                    <div class="card col-sm-12" style={{ width: "22rem" }}>
                        <img src={require("./assets/Car-4.jpg")} class="card-img-top" alt="Maruti Suzuki Dezire" />
                        <div class="card-body">
                            <h5 class="card-title">Toyota Innova</h5>
                            <p class="card-text">&#8377; 2000</p>
                            <Link to={"/VehicleDetails"} className='btn btn-primary'>Book Now</Link>
                        </div>
                    </div>

                    <div class="card col-sm-12" style={{ width: "22rem" }}>
                        <img src={require("./assets/Car-4.jpg")} class="card-img-top" alt="Maruti Suzuki Dezire" />
                        <div class="card-body">
                            <h5 class="card-title">Honda Amaze</h5>
                            <p class="card-text">&#8377; 2000</p>
                            <Link to={"/VehicleDetails"} className='btn btn-primary'>Book Now</Link>
                        </div>
                    </div>
                </div>
                <div className='main-card row-md-4'>
                    <div class="card col-sm-12" style={{ width: "22rem" }}>
                        <img src={require("./assets/Car-4.jpg")} class="card-img-top" alt="Maruti Suzuki Dezire" />
                        <div class="card-body">
                            <h5 class="card-title">Maruti Suzuki Dezire</h5>
                            <p class="card-text">&#8377; 2000</p>
                            <Link to={"/VehicleDetails"} className='btn btn-primary'>Book Now</Link>
                        </div>
                    </div>
                    <div class="card col-sm-12" style={{ width: "22rem" }}>
                        <img src={require("./assets/Car-4.jpg")} class="card-img-top" alt="Maruti Suzuki Dezire" />
                        <div class="card-body">
                            <h5 class="card-title">Maruti Suzuki Dezire</h5>
                            <p class="card-text">&#8377; 2000</p>
                            <Link to={"/VehicleDetails"} className='btn btn-primary'>Book Now</Link>
                        </div>
                    </div>
                    <div class="card col-sm-12" style={{ width: "22rem" }}>
                        <img src={require("./assets/Car-4.jpg")} class="card-img-top" alt="Maruti Suzuki Dezire" />
                        <div class="card-body">
                            <h5 class="card-title">Maruti Suzuki Dezire</h5>
                            <p class="card-text">&#8377; 2000</p>
                            <Link to={"/VehicleDetails"} className='btn btn-primary'>Book Now</Link>
                        </div>
                    </div> */}
                </div>
            </section>
            <Footer/>
        </>
    )
}


export default Carbook;