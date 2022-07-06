import React, { createContext, useState, useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setIsAuthenticated(true)

            } else {
                setIsAuthenticated(false)
                // console.log("user is not logged in ");

            }
        })

    }, [])

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}