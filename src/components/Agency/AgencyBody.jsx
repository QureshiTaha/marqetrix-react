import React from 'react'
import { Link } from "react-router-dom";

export default function AgencyBody() {
  return (
    <div className="AgencyBody">
      {/* ======= Main Wrapper Start ======= */}
<main className="main-wrapper">
  {/* ======= Hero Start ======= */}
  <section className="hero">
    <div className="hero-agency agency-bgimage hero-agency--bg position-relative" data-bg-image="assets/images/bg/hero-agency.jpg">
      <div className="container"> 
        <div className="row align-items-center">
          <div className="col-sm-12 mb-30 text-center">
            <div className="hero-content hero-content--agency">
              <span className="hero-content__title_small text-white wow fadeInUp animated" data-wow-delay="1s">Optimize IT Systems</span>
              <h1 className="hero-content__title_big text-white wow fadeInUp animated" data-wow-delay="1.2s">
                IT Services &amp; Solutions
              </h1>
              <p className="hero-content__paragraph text-white wow fadeInUp animated p-0" data-wow-delay="1.4s">
                Grursus suada faci Lorem ipsum dolarorit ametion
                consectetur elit.
              </p>
              <Link to="/about" className="btn btn--common btn--primary rt-button-animation-out wow fadeInUp animated" data-wow-delay="1.6s">
                Get Details
                <svg width="34px" height="16px" viewBox="0 0 34.53 16" xmlSpace="preserve">
                  <rect className="rt-button-line" y="7.6" width={34} height=".4" />
                  <g className="rt-button-cap-fake">
                    <path className="rt-button-cap" d="M25.83.7l.7-.7,8,8-.7.71Zm0,14.6,8-8,.71.71-8,8Z" />
                  </g>
                </svg>
              </Link>
              <Link to="/contact" className="btn btn--common btn--primary btn--white rt-button-animation-out wow fadeInUp animated" data-wow-delay="2.1s">
                Contact Us
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
  </section>
  {/* ======= Hero End ======= */}
  {/* ======= Services Agency Start ======= */}
  <section className="services services-agency services-agency--minus">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="services-agency__wrapper">
            <div className="row g-0">
              <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-delay=".4s">
                <header className="services-software services-item">
                  <div className="services-software__header header">
                    <i className="flaticon flaticon-3d-file icon" />
                    <h4 className="heading">
                      <a href="services-details.html">Product Design</a>
                    </h4>
                  </div>
                  <div className="services-software__content content">
                    <p className="paragraph">
                      Grursus mal suad ametion consecteturis elit. dumm
                      ipsumm ipsum that dolocons rsu malyais consectetur
                      elit.
                    </p>
                    <a href="services-details.html" className="btn btn--common rt-button-animation-out">
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="34px" height="16px" viewBox="0 0 34.53 16" xmlSpace="preserve">
                        <rect className="rt-button-line" y="7.6" width={34} height=".4" />
                        <g className="rt-button-cap-fake">
                          <path className="rt-button-cap" d="M25.83.7l.7-.7,8,8-.7.71Zm0,14.6,8-8,.71.71-8,8Z">
                          </path>
                        </g>
                      </svg>
                    </a>
                  </div>
                </header>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-delay=".6s">
                <div className="services-software services-item services-item--border">
                  <header className="services-software__header header">
                    <i className="flaticon flaticon-coding icon" />
                    <h4 className="heading">
                      <a href="services-details.html">Software Develop</a>
                    </h4>
                  </header>
                  <div className="services-software__content content">
                    <p className="paragraph">
                      Grursus mal suad ametion consecteturis elit. dumm
                      ipsumm ipsum that dolocons rsu malyais consectetur
                      elit.
                    </p>
                    <a href="services-details.html" className="btn btn--common rt-button-animation-out">
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="34px" height="16px" viewBox="0 0 34.53 16" xmlSpace="preserve">
                        <rect className="rt-button-line" y="7.6" width={34} height=".4" />
                        <g className="rt-button-cap-fake">
                          <path className="rt-button-cap" d="M25.83.7l.7-.7,8,8-.7.71Zm0,14.6,8-8,.71.71-8,8Z">
                          </path>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInDown" data-wow-delay=".8s">
                <div className="services-software services-item">
                  <header className="services-software__header header">
                    <i className="flaticon flaticon-code icon" />
                    <h4 className="heading">
                      <a href="services-details.html">Tratagic Planing</a>
                    </h4>
                  </header>
                  <div className="services-software__content content">
                    <p className="paragraph">
                      Grursus mal suad ametion consecteturis elit. dumm
                      ipsumm ipsum that dolocons rsu malyais consectetur
                      elit.
                    </p>
                    <a href="services-details.html" className="btn btn--common rt-button-animation-out">
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="34px" height="16px" viewBox="0 0 34.53 16" xmlSpace="preserve">
                        <rect className="rt-button-line" y="7.6" width={34} height=".4" />
                        <g className="rt-button-cap-fake">
                          <path className="rt-button-cap" d="M25.83.7l.7-.7,8,8-.7.71Zm0,14.6,8-8,.71.71-8,8Z">
                          </path>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ======= Services Agency End ======= */}
  {/* ======= About Start ======= */}
  <section className="about about-agency about-agency--padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 mb-30">
          <div className="about-image about-image--agency position-relative">
            <div className="wow fadeInBottomRight animated" data-wow-delay=".2s" data-wow-duration="2s">
              <img src="assets/images/home3/about-thumb-agency1.jpg" alt="About" className="about-image__agency_big" />
            </div>
            <div className="wow fadeInTopLeft animated" data-wow-delay=".2s" data-wow-duration="2s">
              <img src="assets/images/home3/about-thumb-agency2.jpg" alt="About" className="about-image__agency_small mb-30" />
            </div>
            <div className="video">
              <a className="video-link" href="https://youtu.be/yJg-Y5byMMw" data-fancybox>
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 offset-lg-1 mb-30">
          <div className="about-agency__right">
            <div className="section-software p-0 mb-20">
              <span className="section-software__title_small text-uppercase primary-text-color aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration={800} data-aos-delay={400}>
                25 YEARS OF EXPERIENCE
              </span>
              <h2 className="section-software__title_big aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration={800} data-aos-delay={500}>
                We do what we love &amp; we <br />
                love what we do.
              </h2>
            </div>
            <div className="about-software__content about-agency__content">
              <span className="title title--small aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration={800} data-aos-delay={600}>
                Voice and Data Systems are crucial to the success or
                failure of most businesses. any companies provide
                laptops, cell phones.
              </span>
            </div>
            <div className="list">
              <ul>
                <li><i className="fas fa-check" />DevOps Development</li>
                <li className="paragraph">
                  Grursus mal suada faci lisis Lorem ipsum dolarorit
                  ametion sectetur elit dolocons rsus mal to the
                  consectetur elit.
                </li>
                <li><i className="fas fa-check" />Automated Software</li>
                <li className="paragraph">
                  Grursus mal suada faci lisis Lorem ipsum dolarorit
                  ametion sectetur elit dolocons rsus mal to the
                  consectetur elit.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ======= About End ======= */}
  {/* ======= Service Area Start ======= */}
  <section className="featured pt-120 pb-100 secondary-bg-color">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
          <div className="section-agency text-center mb-50">
            <h2 className="section-agency__title_big text-white">
              Powerful Set of our Features
            </h2>
            <span className="section-agency__line section-agency__line_one color-secondary">
            </span>
            <span className="section-agency__line section-agency__line_two color-secondary">
            </span>
            <span className="section-agency__line section-agency__line_three color-secondary">
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 wow fadeInUp mb-30" data-wow-delay=".2s">
          <div className="featured-agency">
            <header className="header">
              <i className="flaticon flaticon-create icon" />
            </header>
            <article className="article">
              <h4 className="heading">
                <a href="services-details.html">IT Design</a>
              </h4>
              <p className="paragraph">
                Grursus mal suada lisis Lorem the ipsum consectetur elit
                fadolorit to consectetur more elit.
              </p>
              <a className="link" href="services-details.html">
                Discover now
              </a>
            </article>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp mb-30" data-wow-delay=".2s">
          <div className="featured-agency">
            <header className="header">
              <i className="flaticon flaticon-management icon" />
            </header>
            <article className="article">
              <h4 className="heading">
                <a href="services-details.html">IT Management</a>
              </h4>
              <p className="paragraph">
                Grursus mal suada lisis Lorem the ipsum consectetur elit
                fadolorit to consectetur more elit.
              </p>
              <a className="link" href="services-details.html">
                Discover now
              </a>
            </article>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp mb-30" data-wow-delay=".2s">
          <div className="featured-agency">
            <header className="header">
              <i className="flaticon flaticon-secure-shield icon" />
            </header>
            <article className="article">
              <h4 className="heading">
                <a href="services-details.html">Data Security</a>
              </h4>
              <p className="paragraph">
                Grursus mal suada lisis Lorem the ipsum consectetur elit
                fadolorit to consectetur more elit.
              </p>
              <a className="link" href="services-details.html">
                Discover now
              </a>
            </article>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp mb-30" data-wow-delay=".2s">
          <div className="featured-agency">
            <header className="header">
              <i className="flaticon flaticon-analytics icon" />
            </header>
            <article className="article">
              <h4 className="heading">
                <a href="services-details.html">Business Reform</a>
              </h4>
              <p className="paragraph">
                Grursus mal suada lisis Lorem the ipsum consectetur elit
                fadolorit to consectetur more elit.
              </p>
              <a className="link" href="services-details.html">
                Discover now
              </a>
            </article>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp mb-30" data-wow-delay=".2s">
          <div className="featured-agency">
            <header className="header">
              <i className="flaticon flaticon-client icon" />
            </header>
            <article className="article">
              <h4 className="heading">
                <a href="services-details.html">IT Counsultancy</a>
              </h4>
              <p className="paragraph">
                Grursus mal suada lisis Lorem the ipsum consectetur elit
                fadolorit to consectetur more elit.
              </p>
              <a className="link" href="services-details.html">
                Discover now
              </a>
            </article>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp mb-30" data-wow-delay=".2s">
          <div className="featured-agency">
            <header className="header">
              <i className="flaticon flaticon-deadline icon" />
            </header>
            <article className="article">
              <h4 className="heading">
                <a href="services-details.html">QA &amp; Testing</a>
              </h4>
              <p className="paragraph">
                Grursus mal suada lisis Lorem the ipsum consectetur elit
                fadolorit to consectetur more elit.
              </p>
              <a className="link" href="services-details.html">
                Discover now
              </a>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ======= Service Area End ======= */}
  {/* ======= Solution Area Start ======= */}
  <section className="solution pt-120 pb-100 overflow-hidden">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
          <div className="section-agency text-center mb-50">
            <h2 className="section-agency__title_big">
              Preparing for your Success, We Provide Truly IT Solutions.
            </h2>
            <span className="section-agency__line section-agency__line_one primary-bg-color">
            </span>
            <span className="section-agency__line section-agency__line_two primary-bg-color">
            </span>
            <span className="section-agency__line section-agency__line_three primary-bg-color">
            </span>
          </div>
        </div>
      </div>
      <div className="solution-tab__wrapper mb-30">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="solution-tab">
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a href="ser" className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                    <div className="featured-agency solution-tab__agency wow fadeInUp" data-wow-delay=".2s">
                      <header className="header">
                        <i className="flaticon flaticon-guarantee icon" />
                      </header>
                      <article className="article">
                        <h4 className="heading">Warranty Management IT</h4>
                        <p className="paragraph">
                          Grursus mal suada faci lisis Lorem ipsum
                          dolarorit more ametion consectetur dummyelit.
                        </p>
                      </article>
                    </div>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a href="ser" className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
                    <div className="featured-agency solution-tab__agency wow fadeInUp" data-wow-delay=".4s">
                      <header className="header">
                        <i className="flaticon flaticon-package icon" />
                      </header>
                      <article className="article">
                        <h4 className="heading">
                          Product Engineering &amp; Services
                        </h4>
                        <p className="paragraph">
                          Grursus mal suada faci lisis Lorem ipsum
                          dolarorit more ametion consectetur dummyelit.
                        </p>
                      </article>
                    </div>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a href="ser" className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">
                    <div className="featured-agency solution-tab__agency wow fadeInUp" data-wow-delay=".6s">
                      <header className="header">
                        <i className="flaticon flaticon-deadline icon" />
                      </header>
                      <article className="article">
                        <h4 className="heading">Quality Control System</h4>
                        <p className="paragraph">
                          Grursus mal suada faci lisis Lorem ipsum
                          dolarorit more ametion consectetur dummyelit.
                        </p>
                      </article>
                    </div>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a href="ser" className="nav-link" id="pills-service-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">
                    <div className="featured-agency solution-tab__agency wow fadeInUp" data-wow-delay=".8s">
                      <header className="header">
                        <i className="flaticon flaticon-cpu icon" />
                      </header>
                      <article className="article">
                        <h4 className="heading">
                          Infrastructure Integration Technology
                        </h4>
                        <p className="paragraph">
                          Grursus mal suada faci lisis Lorem ipsum
                          dolarorit more ametion consectetur dummyelit.
                        </p>
                      </article>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active wow fadeInUp" data-wow-delay=".8s" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="solution-tab__image">
                  <img src="assets/images/mockup/macbook-mockup.png" alt="Image" className="image image--fixed" width={813} height={490} />
                </div>
              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="solution-tab__image">
                  <img src="assets/images/mockup/macbook-mockup.png" alt="Image" className="image image--fixed" width={813} height={490} />
                  <img className="image image--replace" src="assets/images/home3/screen-replace2.png" alt="Screen Replace" width={557} height={347} />
                </div>
              </div>
              <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-service-tab">
                <div className="solution-tab__image">
                  <img src="assets/images/mockup/macbook-mockup.png" alt="Image" className="image image--fixed" width={813} height={490} />
                  <img className="image image--replace" src="assets/images/home3/screen-replace.png" alt="Screen Replace" width={557} height={347} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ======= Solution Area End ======= */}
  {/* ======= Counter Area Start ======= */}
  <section className="counter counter--software">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="counter__software_wrapper m-0 primary-bg-color">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-30">
                <div className="counter__item counter__software text-center">
                  <span className="counter__item_count text-white counter-number" data-num={109}>109</span>
                  <h3 className="counter__item_title text-white heading">
                    Happy Clients
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-30">
                <div className="counter__item counter__software text-center">
                  <span className="counter__item_count text-white counter-number" data-num={28}>28</span>
                  <h3 className="counter__item_title text-white heading">
                    Finished Projects
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-30">
                <div className="counter__item counter__software text-center">
                  <span className="counter__item_count text-white counter-number" data-num={35}>35</span>
                  <h3 className="counter__item_title text-white heading">
                    Skilled Experts
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-30">
                <div className="counter__item counter__software text-center">
                  <span className="counter__item_count text-white counter-number" data-num={107}>107</span>
                  <h3 className="counter__item_title text-white heading">
                    Media Posts
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ======= Counter Area End ======= */}
  {/* ======= Project Area Start ======= */}
  <section className="project project--agency">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-agency text-center mb-50">
            <h2 className="section-agency__title_big">
              Introduce Our Projects
            </h2>
            <span className="section-agency__line section-agency__line_one primary-bg-color">
            </span>
            <span className="section-agency__line section-agency__line_two primary-bg-color">
            </span>
            <span className="section-agency__line section-agency__line_three primary-bg-color">
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 mb-30 aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration={800} data-aos-delay={400}>
          <div className="project-item multi-side-hover">
            <div className="image">
              <img className="image__big" src="assets/images/home3/project-thumb-1.jpg" alt="Project" />
              <a className="image__link" href="https://youtu.be/yJg-Y5byMMw" data-fancybox><i className="fas fa-search" /></a>
              <h5 className="text-white heading">
                <a href="case-details.html">Analysis of Web Security</a>
              </h5>
              <span className="tags">App / Website</span>
            </div>
            <div className="item-overlay" />
          </div>
        </div>
        <div className="col-lg-4 mb-30 aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration={800} data-aos-delay={500}>
          <div className="project-item multi-side-hover">
            <div className="image">
              <img className="image__big" src="assets/images/home3/project-thumb-2.jpg" alt="Project" />
              <a className="image__link" href="https://youtu.be/yJg-Y5byMMw" data-fancybox><i className="fas fa-search" /></a>
              <h5 className="text-white heading">
                <a href="case-details.html">Analysis of Web Security</a>
              </h5>
              <span className="tags">App / Website</span>
            </div>
            <div className="item-overlay" />
          </div>
        </div>
        <div className="col-lg-4 mb-30 aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration={800} data-aos-delay={600}>
          <div className="project-item multi-side-hover">
            <div className="image">
              <img className="image__big" src="assets/images/home3/project-thumb-3.jpg" alt="Project" />
              <a className="image__link" href="https://youtu.be/yJg-Y5byMMw" data-fancybox><i className="fas fa-search" /></a>
              <h5 className="text-white heading">
                <a href="case-details.html">Analysis of Web Security</a>
              </h5>
              <span className="tags">App / Website</span>
            </div>
            <div className="item-overlay" />
          </div>
        </div>
        <div className="col-lg-4 mb-30 aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration={800} data-aos-delay={700}>
          <div className="project-item multi-side-hover">
            <div className="image">
              <img className="image__big" src="assets/images/home3/project-thumb-4.jpg" alt="Project" />
              <a className="image__link" href="https://youtu.be/yJg-Y5byMMw" data-fancybox><i className="fas fa-search" /></a>
              <h5 className="text-white heading">
                <a href="case-details.html">Analysis of Web Security</a>
              </h5>
              <span className="tags">App Devolopment</span>
            </div>
            <div className="item-overlay" />
          </div>
        </div>
        <div className="col-lg-4 mb-30 aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration={800} data-aos-delay={800}>
          <div className="project-item multi-side-hover">
            <div className="image">
              <img className="image__big" src="assets/images/home3/project-thumb-5.jpg" alt="Project" />
              <a className="image__link" href="https://youtu.be/yJg-Y5byMMw" data-fancybox><i className="fas fa-search" /></a>
              <h5 className="text-white heading">
                <a href="case-details.html">Analysis of Web Security</a>
              </h5>
              <span className="tags">App Devolopment</span>
            </div>
            <div className="item-overlay" />
          </div>
        </div>
        <div className="col-lg-4 mb-30 aos-item aos-init aos-animate" data-aos="fade-up" data-aos-duration={800} data-aos-delay={900}>
          <div className="project-item multi-side-hover">
            <div className="image">
              <img className="image__big" src="assets/images/home3/project-thumb-6.jpg" alt="Project" />
              <a className="image__link" href="https://youtu.be/yJg-Y5byMMw" data-fancybox><i className="fas fa-search" /></a>
              <h5 className="text-white heading">
                <a href="case-details.html">Analysis of Web Security</a>
              </h5>
              <span className="tags">App Devolopment</span>
            </div>
            <div className="item-overlay" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ======= Project Area End ======= */}
  {/* ======= Price Area Start ======= */}
  <section className="price pt-120 pb-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-agency text-center mb-50">
            <h2 className="section-agency__title_big">
              We Provide Awesome Pricing Plan for Application
            </h2>
            <span className="section-agency__line section-agency__line_one primary-bg-color">
            </span>
            <span className="section-agency__line section-agency__line_two primary-bg-color">
            </span>
            <span className="section-agency__line section-agency__line_three primary-bg-color">
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-30">
          <div className="price-item price-item--agency">
            <header className="price-item__header">
              <div className="price-item__header_icon">
                <div className="price-item__icon">
                  <object data="assets/images/icon/price-setting.svg" type="image/svg+xml">
                    <img src="assets/images/icon/price-setting.svg" alt="price" />
                  </object>
                </div>
              </div>
              <h3 className="price-item__title">Economy</h3>
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
        <div className="col-lg-4 col-md-6 mb-30">
          <div className="price-item price-item--agency">
            <header className="price-item__header">
              <div className="price-item__header_icon">
                <div className="price-item__icon">
                  <object data="assets/images/icon/price-quality.svg" type="image/svg+xml">
                    <img src="assets/images/icon/price-quality.svg" alt="price" />
                  </object>
                </div>
              </div>
              <h3 className="price-item__title">Ultimate</h3>
              <span className="price-item__price">$159<span>/ month</span></span>
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
        <div className="col-lg-4 col-md-6 mb-30">
          <div className="price-item price-item--agency">
            <header className="price-item__header">
              <div className="price-item__header_icon">
                <div className="price-item__icon">
                  <object data="assets/images/icon/price-diamond.svg" type="image/svg+xml">
                    <img src="assets/images/icon/price-diamond.svg" alt="price" />
                  </object>
                </div>
              </div>
              <h3 className="price-item__title">Professional</h3>
              <span className="price-item__price">$199<span>/ month</span></span>
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
  
  {/* ======= Team Area Start ======= */}
  <section className="team pt-120 pb-90">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12">
          <div className="section-agency text-center mb-50">
            <h2 className="section-agency__title_big">
              Meet Out Team Member
            </h2>
            <span className="section-agency__line section-agency__line_one primary-bg-color">
            </span>
            <span className="section-agency__line section-agency__line_two primary-bg-color">
            </span>
            <span className="section-agency__line section-agency__line_three primary-bg-color">
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-30">
          <div className="team-block">
            <div className="image">
              <img className="image__member" src="assets/images/team/team-member-1.jpg" alt />
              <div className="social">
                <ul>
                  <li>
                    <a className="facebook" href="javascript:void(0);">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="javascript:void(0);">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="instagram" href="javascript:void(0);">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a className="linkedin" href="javascript:void(0);">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content">
              <span className="designation">Art director</span>
              <h3 className="name">John Gonzalez</h3>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-30">
          <div className="team-block">
            <div className="image">
              <img className="image__member" src="assets/images/team/team-member-2.jpg" alt />
              <div className="social">
                <ul>
                  <li>
                    <a className="facebook" href="javascript:void(0);">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="javascript:void(0);">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="instagram" href="javascript:void(0);">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a className="linkedin" href="javascript:void(0);">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content">
              <span className="designation">Marketing Head</span>
              <h3 className="name">Ashley Riordan</h3>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-30">
          <div className="team-block">
            <div className="image">
              <img className="image__member" src="assets/images/team/team-member-3.jpg" alt />
              <div className="social">
                <ul>
                  <li>
                    <a className="facebook" href="javascript:void(0);">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="javascript:void(0);">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="instagram" href="javascript:void(0);">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a className="linkedin" href="javascript:void(0);">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="content">
              <span className="designation">MANAGER &amp; qc</span>
              <h3 className="name">Albert Coleman</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ======= Team Area End ======= */}
  {/* ======= Contact Area Start ======= */}
  <section className="contact contact--agency" data-bg-image="assets/images/bg/contact-bg.jpg">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="contact__agency">
            <span className="title text-white">We are here to answer your questions 24/7</span>
            <h2 className="heading text-white">NEED A CONSULTATION?</h2>
            <a href="contact.html" className="btn btn--common btn--default btn--primary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ======= Contact Area End ======= */}
</main>
{/* ======= Main Wrapper End ======= */}

    </div>
  )
}
