import React from 'react';
import Navbar from './Navbar';

export default function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dprimary" style={{ height: "2.6rem" }}>
                <div class="container">
                    <a class="navbar-brand" href="#">Date and time</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" style={{ flexGrow: "0" }} id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Personal  </a>
                            </li>
                            <li class="nav-item">
                                 <a class="nav-link active" href="#">Smart Bussiness</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Commercial</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Wealth</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Navbar />
        </>
    )
}
