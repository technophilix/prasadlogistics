import React from 'react';

const Gallery = () => {

   const services = [{
      title:"Tarpaulin Covering",
      image:"assets/images/book/bk1.png"


   },{
      title:"Plot Covering",
      image:"assets/images/book/bk2.png"


   },{
      title:"Wagon Door Packing / Sealing & Water Proofing",
      image:"assets/images/book/bk3.png"


   },{
      title:"Escorting Service",
      image:"assets/images/book/bk4.png"


   },{
      title:"Excess Load Adjustment Services",
      image:"assets/images/book/bk5.png"


   },{
      title:"Inspection Services",
      image:"assets/images/book/bk6.png"


   }



   ]



    return (
        <div className="rs-book-store ebook-style1 pt-135 pb-140 md-pt-75 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-50">
                    <span className="sub-text sub-text2 sub-text5">Services</span>
                    <h2 className="title">Services</h2>
                </div>
                <div className="row">
                    {services.map((sr,i)=>(    <div className="col-xl-4 col-md-6 xl-mb-30">
                        <div className="book-item">
                            <div className="read-wrap">
                                <div className="read-img">
                                    <a href="services-1.html">
                                        <img src={sr.image} alt="Book"/>
                                    </a>
                                </div>
                                <div className="book-content">

                                    <h6 className="title">
                                        {sr.title}
                                    </h6>

                                </div>
                            </div>
                        </div>
                    </div>))


                    }

                </div>
            </div>
        </div>
    );
};

export default Gallery;