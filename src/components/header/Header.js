import React from 'react';
import Navbar from './Navbar';

export default function Header() {

    return (
        <>
            <div className="topbar bg-dprimary text-white">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="topbar text-white navbar-brand">Date and Time
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />
        </>
    )
}
