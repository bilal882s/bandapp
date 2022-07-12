import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/Authcontext'
import DashboardMenu from '../Dashboard/DashboardMenu'
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../config/firebase";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

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
            {documents.length === 0
                ?
                <div className='col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 d-flex align-items-center' style={{ height: "65vh" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Card className='shadow-lg'>
                                    <div class="text-center">
                                        <CardContent>
                                            <h5 class="card-title"><i class="fa-solid fa-user mb-1 m-2"></i>You have no any account yet now</h5>
                                            <hr />
                                            <div className="d-flex justify-content-center">
                                                <Link className='nav-link' to="/dashboard/adduser" >
                                                    <Button className='m-1' size="sm" variant={'contained'} color="success">
                                                        Add
                                                    </Button>
                                                </Link>
                                            </div>
                                        </CardContent>
                                        <hr />
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>

                :
                <>
                    {!loading ?
                        <>
                            <DashboardMenu />
                            <div className="container" style={{ marginTop: "4rem" }}>
                                <div className="row">
                                    <div className="col">
                                        <h1>All Transactions </h1>
                                        <table class="table table-hover m-2 me-5">
                                            <thead className='table-dark'>
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
                        </>
                        :
                        <Box sx={{ width: '100%' }}>
                            <LinearProgress />
                        </Box>
                    }
                </>
            }
        </>
    )
}
