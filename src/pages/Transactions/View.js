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
    const [item, setItem] = useState({});

    const fetchDocuments = async () => {
        setLoading(true);
        let array = [];
        let price = 0;
        const querySnapshot = await getDocs(collection(db, "Amount"));
        querySnapshot.forEach((doc) => {
            if (user.uid === doc.data().uid) {
                array.push(doc.data());
                price = price + 1;
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
            <>
                {!loading ?
                    <>
                        <div className="float-start m-3">
                            <DashboardMenu />
                        </div>
                        {
                            documents.length === 0
                                ?
                                <>
                                    <div className='col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 d-flex align-items-center' style={{ height: "65vh" }}>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col">
                                                    <Card className='shadow-lg'>
                                                        <div class="text-center">
                                                            <CardContent>
                                                                <h5 class="card-title"><i class="fa-solid fa-user mb-1 m-2"></i>You have no any transactions yet now</h5>
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
                                </>
                                :
                                <>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col mt-4">
                                                <h1>All Transactions </h1>
                                                <table class="table table-hover m-2 me-5">
                                                    <thead className='table-dark'>
                                                        <tr>
                                                            <th scope="col">Number</th>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">CNIC No</th>
                                                            <th scope="col">Amount</th>
                                                            <th scope="col">Type</th>
                                                            <th scope="col">Actions</th>
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
                                                                    <td>{item.currency}</td>
                                                                    <td><Button variant="contained" onClick={() => { setItem(item) }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Deatils</Button></td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="modal fade bg-light w-100" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                                    <Button data-bs-dismiss="modal" aria-label="Close">X</Button>
                                                </div>
                                                <div class="modal-body">
                                                    <table className='table table-borderless'>
                                                        <tbody className='w-100'>
                                                            <tr>
                                                                <th>Branch Code : </th>
                                                                <td>{item.branch}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Account No : </th>
                                                                <td>{item.account}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Full Name : </th>
                                                                <td>{item.name}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Registered : </th>
                                                                <td>{item.date}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Type : </th>
                                                                <td>{item.currency}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Balance : </th>
                                                                <td>{item.price}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <p>Created by <b>{user.email}</b></p>
                                                </div>
                                                <div class="modal-footer">
                                                    <Button variant="contained" color="secondary" data-bs-dismiss="modal">Back</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                        }
                    </>
                    :
                    <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>
                }
            </>
        </>
    )
}
