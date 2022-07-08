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
                    <div className="float-start">
                        <DashboardMenu />
                    </div>
                    <div className='center' style={{ height: "70vh" }}>
                        <h1>All Transactions </h1>
                        <div className="container mt-1 text-center">
                            <div className="row">
                                <div className="col">
                                    <Table class="table table-hover m-2 me-5" style={{ backgroundColor: "blue", color: "white" }}>
                                        <Thead className='table-light'>
                                            <Tr>
                                                <Th scope="col">Number</Th>
                                                <Th scope="col">Name</Th>
                                                <Th scope="col">CNIC No</Th>
                                                <Th scope="col">Price</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {
                                                documents.map((item, index) => (
                                                    <Tr>
                                                        <Th>{index + 1}</Th>
                                                        <Td>{item.name}</Td>
                                                        <Td>{item.cnic}</Td>
                                                        <Td>{item.price}</Td>
                                                    </Tr>
                                                ))
                                            }
                                        </Tbody>
                                    </Table>
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
