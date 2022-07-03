import React from 'react';
import { Link } from "react-router-dom";
import Header from './Header';

export default function Navbar() {
    return (
        <>
            <Header />
            <nav className="navbar navbar-expand-lg navbar-dark bg-header">
                <div className="container">
                    <Link to="/" className="navbar-brand">My Bank</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" style={{ flexGrow: 0 }} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/transactions">Transactions</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/signup">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
