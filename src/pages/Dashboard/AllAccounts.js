import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/Authcontext'
import DashboardMenu from './DashboardMenu'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

export default function AllAccounts() {
    const { setIndex, user } = useContext(AuthContext);

    const [documents, setDocuments] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchDocuments = async () => {
        setLoading(true);
        console.log(user)
        let array = [];
        let num = 0;
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
        <div>
            {!loading ?
                <>
                    <DashboardMenu />
                    <div className='center mt-5' style={{ height: "100vh" }}>
                        <h1>All Accounts </h1>
                        <div className="container mt-1 text-center">
                            <div className="row">
                                <div className="col">
                                    <table class="table table-bordered shadow-lg">
                                        <thead className='table-light'>
                                            <tr>
                                                <th scope="col">Number</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Account No</th>
                                                <th scope="col">CNIC No</th>
                                                <th scope="col">Branch No</th>
                                            </tr>
                                        </thead>
                                        <tbody className='bg'>
                                            {
                                                documents.map((item, index) => (
                                                    <tr>
                                                        <th>{index + 1}</th>
                                                        <td>{item.name}</td>
                                                        <td>{item.account}</td>
                                                        <td>{item.cnic}</td>
                                                        <td>{item.branch}</td>
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
        </div>
    )
}
