import React, { createContext, useState, useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [uid, setUid] = useState("")
    const [table, setTable] = useState([])
    const [index, setIndex] = useState(0)
    const [loading, setLoading] = useState(true)
    const [transactions, setTransactions] = useState(0);
    const [user, setUser] = useState("")

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setIsAuthenticated(true)
                setUid(user.uid);
                setUser(user);
            } else {
                setIsAuthenticated(false)
            }
        })

    }, [])

    return (
        <AuthContext.Provider value={{ isAuthenticated, transactions, setTransactions, setIsAuthenticated, uid, user, setLoading, setUser, setUid, table, setTable, index, setIndex }}>
            {children}
        </AuthContext.Provider>
    )
}