import React from 'react';
import Navbar from './Navbar';

export default function Header() {

    return (
        <>
            <div className="topbar bg-dprimary text-white">
                <div className="row mx-3">
                    <div className="col">
                        <div className="topbar text-white">Date and Time
                            <div className="float-end">HI</div>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />
        </>
    )
}
