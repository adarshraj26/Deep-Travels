import React from "react";
import '../style.css';

const Testimonial = () => {
    return (
        <>
            <section className="section-testimonial">
                <div className="testimonial-header">
                    <p>Testimonials</p>
                </div>
                <div className="testimonial-card">
                    <div className="card-image">
                        <img src="..." alt="..." />
                    </div>
                    <div className="card-text">
                        <div className="header-text">
                            <p>Kawaljeet Singh</p>
                        </div>
                        <div className="main-text">
                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt recusandae, cumque excepturi sit aut quia architecto libero officiis magnam inventore vitae sapiente ratione tempore sed expedita, nostrum dolore eum voluptates voluptate soluta quas voluptatum aspernatur quae exercitationem. Totam dolor nisi accusantium nobis suscipit, repellendus nam sequi iste excepturi error qui quibusdam aspernatur non alias sunt recusandae deserunt ratione! Praesentium molestiae atque veniam placeat quis porro reprehenderit error natus sapiente tenetur!"</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Testimonial