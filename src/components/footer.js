import React from 'react'
import { Link } from "react-router-dom";


function Footer() {
    return (
      <div className="Footer">
  <footer className="footer footer--bg position-relative overflow-hidden">
    <img className="footer-shape footer-shape--left wow fadeInLeft" data-wow-delay="1.5s" src="assets/images/shape/footer-shape-1.png" />
    <img className="footer-shape footer-shape--right wow fadeInRight" data-wow-delay="1.5s" src="assets/images/shape/footer-shape-2.png" />
    <div className="footer--top footer--padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-30">
            <div className="footer-widget">
              <div className="footer-widget__log mb-30">
              <Link to="/"><img src="assets/images/logo-light.png"  /></Link>
              </div>
              <div className="footer-widget__text">
                <p className="footer-widget__text_paragraph">
                  Grursus mal suada faci lisis the Lorem it ipsum consectetur
                  elit. fadolorit consecte elit.
                </p>
              </div>
              <div className="footer-widget__social">
                <ul>
                  <li className="footer-widget__social_list">
                    <a className="footer-widget__social_list--link facebook" href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="footer-widget__social_list">
                    <a className="footer-widget__social_list--link twitter" href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="footer-widget__social_list">
                    <a className="footer-widget__social_list--link instagram" href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li className="footer-widget__social_list">
                    <a className="footer-widget__social_list--link linkedin" href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li className="footer-widget__social_list">
                    <a className="footer-widget__social_list--link pinterest" href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-25">
            <div className="footer-widget">
              <div className="footer-widget__title">
                <h3 className="footer-widget__title_heading">IT Services</h3>
              </div>
              <div className="footer-widget__menu">
                <ul>
                  <li className="footer-widget__menu_list">
                    <a href="it-services.html">IT Services</a>
                  </li>
                  <li className="footer-widget__menu_list">
                    <a href="industries-services.html">Cyber Security</a>
                  </li>
                  <li className="footer-widget__menu_list">
                    <a href="services-details.html">Cloud Computing</a>
                  </li>
                  <li className="footer-widget__menu_list">
                    <a href="it-solution.html">Managed IT</a>
                  </li>
                  <li className="footer-widget__menu_list">
                    <a href="contact.html">IT Support</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 offset-lg-1 mb-25">
            <div className="footer-widget">
              <div className="footer-widget__title">
                <h3 className="footer-widget__title_heading">Important Links</h3>
              </div>
              <div className="footer-widget__menu">
                <ul>
                  <li className="footer-widget__menu_list">
                    <Link to="/about">About Us</Link>
                    
                  </li>
                  <li className="footer-widget__menu_list">
                    <a href="team.html">Meet Our Team</a>
                  </li>
                  <li className="footer-widget__menu_list">
                    <Link to="/blogs">News &amp; Media</Link>
                  </li>
                  <li className="footer-widget__menu_list">
                    <a href="case-01.html">Case Studies</a>
                  </li>
                  <li className="footer-widget__menu_list">
                    <a href="contact.html">Locations</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 offset-lg-1 mb-25">
            <div className="footer-widget">
              <div className="footer-widget__title">
                <h3 className="footer-widget__title_heading">Support</h3>
              </div>
              <div className="footer-widget__menu">
                <ul>
                  <li className="footer-widget__menu_list">
                    <a href="contact.html">Forum Support</a>
                  </li>
                  <li className="footer-widget__menu_list">
                    <a href="faq.html">Help &amp; FAQ</a>
                  </li>
                  <li className="footer-widget__menu_list">
                    <a href="contact.html">Contact Us</a>
                  </li>
                  <li className="footer-widget__menu_list">
                    <a href="price.html">Pricing and plans</a>
                  </li>
                  <li className="footer-widget__menu_list">
                    <a href="history.html">Cookies Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer--bottom footer--bottom-padding footer--bottom-border">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="footer__copyright">
              <p className="footer__copyright_text">
                © 2021 <a href="index.html">Techkit</a>. All Rights Reserved
                by
                <a href="https://www.radiustheme.com" rel="nofollow">RadiusTheme</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div className="progress-wrap">
    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>



      </div>
    );
  }
  
  export default Footer;


 
  