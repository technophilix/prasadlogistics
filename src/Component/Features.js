import React from 'react';
import {Link} from "react-router-dom";

const Features = () => {
    return (
        <div className="rs-feature feature-style2 feature-modify5 gray-bg10 pt-140 pb-140 md-pt-75 md-pb-80">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        <div className="sec-title">
              <span className="sub-text sub-text2 sub-text5">
                Prasad Logistics
              </span>
                            <h2 className="title pb-27">
                                Securing Your Cargo, Powering Your Nationwide Success
                            </h2>
                            <p className="desc pb-25">
                                Prasad Logistics & Services Pvt. Ltd. is a leading name in the area of providing expert and professional, trust-worthy Covering Services of commodity loaded rakes using tarpaulin, escorting of loaded rakes and all other value added services related to this across in Pan India. We have a strong nationwide presence with branches and regional branches spread across the country.
                            </p>
                            <ul className="check-lists check-list7">
                                <li className="list-item">
                  <span className="icon-list-icon">
                    <i className="fa fa-check-circle"/>
                  </span>
                                    <span className="list-text">
                  Expert Tarpaulin Covering Services:
                  </span>
                                </li>
                                <li className="list-item">
                  <span className="icon-list-icon">
                    <i className="fa fa-check-circle"/>
                  </span>
                                    <span className="list-text">
                    Comprehensive Value-Added Services
                  </span>
                                </li>
                                <li className="list-item">
                  <span className="icon-list-icon">
                    <i className="fa fa-check-circle"/>
                  </span>
                                    <span className="list-text">
                   Pan India Presence
                  </span>
                                </li>
                                <li className="list-item">
                  <span className="icon-list-icon">
                    <i className="fa fa-check-circle"/>
                  </span>
                                    <span className="list-text">
                    Trustworthy and Reliable
                  </span>
                                </li>
                            </ul>
                            <div className="feature-btn mt-40">
                                <Link
                                    className="readon consultant get-green3"
                                    to={'/about-us'}
                                >
                                    More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="images-wrap3">
                            <img src="assets/images/feature/feature-img9.png" alt="Images"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;