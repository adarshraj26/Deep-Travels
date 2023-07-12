import React from 'react';
import '../style.css';
import logo from '../assets/logo.png';


const Footer = () => {
    return (
        <>
        {/* <footer class="footer">
            <div class="container">

                <div class="footer-top">

                    <div class="footer-brand">
                        <a href="#" class="logo">
                            <img src={logo} alt="logo"/>

                        </a>

                        <p class="footer-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem amet dolorum pariatur, nobis fuga ad
                            voluptatibus excepturi dignissimos suscipit ipsa nesciunt neque! Omnis reiciendis error reprehenderit a
                            porro sunt pariatur illo dolorum dolor libero, totam necessitatibus quaerat veniam deleniti fuga ex soluta,
                            sapiente harum ducimus molestias quas corrupti! Cumque, quae.
                        </p>
                    </div>

                    <ul class="footer-list">

                        <li>
                            <a href="#" class="footer-link">Home</a>
                        </li>

                        <li>
                            <a href="#" class="footer-link">About</a>
                        </li>

                        <li>
                            <a href="#" class="footer-link">Contact Us</a>
                        </li>

                        <li>
                            <a href="#" class="footer-link">Terms & Conditions</a>
                        </li>

                        <li>
                            <a href="#" class="footer-link">Privacy Policy</a>
                        </li>

                    </ul>

                    <ul class="footer-list">

                        <li>
                            <p class="footer-list-title">Wanna get more special Offers:</p>
                            <p class="footer-list-title">Subscribe to Newsletter</p>
                        </li>

                        <button type="submit" class="btn">Subscribe</button>

                    </ul>

                </div>

            </div>

        </footer> */}


<footer id="footer" className="footer-1">
      <div className="main-footer widgets-dark typo-light">
        <div className="container">
          {/* <div className="row"> */}

            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="widget subscribe no-box">
              <a href="#" class="logo">
                            <img src={logo} alt="logo"/>

                        </a>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laboriosam libero similique numquam debitis, amet, minima voluptate architecto placeat dolorem aut esse, impedit fugiat? Nostrum consequuntur, quos laudantium totam voluptate a enim dignissimos saepe veritatis libero eaque commodi molestiae molestias eos ad officia porro omnis possimus illum! Sequi deserunt, voluptates perferendis iure aut tempora labore, ab qui quasi totam velit.</p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="widget no-box">
                <ul className="thumbnail-widget">
                  <li>
                    <div className="thumb-content"><a href="#.">Home</a></div>
                  </li>
                  <li>
                    <div className="thumb-content"><a href="#.">About</a></div>
                  </li>
                  <li>
                    <div className="thumb-content"><a href="#.">Contact Us</a></div>
                  </li>
                  <li>
                    <div className="thumb-content"><a href="#.">Terms & Conditions</a></div>
                  </li>
                  <li>
                    <div className="thumb-content"><a href="#.">Privacy Policy</a></div>
                  </li>
                </ul>
              </div>
            </div>


            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="widget no-box sub">
                <p className="upper-text">Wanna get more special offers:</p>
                <p>Subscribe to Newsletter</p>
                <div className="footer-btn">
                  {/* <input className="subscribebutton ripplelink" type="subscribe" value="Subscribe" /> */}
                  <button  className='btn' type='subscribe'>Subscribe</button>
                </div>
              </div>
            </div>

          {/* </div> */}
        </div>
      </div>
    </footer>

        </>
)
}

export default Footer;