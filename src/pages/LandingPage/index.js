import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from '../../components/header/Navbar';
import LandingPage from './LandingPage';
export default function index() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<LandingPage />} />
            </Routes>
        </>
    )
}
