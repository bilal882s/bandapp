import React from 'react';
import { Link } from "react-router-dom";
import Header from './Header';

export default function Navbar() {
    return (
        <>
            <Header />
            <nav class="navbar navbar-expand-lg navbar-dark bg-header">
                <div class="container">
                    <Link to="/" class="navbar-brand">My Bank</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" style={{ flexGrow: 0 }} id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/dashboard">Dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/transactions">Transactions</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/signup">Sign Up</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
