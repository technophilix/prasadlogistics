import React, {useState} from 'react';
import {Link} from "react-router-dom";
import logo from "../realassets/logo-green2.png"
import {buckedID, client, collectionID, databaseID, account} from "../Appwrite";
const Header = () => {

    const [recipient, setRecipient] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleRecipientChange = (e) => {
        setRecipient(e.target.value);
    };

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    };

    const handleBodyChange = (e) => {
        setBody(e.target.value);
    };

    const handleSendEmail = async () => {
        setIsLoading(true);

        try {
            const response = await client.functions.createExecution('sendEmail', {
                to: recipient,
                subject: subject,
                text: body,
            });

            console.log('Email sent:', response);
            setIsModalOpen(false);
        } catch (error) {
            console.error('Error sending email:', error);
        }

        setIsLoading(false);
    };





    return (
        <>

            <div className="offwrap" />

            <div className="full-width-header">
                {/*Header Start*/}
                <header id="rs-header" className="rs-header header-style1 header-modify6">
                    {/* Menu Start */}
                    <div className="menu-area menu-sticky">
                        <div className="container">
                            <div className="row-table">
                                <div className="col-cell header-logo">
                                    <div className="logo-area">
                                        <Link to={'/'}>
                                            <img
                                                className="normal-logo"
                                                src={logo}
                                                alt="logo"


                                            />
                                            <img
                                                className="sticky-logo"
                                                src={logo}
                                                alt="logo"
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-cell">
                                    <div className="rs-menu-area">
                                        <div className="main-menu">
                                            <nav className="rs-menu hidden-md">
                                                <ul className="nav-menu">
                                                    <li>
                                                        <Link to={'/'}>Home</Link>

                                                    </li>
                                                    <li>
                                                        <Link to="/about-us">About Us</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/services">Services</Link>
                                                    </li>

                                                    <li>
                                                        <Link to="/contact">Contact Us</Link>
                                                    </li>



                                                </ul>{" "}
                                                {/* //.nav-menu */}
                                            </nav>
                                        </div>{" "}
                                        {/* //.main-menu */}
                                    </div>
                                </div>
                                <div className="col-cell">
                                    <div className="expand-btn-inner">
                                        <ul>
                                            <li className="btn-quote">
                                                <Link to={'/certificate'}>Catalogue</Link>
                                            </li>
                                            <li className="nav-link">
                                                <a
                                                    id="nav-expander"
                                                    className="nav-expander bar"
                                                    href="#"
                                                >
                                                    <div className="bar">
                                                        <span className="dot1" />
                                                        <span className="dot2" />
                                                        <span className="dot3" />
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Menu End */}
                    {/* Canvas Mobile Menu start */}
                    <nav
                        className="right_menu_togle mobile-navbar-menu"
                        id="mobile-navbar-menu"
                    >
                        <div className="close-btn">
                            <a id="nav-close2" className="nav-close">
                                <div className="line">
                                    <span className="line1" />
                                    <span className="line2" />
                                </div>
                            </a>
                        </div>
                        <ul className="nav-menu">
                            <li className="menu-item-has-children current-menu-item">
                                <a href="index-2.html">Home</a>
                                <ul className="sub-menu">
                                    <li className="menu-item-has-children current-menu-item">
                                        <a href="#">Multipages</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="index-2.html">Consulting Business</a>{" "}
                                            </li>
                                            <li>
                                                <a href="index-3.html">Corporate Business</a>{" "}
                                            </li>
                                            <li>
                                                <a href="index-4.html">Business Consulting 1</a>{" "}
                                            </li>
                                            <li>
                                                <a href="index-5.html">Business Consutling 2</a>{" "}
                                            </li>
                                            <li>
                                                <a href="index-6.html">Insurance Business</a>{" "}
                                            </li>
                                            <li>
                                                <a href="index-7.html">Marketing Consultant</a>{" "}
                                            </li>
                                            <li>
                                                <a href="index-8.html">Fintech</a>{" "}
                                            </li>
                                            <li>
                                                <a href="index-9.html">Digital Business</a>{" "}
                                            </li>
                                            <li className="active">
                                                <a href="index-10.html">Personal Advisor</a>{" "}
                                            </li>
                                            <li>
                                                <a href="index-11.html">Finance Consulting</a>{" "}
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">Onepages</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="onepage-1.html">Onepage Consulting</a>{" "}
                                            </li>
                                            <li>
                                                <a href="onepage-2.html">Onepage Corporate</a>{" "}
                                            </li>
                                            <li>
                                                <a href="onepage-3.html">Onepage Consulting 1</a>{" "}
                                            </li>
                                            <li>
                                                <a href="onepage-4.html">Onepage Consutling 2</a>{" "}
                                            </li>
                                            <li>
                                                <a href="onepage-5.html">Onepage Insurance</a>{" "}
                                            </li>
                                            <li>
                                                <a href="onepage-6.html">Onepage Marketing</a>{" "}
                                            </li>
                                            <li>
                                                <a href="onepage-7.html">Onepage Fintech</a>{" "}
                                            </li>
                                            <li>
                                                <a href="onepage-8.html">Onepage Digital</a>{" "}
                                            </li>
                                            <li>
                                                <a href="onepage-9.html">Onepage Personal</a>{" "}
                                            </li>
                                            <li>
                                                <a href="onepage-10.html">Onepage Finance</a>{" "}
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="about-us.html">About Us</a>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">Pages</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="team.html">Team</a>
                                    </li>
                                    <li className="last-item menu-item-has-children">
                                        <a href="#">Portfolio</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="portfolio-01.html">Portfolio 01</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-02.html">Portfolio 02</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-03.html">Portfolio 03</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-filter.html">Portfolio Filter</a>
                                            </li>
                                            <li>
                                                <a href="portfolio-single.html">Portfolio Single</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="last-item menu-item-has-children">
                                        <a href="#">Pricing Plan</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="pricing-plan-01.html">Pricing Plan 01</a>
                                            </li>
                                            <li>
                                                <a href="pricing-plan-02.html">Pricing Plan 02</a>
                                            </li>
                                            <li>
                                                <a href="pricing-plan-02.html">Pricing Plan 03</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="faq.html">Faqs</a>
                                    </li>
                                    <li>
                                        <a href="partners.html">Partners</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">Services</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="services-style-1.html">Service style 1</a>
                                    </li>
                                    <li>
                                        <a href="services-style-2.html">Services style 2</a>
                                    </li>
                                    <li>
                                        <a href="services-style-3.html">Services style 3</a>
                                    </li>
                                    <li>
                                        <a href="services-style-4.html">Services style 4</a>
                                    </li>
                                    <li>
                                        <a href="services-style-5.html">Services style 5</a>
                                    </li>
                                    <li>
                                        <a href="services-style-6.html">Services style 6</a>
                                    </li>
                                    <li>
                                        <a href="services-style-7.html">Services style 7</a>
                                    </li>
                                    <li className="last-item menu-item-has-children">
                                        <a href="#">Service Tab Styles</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="advance-tab-service-01.html">
                                                    Advance Tab Service 01
                                                </a>
                                            </li>
                                            <li>
                                                <a href="advance-tab-service-01.html">
                                                    Advance Tab Service 02
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="last-item menu-item-has-children">
                                        <a href="#">Service Details</a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="consulting-services.html">Consulting Services</a>
                                            </li>
                                            <li>
                                                <a href="advanced-analytic.html">Advanced Analytic</a>
                                            </li>
                                            <li>
                                                <a href="business-services.html">Business Services</a>
                                            </li>
                                            <li>
                                                <a href="consumer-product.html">Consumer Product</a>
                                            </li>
                                            <li>
                                                <a href="financial-advisory.html">Financial Advisory</a>
                                            </li>
                                            <li>
                                                <a href="investment-advisory.html">Investment Advisory</a>
                                            </li>
                                            <li>
                                                <a href="quality-resourcing.html">Quality Resourcing</a>
                                            </li>
                                            <li>
                                                <a href="security-services.html">Security Services</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <a href="#">Blog</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="blog-standard.html">Blog Standard</a>
                                    </li>
                                    <li>
                                        <a href="blog-grid-style-1.html">Blog Grid Style 1</a>
                                    </li>
                                    <li>
                                        <a href="blog-grid-style-2.html">Blog Grid Style 2</a>
                                    </li>
                                    <li>
                                        <a href="blog-slider-style.html">Blog Slider Style</a>
                                    </li>
                                    <li>
                                        <a href="blog-single.html">blog-single</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="last-item menu-item-has-children">
                                <a href="#">Shop</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="shop.html">Shop</a>
                                    </li>
                                    <li>
                                        <a href="shop-single.html">Shop Single</a>
                                    </li>
                                    <li>
                                        <a href="cart.html">Cart</a>
                                    </li>
                                    <li>
                                        <a href="checkout.html">Checkout</a>
                                    </li>
                                    <li>
                                        <a href="my-account.html">My Account</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="last-item menu-item-has-children">
                                <a href="#">Contact</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a href="contact-us-1.html">Contact Us 1</a>
                                    </li>
                                    <li>
                                        <a href="contact-us-2.html">Contact Us 2</a>
                                    </li>
                                    <li>
                                        <a href="contact-us-3.html">Contact Us 3</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>{" "}
                        {/* //.nav-menu */}
                        {/* //.nav-menu */}
                        {/* //.nav-menu */}
                        <div className="canvas-contact">
                            <ul>
                                <li className="btn-signin">
                                    <a className="signin-button" href="contact-1.html">
                  <span className="sign-text">
                    <i className="ri-user-3-line" /> Sign In{" "}
                  </span>
                                    </a>
                                </li>
                                <li className="btn-quote">
                                    <a href="contact-1.html">
                  <span className="btn-text">
                    <i className="ri-download-line" /> Download
                  </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    {/* Canvas Menu end */}
                </header>
                {/*Header End*/}
            </div>


        </>
    );
};

export default Header;