import React, { useContext } from 'react';
import { Link } from "react-router-dom";
export default function LandingPage() {
    return (
        <div className='bg-image text-white shadow-lg'>
            <div className="container w-100"> 
                <div className="row ">
                    <div className="col-12 col-md-12">
                        <div className="card bg-custom custom">
                            <div className="card-body">
                                <h2>Get a $400 bouns then make it better.</h2>
                                <p>Create an account on <b><i>My Bank</i></b></p>
                                <Link to="/" className="btn btn-danger">Home</Link>
                            </div>
                        </div>
                    </div>
            </div>
    )
}