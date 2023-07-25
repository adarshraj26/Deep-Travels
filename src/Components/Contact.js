import React from "react";
import Navbar from "./Homepage/navbar";
import Footer from "./Homepage/footer";

const Contactform = () => {
    return (
        <>
            <Navbar />
            <div className="contact-in">
                <div className="contact-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117711.93310571635!2d86.09336914165102!3d22.784007243800165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e31989f0e2b5%3A0xeeec8e81ce9b344!2sJamshedpur%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1689550174476!5m2!1sen!2sin"
                        width="100%"
                        height="100%" // Set the height according to your requirement
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="contact-form">
                    <h1>Contact Us</h1>
                    {/* <form>
                        <input type="text" placeholder="Name" className="contact-form-text" />
                        <input type="email" placeholder="Email" className="contact-form-text" />
                        <textarea placeholder="Message" className="contact-form-textarea"></textarea>
                        <input type="submit" name="Submit" className="contact-form-btn" />
                    </form> */}
                    <div className="contact-details">
                        <p className="text-center">9742431424</p>
                        <p className="text-center">kawaljeetsingh@gmail.com</p>
                        <p className="text-center">Kadma, Jamshedpur-831005</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contactform;