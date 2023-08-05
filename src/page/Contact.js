import React from 'react';
import Layout from "./Layout";

const Contact = () => {
    return (
        <div className={'container mt-5'}>

            <h2>Contact Information</h2>
            <hr/>

                <h4>Site Offices:</h4>
                <ul>
                    <li>Kakinda Port</li>
                    <li>Ennore Port (Chennai)</li>
                    <li>Krishnapattnam Port</li>
                    <li>Paradeep Port</li>
                    <li>Kandia Port</li>
                    <li>Mundra Port</li>
                    <li>Jaigarh Port</li>
                    <li>ECL</li>
                    <li>BCCL</li>
                    <li>CCL</li>
                    <li>WCL</li>
                </ul>

                <h4>Branch Office:</h4>
                <p>D.No.32-2-5/1, First Floor, Bowdara Road, Opp. Hotel Mourya, Visakhapatnam – 530004</p>

                <h4>Registered Office:</h4>
                <p>Plot No. - 58, Khatian No. – 22, Holding Premises No. – 71/14N, C/o Daya Shankar Koiri, L.C. More Kulti, P.O. & P.S. – Kulti, Asansol, Paschim Bardhaman, West Bengal</p>

                <h4>Contact Numbers:</h4>
                <ul>
                    <li>PLSPL Office: 8967655200</li>
                    <li>Vizag Office: 9000197082</li>
                    <li>Manoj Prasad: 7865060568</li>
                    <li>Pradip Maurya: 9378221855</li>
                </ul>

                <h4>Email:</h4>
                <p>contact@prasadlogistics.com</p>

        </div>
    );
};

export default Layout(Contact);