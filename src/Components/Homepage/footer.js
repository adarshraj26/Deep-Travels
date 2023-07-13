import React from 'react';
import '../style.css';
import logo from '../assets/logo.png';


const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-box">
                <img src={logo} alt="logo" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laboriosam libero similique numquam debitis, amet, minima voluptate architecto placeat dolorem aut esse, impedit fugiat? Nostrum consequuntur, quos laudantium totam voluptate a enim dignissimos saepe veritatis libero eaque commodi molestiae molestias eos ad officia porro omnis possimus illum! Sequi deserunt, voluptates perferendis iure aut tempora labore, ab qui quasi totam velit.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-box">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-box">
                <div className='single-box-content'>
                  <h2 >Wanna get more special offers:</h2>
                  <p>Subscribe to Newsletter</p>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter your Email" aria-label="Enter your Email ..." aria-describedby="basic-addon2" />
                {/* <span className="input-group-text" id="basic-addon2">Subscribe</span> */}
              </div>
              <div className='subscribe-btn'>
                <button type="button" class="btn btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </footer>


    </>
  )
}

export default Footer;