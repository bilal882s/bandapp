import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/Authcontext'
import DashboardMenu from '../Dashboard/DashboardMenu'
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
// import Loading from "../../../96439-loading-bank.json";

export default function View() {
    const { setIndex, user, setTransactions } = useContext(AuthContext);

    const [documents, setDocuments] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchDocuments = async () => {
        setLoading(true);
        console.log(user)
        let array = [];
        let price = 0;
        const querySnapshot = await getDocs(collection(db, "Accounts"));
        querySnapshot.forEach((doc) => {
            if (user.uid === doc.data().uid) {
                price = parseInt(price) + parseInt(doc.data().price);
                console.log(price);
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
                    <div className='center' style={{ height: "100vh" }}>
                        <h1>All Transactions </h1>
                        <div className="container mt-1 text-center">
                            <div className="row">
                                <div className="col">
                                    <div className=" table-responsive ">

                                        <table class="table table-hover">
                                            <thead className='table-light'>
                                                <tr>
                                                    <th scope="col">Number</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">CNIC No</th>
                                                    <th scope="col">Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
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
                </>
                :
                <div className="d-flex align-items-center text-center justify-content-center" style={{ height: "100vh" }}>
                    <iframe src="https://embed.lottiefiles.com/animation/96439"></iframe>
                </div>
            }
        </>
    )
}
