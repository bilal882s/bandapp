import React from 'react';
import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div className='bg-image text-white shadow-lg'>
            <div className="container w-50 mt-0 mx-5">
                <div className="row">
                    <div className="col-12 col-md-12">
                        <div className="card bg-custom">
                            <div className="card-body">
                                <h1>Get a $400 bouns then make it better.</h1>
                                <p>Create an account to save your salery on <b><i>My Bank</i></b></p>
                                <Link to="/dashboard" className="btn btn-danger">Go to Dashboard</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
