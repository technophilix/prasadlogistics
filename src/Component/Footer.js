import React from 'react';

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
                                    Capitalize on low hanging fruit to identify a ballpark value added
                                    activity to beta test.
                                </p>
                                <div className="footer-btn">
                                    <a
                                        className="readon started footer-more blue-more"
                                        href="contact-us-1.html"
                                    >
                                        <span className="btn-txt">Discover More</span>
                                    </a>
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
                                                <a href="about-us.html">About Us</a>
                                            </li>
                                            <li>
                                                <a href="services-1.html">Services</a>
                                            </li>
                                            <li>
                                                <a href="faq.html">FAQ</a>
                                            </li>
                                            <li>
                                                <a href="blog-standard.html">Blog Standard</a>
                                            </li>
                                            <li>
                                                <a href="contact-1.html">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4 md-mb-10">
                                        <div className="footer-inner mb-60">
                                            <h5 className="footer-title">Portfolio</h5>
                                            <div className="heading-border-line"/>
                                        </div>
                                        <ul className="site-map">
                                            <li>
                                                <a href="advanced-analytic.html">Advanced Analytic</a>
                                            </li>
                                            <li>
                                                <a href="business-services.html">Business Services</a>
                                            </li>
                                            <li>
                                                <a href="consulting-services.html">Consulting Services</a>
                                            </li>
                                            <li>
                                                <a href="consumer-product.html">Consumer Product</a>
                                            </li>
                                            <li>
                                                <a href="financial-services.html">Financial Services</a>
                                            </li>
                                        </ul>
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
                                                        <a href="tel:+555567812340">+555 5678 12340</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="address-box mb-12">
                                                <div className="address-icon">
                                                    <i className="fa fa-map-marker"/>
                                                </div>
                                                <div className="address-text">
                                                    <div className="text">
                                                        <span className="des">3500 M. River Rd. New Work</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="address-box">
                                                <div className="address-icon">
                                                    <i className="fa fa-envelope"/>
                                                </div>
                                                <div className="address-text">
                                                    <div className="text">
                                                        <a href="mailto:info@yourmail.com">info@yourmail.com</a>
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
                                                    <i className="fa fa-twitter"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-linkedin"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-pinterest-p"/>
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
                                            <a href="#">About</a>
                                        </li>
                                        <li>
                                            <a href="#">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="#">Blog Standard</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <div className="copyright text-lg-start text-center">
                                        <p>
                                            © 2023 Bcom. Designed By{" "}
                                            <a href="https://rstheme.com/" target="blank">
                                                RSTheme
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