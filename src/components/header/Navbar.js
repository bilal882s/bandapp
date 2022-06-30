import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-header">
                <div class="container">
                    <a class="navbar-brand" href="#">My Bank</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" style={{ flexGrow: 0 }} id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Dashboard</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link active" href="#">Transactions</a>
                            </li>
                            <button className="btn btn-info mx-2">Sign Up</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
