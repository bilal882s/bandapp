import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from '../../components/header/Navbar';
import Nopage from '../Nopage/Nopage';
import LandingPage from './LandingPage';
export default function index() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route index element={<LandingPage />} />
                <Route path='*' element={<Nopage />} />
            </Routes>
        </>
    )
}
