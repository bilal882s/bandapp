import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from '../../pages/LandingPage/index';
import Transactions from "../../pages/Transactions/Transactions"
import Signup from '../../pages/signupPage/Signup';
import Login from '../../pages/signupPage/Login';
import DashboardMenu from '../../pages/Dashboard/Dashboard';
import AddAccount from '../../pages/AddAccount/AddAccount';
import Forget from '../../pages/signupPage/Forget';
import Accounts from "../../pages/Dashboard/Accounts"
import DashboardRoute from './DashboardRoute';

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<LandingPage />} />
        {/* <Route path='/dashboard/*' element={<DashboardRoute />} /> */}
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/dashboard' element={<DashboardMenu />} />
        <Route path='/adduser' element={<AddAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/forget" element={<Forget />} />
        <Route path='/dashboard/accounts' element={<Accounts />} />
      </Routes>
    </BrowserRouter>
  )
}
