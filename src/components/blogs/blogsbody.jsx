import React from "react";
import AboutHero from '../hero-breadcrumbs';


function BlogsBody() {
  return ( 
    <div className="BlogsBody">

{/* ======= Main Wrapper Start ======= */}
<main className="main-wrapper">
  {/* ======= Hero inner Start ======= */}
  <AboutHero title="Blogs"/>
  {/* ======= Hero inner End ======= */}
  {/* ======= Blog Area Start ======= */}
  <div className="blog pt-130 pb-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="blog-details mb-30">
            <header className="header">
              <img className="blog-item__img mb-45" src="assets/images/blog/blog-thumb-list-1.jpg" alt="Questions every Business" />
              <ul className="meta mb-10">
                <li className="blog-item__list list">
                  <i className="far fa-calendar-alt" />
                  <span className="name name--dates">18 April, 2021</span>
                </li>
                <li className="blog-item__list list">
                  <i className="far fa-folder-open" />
                  <span className="name name--poster">Quick Tips, idea</span>
                </li>
              </ul>
            </header>
            <article>
              <h2 className="title title--big mb-10">
                Questions every Business Owner able to answer that..
              </h2>
              <p className="paragraph mb-30">
                Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
                consectetur elit. Vesti at bulum nec the odio aea the dumm
                ipsumm ipsum that dolocons rsus mal suada and fadolorit to the
                consectetur elit. All the Lorem Ipsum generators on the Internet
                tend to repeat that predefined chunks as necessary making this
                the first true dummy generator on the Internet.Grursus mal suada
                faci lisis Lorem ipsum dolarorit more ametion consectetur elit.
                Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons
                rsus mal suada and fadolorit to the consectetur elit.
              </p>
              <p className="paragraph mb-30">
                Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
                consectetur elit. Vesti at bulum nec at odio aea the dumm ipsumm
                ipsum that dolocons rsus mal suada and fadolorit to the
                consectetur elit. All the Lorem Ipsum generators on the Internet
                tend.
              </p>
              <div className="quotes mb-30">
                <i className="flaticon flaticon-left-quote" /> Our clients
                describe us as a product team which creates amazing UI/UX, by
                crafting top-notch user experience.
              </div>
              <p className="paragraph mb-30">
                Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
                consectetur elit. Vesti at bulum nec the odio aea the dumm
                ipsumm ipsum that dolocons rsus mal suada and fadolorit to the
                consectetur elit. All the Lorem Ipsum generators on the Internet
                tend to repeat that predefined chunks as necessary making this
                the first true dummy generator on the Internet.Grursus mal suada
                faci lisis Lorem ipsum dolarorit more ametion consectetur elit.
                Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons
                rsus mal suada and fadolorit to the consectetur elit.
              </p>
              <p className="paragraph mb-30">
                Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
                consectetur elit. Vesti at bulum nec at odio aea the dumm ipsumm
                ipsum that dolocons rsus mal suada and fadolorit to the
                consectetur elit. All the Lorem Ipsum generators on the Internet
                tend.
              </p>
            </article>
            <footer>
              <div className="row align-items-center pt-20">
                <div className="col-lg-6 mb-30">
                  <div className="tags">
                    <div className="tag-list">
                      <a href="#" className="tag-link">Tech</a>
                      <a href="#" className="tag-link">Design</a>
                      <a href="#" className="tag-link">Web</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-30">
                  <div className="tags">
                    <div className="tag-list share">
                      <ul>
                        <li>
                          <a href="#" className="tag-link">
                            <i className="fas fa-share-alt primary-text-color"> </i>
                          </a>
                          <ul>
                            <li>
                              <div className="header-top__social">
                                <ul>
                                  <li className="header-top__social_list">
                                    <a className="header-top__social_list--link facebook" href="javascript:void(0);">
                                      <i className="fab fa-facebook-f" />
                                    </a>
                                  </li>
                                  <li className="header-top__social_list">
                                    <a className="header-top__social_list--link twitter" href="javascript:void(0);">
                                      <i className="fab fa-twitter" />
                                    </a>
                                  </li>
                                  <li className="header-top__social_list">
                                    <a className="header-top__social_list--link instagram" href="javascript:void(0);">
                                      <i className="fab fa-instagram" />
                                    </a>
                                  </li>
                                  <li className="header-top__social_list">
                                    <a className="header-top__social_list--link linkedin" href="javascript:void(0);">
                                      <i className="fab fa-linkedin-in" />
                                    </a>
                                  </li>
                                  <li className="header-top__social_list">
                                    <a className="header-top__social_list--link pinterest" href="javascript:void(0);">
                                      <i className="fab fa-pinterest-p" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-30">
                <div className="col-sm-12 mb-30">
                  <div className="blog-author">
                    <div className="blog-author__image">
                      <img src="assets/images/blog/blog-details-author.png" alt="Author" />
                    </div>
                    <div className="blog-author__content">
                      <h2 className="title title--big">Dolly Roger</h2>
                      <h3 className="title title--small">
                        Grursus mal suada faci ipsum ametion consectetur elit.
                      </h3>
                      <p className="paragraph">
                        Grursus mal suada faci ipsum ametion consectetur elit.
                        Vesti at bulum nec odio aea the dumm ipsumm ipsum
                        fadolorit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="blog-arrow row align-items-center">
                    <div className="col-6 mb-30">
                      <div className="arrow">
                        <a className="link link--prev" href="#">
                          <i className="flaticon flaticon-previous" />
                          Previous Post
                        </a>
                      </div>
                    </div>
                    <div className="col-6 mb-30">
                      <div className="arrow text-end">
                        <a className="link link--next" href="#">
                          Go to Next
                          <i className="flaticon flaticon-next" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="blog-details__related pt-15">
                    <h3 className="title title--blog mb-25">Related Posts</h3>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 blog-item__column mb-30">
                        <div className="blog-item blog-item--software">
                          <div className="blog-item__header header">
                            <a href="javascript:void(0);" className="blog-item__img_link link link--image">
                              <img width={551} height={395} className="blog-item__img" src="assets/images/blog/blog-thumb-1.jpg" alt="Questions every Business" />
                            </a>
                            <ul className="meta">
                              <li className="blog-item__list list">
                                <i className="far fa-user icon" />
                                <span className="name name--poster">By James Smith</span>
                              </li>
                              <li className="blog-item__list list">
                                <i className="far fa-calendar icon" />
                                <span className="name name--dates">18 April, 2021</span>
                              </li>
                            </ul>
                          </div>
                          <article className="blog-item__article content">
                            <h3 className="blog-item__title">
                              <a href="blog-details.html">
                                Questions every Business Owner able to answer
                                that..
                              </a>
                            </h3>
                            <p className="blog-item__text">
                              Grursus mal suada Lorem ipsum ametion the
                              consectetur elit. Vesti at bulum nec odio aea
                              fadolorit consectetur elit.
                            </p>
                            <span className="tags"><a href="#">Quick Tips</a>,</span>
                            <span className="tags"><a href="#">idea</a></span>
                          </article>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 blog-item__column mb-30">
                        <div className="blog-item blog-item--software">
                          <div className="blog-item__header header">
                            <a href="javascript:void(0);" className="blog-item__img_link link link--image">
                              <img width={551} height={395} className="blog-item__img" src="assets/images/blog/blog-thumb-2.jpg" alt="Questions every Business" />
                            </a>
                            <ul className="meta">
                              <li className="blog-item__list list">
                                <i className="far fa-user icon" />
                                <span className="name name--poster">By James Smith</span>
                              </li>
                              <li className="blog-item__list list">
                                <i className="far fa-calendar icon" />
                                <span className="name name--dates">18 April, 2021</span>
                              </li>
                            </ul>
                          </div>
                          <article className="blog-item__article content">
                            <h3 className="blog-item__title">
                              <a href="blog-details.html">
                                Questions every Business Owner able to answer
                                that..
                              </a>
                            </h3>
                            <p className="blog-item__text">
                              Grursus mal suada Lorem ipsum ametion the
                              consectetur elit. Vesti at bulum nec odio aea
                              fadolorit consectetur elit.
                            </p>
                            <span className="tags"><a href="#">Solution</a>,</span>
                            <span className="tags"><a href="#">Tips</a></span>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="blog-comment mb-30">
                    <h3 className="title title--blog mb-40">Comments</h3>
                    <div className="blog-author comment">
                      <div className="blog-author__image">
                        <img src="assets/images/blog/blog-details-commentar-1.png" alt="Author" />
                      </div>
                      <div className="blog-author__content">
                        <h2 className="title title--small">
                          Victoria Fisher
                          <button>Reply</button>
                        </h2>
                        <p className="paragraph">
                          Grursus mal suada faci lisis Lorem ipsum dolarorit
                          more ametion consectetur elit ipsum that dolocons
                          fadolorit consectetur elit.
                        </p>
                      </div>
                    </div>
                    <div className="blog-author comment reply">
                      <div className="blog-author__image">
                        <img src="assets/images/blog/blog-details-commentar-2.png" alt="Author" />
                      </div>
                      <div className="blog-author__content">
                        <h2 className="title title--small">
                          Angela Kwang
                          <button>Reply</button>
                        </h2>
                        <p className="paragraph">
                          Grursus suada Lorem ipsum dolarorit more dolocons that
                          as fadolorit consectetur elit.
                        </p>
                      </div>
                    </div>
                    <div className="blog-author comment">
                      <div className="blog-author__image">
                        <img src="assets/images/blog/blog-details-commentar-3.png" alt="Author" />
                      </div>
                      <div className="blog-author__content">
                        <h2 className="title title--small">
                          Victoria Fisher
                          <button>Reply</button>
                        </h2>
                        <p className="paragraph">
                          Grursus mal suada faci lisis Lorem ipsum dolarorit
                          more ametion consectetur elit ipsum that dolocons
                          fadolorit consectetur elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <form className="blog-form contact-form pt-30">
                    <h3 className="title title--blog m-0">Leave a Comment</h3>
                    <p>Your email address will not be published.</p>
                    <div className="row">
                      <div className="col-md-6">
                        <input type="text" className="contact-form__input" placeholder="Name *" />
                      </div>
                      <div className="col-md-6">
                        <input type="text" className="contact-form__input" placeholder="Email *" />
                      </div>
                      <div className="col-md-12">
                        <input type="text" className="contact-form__input" placeholder="Website" />
                      </div>
                      <div className="col-md-12">
                        <textarea className="contact-form__input contact-form__input_textarea" name="message" placeholder="Message" defaultValue={""} />
                      </div>
                      <div className="col-md-12">
                        <button className="contact-form__button">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </footer>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="blog-content mb-30">
            <div className="rt-card search-box">
              <form action="#" className="form search-form-box">
                <div className="form-group">
                  <input type="text" name="sarch" id="search" placeholder="Type your search" className="form-control rt-search-control" />
                  <button type="submit" className="search-submit">
                    <i className="fas fa-search" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="blog-content mb-30">
            <div className="rt-card layout-1">
              <h3 className="card-heading mb-25">Categories</h3>
              <ul className="blog-list">
                <li>
                  <a href="#">Finance<span>(5)</span></a>
                </li>
                <li>
                  <a href="#">Business<span>(3)</span></a>
                </li>
                <li>
                  <a href="#">Consultan<span>(2)</span></a>
                </li>
                <li>
                  <a href="#">Investmen<span>(9)</span></a>
                </li>
                <li>
                  <a href="#">Creative<span>(1)</span></a>
                </li>
                <li>
                  <a href="#">Technology<span>(1)</span></a>
                </li>
                <li>
                  <a href="#">UI/UX<span>(4)</span></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="blog-content mb-30">
            <div className="rt-card layout-1 style-2 blogs-post">
              <h3 className="card-heading mb-25">Latest Posts</h3>
              <div className="blog-post blog-post--small media">
                <a href="#" className="post-thumb">
                  <img src="assets/images/blog/blog-sidebar-thumbs-1.jpg" alt="blog-post" width={100} height={80} />
                </a>
                <div className="media-body">
                  <div className="post-meta">
                    <span className="post-meta-date"> September 9, 2020 </span>
                  </div>
                  <h5 className="post-title">
                    <a href="#"> Ideas for Returns the on Investment </a>
                  </h5>
                </div>
              </div>
              <div className="blog-post blog-post--small media">
                <a href="#" className="post-thumb">
                  <img src="assets/images/blog/blog-sidebar-thumbs-2.jpg" alt="blog-post" width={100} height={80} />
                </a>
                <div className="media-body">
                  <div className="post-meta">
                    <span className="post-meta-date"> September 9, 2020 </span>
                  </div>
                  <h5 className="post-title">
                    <a href="#"> How Technology Made Businesses More </a>
                  </h5>
                </div>
              </div>
              <div className="blog-post blog-post--small media">
                <a href="#" className="post-thumb">
                  <img src="assets/images/blog/blog-sidebar-thumbs-3.jpg" alt="blog-post" width={100} height={80} />
                </a>
                <div className="media-body">
                  <div className="post-meta">
                    <span className="post-meta-date"> September 9, 2020 </span>
                  </div>
                  <h5 className="post-title">
                    <a href="#"> How Technology Made Businesses More </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-content mb-30">
            <div className="rt-card layout-1 style-2">
              <h3 className="card-heading mb-30">Popular Tags</h3>
              <div className="tag-list">
                <a href="#" className="tag-link">Tech</a>
                <a href="#" className="tag-link">UI</a>
                <a href="#" className="tag-link">Web</a>
                <a href="#" className="tag-link">Business</a>
                <a href="#" className="tag-link">Creativity</a>
                <a href="#" className="tag-link">Modern Art</a>
                <a href="#" className="tag-link">Apps</a>
                <a href="#" className="tag-link">Future</a>
              </div>
            </div>
          </div>
          <div className="blog-content">
            <div className="instagram">
              <ul className="clearfix">
                <li>
                  <a href="#"><img width={231} height={193} src="assets/images/blog/instagram-1.jpg" alt /></a>
                </li>
                <li>
                  <a href="#"><img width={231} height={193} src="assets/images/blog/instagram-2.jpg" alt /></a>
                </li>
                <li>
                  <a href="#"><img width={231} height={193} src="assets/images/blog/instagram-3.jpg" alt /></a>
                </li>
                <li>
                  <a href="#"><img width={231} height={193} src="assets/images/blog/instagram-4.jpg" alt /></a>
                </li>
                <li>
                  <a href="#"><img width={231} height={193} src="assets/images/blog/instagram-5.jpg" alt /></a>
                </li>
                <li>
                  <a href="#"><img width={231} height={193} src="assets/images/blog/instagram-6.jpg" alt /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ======= Blog Area End ======= */}
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
  );
}

export default BlogsBody;
