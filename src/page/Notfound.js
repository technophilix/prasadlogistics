import React from 'react';
import { Link } from 'react-router-dom';
// Make sure you have Bootstrap imported in your project
// Either via import 'bootstrap/dist/css/bootstrap.min.css';
// Or included in your HTML file

const NotFound = () => {
    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div className="text-center py-5 px-4 bg-white shadow rounded">
                <div className="mb-4">
                    <span className="display-1 fw-bold text-danger">404</span>
                </div>
                <h2 className="h3 mb-3">Page Not Found</h2>
                <p className="text-muted mb-4">
                    The page you are looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="btn btn-primary px-4 py-2"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;