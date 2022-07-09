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
        <div className='bg'>
            {!loading ?
                <>
                    <DashboardMenu />
                    <div className='center mt-5' style={{ height: "100vh" }}>
                        <h1>All Accounts </h1>
                        <div className="container mt-1 text-center">
                            <div className="row">
                                <div className="col">
                                    <Table class="table shadow-lg">
                                        <Thead className='table-light'>
                                            <Tr>
                                                <Th scope="col">Number</Th>
                                                <Th scope="col">Name</Th>
                                                <Th scope="col">AccounT No</Th>
                                                <Th scope="col">CNIC No</Th>
                                                <Th scope="col">Price</Th>
                                                <Th scope="col">Branch No</Th>
                                                <Th scope="col">Currency</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {
                                                documents.map((item, index) => (
                                                    <Tr>
                                                        <Th>{index + 1}</Th>
                                                        <Td>{item.name}</Td>
                                                        <Td>{item.account}</Td>
                                                        <Td>{item.cnic}</Td>
                                                        <Td>{item.price}</Td>
                                                        <Td>{item.branch}</Td>
                                                        <Td>{item.currency}</Td>
                                                    </Tr>
                                                ))
                                            }
                                        </Tbody>
                                    </Table>
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
