import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className="Header">
        {/*start loader*/}
  {/* <div className="loader">
    <div className="cssload-loader">
      <div className="cssload-inner cssload-one" />
      <div className="cssload-inner cssload-two" />
      <div className="cssload-inner cssload-three" />
    </div>
  </div> */}
{/*loader end*/}

    
 
  {/* ======= Header Start ======= */}
  <header className="header d-none d-lg-block sticky-on">
    <div id="sticky-placeholder" />
    <div id="topbar-wrap" className="header-top header-top__border_bottom header-top__padding container-custom">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-9">
            <div className="header-top__info">
              <div className="header-top__info_item header-top__info_time">
                <div className="header-top__info_icon">
                  <i className="flaticon flaticon-clock" />
                </div>
                <div className="header-top__info_text">
                  <p className="header-top__info_text--small">Sunday - Friday:</p>
                  <span className="header-top__info_text--big"> 9am - 8pm </span>
                </div>
              </div>
              <div className="header-top__info_item header-top__info_phone">
                <div className="header-top__info_icon">
                  <i className="flaticon flaticon-phone-call" />
                </div>
                <div className="header-top__info_text">
                  <p className="header-top__info_text--small">Call for help:</p>
                  <span className="header-top__info_text--big">
                    (+123) 5462 3257
                  </span>
                </div>
              </div>
              <div className="header-top__info_item header-top__info_email">
                <div className="header-top__info_icon">
                  <i className="flaticon flaticon-envelope" />
                </div>
                <div className="header-top__info_text">
                  <p className="header-top__info_text--small">Mail to us</p>
                  <span className="header-top__info_text--big">
                    envato@gmail.com
                  </span>
                </div>
              </div>
              <div className="header-top__info_item header-top__info_address">
                <div className="header-top__info_icon">
                  <i className="flaticon flaticon-location" />
                </div>
                <div className="header-top__info_text">
                  <p className="header-top__info_text--small">Our Address:</p>
                  <span className="header-top__info_text--big">
                    380 Albert St, Melbourne
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-none d-lg-block">
            <div className="header-top__social">
              <ul>
                <li className="header-top__social_list">
                  <Link className="header-top__social_list--link facebook" to="#">
                    <i className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li className="header-top__social_list">
                  <Link className="header-top__social_list--link twitter" to="#">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li className="header-top__social_list">
                  <Link className="header-top__social_list--link instagram" to="#">
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
                <li className="header-top__social_list">
                  <Link className="header-top__social_list--link linkedin" to="#">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                </li>
                <li className="header-top__social_list">
                  <Link className="header-top__social_list--link pinterest" to="#">
                    <i className="fab fa-pinterest-p" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="navbar-wrap" className="header-bottom container-custom navbar-wrap white-bg">
      <div className="container-fluid">
        <div className="header-bottom__row">
          <div className="header-bottom__col">
            <div className="logo">
              <Link to="/" className="logo__link">
                <img src="assets/images/logo.png"  />
              </Link>
            </div>
          </div>
          <div className="header-bottom__col">
            <div className="main-menu">
              <nav className="main-menu__nav">
                <ul>
                  <li className="main-menu list">
                    <Link className="animation" to="/">Home</Link>

                  </li>
                  <li className="main-menu__nav_sub list">
                    <Link className="animation" to="/about">Company</Link>
                    <ul className="main-menu__dropdown">
                      <li><Link to="/about">About Us</Link></li>
                      <li>
                      <Link to="/web-design-agency">Web Design Agency</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="main-menu__nav_sub list">
                    <Link className="animation" to="it-solution.html">It Solutions</Link>
                    <ul className="main-menu__dropdown">
                      <li><Link to="it-solution.html">It Solutions</Link></li>
                      <li>
                        <Link to="it-services.html">It Services</Link>
                      </li>
                      <li>
                        <Link to="industries-services.html">Industries Services</Link>
                      </li>
                      <li>
                        <Link to="services-details.html">Services Details 01</Link>
                      </li>
                      <li>
                        <Link to="services-details-02.html">Services Details 02</Link>
                      </li>
                      <li>
                        <Link to="services-details-03.html">Services Details 03</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="main-menu__nav_sub list">
                    <Link className="animation" to="index.html">Pages</Link>
                    <ul className="main-menu__dropdown">
                      <li><Link to="team.html">Our Team</Link></li>
                      <li>
                        <Link to="price.html">Pricing Plans</Link>
                      </li>
                      <li>
                        <Link to="404.html">404 Page</Link>
                      </li>
                      <li>
                        <Link to="case-01.html">Case Studies 01</Link>
                      </li>
                      <li>
                        <Link to="case-02.html">Case Studies 02</Link>
                      </li>
                      <li>
                        <Link to="case-03.html">Case Studies 03</Link>
                      </li>
                      <li>
                        <Link to="case-details.html">Case Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="main-menu list">
                    <Link className="animation" to="/blogs">Blogs</Link>
                    
                  </li>
                  <li className="list">
                    <Link className="animation" to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <form className="header-bottom__col d-none d-lg-block">
            <div className="header-search">
              <input placeholder="Search" type="text" className="header-search__input" />
              <button className="header-search__button">
                <i className="fas fa-search" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </header>
  {/* Mobile Menu Start */}
  <div className="rt-header-menu mean-container position-relative" id="meanmenu">
    <div className="mean-bar">
      <Link to="index.html">
        <img className="logo-small" src="assets/images/logo.png" />
      </Link>
      <form className="header-bottom__col">
        <div className="header-search">
          <input placeholder="Search" type="text" className="header-search__input" />
          <button className="header-search__button">
            <i className="fas fa-search" />
          </button>
        </div>
      </form>
      <span className="sidebarBtn">
        <span className="fa fa-bars" />
      </span>
    </div>
    <div className="rt-slide-nav">
      <div className="offscreen-navigation">
        <nav className="menu-main-primary-container">
          <ul className="menu">
            <li className="list menu-item-parent menu-item-has-children">
              <Link className="animation" to="index.html">Home</Link>
              <ul className="main-menu__dropdown sub-menu">
                <li><Link to="index.html">Main Home</Link></li>
                <li>
                  <Link to="software-innovation.html"> Software Company</Link>
                </li>
                <li><Link to="it-agency.html">IT Agency</Link></li>
                <li>
                  <Link to="vertical-slider.html">Vertical Slider</Link>
                </li>
              </ul>
            </li>
            <li className="list menu-item-parent menu-item-has-children">
              <Link className="animation" to="about-us.html">Company</Link>
              <ul className="main-menu__dropdown sub-menu">
              <Link to="Web-Design-Agency">Web Design Agency</Link>
              <li>
              <li><Link to="/about">About Us</Link></li>    
              </li>
                
              </ul>
            </li>
            <li className="list menu-item-parent menu-item-has-children">
              <Link className="animation" to="it-solution.html">It Solutions</Link>
              <ul className="main-menu__dropdown sub-menu">
                <li><Link to="it-solution.html">It Solutions</Link></li>
                <li>
                  <Link to="it-services.html">It Services</Link>
                </li>
                <li>
                  <Link to="industries-services.html">Industries Services</Link>
                </li>
                <li>
                  <Link to="services-details.html">Services Details 01</Link>
                </li>
                <li>
                  <Link to="services-details-02.html">Services Details 02</Link>
                </li>
                <li>
                  <Link to="services-details-03.html">Services Details 03</Link>
                </li>
              </ul>
            </li>
            <li className="list menu-item-parent menu-item-has-children">
              <Link className="animation" to="index.html">Pages</Link>
              <ul className="main-menu__dropdown sub-menu">
                <li><Link to="team.html">Our Team</Link></li>
                <li>
                  <Link to="price.html">Pricing Plans</Link>
                </li>
                <li>
                  <Link to="404.html">404 Page</Link>
                </li>
                <li>
                  <Link to="case-01.html">Case Studies 01</Link>
                </li>
                <li>
                  <Link to="case-02.html">Case Studies 02</Link>
                </li>
                <li>
                  <Link to="case-03.html">Case Studies 03</Link>
                </li>
                <li>
                  <Link to="case-details.html">Case Details</Link>
                </li>
              </ul>
            </li>
            <li className="list menu-item-parent menu-item-has-children">
              <Link className="animation" to="blog-details.html">Blogs</Link>
              <ul className="main-menu__dropdown sub-menu">
                <li><Link to="grid-layout.html">Grid Layout</Link></li>
                <li>
                  <Link to="list-layout.html">List Layout</Link>
                </li>
                <li>
                  <Link to="blog-details-no-sidebar.html">No Sidebar</Link>
                </li>
                <li>
                  <Link to="blog-details.html">Blog Details</Link>
                </li>
              </ul>
            </li>
            <li className="list menu-item-parent">
              <Link className="animation" to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  {/* Mobile Menu Start End */}
  {/* ======= Header End ======= */}
</div>

  );
}

export default Header;
