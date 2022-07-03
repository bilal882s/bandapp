import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../../pages/LandingPage/index';
import Dashboard from "../../pages/Dashboard/index";
import Transactions from "../../pages/Transactions/Transactions"
import Signup from '../../pages/signupPage/Signup';
import Login from '../../pages/signupPage/Login';
import DashboardMenu from '../../pages/Dashboard/DashboardMenu';
import AddAccount from '../../pages/AddAccount/AddAccount';

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<LandingPage />} />
        <Route path='/adduser' element={<AddAccount />} />
        <Route path="/dashboard" element={<DashboardMenu />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
