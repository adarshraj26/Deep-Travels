import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Homepage/navbar';
import Footer from './Homepage/footer';
import carDetails from './cardetails';
const Carbook = () => {
    console.log("car details", carDetails)
   
    return (
        <>
        <Navbar/>
                <div className='card-header'>
                    <h1 class="text-start">Cabs from Jamshedpur to Ranchi</h1>
                </div>
            <section className='section-card'>
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
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}


export default Carbook;