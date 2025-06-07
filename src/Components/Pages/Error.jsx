import React from 'react';
import { Link } from 'react-router-dom';
import { IoReturnUpBack } from "react-icons/io5";


function Error() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="text-center text-white p-4 rounded">
                <h1 className="text-3xl font-bold mb-4">Oops!</h1>
                <p className="text-lg mb-4">It seems like the page you're looking for doesn't exist.</p>
                <Link to="/" className="inline-flex items-center py-2 px-4 bg-blue-500 text-white rounded">
                    <span className="mr-2">Go Home</span>
                    <IoReturnUpBack className="text-2xl font-bold" />
                </Link>
            </div>
        </div>
    );
}

export default Error;
