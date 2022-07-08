import React, { useContext } from 'react';
import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div className='bg-image text-white shadow-lg'>
            <div className="container w-50 mx-5">
                <div className="row ">
                    <div className="col-12 col-md-12 m-4">
                        <div className="card bg-custom">
                            <div className="card-body">
                                <h2>Get a $400 bouns then make it better.</h2>
                                <p>Create an account on <b><i>My Bank</i></b></p>
                                <Link to="/" className="btn btn-danger">Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
