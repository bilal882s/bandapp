import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/Authcontext'
import DashboardMenu from '../Dashboard/DashboardMenu'
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

export default function View() {
    const { user, setTransactions } = useContext(AuthContext);

    const [documents, setDocuments] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchDocuments = async () => {
        setLoading(true);
        let array = [];
        let price = 0;
        const querySnapshot = await getDocs(collection(db, "Accounts"));
        querySnapshot.forEach((doc) => {
            if (user.uid === doc.data().uid) {
                price = parseInt(price) + parseInt(doc.data().price);
                array.push(doc.data());
            }
        })
        setTransactions(price)
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
                    <div className="container" style={{ marginTop: "15rem" }}>
                        <div className="row">
                            <div className="col">
                                <div className='center'>
                                    <h1>All Transactions </h1>
                                    <div className="container mt-1 text-center">
                                        <div className="table-responsive">

                                            <table class="table table-hover m-2 me-5">
                                                <thead className='table-light bg'>
                                                    <tr>
                                                        <th scope="col">Number</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">CNIC No</th>
                                                        <th scope="col">Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg">
                                                    {
                                                        documents.map((item, index) => (
                                                            <tr>
                                                                <th>{index + 1}</th>
                                                                <td>{item.name}</td>
                                                                <td>{item.cnic}</td>
                                                                <td>{item.price}</td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                :
                <div className="d-flex align-items-center text-center justify-content-center" style={{ height: "100vh" }}>
                    <iframe src="https://embed.lottiefiles.com/animation/96439"></iframe>
                </div>
            }
        </>
    )
}
