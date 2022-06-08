import React from "react";
import Slider from "react-slick";
import CountUp from "react-countup";
import { Link } from "react-router-dom";


function HomeBody() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <div className="HomeBody">
{/* ======= Main Wrapper Start ======= */}
<main className="main-wrapper overflow-hidden">
  {/* ======= Hero Start ======= */}
  
    <section className="hero overflow-hidden">
    <Slider {...settings}>
    <div>
    <div className="slider__single slider__bg container-custom" data-bg-image="assets/images/bg/hero-bg-1.jpg">
        <img src="assets/images/shape/slider-shape-1.png"  className="slider__shape slider__shape--one" data-animation="slideInDown" data-delay=".4s" data-duration="2s" />
        <img src="assets/images/shape/slider-shape-2.png"  className="slider__shape slider__shape--two" data-animation="slideInRight" data-delay=".5s" data-duration="2.5s" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="slider-content">
                <span className="slider-content__title_small ml13" data-animation="fadeInUp" data-delay=".4s">
                  BEST IT SOLUTION PROVIDER</span>
                <h2 id="ml12" className="slider-content__title_big" data-animation="fadeInUp" data-delay=".6s">
                  Best Solution To Run Your Project Faster
                </h2>
                <p className="slider-content__text" data-animation="fadeInUp" data-delay=".8s">
                  Grursus suada faci Lorem ipsum dolarorit ametion consectetur elit. Vesti at bulum nec odio aea the
                  dumm ipsumm and fadolorit to the consectetur dummy text elit.
                </p>
                <Link to="/about" className="btn btn--common btn--primary rt-button-animation-out" data-animation="fadeInUp" data-delay="1s">
                  Get Details
                  <svg width="34px" height="16px" viewBox="0 0 34.53 16" xmlSpace="preserve">
                    <rect className="rt-button-line" y="7.6" width={34} height=".4" />
                    <g className="rt-button-cap-fake">
                      <path className="rt-button-cap" d="M25.83.7l.7-.7,8,8-.7.71Zm0,14.6,8-8,.71.71-8,8Z" />
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div>
      <div className="slider__single slider__bg container-custom" data-bg-image="assets/images/bg/hero-bg-2.jpg">
        <img src="assets/images/shape/slider-shape-1.png"  className="slider__shape slider__shape--three" data-animation="zoomIn" data-delay=".4s" data-duration="2.5s" />
        <img src="assets/images/shape/slider-shape-4.png"  className="slider__shape slider__shape--four" data-animation="slideInUp" data-delay=".3s" data-duration="2s" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-7">
              <div className="slider-content slider-content--two">
                <span className="slider-content__title_small title title--small ml13" data-animation="fadeInUp" data-delay=".2s">
                  BEST IT SOLUTION PROVIDER</span>
                <h2 className="slider-content__title_big title title--big" data-animation="fadeInUp" data-delay=".4s">
                  Web Development &amp; Custom Solutions
                </h2>
                <p className="slider-content__text paragraph" data-animation="fadeInUp" data-delay=".6s">
                  Grursus suada faci Lorem ipsum dolarorit ametion
                  consectetur elit. Vesti at bulum nec odio aea the dumm
                  ipsumm and fadolorit to the consectetur dummy text elit.
                </p>
                <Link to="about-us.html" className="btn btn--common btn--primary rt-button-animation-out" data-animation="fadeInUp" data-delay=".8s">
                  Get Details
                  <svg width="34px" height="16px" viewBox="0 0 34.53 16" xmlSpace="preserve">
                    <rect className="rt-button-line" y="7.6" width={34} height=".4" />
                    <g className="rt-button-cap-fake">
                      <path className="rt-button-cap" d="M25.83.7l.7-.7,8,8-.7.71Zm0,14.6,8-8,.71.71-8,8Z" />
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div>
      <div className="slider__single slider__bg container-custom" data-bg-image="assets/images/bg/hero-bg-3.jpg">
        <img src="assets/images/shape/slider-shape-5.png"  className="slider__shape slider__shape--five" data-animation="zoomIn" data-delay=".3s" data-duration="2s" />
        <img src="assets/images/shape/slider-shape-6.png"  className="slider__shape slider__shape--six" data-animation="slideInLeft" data-delay=".3s" data-duration="2.2s" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-7">
              <div className="slider-content slider-content--two">
                <span className="slider-content__title_small title title--small" data-animation="fadeInUp" data-delay=".2s">
                  Secure &amp; IT Services</span>
                <h2 className="slider-content__title_big title title--big" data-animation="fadeInUp" data-delay=".4s">
                  Excellent IT services for your success
                </h2>
                <p className="slider-content__text paragraph" data-animation="fadeInUp" data-delay=".6s">
                  Grursus suada faci Lorem ipsum dolarorit ametion
                  consectetur elit. Vesti at bulum nec odio aea the dumm
                  ipsumm and fadolorit to the consectetur dummy text elit.
                </p>
                <Link to="/about" className="btn btn--common btn--primary rt-button-animation-out" data-animation="fadeInUp" data-delay=".8s">
                  Get Details
                  <svg width="34px" height="16px" viewBox="0 0 34.53 16" xmlSpace="preserve">
                    <rect className="rt-button-line" y="7.6" width={34} height=".4" />
                    <g className="rt-button-cap-fake">
                      <path className="rt-button-cap" d="M25.83.7l.7-.7,8,8-.7.71Zm0,14.6,8-8,.71.71-8,8Z" />
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Slider>
  </section>
  {/* ======= Hero End ======= */}
  {/* ======= About Start ======= */}
  <section className="about about--area about--padding">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5 mb-30">
          <div className="section-heading mb-40">
            <span className="section-heading__title_small wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".4s">About
              Company</span>
            <h2 className="section-heading__title_big wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".5s">
              What We Promise High Quality IT Solutions
            </h2>
          </div>
          <div className="about-content">
            <h3 className="about-content__title wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".7s">
              Over <span className="primary-text-color">2,500+</span> Customers
            </h3>
            <p className="about-content__text wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".9s">
              Grursus mal suada faci lisis Lorem ipsum dolarorit more is ame tion the a consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons rsus mal suada as and fadolorit to the consectetur elit. All a the Lorem Ipsum generators on the Internet tend.
            </p>
          </div>
        </div>
        <div className="col-lg-6 offset-lg-1 mb-30 text-md-center">
          <div className="about-content__image about-content__image_right position-relative">
            <img width={690} height={617} src="assets/images/home1/about-right-image-1.jpg" className="about-img wow fadeInRight" data-wow-delay="1s" data-wow-duration="1.2s" />
            <div className="about-content__experience">
              <div className="about-content__experience_years">27</div>
              <div className="about-content__experience_title">
                YEAR’S <span>EXPERIENCE IN IT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ======= About End ======= */}
  {/* ======= Service Area Start ======= */}
  <section className="services services--padding section-bg-common">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <div className="section-heading mb-45">
            <span className="section-heading__title_small wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".4s">
              our service
            </span>
            <h2 className="section-heading__title_big wow fadeInUp" data-wow-delay=".4s" data-wow-duration=".6s">
              We Offer a Wide <br />
              Variety of IT Services
            </h2>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="section-button mb-45">
            <a href="services-details.html" className="btn btn--common btn--primary rt-button-animation-out wow fadeInRight" data-wow-delay=".7s" data-wow-duration=".9s">See More
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="34px" height="16px" viewBox="0 0 34.53 16" xmlSpace="preserve">
                <rect className="rt-button-line" y="7.6" width={34} height=".4" />
                <g className="rt-button-cap-fake">
                  <path className="rt-button-cap" d="M25.83.7l.7-.7,8,8-.7.71Zm0,14.6,8-8,.71.71-8,8Z" />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".4s">
          <div className="services__item mb-50">
            <div className="services__item_overlay" />
            <header className="services__item_header d-flex align-items-center">
              <i className="flaticon flaticon-create services__item_icon" />
              <h3 className="services__item_title">
                <a href="services-details.html">IT Design</a>
              </h3>
            </header>
            <div className="services__item_content">
              <p className="services__item_paragraph">
                Grursus mal suada lisis Lorem ipsum a ametion consectetur
                elit fadolorit to the consectetur more elit.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay=".4s" data-wow-duration=".6s">
          <div className="services__item mb-50">
            <div className="services__item_overlay" />
            <header className="services__item_header d-flex align-items-center">
              <i className="flaticon flaticon-management services__item_icon">
              </i>
              <h3 className="services__item_title">
                <a href="services-details.html">IT Management</a>
              </h3>
            </header>
            <div className="services__item_content">
              <p className="services__item_paragraph">
                Grursus mal suada lisis Lorem ipsum a ametion consectetur
                elit fadolorit to the consectetur more elit.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay=".6s" data-wow-duration=".8s">
          <div className="services__item mb-50">
            <div className="services__item_overlay" />
            <header className="services__item_header d-flex align-items-center">
              <i className="flaticon flaticon-secure-shield services__item_icon">
              </i>
              <h3 className="services__item_title">
                <a href="services-details.html">Data Security</a>
              </h3>
            </header>
            <div className="services__item_content">
              <p className="services__item_paragraph">
                Grursus mal suada lisis Lorem ipsum a ametion consectetur
                elit fadolorit to the consectetur more elit.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay=".8s" data-wow-duration="1s">
          <div className="services__item mb-50">
            <div className="services__item_overlay" />
            <header className="services__item_header d-flex align-items-center">
              <i className="flaticon flaticon-analytics services__item_icon" />
              <h3 className="services__item_title">
                <a href="services-details.html">Business Reform</a>
              </h3>
            </header>
            <div className="services__item_content">
              <p className="services__item_paragraph">
                Grursus mal suada lisis Lorem ipsum a ametion consectetur
                elit fadolorit to the consectetur more elit.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="1s" data-wow-duration="1.2s">
          <div className="services__item mb-50">
            <div className="services__item_overlay" />
            <header className="services__item_header d-flex align-items-center">
              <i className="flaticon flaticon-client services__item_icon" />
              <h3 className="services__item_title">
                <a href="services-details.html">IT Counsultancy</a>
              </h3>
            </header>
            <div className="services__item_content">
              <p className="services__item_paragraph">
                Grursus mal suada lisis Lorem ipsum a ametion consectetur
                elit fadolorit to the consectetur more elit.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="1.2s" data-wow-duration="1.5s">
          <div className="services__item mb-50">
            <div className="services__item_overlay" />
            <header className="services__item_header d-flex align-items-center">
              <i className="flaticon flaticon-deadline services__item_icon" />
              <h3 className="services__item_title">
                <a href="services-details.html">QA &amp; Testing</a>
              </h3>
            </header>
            <div className="services__item_content">
              <p className="services__item_paragraph">
                Grursus mal suada lisis Lorem ipsum a ametion consectetur
                elit fadolorit to the consectetur more elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ======= Service Area End ======= */}
  {/* ======= Service Key Area Start ======= */}
  <section className="services-key services-key--padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="section-heading text-center mb-30">
            <span className="section-heading__title_small">
              We Offer best IT Services
            </span>
            <h2 className="section-heading__title_big">
              Easy Solutions for all Difficult IT Problems
            </h2>
          </div>
        </div>
      </div>
      <div className="services-key__navbar">
        <div className="row">
          <div className="col-sm-12">
            <ul className="services-key__navbar_nav nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item services-key__navbar_item" role="presentation">
                <button className="services-key__navbar_link nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                  <i className="flaticon flaticon-settings" /> Why Choose us
                </button>
              </li>
              <li className="nav-item services-key__navbar_item" role="presentation">
                <button className="services-key__navbar_link nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                  <i className="flaticon flaticon-tech" /> Technology Index
                </button>
              </li>
              <li className="nav-item services-key__navbar_item" role="presentation">
                <button className="services-key__navbar_link nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                  <i className="flaticon flaticon-team" /> Our Partners
                </button>
              </li>
              <li className="nav-item services-key__navbar_item" role="presentation">
                <button className="services-key__navbar_link nav-link" id="awards-tab" data-bs-toggle="tab" data-bs-target="#awards" type="button" role="tab" aria-controls="awards" aria-selected="false">
                  <i className="flaticon flaticon-medal" /> Our Awards
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="services-key__tabbar pt-50">
        <div className="row">
          <div className="col-sm-12">
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="row">
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="services__item services-key__content mb-30">
                      <div className="services__item_overlay services-key__content_overlay" />
                      <header className="services__item_header services-key__content_header">
                        <i className="flaticon flaticon-graphic-design services__item_icon services-key__content_icon" />
                        <h3 className="services__item_title services-key__content_title">
                          <a href="services-details.html">Product Design</a>
                        </h3>
                      </header>
                      <div className="services__item_content services-key__content_text">
                        <p className="services__item_paragraph services-key__content_paragraph">
                          Grursus mal suada lisis more ametion consectet
                          elit. Vesti at suada consectetur elit.
                        </p>
                        <a className="services-key__content_link" href="services-details.html">Discover now</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="services__item services-key__content mb-30">
                      <div className="services__item_overlay services-key__content_overlay" />
                      <header className="services__item_header services-key__content_header">
                        <i className="flaticon flaticon-web-development services__item_icon services-key__content_icon" />
                        <h2 className="services__item_title services-key__content_title">
                          <a href="services-details.html">Web Development</a>
                        </h2>
                      </header>
                      <div className="services__item_content services-key__content_text">
                        <p className="services__item_paragraph services-key__content_paragraph">
                          Grursus mal suada lisis more ametion consectet
                          elit. Vesti at suada consectetur elit.
                        </p>
                        <a className="services-key__content_link" href="services-details.html">Discover now</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                    <div className="services__item services-key__content mb-30">
                      <div className="services__item_overlay services-key__content_overlay" />
                      <header className="services__item_header services-key__content_header">
                        <i className="flaticon flaticon-analysis services__item_icon services-key__content_icon" />
                        <h2 className="services__item_title services-key__content_title">
                          <a href="services-details.html">Data Analytics</a>
                        </h2>
                      </header>
                      <div className="services__item_content services-key__content_text">
                        <p className="services__item_paragraph services-key__content_paragraph">
                          Grursus mal suada lisis more ametion consectet
                          elit. Vesti at suada consectetur elit.
                        </p>
                        <a className="services-key__content_link" href="services-details.html">Discover now</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                    <div className="services__item services-key__content mb-30">
                      <div className="services__item_overlay services-key__content_overlay" />
                      <header className="services__item_header services-key__content_header">
                        <i className="flaticon flaticon-cyber-security services__item_icon services-key__content_icon" />
                        <h2 className="services__item_title services-key__content_title">
                          <a href="services-details.html">Cyber Security</a>
                        </h2>
                      </header>
                      <div className="services__item_content services-key__content_text">
                        <p className="services__item_paragraph services-key__content_paragraph">
                          Grursus mal suada lisis more ametion consectet
                          elit. Vesti at suada consectetur elit.
                        </p>
                        <a className="services-key__content_link" href="services-details.html">Discover now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div className="row">
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="services__item services__tech text-center mb-30">
                      <div className="services__item_overlay services__tech_overlay" />
                      <header className="services__item_header mb-0">
                        <i className="flaticon flaticon-website services__item_icon services__tech_icon" />
                        <h4 className="services__item_title services__tech_title">
                          <a href="services-details.html">Web Site</a>
                        </h4>
                      </header>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="services__item services__tech text-center mb-30">
                      <div className="services__item_overlay services__tech_overlay" />
                      <header className="services__item_header mb-0">
                        <i className="flaticon flaticon-android services__item_icon services__tech_icon" />
                        <h4 className="services__item_title services__tech_title">
                          <a href="services-details.html">Android Apps</a>
                        </h4>
                      </header>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                    <div className="services__item services__tech text-center mb-30">
                      <div className="services__item_overlay services__tech_overlay" />
                      <header className="services__item_header mb-0">
                        <i className="flaticon flaticon-apple services__item_icon services__tech_icon" />
                        <h4 className="services__item_title services__tech_title">
                          <a href="services-details.html">ios Apps</a>
                        </h4>
                      </header>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                    <div className="services__item services__tech text-center mb-30">
                      <div className="services__item_overlay services__tech_overlay" />
                      <header className="services__item_header mb-0">
                        <i className="flaticon flaticon-programing services__item_icon services__tech_icon" />
                        <h4 className="services__item_title services__tech_title">
                          <a href="services-details.html">Iot Program</a>
                        </h4>
                      </header>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="1s">
                    <div className="services__item services__tech text-center mb-30">
                      <div className="services__item_overlay services__tech_overlay" />
                      <header className="services__item_header mb-0">
                        <i className="flaticon flaticon-smartwatch services__item_icon services__tech_icon" />
                        <h4 className="services__item_title services__tech_title">
                          <a href="services-details.html">Wearalables</a>
                        </h4>
                      </header>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="1.5s">
                    <div className="services__item services__tech text-center mb-30">
                      <div className="services__item_overlay services__tech_overlay" />
                      <header className="services__item_header mb-0">
                        <i className="flaticon flaticon-lifeline-on-a-tv-monitor-screen-of-a-medical-program services__item_icon services__tech_icon" />
                        <h4 className="services__item_title services__tech_title">
                          <a href="services-details.html">tv Program</a>
                        </h4>
                      </header>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div className="services-partners overflow-hidden mb-20">
                  <ul className="services-partners__wrapper overflow-hidden">
                    <li className="services-partners__item wow fadeInUp" data-wow-delay=".2s">
                      <a className="services-partners__item_link" href="services-details.html"><img src="assets/images/partners/partners1.png"  /></a>
                    </li>
                    <li className="services-partners__item wow fadeInUp" data-wow-delay=".3s">
                      <a className="services-partners__item_link" href="services-details.html"><img src="assets/images/partners/partners2.png"  /></a>
                    </li>
                    <li className="services-partners__item wow fadeInUp" data-wow-delay=".4s">
                      <a className="services-partners__item_link" href="services-details.html"><img src="assets/images/partners/partners3.png"  /></a>
                    </li>
                    <li className="services-partners__item wow fadeInUp" data-wow-delay=".5s">
                      <a className="services-partners__item_link" href="services-details.html"><img src="assets/images/partners/partners4.png"  /></a>
                    </li>
                    <li className="services-partners__item wow fadeInUp" data-wow-delay=".6s">
                      <a className="services-partners__item_link" href="services-details.html"><img src="assets/images/partners/partners5.png"  /></a>
                    </li>
                    <li className="services-partners__item wow fadeInUp" data-wow-delay=".7s">
                      <a className="services-partners__item_link" href="services-details.html"><img src="assets/images/partners/partners6.png"  /></a>
                    </li>
                    <li className="services-partners__item wow fadeInUp" data-wow-delay=".8s">
                      <a className="services-partners__item_link" href="services-details.html"><img src="assets/images/partners/partners7.png"  /></a>
                    </li>
                    <li className="services-partners__item wow fadeInUp" data-wow-delay=".9s">
                      <a className="services-partners__item_link" href="services-details.html"><img src="assets/images/partners/partners8.png"  /></a>
                    </li>
                    <li className="services-partners__item wow fadeInUp" data-wow-delay="1s">
                      <a className="services-partners__item_link" href="services-details.html"><img src="assets/images/partners/partners9.png"  /></a>
                    </li>
                    <li className="services-partners__item wow fadeInUp" data-wow-delay="1.1s">
                      <a className="services-partners__item_link" href="services-details.html"><img src="assets/images/partners/partners10.png"  /></a>
                    </li>
                    <li className="services-partners__item wow fadeInUp" data-wow-delay="1.2s">
                      <a className="services-partners__item_link" href="services-details.html"><img src="assets/images/partners/partners11.png"  /></a>
                    </li>
                    <li className="services-partners__item wow fadeInUp" data-wow-delay="1.3s">
                      <a className="services-partners__item_link" href="services-details.html"><img src="assets/images/partners/partners12.png"  /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-pane fade" id="awards" role="tabpanel" aria-labelledby="awards-tab">
                <div className="row">
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="services__awards mb-30">
                      <img src="assets/images/home1/awards-1.png"  className="services__awards_board" />
                      <h3 className="services__awards_title">
                        <a href="awards-details.html">Top 10 Technology Company 2018</a>
                      </h3>
                      <p className="services__awards_text">
                        Grursus mal suada faci lisis Lorem ipsum is
                        dolarorit more ametion consectetur elit. Vesti ipsum
                        suada to the consectetur elit.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                    <div className="services__awards mb-30">
                      <img src="assets/images/home1/awards-2.png"  className="services__awards_board" />
                      <h3 className="services__awards_title">
                        <a href="awards-details.html">Top Income Tax Awards 2019</a>
                      </h3>
                      <p className="services__awards_text">
                        Grursus mal suada faci lisis Lorem ipsum is
                        dolarorit more ametion consectetur elit. Vesti ipsum
                        suada to the consectetur elit.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                    <div className="services__awards mb-30">
                      <img src="assets/images/home1/awards-3.png"  className="services__awards_board" />
                      <h3 className="services__awards_title">
                        <a href="awards-details.html">Top Training Centre 2020</a>
                      </h3>
                      <p className="services__awards_text">
                        Grursus mal suada faci lisis Lorem ipsum is
                        dolarorit more ametion consectetur elit. Vesti ipsum
                        suada to the consectetur elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ======= Service Key Area End ======= */}
  {/* ======= Solution Area Start ======= */}
  <div className="support support--bg support--padding secondary-bg-color pt-95 parallaxie" data-bg-image="assets/images/shape/support-bg-shape.png">
    <div className="container">
      <div className="row">
        <div className="col-sm-12" />
      </div>
    </div>
  </div>
  {/* ======= Solution Area End ======= */}
  {/* ======= Case Studies Area Start ======= */}
  <section className="case case--minus pt-100 pb-125">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4">
          <div className="section-heading section-heading--style3 mb-50">
            <span className="section-heading__title_small wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".5s">
              WHAT WE DID
            </span>
            <h2 className="section-heading__title_big text-white wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".7s">
              Our Case Studies
            </h2>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="section-button mb-50">
            <a href="case-01.html" className="btn btn--common btn--primary rt-button-animation-out wow fadeInRight" data-wow-delay=".9s" data-wow-duration=".7s">
              See More
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="34px" height="16px" viewBox="0 0 34.53 16" xmlSpace="preserve">
                <rect className="rt-button-line" y="7.6" width={34} height=".4" />
                <g className="rt-button-cap-fake">
                  <path className="rt-button-cap" d="M25.83.7l.7-.7,8,8-.7.71Zm0,14.6,8-8,.71.71-8,8Z" />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="case-wrapper">
        <div className="row case-active">
          <div className="col">
            <div className="case-item wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".5s">
              <div className="case-item__image">
                <a href="case-details.html">
                  <img width={712} height={763} src="assets/images/case/case-image-1.jpg"  />
                </a>
              </div>
              <div className="case-item__content secondary-bg-color text-center">
                <h5 className="text-white">
                  <a href="case-details.html">Analysis of Web Security</a>
                </h5>
                <span>App / Website</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="case-item wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".7s">
              <div className="case-item__image">
                <a href="case-details.html">
                  <img width={712} height={763} src="assets/images/case/case-image-2.jpg"  />
                </a>
              </div>
              <div className="case-item__content secondary-bg-color text-center">
                <h5 className="text-white">
                  <a href="case-details.html">Drone Camera</a>
                </h5>
                <span>Modern Technology</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="case-item wow fadeInUp" data-wow-delay=".7s" data-wow-duration=".9s">
              <div className="case-item__image">
                <a href="case-details.html">
                  <img width={712} height={763} src="assets/images/case/case-image-3.jpg"  />
                </a>
              </div>
              <div className="case-item__content secondary-bg-color text-center">
                <h5 className="text-white">
                  <a href="case-details.html">Social Marketing App</a>
                </h5>
                <span>App Devolopment</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="case-item wow fadeInUp" data-wow-delay=".9s" data-wow-duration="1s">
              <div className="case-item__image">
                <a href="case-details.html">
                  <img width={712} height={763} src="assets/images/case/case-image-4.jpg"  />
                </a>
              </div>
              <div className="case-item__content secondary-bg-color text-center">
                <h5 className="text-white">
                  <a href="case-details.html">Airpods Technology</a>
                </h5>
                <span>Technology</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="case-item wow fadeInUp" data-wow-delay="1s" data-wow-duration="1.3s">
              <div className="case-item__image">
                <a href="case-details.html">
                  <img width={712} height={763} src="assets/images/case/case-image-5.jpg"  />
                </a>
              </div>
              <div className="case-item__content secondary-bg-color text-center">
                <h5 className="text-white">
                  <a href="case-details.html">eCommerce Website</a>
                </h5>
                <span>Design / Devolopment</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="case-item wow fadeInUp" data-wow-delay="1.3s" data-wow-duration="1.5s">
              <div className="case-item__image">
                <a href="case-details.html">
                  <img width={712} height={763} src="assets/images/case/case-image-1.jpg"  />
                </a>
              </div>
              <div className="case-item__content secondary-bg-color text-center">
                <h5 className="text-white">
                  <a href="case-details.html">Analysis of Web Security</a>
                </h5>
                <span>App / Website</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ======= Case Studies Area End ======= */}
  {/* ======= Team Area Start ======= */}
  <section className="team pb-85">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="section-heading mb-55 text-center wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".5s">
            <span className="section-heading__title_small"> OUR TEAM </span>
            <h2 className="section-heading__title_big">
              Experiences IT Solutions.
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-30">
          <div className="team-block team-block--active team-block--two wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".7s">
            <div className="image">
              <img className="image__member" src="assets/images/team/team-member-1.jpg"  width={545} height={663} />
              <div className="social">
                <ul>
                  <li>
                    <a className="facebook" href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="instagram" href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a className="linkedin" href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content">
              <h3 className="name">
                John Gonzalez
                <span className="designation">- Art director</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-30">
          <div className="team-block team-block--two wow fadeInUp" data-wow-delay=".9s" data-wow-duration="1s">
            <div className="image">
              <img className="image__member" src="assets/images/team/team-member-2.jpg"  width={545} height={663} />
              <div className="social">
                <ul>
                  <li>
                    <a className="facebook" href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="instagram" href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a className="linkedin" href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content">
              <h3 className="name">
                Dohn Gonzalez
                <span className="designation">- Art director</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-30">
          <div className="team-block team-block--two wow fadeInUp" data-wow-delay="1s" data-wow-duration="1.3s">
            <div className="image">
              <img className="image__member" src="assets/images/team/team-member-3.jpg"  width={545} height={663} />
              <div className="social">
                <ul>
                  <li>
                    <a className="facebook" href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="instagram" href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a className="linkedin" href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content">
              <h3 className="name">
                John Gonzalez
                <span className="designation">- Art director</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ======= Team Area End ======= */}
  {/* ======= Testimonials Area Start ======= */}
  <section className="review review--bg review--padding position-relative">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="section-heading mb-55 wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".5s">
            <span className="section-heading__title_small"> TESTIMONIALS </span>
            <h2 className="section-heading__title_big">
              What they Clients Say!
            </h2>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInRight" data-wow-delay=".5s" data-wow-duration=".7s">
          <div className="section-button mb-55">
            <a href="#" className="btn btn--common btn--primary rt-button-animation-out">See More
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="34px" height="16px" viewBox="0 0 34.53 16" xmlSpace="preserve">
                <rect className="rt-button-line" y="7.6" width={34} height=".4" />
                <g className="rt-button-cap-fake">
                  <path className="rt-button-cap" d="M25.83.7l.7-.7,8,8-.7.71Zm0,14.6,8-8,.71.71-8,8Z" />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="review-wrapper">
      <div className="container-fluid">
        <div className="row review--active">
          <div className="col-lg-4 mb-30 wow fadeInLeft" data-wow-delay=".3s" data-wow-duration=".5s">
            <div className="review-block">
              <div className="review-block__content">
                <img className="review-block__quote_icon" src="assets/images/icon/left-quote.png"  />
                <h3 className="review-block__title">“Committed to Quality”</h3>
                <p>
                  Grursus mal suada faci lisis Lorem ipsum dolarorit more
                  ametion consectetur elit. Vesti at bulum nec odio aea the
                  dumm ipsumm ipsum that dolocons rsus that consectetur
                  elit.
                </p>
              </div>
              <div className="review-block__auth">
                <div className="review-block__auth_image">
                  <a href="#"><img src="assets/images/home1/review-auth-image-1.png"  /></a>
                </div>
                <div className="review-block__auth_info">
                  <h3 className="review-block__auth_name">Marian Chris</h3>
                  <span className="review-block__auth_title">CEO founder</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-30 wow fadeInLeft" data-wow-delay=".3s" data-wow-duration=".5s">
            <div className="review-block">
              <div className="review-block__content">
                <img className="review-block__quote_icon" src="assets/images/icon/left-quote.png"  />
                <h3 className="review-block__title">“Qualified Employees”</h3>
                <p>
                  Grursus mal suada faci lisis Lorem ipsum dolarorit more
                  ametion consectetur elit. Vesti at bulum nec odio aea the
                  dumm ipsumm ipsum that dolocons rsus that consectetur
                  elit.
                </p>
              </div>
              <div className="review-block__auth">
                <div className="review-block__auth_image">
                  <a href="#"><img src="assets/images/home1/review-auth-image-2.png"  /></a>
                </div>
                <div className="review-block__auth_info">
                  <h3 className="review-block__auth_name">Jack Mudson</h3>
                  <span className="review-block__auth_title">Managing Director</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-30 wow fadeInLeft" data-wow-delay=".5s" data-wow-duration=".7s">
            <div className="review-block">
              <div className="review-block__content">
                <img className="review-block__quote_icon" src="assets/images/icon/left-quote.png"  />
                <h3 className="review-block__title">“Satisfied Clients”</h3>
                <p>
                  Grursus mal suada faci lisis Lorem ipsum dolarorit more
                  ametion consectetur elit. Vesti at bulum nec odio aea the
                  dumm ipsumm ipsum that dolocons rsus that consectetur
                  elit.
                </p>
              </div>
              <div className="review-block__auth">
                <div className="review-block__auth_image">
                  <a href="#"><img src="assets/images/home1/review-auth-image-3.png"  /></a>
                </div>
                <div className="review-block__auth_info">
                  <h3 className="review-block__auth_name">Michael Brian</h3>
                  <span className="review-block__auth_title">Vice President</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-30 wow fadeInLeft" data-wow-delay=".9s" data-wow-duration="1s">
            <div className="review-block">
              <div className="review-block__content">
                <img className="review-block__quote_icon" src="assets/images/icon/left-quote.png"  />
                <h3 className="review-block__title">“Qualified Employees”</h3>
                <p>
                  Grursus mal suada faci lisis Lorem ipsum dolarorit more
                  ametion consectetur elit. Vesti at bulum nec odio aea the
                  dumm ipsumm ipsum that dolocons rsus that consectetur
                  elit.
                </p>
              </div>
              <div className="review-block__auth">
                <div className="review-block__auth_image">
                  <a href="#"><img src="assets/images/home1/review-auth-image-1.png"  /></a>
                </div>
                <div className="review-block__auth_info">
                  <h3 className="review-block__auth_name">Marian Chris</h3>
                  <span className="review-block__auth_title">CEO founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ======= Testimonials Area End ======= */}
  {/* ======= Price Area Start ======= */}
  <section className="price price--padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-heading text-center mb-65">
            <span className="section-heading__title_small">
              PRICING PLANS
            </span>
            <h2 className="section-heading__title_big">
              Flexible Pricing PLANS
            </h2>
          </div>
        </div>
      </div>
      <div className="row g-0">
        <div className="col-lg-3 col-md-6 price-item__wrapper mb-30 wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".5s">
          <div className="price-item">
            <header className="price-item__header">
              <div className="price-item__header_icon">
                <div className="price-item__icon">
                  <object data="assets/images/icon/price-setting.svg" type="image/svg+xml">
                    <img src="assets/images/icon/price-setting.svg" />
                  </object>
                </div>
              </div>
              <h3 className="price-item__title">Economy</h3>
              <span className="price-item__price">$35<span>/ month</span></span>
            </header>
            <div className="price-item__content">
              <ul>
                <li className="price-item__content_item price-item__content_available">
                  <i className="fas fa-check" />
                  <span>Powerful Admin Panel</span>
                </li>
                <li className="price-item__content_item price-item__content_available--not">
                  <i className="far fa-times-circle" />
                  <span>1 Native Android App</span>
                </li>
                <li className="price-item__content_item price-item__content_available--not">
                  <i className="far fa-times-circle" />
                  <span>Advance Protection</span>
                </li>
                <li className="price-item__content_item price-item__content_available--not">
                  <i className="far fa-times-circle" />
                  <span>Multi-Language Support</span>
                </li>
                <li className="price-item__content_item price-item__content_available">
                  <i className="fas fa-check" />
                  <span>Support via E-mail and Phone</span>
                </li>
              </ul>
            </div>
            <footer className="price-item__footer">
              <button className="price-item__button">Order Now</button>
            </footer>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 price-item__wrapper mb-30 wow fadeInUp" data-wow-delay=".7s" data-wow-duration=".9s">
          <div className="price-item">
            <header className="price-item__header">
              <div className="price-item__header_icon">
                <div className="price-item__icon">
                  <object data="assets/images/icon/price-quality.svg" type="image/svg+xml">
                    <img src="assets/images/icon/price-quality.svg" />
                  </object>
                </div>
              </div>
              <h3 className="price-item__title">Ultimate</h3>
              <span className="price-item__price">$55<span>/ month</span></span>
            </header>
            <div className="price-item__content">
              <ul>
                <li className="price-item__content_item price-item__content_available">
                  <i className="fas fa-check" />
                  <span>Powerful Admin Panel</span>
                </li>
                <li className="price-item__content_item price-item__content_available--not">
                  <i className="far fa-times-circle" />
                  <span>1 Native Android App</span>
                </li>
                <li className="price-item__content_item price-item__content_available--not">
                  <i className="far fa-times-circle" />
                  <span>Advance Protection</span>
                </li>
                <li className="price-item__content_item price-item__content_available--not">
                  <i className="far fa-times-circle" />
                  <span>Multi-Language Support</span>
                </li>
                <li className="price-item__content_item price-item__content_available">
                  <i className="fas fa-check" />
                  <span>Support via E-mail and Phone</span>
                </li>
              </ul>
            </div>
            <footer className="price-item__footer">
              <button className="price-item__button">Order Now</button>
            </footer>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 price-item__wrapper mb-30 wow fadeInUp" data-wow-delay="1s" data-wow-duration="1.3s">
          <div className="price-item">
            <header className="price-item__header">
              <div className="price-item__header_icon">
                <div className="price-item__icon">
                  <object data="assets/images/icon/price-diamond.svg" type="image/svg+xml">
                    <img src="assets/images/icon/price-diamond.svg" />
                  </object>
                </div>
              </div>
              <h3 className="price-item__title">Professional</h3>
              <span className="price-item__price">$79<span>/ month</span></span>
            </header>
            <div className="price-item__content">
              <ul>
                <li className="price-item__content_item price-item__content_available">
                  <i className="fas fa-check" />
                  <span>Powerful Admin Panel</span>
                </li>
                <li className="price-item__content_item price-item__content_available--not">
                  <i className="far fa-times-circle" />
                  <span>1 Native Android App</span>
                </li>
                <li className="price-item__content_item price-item__content_available--not">
                  <i className="far fa-times-circle" />
                  <span>Advance Protection</span>
                </li>
                <li className="price-item__content_item price-item__content_available--not">
                  <i className="far fa-times-circle" />
                  <span>Multi-Language Support</span>
                </li>
                <li className="price-item__content_item price-item__content_available">
                  <i className="fas fa-check" />
                  <span>Support via E-mail and Phone</span>
                </li>
              </ul>
            </div>
            <footer className="price-item__footer">
              <button className="price-item__button">Order Now</button>
            </footer>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 price-item__wrapper wow fadeInUp" data-wow-delay="1.3s" data-wow-duration="1.5s">
          <div className="price-item">
            <header className="price-item__header">
              <div className="price-item__header_icon">
                <div className="price-item__icon">
                  <object data="assets/images/icon/price-star.svg" type="image/svg+xml">
                    <img src="assets/images/icon/price-star.svg" />
                  </object>
                </div>
              </div>
              <h3 className="price-item__title">Business</h3>
              <span className="price-item__price">$99<span>/ month</span></span>
            </header>
            <div className="price-item__content">
              <ul>
                <li className="price-item__content_item price-item__content_available">
                  <i className="fas fa-check" />
                  <span>Powerful Admin Panel</span>
                </li>
                <li className="price-item__content_item price-item__content_available--not">
                  <i className="far fa-times-circle" />
                  <span>1 Native Android App</span>
                </li>
                <li className="price-item__content_item price-item__content_available--not">
                  <i className="far fa-times-circle" />
                  <span>Advance Protection</span>
                </li>
                <li className="price-item__content_item price-item__content_available--not">
                  <i className="far fa-times-circle" />
                  <span>Multi-Language Support</span>
                </li>
                <li className="price-item__content_item price-item__content_available">
                  <i className="fas fa-check" />
                  <span>Support via E-mail and Phone</span>
                </li>
              </ul>
            </div>
            <footer className="price-item__footer">
              <button className="price-item__button">Order Now</button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ======= Price Area End ======= */}
  {/* ======= Counter Area Start ======= */}
  <section className="counter counter--bg counter--padding parallaxie" data-bg-image="assets/images/bg/counter-area-bg-1.jpg">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-20 wow fadeInUp" data-wow-delay=".3s" data-wow-duration=".5s">
          <div className="counter__item text-center">
          <CountUp start={0} end={100} duration={2.5} delay={1} />
            {/* <span className="counter__item_count text-white counter-number" data-num={109}>109</span> */}
            <h3 className="counter__item_title text-white">Happy Clients</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-20 wow fadeInUp" data-wow-delay=".5s" data-wow-duration=".7s">
          <div className="counter__item text-center">
            <span className="counter__item_count text-white counter-number" data-num={28}>28</span>
            <h3 className="counter__item_title text-white">
              Finished Projects
            </h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-20 wow fadeInUp" data-wow-delay=".7s" data-wow-duration=".9s">
          <div className="counter__item text-center">
            <span className="counter__item_count text-white counter-number" data-num={35}>35</span>
            <h3 className="counter__item_title text-white">Skilled Experts</h3>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-20 wow fadeInUp" data-wow-delay=".9s" data-wow-duration="1s">
          <div className="counter__item text-center">
            <span className="counter__item_count text-white counter-number" data-num={107}>107</span>
            <h3 className="counter__item_title text-white">Media Posts</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ======= Counter Area End ======= */}
  {/* ======= Blog Area Start ======= */}
  <section className="blog blog--padding">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="section-heading mb-55">
            <span className="section-heading__title_small"> Blogs &amp; news </span>
            <h2 className="section-heading__title_big">Interesting divs</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="section-button d-flex mb-55">
            <a href="grid-layout.html" className="btn btn--common btn--primary rt-button-animation-out">See More
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="34px" height="16px" viewBox="0 0 34.53 16" xmlSpace="preserve">
                <rect className="rt-button-line" y="7.6" width={34} height=".4" />
                <g className="rt-button-cap-fake">
                  <path className="rt-button-cap" d="M25.83.7l.7-.7,8,8-.7.71Zm0,14.6,8-8,.71.71-8,8Z" />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="blog--wrapper">
            <div className="row g-0">
              <div className="col-lg-4 col-md-6 blog-item__column mb-30">
                <div className="blog-item blog-item--one">
                  <header className="blog-item__header mb-35">
                    <a href="blog-details.html" className="blog-item__img_link">
                      <img width={551} height={395} className="blog-item__img" src="assets/images/blog/blog-thumb-1.jpg"  />
                    </a>
                    <a href="blog-details.html" className="blog-item__tags">Digital</a>
                  </header>
                  <div className="blog-item__article">
                    <span className="blog-item__date">18 April, 2021</span>
                    <h3 className="blog-item__title">
                      <a href="blog-details.html">
                        Questions every Business Owner able to answer that..
                      </a>
                    </h3>
                    <p className="blog-item__text">
                      Grursus mal suada Lorem ipsum ametion the consectetur
                      elit. Vesti at bulum nec odio aea fadolorit
                      consectetur elit.
                    </p>
                    <ul className="blog-item__meta">
                      <li className="blog-item__list">
                        <i className="far fa-user blog-item__list_icon" />
                        <span className="blog-item__list_name">By James Smith</span>
                      </li>
                      <li className="blog-item__list">
                        <i className="far fa-comments" />
                        <span className="blog-item__list_name">02 Comments</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 blog-item__column mb-30">
                <div className="blog-item blog-item--two">
                  <header className="blog-item__header mb-35">
                    <a href="blog-details.html" className="blog-item__img_link">
                      <img width={551} height={395} className="blog-item__img" src="assets/images/blog/blog-thumb-2.jpg"  />
                    </a>
                    <a href="blog-details.html" className="blog-item__tags">Quick Tips</a>
                  </header>
                  <div className="blog-item__article">
                    <span className="blog-item__date">22 April, 2021</span>
                    <h3 className="blog-item__title">
                      <a href="blog-details.html">
                        How will you Know Success When it Shows Up?
                      </a>
                    </h3>
                    <p className="blog-item__text">
                      Grursus mal suada Lorem ipsum ametion the consectetur
                      elit. Vesti at bulum nec odio aea fadolorit
                      consectetur elit.
                    </p>
                    <ul className="blog-item__meta">
                      <li className="blog-item__list">
                        <i className="far fa-user blog-item__list_icon" />
                        <span className="blog-item__list_name">By Armaan Cullen</span>
                      </li>
                      <li className="blog-item__list">
                        <i className="far fa-comments" />
                        <span className="blog-item__list_name">05 Comments</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 blog-item__column mb-30">
                <div className="blog-item blog-item--three">
                  <header className="blog-item__header mb-35">
                    <a href="blog-details.html" className="blog-item__img_link">
                      <img width={551} height={395} className="blog-item__img" src="assets/images/blog/blog-thumb-3.jpg" />
                    </a>
                    <a href="blog-details.html" className="blog-item__tags">Solution</a>
                  </header>
                  <div className="blog-item__article">
                    <span className="blog-item__date">27 April, 2021</span>
                    <h3 className="blog-item__title">
                      <a href="blog-details.html">
                        3 Clear Warnings That Say Your Goals Are Too Small
                      </a>
                    </h3>
                    <p className="blog-item__text">
                      Grursus mal suada Lorem ipsum ametion the consectetur
                      elit. Vesti at bulum nec odio aea fadolorit
                      consectetur elit.
                    </p>
                    <ul className="blog-item__meta">
                      <li className="blog-item__list">
                        <i className="far fa-user blog-item__list_icon" />
                        <span className="blog-item__list_name">By James Smith</span>
                      </li>
                      <li className="blog-item__list">
                        <i className="far fa-comments" />
                        <span className="blog-item__list_name">04 Comments</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ======= Blog Area End ======= */}
  {/* ======= Contact Area Start ======= */}
  <section className="contact contact--bg contact--padding" data-bg-image="assets/images/shape/contact-bg-shape.png">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5 mb-30">
          <div className="contact-address contact-address--bg" data-bg-image="assets/images/bg/contact-address-bg.jpg">
            <ul>
              <li className="contact-address__item mb-20">
                <div className="contact-address__item_icon">
                  <i className="fas fa-map-marker-" />
                </div>
                <div className="contact-address__item_text">
                  <h3 className="text-white">Our Location</h3>
                  <p className="text-white">
                    2307 Beverley Rd Brooklyn, New York 11226 United States.
                  </p>
                </div>
              </li>
              <li className="contact-address__item mb-20">
                <div className="contact-address__item_icon">
                  <i className="fas fa-envelope-open-text" />
                </div>
                <div className="contact-address__item_text">
                  <h3 className="text-white">Email Address</h3>
                  <p className="text-white">Info@example.com</p>
                  <p className="text-white">Info@radiustheme.com</p>
                </div>
              </li>
              <li className="contact-address__item mb-40">
                <div className="contact-address__item_icon">
                  <i className="fas fa-phone-" />
                </div>
                <div className="contact-address__item_text">
                  <h3 className="text-white">Call Us Free</h3>
                  <p className="text-white">
                    <i>(+00) 123 567990</i>
                  </p>
                </div>
              </li>
              <li className="contact-address__item">
                <form className="contact-address__form" action="#">
                  <input className="contact-address__form_input" type="text" placeholder="Find Your Solution" />
                  <button className="contact-address__form_button">
                    <i className="fas fa-arrow-right" />
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-7 mb-30">
          <form action="#" className="contact-form" id="contact-form">
            <div className="row">
              <div className="col-sm-12">
                <div className="section-heading mb-45">
                  <span className="section-heading__title_small">
                    Get In Touch
                  </span>
                  <h2 className="section-heading__title_big">
                    Are you Ready for a Better, more Productive Business?
                  </h2>
                </div>
              </div>
              <div className="col-md-6">
                <input name="name" type="text" className="contact-form__input" placeholder="Name *" />
              </div>
              <div className="col-md-6">
                <input name="email" type="text" className="contact-form__input" placeholder="Email *" />
              </div>
              <div className="col-md-6">
                <input name="phone" type="text" className="contact-form__input" placeholder="Phone" />
              </div>
              <div className="col-md-6">
                <select className="contact-form__input" name="subject">
                  <option value={1}>Select your subject</option>
                </select>
              </div>
              <div className="col-md-12">
                <textarea className="contact-form__input contact-form__input_textarea" name="message" placeholder="Message" defaultValue={""} />
              </div>
              <div className="col-md-12">
                <button type="submit" className="contact-form__button">
                  Send Message
                </button>
              </div>
            </div>
            <div className="form-response" />
          </form>
        </div>
      </div>
    </div>
  </section>
</main>


    </div>
  );
}

export default HomeBody;
