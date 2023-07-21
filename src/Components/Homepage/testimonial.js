import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

const Testimonial = () => {
    return (
        <>
            <section className="section-testimonial">
                <div className="testimonial-div">
                    <div className="testimonial-header">
                        <h1>Testimonials</h1>
                    </div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="testimonial-profile">
                            <img src={require("../assets/Car-1.jpg")}/>
                        </div>
                        <div className="testimonial-text">
                            <div className="testimonial-name">
                                <p style={{fontWeight:"bolder",textAlign:"center"}}>Kawaljeet Singh</p>
                            </div>
                            <div className="testimonial-message">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem debitis ipsa, nostrum dolorem laudantium sint ut vel maxime commodi non saepe ducimus ratione veritatis ea amet porro corrupti magni ab. Corporis id maxime, eligendi quaerat non cumque atque asperiores praesentium quam corrupti ipsa quis at aut, vel veritatis expedita ex, quia et. Quam dolor fugiat neque voluptatibus, tempora porro? Aut, suscipit earum, impedit optio inventore vitae facilis maxime quia temporibus voluptatibus veniam vel tempora dolores.</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="testimonial-profile">
                            <img src={require("../assets/Car-1.jpg")}/>
                        </div>
                        <div className="testimonial-text">
                            <div className="testimonial-name">
                                <p style={{fontWeight:"bolder",textAlign:"center"}}>Kawaljeet Singh-1</p>
                            </div>
                            <div className="testimonial-message">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem debitis ipsa, nostrum dolorem laudantium sint ut vel maxime commodi non saepe ducimus ratione veritatis ea amet porro corrupti magni ab. Corporis id maxime, eligendi quaerat non cumque atque asperiores praesentium quam corrupti ipsa quis at aut, vel veritatis expedita ex, quia et. Quam dolor fugiat neque voluptatibus, tempora porro? Aut, suscipit earum, impedit optio inventore vitae facilis maxime quia temporibus voluptatibus veniam vel tempora dolores.</p>
                            </div>
                        </div>
                    </div>
                    {/* <div class="carousel-item">
                        <div className="testimonial-profile">
                            <img src={require("../assets/Car-1.jpg")}/>
                        </div>
                        <div className="testimonial-text">
                            <div className="testimonial-name">
                                <p>Kawaljeet Singh</p>
                            </div>
                            <div className="testimonial-message">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem debitis ipsa, nostrum dolorem laudantium sint ut vel maxime commodi non saepe ducimus ratione veritatis ea amet porro corrupti magni ab. Corporis id maxime, eligendi quaerat non cumque atque asperiores praesentium quam corrupti ipsa quis at aut, vel veritatis expedita ex, quia et. Quam dolor fugiat neque voluptatibus, tempora porro? Aut, suscipit earum, impedit optio inventore vitae facilis maxime quia temporibus voluptatibus veniam vel tempora dolores.</p>
                            </div>
                        </div>
                    </div> */}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            </div>
            </section>
        </>
    )
}

export default Testimonial