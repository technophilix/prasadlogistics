import {buckedID, client, collectionID, databaseID, account} from "../Appwrite";
import {Account, Storage} from "appwrite";
import {v4 as uuidv4} from 'uuid';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Login from "./Login";

const Admin = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate()
    const storage = new Storage(client);

    useEffect(() => {


    }, [])

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

    const deleteImage = async (imageId) => {
        try {
            await storage.deleteFile(buckedID, imageId);
            fetchImages();
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };

    async function logout() {

        try {
            const response = await account.deleteSession(localStorage.getItem("sessionID"));
            localStorage.removeItem("sessionID")
            localStorage.removeItem("user")
            localStorage.removeItem("countryName")
            localStorage.removeItem("ip")

            console.log('Session deleted', response);
            navigate("/admin")
        } catch (error) {
            console.error('Failed to create session:', error);
            throw error;
        }

    }


    useEffect(() => {

        fetchImages()

    }, [images]);


    const onsubmit = () => {
        const storage = new Storage(client);
        const promise = storage.createFile(buckedID, uuidv4(), document.getElementById('uploader').files[0]);
        promise.then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        });

    }


    if (localStorage.getItem("sessionID") !== null && localStorage.getItem("sessionID") !== "") {
        return (
            <div className={'container mt-5'}>

                <div className={'row'}>

                    <div className={'col-sm-3'}>

                        ID: {localStorage.getItem("user")}<br/>
                        IP Address: {localStorage.getItem("ip")}<br/>
                        Country: {localStorage.getItem("countryName")}<br/>


                        <span style={{cursor: "pointer"}} onClick={() => {

                            logout()


                        }}>Log Out</span>


                    </div>
                    <div className={'col-sm-9'}>


                        {images.length === 0 ? (
                            <div>No images found.</div>
                        ) : (
                            <div className={'row'}>
                                {images.map((image) => (
                                    <div className={'col-3'} style={{position: "relative", padding: "2%"}}
                                         key={image.$id}>
                                        <img
                                            src={`https://cloud.appwrite.io/v1/storage/buckets/${buckedID}/files/${image.$id}/view?project=64b15c712d1fd775710f`}
                                            alt={image.name}/>
                                        <button
                                            onClick={() => deleteImage(image.$id)}
                                            style={{
                                                position: 'absolute',
                                                top: '5px',
                                                right: '5px',
                                                background: 'red',
                                                width: "30px",
                                                height: "30px",
                                                border: 'none',
                                                borderRadius: "30px",
                                                color: 'white',
                                            }}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}


                        <label>Upload Images</label>
                        <input type={'file'} id={'uploader'} className={'form-control'} onChange={() => {

                            onsubmit()
                        }}/>
                    </div>
                </div>
            </div>
        )
    } else {
        return (<Login/>)


    }


}

export default Admin;





