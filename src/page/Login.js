import React, {useState} from 'react';
import {account} from "../Appwrite";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate()
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    async function createSessionWithUserId(email, password) {
        try {
            const response = await account.createEmailSession(email, password);
            if (!response.code){
                // Handle successful response

            console.log(response.$id)
            localStorage.setItem("sessionID", response.$id)
            localStorage.setItem("user", response.providerUid)
            localStorage.setItem("countryName", response.countryName)
            localStorage.setItem("ip", response.ip)

           navigate("/adminhome")


            } else {
                throw new Error(response.message);
            }
        } catch (error) {
            // Handle the Appwrite error
            return error.message;
        }
    }




            const handleFormSubmit = async (e) => {
        e.preventDefault();

                try {
                    const error = await createSessionWithUserId(username, password);
                    if (error) {
                        setErrorMessage(error);
                    }
                } catch (error) {
                    console.log('Error:', error);
                }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="mt-5 mb-4">Login</h2>

                    {errorMessage && <span style={{color:"red"}}>Error: {errorMessage}</span>}
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                value={username}
                                onChange={handleUsernameChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>  <br/>
                        <button type="submit" className="btn btn-sn btn-success w-100">Login</button>
                    </form>
                </div>
            </div>
        </div>)
};

export default Login;