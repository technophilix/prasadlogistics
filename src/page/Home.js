import React from 'react';
import {Link} from "react-router-dom";
import Service from "../Component/Service";
import Features from "../Component/Features";
import Gallery from "../Component/Gallery";
import Testimonial from "../Component/Testimonial";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import brn from "../realassets/bnr-img.png"
import shape1 from "../realassets/shape-1.png"
import shape2 from "../realassets/shape-2.png"
import bookmockup from "../realassets/book-mockup.png"


const Home = () => {
    return (
        <>

            {/*Full width header End*/}
            {/* Banner Start */}
            <div className="rs-banner banner-style8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="content-wrap">
              <span className="wow fadeInDown sub-title">
                Hello, We are Prasad Liogistics
              </span>
                                <h1 className="title wow fadeInLeft">
                                    Secure, Swift, Superior Railway Transit
                                </h1>
                                <div className="description wow fadeInLeft2">
                                    <p>
                                        To provide the best covering / packaging and security services in railway
                                        transit of commodities to our clients.
                                    </p>
                                </div>
                                <div className="bnr-btn wow fadeInUp">
                                    <Link
                                        className="readon consultant get-green3"
                                        to={'/contact'}
                                    >
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="bnr-images">
                                <div className="images-wrap">
                                    <img
                                        className="wow fadeInUp"
                                        src={brn}
                                        alt="Images"
                                    />
                                    <div className="shape-img one">
                                        <img
                                            className="veritcal3"
                                            src={shape1}
                                            alt="Images"
                                        />
                                    </div>
                                    <div className="shape-img two">
                                        <img
                                            className="horizontal"
                                            src={shape2}
                                            alt="Images"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner End */}

            {/*service start    */}
            <Service/>

            {/*service end    */}


            {/* Feature Start */}

            <Features/>

            {/* Feature End */}
            {/* Ebook Read Start */}

            <Gallery/>

            {/* Ebook Read End */}
            {/* Testimonial Section End */}

            <Testimonial/>

            {/* Testimonial Section End */}

            {/* Cta Start */}
            <div className="rs-cta cta-style3 gray-bg11 pt-140 pb-140 md-pt-80 md-pb-80">
                <div className="container">
                    <div className="row y-middle">
                        <div className="col-lg-6 md-mb-40">
                            <div className="sec-title">
                                <h2 className="title white-color pb-26">
                                    Stay Connected with Us!
                                </h2>
                                <p className="desc desc4 pb-50">
                                    Join our growing community and be the first to know about exclusive offers and upcoming events.
                                </p>
                                <div className="newsletter-form mb-30 md-mb-0">
                                    <div className="form-inner">
                                        <input
                                            id="news-email"
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            required=""
                                        />
                                        <input
                                            className="submit"
                                            type="submit"
                                            defaultValue="Get Started"

                                            onClick={()=>{
                                                toast('🦄 Thank you for connecting us', {
                                                    position: "top-right",
                                                    autoClose: 5000,
                                                    hideProgressBar: false,
                                                    closeOnClick: true,
                                                    pauseOnHover: true,
                                                    draggable: true,
                                                    progress: undefined,
                                                    theme: "light",
                                                });


                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="cta-img text-right md-left">
                                <img
                                    src={bookmockup}
                                    alt="Images"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Cta End */}
            {/* Contact Start */}
            <div className="rs-contact contact-style5 black-bg2 pt-40 pb-40">
                <div className="container">
                    <div className="row custom10">
                        <div className="col-lg-4 col-md-6 md-mb-30">
                            <div className="address-box">
                                <div className="address-icon">
                                    <i className="fa fa-phone"/>
                                </div>
                                <div className="address-text">
                                    <span className="label">Call Us</span>
                                    <span className="des">
                  (+91)7865060568
                  <br/>
                </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 sm-mb-30">
                            <div className="address-box">
                                <div className="address-icon">
                                    <i className="fa fa-envelope-open"/>
                                </div>
                                <div className="address-text">
                                    <span className="label">Mail Us</span>
                                    <span className="des">
                  contact@prasadlogistics.com
                  <br/>
                </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="address-box">
                                <div className="address-icon">
                                    <i className="fa fa-share"/>
                                </div>
                                <div className="address-text">
                                    <span className="label pb-10">Follow Us</span>
                                    <div className="social-icon">
                                        <a href="#">
                                            <i className="fa fa-facebook"/>
                                        </a>
                                        <a className="icon2" href="#">
                                            <i className="fa fa-twitter"/>
                                        </a>
                                        <a className="icon3" href="#">
                                            <i className="fa fa-youtube"/>
                                        </a>
                                        <a className="icon4" href="#">
                                            <i className="fa fa-linkedin"/>
                                        </a>
                                        <a className="icon5" href="#">
                                            <i className="fa fa-instagram"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}

            {/* Main content End */
            }
            {/* Footer Start */
            }

        </>
    )
        ;
};

export default Home;