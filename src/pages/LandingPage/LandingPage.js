import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';

export default function LandingPage() {
    return (
        <div className='bg-image text-white shadow-lg'>
            <div className="container w-100">
                <div className="row ">
                    <div className="col-12 col-md-12">
                        <div className="card bg-custom custom">
                            <div className="card-body">
                                <h2>My Bank has some Bank Properties</h2>
                                <p>You can create a bank account on <b><i>My Bank</i></b> and after you can withdraw and deposit your balance.</p>
                                <Link to="/dashboard" className='nav-link'><Button variant="contained" color="success">Read More</Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}