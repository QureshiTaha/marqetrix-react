import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import AboutHero from '../components/hero-breadcrumbs';
import { Link } from "react-router-dom";

export default function contact() {
  return (
   <>
<div>
    <Header/>
  {/* ======= Hero inner Start ======= */}
 
  <AboutHero title="Contact Us"/>
  {/* ======= Hero inner End ======= */}
  {/* ======= Contact Area Start ======= */}
  <section className="contact pt-120 pb-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="section-heading text-center mb-50">
            <span className="section-heading__title_small">
              GET IN TOUCH
            </span>
            <h2 className="section-heading__title_big">
              Get in touch with us.
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-30">
          <div className="contact-item">
            <img className="icon" src="assets/images/icon/contact-location.png" alt />
            <h3 className="title title--heading">Office Location</h3>
            <p className="address">Melbourne’s GPO 434 Bourke St.</p>
            <p className="address">Dhaka VIC 3074, Australia</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-30">
          <div className="contact-item">
            <img className="icon" src="assets/images/icon/phone-call.png" alt />
            <h3 className="title title--heading">Call Us</h3>
            <p className="address">
              <a className="link" href="tel:+928886660000">+ 92 888 666 0000</a>
            </p>
            <p className="address">
              <a className="link" href="tel:4152246564.">(415) 224-6564.</a>
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-30">
          <div className="contact-item">
            <img className="icon" src="assets/images/icon/contact-email.png" alt />
            <h3 className="title title--heading">Email Us</h3>
            <p className="address">
              <a className="link" href="tel:+928886660000">needhelp@example.com</a>
            </p>
            <p className="address">
              <a className="link" href="tel:4152246564.">info@email.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-30">
          <div className="contact-map">
            <div className="map-box style-1" data-lat="40.741895" data-lng="-73.989308" />
          </div>
        </div>
        <div className="col-lg-6">
          <form className="contact-form--main" id="contact-form">
            <div className="contact-form p-0">
              <div className="row">
                <div className="col-md-12">
                  <input name="name" type="text" className="contact-form__input" placeholder="Name *" />
                </div>
                <div className="col-md-12">
                  <input name="email" type="text" className="contact-form__input" placeholder="Email *" />
                </div>
                <div className="col-md-12">
                  <textarea name="message" className="contact-form__input contact-form__input_textarea" placeholder="Message" defaultValue={""} />
                </div>
                <div className="col-md-12">
                  <button type="submit" className="contact-form__button">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
            <div className="form-response mt-10" />
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* ======= Contact Area End ======= */}
  {/* ======= Contact Area Start ======= */}
  <section className="contact contact--agency" data-bg-image="assets/images/bg/contact-bg.jpg">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="contact__agency">
            <span className="title text-white">We are here to answer your questions 24/7</span>
            <h2 className="heading text-white">NEED A CONSULTATION?</h2>
            <a href="javascript:void(0);" className="btn btn--common btn--default btn--primary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ======= Contact Area End ======= */}
  {/* ======= Main Wrapper End ======= */}
  {/* Footer */}
  <footer className="footer footer--bg position-relative overflow-hidden">
    <img className="footer-shape footer-shape--left wow fadeInLeft" data-wow-delay="1.5s" src="assets/images/shape/footer-shape-1.png" alt="Shape" />
    <img className="footer-shape footer-shape--right wow fadeInRight" data-wow-delay="1.5s" src="assets/images/shape/footer-shape-2.png" alt="Shape" />
    <div className="footer--top footer--padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-30">
            <div className="footer-widget">
              <div className="footer-widget__log mb-30">
                <a href="index.html"><img src="assets/images/logo-light.png" alt /></a>
              </div>
              <div className="footer-widget__text">
                <p className="footer-widget__text_paragraph">
                  Grursus mal suada faci lisis the Lorem it ipsum
                  consectetur elit. fadolorit consecte elit.
                </p>
              </div>
              <div className="footer-widget__social">
                <ul>
                  <li className="footer-widget__social_list">
                    <a className="footer-widget__social_list--link facebook" href="javascript:void(0);">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="footer-widget__social_list">
                    <a className="footer-widget__social_list--link twitter" href="javascript:void(0);">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="footer-widget__social_list">
                    <a className="footer-widget__social_list--link instagram" href="javascript:void(0);">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li className="footer-widget__social_list">
                    <a className="footer-widget__social_list--link linkedin" href="javascript:void(0);">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li className="footer-widget__social_list">
                    <a className="footer-widget__social_list--link pinterest" href="javascript:void(0);">
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
                <h3 className="footer-widget__title_heading">
                  Important Links
                </h3>
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
                    <a href="blog-details.html">News &amp; Media</a>
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
                © 2021 <a href="index.html">Techkit</a>. All Rights
                Reserved by
                <a href="https://www.radiustheme.com" rel="nofollow">RadiusTheme</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* Footer End */}
  {/*=====================================*/}
  {/*=         Offcanvas Start           =*/}
  {/*=====================================*/}
  <div className="offcanvas-menu-wrap" id="offcanvas-wrap" data-position="left">
    <div className="close-btn offcanvas-close">
      <i className="far fa-times-circle" />
    </div>
    <div className="offcanvas-content">
      <div className="offcanvas-logo rt-anima rt-anima--one">
        <a href="index.html"><img src="assets/images/logo-offcanvas.png" alt="logo" /></a>
      </div>
      <div className="sidebar-header">
        <h2 className="heading text-white rt-anima rt-anima--two">
          Let’s make Something Together...
        </h2>
        <p className="text rt-anima rt-anima--three">
          Grursus mal suada faci lisis dolarorit ametion att consectetur
          elit. Vesti at bulum nec odio aea the rsus fadolorit the
          consectetur elit.
        </p>
      </div>
      <div className="offcanvas-address">
        <ul>
          <li className="item rt-anima rt-anima--four">
            <h3 className="heading text-white">Find us</h3>
            <p className="text">
              PO Box 16122 Collins Street West Victoria 8007 Australia
            </p>
          </li>
          <li className="item rt-anima rt-anima--five">
            <h3 className="heading text-white">Email us</h3>
            <p className="text">info@domain.com</p>
            <p className="text">example@domain.com</p>
          </li>
          <li className="item rt-anima rt-anima--six">
            <h3 className="heading text-white">Phone support</h3>
            <p className="text">+ (066) 0760 0260</p>
            <p className="text">+ (057) 0760 0560</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/*=====================================*/}
  {/*=           Offcanvas End           =*/}
  {/*=====================================*/}
  {/* /.content-wrapper */}
  <div className="progress-wrap">
    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
</div>
<Footer/>

   </>
  )
}
