import React from 'react';
import bk1 from "../realassets/bk1.png"
import bk2 from "../realassets/bk2.png"
import bk3 from "../realassets/bk3.png"
import bk4 from "../realassets/bk4.png"
import bk5 from "../realassets/bk5.png"
import bk6 from "../realassets/bk6.png"



const Gallery = () => {

   const services = [{
      title:"Tarpaulin Covering",
      image:bk1


   },{
      title:"Plot Covering",
      image:bk2


   },{
      title:"Wagon Door Packing / Sealing & Water Proofing",
      image:bk3


   },{
      title:"Escorting Service",
      image:bk4


   },{
      title:"Excess Load Adjustment Services",
      image:bk5


   },{
      title:"Inspection Services",
      image:bk6


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
                    {services.map((sr,i)=>(
                        <div className="col-xl-4 col-md-6 xl-mb-30" key={i}>
                        <div className="book-item" >
                            <div className="read-wrap">
                                <div className="read-img">
                                    <a href="#">
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