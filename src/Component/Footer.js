import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer id="rs-footer" className="rs-footer footer-style3">
                <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-lg-4 md-mb-30 pr-115 md-pr-15">
                                <div className="footer-inner mb-60">
                                    <h5 className="footer-title">About Us</h5>
                                    <div className="heading-border-line"/>
                                </div>
                                <p className="description">
                                    Prasad Logistics & Services Pvt. Ltd. is a leading name in the area of providing expert and professional, trust-worthy Covering Services of commodity loaded rakes using tarpaulin, escorting of loaded rakes and all other value added services related to this across in Pan India. We have a strong nationwide presence with branches and regional branches spread across the country.
                                </p>
                                <div className="footer-btn">
                                    <Link
                                        className="readon started footer-more blue-more"
                                        to="/about-us"
                                    >
                                        <span className="btn-txt">Discover More</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-4 md-mb-10">
                                        <div className="footer-inner mb-60">
                                            <h5 className="footer-title">Our Services</h5>
                                            <div className="heading-border-line"/>
                                        </div>
                                        <ul className="site-map">
                                            <li>
                                                <a href="/about-us">About Us</a>
                                            </li>
                                            <li>
                                                <a href="/services">Services</a>
                                            </li>

                                            <li>
                                                <a href="/contact">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 md-mb-10">

                                    </div>
                                    <div className="col-lg-4">
                                        <div className="footer-inner mb-60">
                                            <h5 className="footer-title">Contact Us</h5>
                                            <div className="heading-border-line"/>
                                        </div>
                                        <div className="contact-box">
                                            <div className="address-box mb-12">
                                                <div className="address-icon">
                                                    <i className="fa fa-phone"/>
                                                </div>
                                                <div className="address-text">
                                                    <div className="text">
                                                        <a href="tel:+555567812340">PLSPL Office - 8967655200</a><br/>
                                                        <a href="tel:+555567812340">Vizag Office : 9000197082</a><br/>
                                                        <a href="tel:+555567812340">Manoj Prasad : 7865060568</a><br/>
                                                        <a href="tel:+555567812340">Pradip Maurya : 9378221855</a><br/>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="address-box mb-12">
                                                <div className="address-icon">
                                                    <i className="fa fa-map-marker"/>
                                                </div>
                                                <div className="address-text">
                                                    <div className="text">
                                                        <span className="des"><p>Plot No. - 58, Khatian No. &ndash; 22,<br/>Holding Premises No. &ndash; 71/14N,<br/>
                                                            C/o Daya Shankar Koiri,<br/>
L.C. More Kulti,<br/>
P.O. &amp; P.S. &ndash; Kulti,<br/>
Asansol,Paschim Bardhaman,<br/>
West Bengal</p></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="address-box">
                                                <div className="address-icon">
                                                    <i className="fa fa-envelope"/>
                                                </div>
                                                <div className="address-text">
                                                    <div className="text">
                                                        <a href="mailto:contact@prasadlogistics.com">contact@prasadlogistics.com</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="footer-social">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-facebook"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-youtube"/>
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="bottom-border">
                            <div className="row y-middle">
                                <div className="col-lg-6 md-mb-10 text-lg-end text-center order-last">
                                    <ul className="copy-right-menu">
                                        <li>
                                            <a href="/about-us">About</a>
                                        </li>
                                       <li>
                                            <a href="/contact">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <div className="copyright text-lg-start text-center">
                                        <p>
                                            © 2023 Prasad Logistics & Services Pvt Ltd. Designed By{" "}
                                            <a href="https://facebook.com/designBAW/" target="blank">
                                                Black Art Works
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer End */
            }
            {/* start scrollUp  */
            }
            <div id="scrollUp" className="green-color2">
                <i className="fa fa-angle-up"/>
            </div>
            {/* End scrollUp  */
            }
            {/* Search Modal Start */
            }
            <div
                aria-hidden="true"
                className="modal fade search-modal"
                role="dialog"
                tabIndex={-1}
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="search-block clearfix">
                            <form>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        placeholder="Search Here..."
                                        type="text"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;