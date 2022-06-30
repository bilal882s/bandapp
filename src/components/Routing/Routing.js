import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../../pages/LandingPage/LandingPage";
import Dashboard from "../../pages/Dashboard";
import Transactions from "../../pages/Transactions/Transactions";
import Navbar from '../header/Navbar';
import Signup from '../../pages/signupPage/Signup';

export default function Routing() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/transactions' element={<Transactions />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </BrowserRouter>
    )
}
