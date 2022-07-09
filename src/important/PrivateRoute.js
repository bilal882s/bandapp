import React, { useContext } from 'react'
import { AuthContext } from '../context/Authcontext'
import Login from "../pages/signupPage/Login"

export default function PrivateRoute({ Component }) {

    const { isAuthenticated } = useContext(AuthContext)

    if (!isAuthenticated)
        return <Login />

    return (
        <Component />
    )
}