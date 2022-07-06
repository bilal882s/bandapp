import React, { useContext } from 'react';
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
import AllAccounts from '../../pages/Dashboard/AllAccounts';
// import { AuthContext } from '../../context/Authcontext';
// import PrivateRoute from '../../important/PrivateRoute';

export default function Routing() {
  // const { isAuthenticated } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<LandingPage />} />

        {/* <Route path='/dashboard/*' element={<DashboardRoute />} /> */}

        <Route path='/dashboard/transactions' element={<Transactions />} />

        <Route path="/dashboard/allaccounts" element={<AllAccounts />} />

        <Route path='/dashboard' element={<DashboardMenu />} />

        <Route path='/adduser' element={<AddAccount />} />
        
        {/* <Route path="/login" element={<Login />} /> */}

        <Route path='/signup' element={<Signup />} />

        <Route path='/dashboard' element={<PrivateRoute Component={DashboardMenu} />} />

        <Route path='/login' element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard"
          element={<DashboardMenu />} />} />

        <Route path="/forget" element={<Forget />} />

        <Route path='/dashboard/accounts' element={<Accounts />} />

      </Routes>

    </BrowserRouter>
  )
}
