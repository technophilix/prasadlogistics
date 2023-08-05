import React, {useEffect, useState} from 'react';
import testi1 from "../realassets/testi-1.png"
import shape3 from  "../realassets/shape3.png"
import rating2 from  "../realassets/ratting2.png"
import testi2 from  "../realassets/testi-2.png"
import testi3 from  "../realassets/testi-3.png"
import {buckedID, client, collectionID, databaseID, account} from "../Appwrite";
import {Storage} from "appwrite";
const Testimonial = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const storage = new Storage(client);
    const fetchImages = async () => {

        try {
            const response = await storage.listFiles(buckedID);
            setImages(response.files);
            console.log(response.files)
            setIsLoading(false);
        } catch (error) {
            console.error('Error retrieving images:', error);
        }
    };
    useEffect(() => {

        fetchImages()

    }, []);

    return (
        <div className="rs-testimonial testimonial-style1 testimonial-modify1 gray-bg9 pt-135 pb-150 md-pt-75 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-50">
                    <span className="sub-text sub-text2 sub-text5">Our Satisfied Customers</span>
                    <h2 className="title">
                        Transformative Experience: A Testimonial of Unparalleled Growth and Inspiration
                    </h2>

                    <div className={'row'}>
                        {images.map((image) => (
                            <div className={'col-3'} style={{position: "relative", padding: "2%"}}
                                 key={image.$id}>
                                <img
                                    src={`https://cloud.appwrite.io/v1/storage/buckets/${buckedID}/files/${image.$id}/view?project=64b15c712d1fd775710f`}
                                    alt={image.name}/>

                            </div>
                        ))}
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Testimonial;