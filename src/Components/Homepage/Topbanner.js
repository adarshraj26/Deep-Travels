import React from "react";

const TopBanner = () => {
    return (
        <>
            <section className="top-banner">
                <div className="whole-banner">
                    <div className="banner-left">
                        <div className="banner-text">
                            <div className="banner-header">
                                <h1 className="text-start">Rent the Best Car in your Area</h1>
                            </div>
                            <div className="banner-body">
                                <p className="text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt facilis illo laudantium debitis, odio a id, nisi sunt amet delectus reiciendis corrupti odit quod saepe quam modi doloribus? Fugit et id a quasi inventore eligendi velit delectus nobis voluptates optio, incidunt non obcaecati quae perferendis odit pariatur animi debitis totam. Hic veniam reiciendis nisi unde.</p>
                            </div>
                        </div>
                    </div>
                    <div className="banner-right">
                        <div className="color-banner"></div>
                        <div className="banner-img"></div>
                    </div>
                </div>



                <div className="search">


                    <div className="search-car">
                        <form>
                            <div className="inputBox">
                                <label>Source</label>
                                <select required>
                                    <option value={""} disabled selected hidden>Search Location</option>
                                    <option>Jamshedpur</option>
                                    <option>Ranchi</option>
                                </select>
                            </div>
                            <div className="inputBox">
                                <label>Destination</label>
                                <select required>
                                    <option disabled selected hidden>Destination Location</option>
                                    <option>Ranchi</option>
                                    <option>Jamshedpur</option>
                                </select>
                            </div>
                            <div className="inputBox">
                                <label>Journey Date</label>
                                <input type="date" />
                            </div>
                            <div className="inputBox">
                                <label>Pickup Time</label>
                                <input type="time" />
                            </div>
                        </form>
                        <div className="btn">
                            <button className="search-btn">Search</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopBanner;