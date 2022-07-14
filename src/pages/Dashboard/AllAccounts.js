import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/Authcontext'
import DashboardMenu from './DashboardMenu'
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../config/firebase";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function AllAccounts() {
    const { setIndex, user } = useContext(AuthContext);

    const [documents, setDocuments] = useState([])
    const [modal, setModal] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetchDocuments = async () => {
        setLoading(true);
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
    const data = (item) => {
        // let array = [];
        // array.push(item)
        setModal([item]);
        // console.log(modal);
    }
    return (
        <>  {!loading ?
            <>
                {
                    documents.length === 0
                        ? <>
                            <DashboardMenu />
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
                        </>
                        :
                        <>

                            <DashboardMenu />
                            <div className="container" style={{ marginTop: "4rem" }}>
                                <div className="row">
                                    <div className="col">
                                        <h1>All Accounts </h1>
                                        <div className="container mt-1 text-center">
                                            <table className="table table-hover m-2 me-5">
                                                <thead className='table-dark'>
                                                    <tr>
                                                        <th scope="col">Account No</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Time</th>
                                                    </tr>
                                                </thead>
                                                <tbody className='bg'>
                                                    {
                                                        documents.map((item) => (
                                                            <tr>
                                                                <td>
                                                                    <div className="btn btn-link" onClick={() => { data(item) }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                        {item.account}
                                                                    </div>
                                                                </td>
                                                                <td>{item.name}</td>
                                                                <td>{item.date}</td>
                                                                <td>{item.time}</td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <table className="table ">
                                                <tbody className='w-100'>
                                                    {
                                                        modal.map((item) => (
                                                            <>
                                                                <tr>
                                                                    <th>Name : </th>
                                                                    <td>{item.name}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Account No : </th>
                                                                    <td>{item.account}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Amount : </th>
                                                                    <td>{item.price}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Date : </th>
                                                                    <td>{item.date}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Time : </th>
                                                                    <td>{item.time}</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Type : </th>
                                                                    <td>{item.currency}</td>
                                                                </tr>
                                                            </>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                }
            </> :
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        }
        </>
    )
}
