import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/Authcontext'
import DashboardMenu from './DashboardMenu'
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

export default function AllAccounts() {
    const { table, setTable, index, setIndex, user, setTransactions } = useContext(AuthContext);

    const [documents, setDocuments] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchDocuments = async () => {
        setLoading(true);
        console.log(user)
        let array = [];
        let num = 0;
        // let price = 0;
        const querySnapshot = await getDocs(collection(db, "Accounts"));
        querySnapshot.forEach((doc) => {
            if (user.uid === doc.data().uid) {
                num = num + 1;
                array.push(doc.data());
            }
        })
        setIndex(num)
        setDocuments(array)
        setLoading(false);
    }

    useEffect(() => {
        fetchDocuments();
    }, [user])

    return (
        <>
            {!loading ?
                <>
                    <DashboardMenu />
                    <div className='center' style={{ height: "60vh" }}>
                        <h1>All Accounts </h1>
                        <div className="container mt-1 text-center">
                            <div className="row">
                                <div className="col">
                                    <table class="table">
                                        <thead className='table-dark'>
                                            <tr>
                                                <th scope="col">Number</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Account No</th>
                                                <th scope="col">CNIC No</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Branch No</th>
                                                <th scope="col">Currency</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                documents.map((item, index) => (
                                                    <tr>
                                                        <th>{index + 1}</th>
                                                        <td>{item.name}</td>
                                                        <td>{item.account}</td>
                                                        <td>{item.cnic}</td>
                                                        <td>{item.price}</td>
                                                        <td>{item.branch}</td>
                                                        <td>{item.currency}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </> :
                <div className="d-flex align-items-center text-center justify-content-center" style={{ height: "100vh" }}>
                    <iframe src="https://embed.lottiefiles.com/animation/96439"></iframe>
                </div>
            }
        </>
    )
}
