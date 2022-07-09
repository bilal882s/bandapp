import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../../pages/LandingPage/index";
import Transactions from "../../pages/Transactions/Transactions"
import Signup from "../../pages/signupPage/Signup";
import Login from "../../pages/signupPage/Login";
import DashboardMenu from "../../pages/Dashboard/Dashboard";
import AddAccount from "../../pages/AddAccount/AddAccount";
import Forget from "../../pages/signupPage/Forget";
import Accounts from "../../pages/Dashboard/Accounts"
import AllAccounts from "../../pages/Dashboard/AllAccounts";
import { AuthContext } from "../../context/Authcontext";
import PrivateRoute from "../../important/PrivateRoute";
import View from "../../pages/Transactions/View";

export default function Routing() {
  const { isAuthenticated } = useContext(AuthContext)
  // const Navigate = useNavigate();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/*" element={<PrivateRoute Component={DashboardMenu} />} />
        {
          !isAuthenticated ?
            <Route path="/dashboard/*" element={<PrivateRoute Component={Login} />} />
            :
            <>
              <Route path="/dashboard/transactions" element={<Transactions />} />
              <Route path="/dashboard/transactions/view" element={<View />} />
              <Route path="/dashboard/allaccounts" element={<AllAccounts />} />
              <Route path="/dashboard/adduser" element={<AddAccount />} />
              <Route path="/dashboard/accounts" element={<Accounts />} />
            </>
        }
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard"
          element={<DashboardMenu />} />} />
        <Route path="/forget" element={<Forget />} />
      </Routes>

    </BrowserRouter>
  )
}
