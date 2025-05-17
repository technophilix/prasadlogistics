import React from 'react';


const Certificate = () => {
    return (
        <div className="container vh-100">
            <object data={require("../realassets/45001.pdf")} type="application/pdf" width="100%" height="1500px">
                {/*<p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>*/}
            </object>
        </div>
    );
};

export default Certificate;