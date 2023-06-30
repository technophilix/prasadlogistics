import React from 'react';
import ser1 from "../realassets/ser-1.png"
import ser2 from "../realassets/ser-2.png"
import ser3 from "../realassets/ser-3.png"
import ser4 from "../realassets/ser-4.png"

const Service = () => {
    return (

    <div className="rs-services services-style5 services-modify5 pt-135 pb-140 md-pt-75 md-pb-80">
        <div className="container">
            <div className="sec-title text-center mb-40 md">
          <span className="sub-text sub-text2 sub-text5">
            Why Us
          </span>
                <h2 className="title">
                    Why Choose Us
                </h2>
            </div>
            <div className="row">
                <div className="col-xl-3 col-md-6 xl-mb-30">
                    <div className="services-item">
                        <div className="services-wrap">
                            <div className="services-icon">
                                <img src={ser1} alt=""/>
                            </div>
                            <div className="services-content">
                                <h6 className="title">
                                    <a href="#">Expertise</a>
                                </h6>
                                <p className="services-txt">
                                    Experience and expertise for optimal tarpaulin covering solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 xl-mb-30">
                    <div className="services-item">
                        <div className="services-wrap">
                            <div className="services-icon">
                                <img src={ser2} alt=""/>
                            </div>
                            <div className="services-content">
                                <h6 className="title">
                                    <a href="">Customer Relationship</a>
                                </h6>
                                <p className="services-txt">
                                    Reliable protection for your valuable cargo, every step of transit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 sm-mb-30">
                    <div className="services-item">
                        <div className="services-wrap">
                            <div className="services-icon">
                                <img src={ser3} alt=""/>
                            </div>
                            <div className="services-content">
                                <h6 className="title">
                                    <a href="#">Process &amp; Tools</a>
                                </h6>
                                <p className="services-txt">
                                    Tailored Tarpaulin Solutions to Fit Your Unique Cargo Requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6">
                    <div className="services-item">
                        <div className="services-wrap">
                            <div className="services-icon">
                                <img src={ser4} alt=""/>
                            </div>
                            <div className="services-content">
                                <h6 className="title">
                                    <a href="#">Communication</a>
                                </h6>
                                <p className="services-txt">
                                    Efficient service ensuring swift and timely delivery of your cargo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default Service;