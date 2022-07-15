import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/Authcontext'
import DashboardMenu from './DashboardMenu'
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore/lite";
import { db } from "../../config/firebase";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import TextField from '@mui/material/TextField';


export default function AllAccounts() {
    const { setIndex, user } = useContext(AuthContext);

    const [documents, setDocuments] = useState([])
    const [modal, setModal] = useState([]);
    const [amount, setAmount] = useState({ price: "0" });
    const [items, setItems] = useState([{ price: "0" }])
    const [loading, setLoading] = useState(false)

    const fetchDocuments = async () => {
        setLoading(true);
        let array = [];
        let num = 0;
        const querySnapshot = await getDocs(collection(db, "Accounts"));
        querySnapshot.forEach((doc) => {
            if (user.uid === doc.data().uid) {
                num = num + 1;
                array.push({ id: doc.id, ...doc.data() });
            }
        })
        setIndex(num)
        setDocuments(array)
        setLoading(false);
    }
    const data = (item) => {
        setModal([item]);
        setItems(item);
    }

    useEffect(() => {
        fetchDocuments();
    }, [user])

    const handleDelete = async () => {
        setLoading(true);
        await deleteDoc(doc(db, "Accounts", items.id));
        toast.success('Deleting Successfully .', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        let newProducts = documents.filter((newProduct) => {
            return items.id !== newProduct.id
        })
        setDocuments(newProducts)
        setLoading(false)
    }



    const handleDeposit = () => {
        const newAmount = parseInt(items.price) + parseInt(amount);
        items.price = newAmount;
        console.log(newAmount);
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
                                                <div className="text-center">
                                                    <CardContent>
                                                        <h5 className="card-title"><i className="fa-solid fa-user mb-1 m-2"></i>You have no any account yet now</h5>
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
                                                        <th scope="col">Amount</th>
                                                        <th scope="col">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody className='bg'>
                                                    {
                                                        documents.map((item) => (
                                                            <tr>
                                                                <td>{item.account}</td>
                                                                <td>{item.name}</td>
                                                                <td>{item.date}</td>
                                                                <td>{item.price}</td>
                                                                <td><Button variant='contained' color="success" onClick={() => { data(item) }} data-bs-toggle="modal" data-bs-target="#exampleModal">Details</Button></td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" style={{ maxWidth: "60%" }}>
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Account Information</h5>
                                            <Button data-bs-dismiss="modal" aria-label="Close">X</Button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="mb-2">
                                                <Button variant="contained" className="float-start" color="primary" data-bs-dismiss="modal" aria-label="Close">Back</Button>
                                                <Button className="float-end" variant="outlined" color="secondary" onClick={handleDelete} data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-solid fa-trash-can me-1"></i>Delete</Button>
                                            </div>
                                            <table className="table table-borderless">
                                                <tbody className='w-100'>
                                                    {
                                                        modal.map((item) => (
                                                            <>
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
                                                            </>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="modal-footer">
                                            <Button variant="contained" color="success" className="me-2" onClick={handleDeposit} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Deposit</Button>
                                            <Button variant='contained' color="secondary" >Withdraw</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="staticBackdropLabel">Money you Withdraw</h5>
                                            <Button data-bs-dismiss="modal" aria-label="Close">X</Button>
                                        </div>
                                        <div class="modal-body">
                                            <TextField type="number" name="newPrice"
                                                label={`You have ${items.price} amount`} onChange={(e) => { setAmount(e.target.value) }}
                                                value={amount.price}
                                                className='w-75 m-2' variant="standard" />
                                        </div>
                                        <div class="modal-footer">
                                            <Button variant="contained" color="secondary" className='me-2' data-bs-dismiss="modal">Back</Button>
                                            <Button variant="contained" color="success" onClick={() => { handleDeposit() }} data-bs-dismiss="modal">Deposit</Button>
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
