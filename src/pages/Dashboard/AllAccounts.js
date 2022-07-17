import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/Authcontext'
import DashboardMenu from './DashboardMenu'
import { collection, getDocs, doc, deleteDoc, setDoc, addDoc } from "firebase/firestore/lite";
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
    const [amount, setAmount] = useState(0);
    const [items, setItems] = useState([{ price: "0", currency: "" }])
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


    const handleDeposit = async () => {
        setLoading(true)
        let newAmount = parseInt(items.price) + parseInt(amount);
        if (amount < 1) {
            toast.error("asd", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        toast.success(`Your ${amount} amout is Deposited.`, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setDoc(doc(db, "Accounts", items.id), items, { merge: true });

        setAmount("0");
        const docRef = addDoc(collection(db, "Amount"), items);
        console.log(docRef);
        items.price = newAmount;
        items.currency = "Credit";
        setLoading(false)
    }
    const handleWithdraw = async () => {
        setLoading(true)
        items.currency = "Debit";
        if (amount <= items.price) {
            let newAmount = parseInt(items.price) - parseInt(amount);
            console.log(items);
            items.price = newAmount;
            setDoc(doc(db, "Accounts", items.id), items, { merge: true });

            setAmount("0");
            const docRef = addDoc(collection(db, "Amount"), items);
            console.log(docRef);
            toast.success(`Your ${amount} amout is Withdarwed.`, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (amount > items.price) {
            toast.error('You have no amount you enter.', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        setLoading(false)
    }

    return (
        <>
            {!loading ?
                <>
                    <div className="float-start m-3">
                        <DashboardMenu />
                    </div>
                    {
                        documents.length !== 0

                            ? <>
                                <div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col mt-4">
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
                                                                        <td><Button variant='contained' color="success" onClick={() => { data(item) }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                            <i class="fa-solid fa-circle-info me-2"></i>Details</Button></td>
                                                                    </tr>
                                                                ))
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal fade w-100 bg-light" id="exampleModal" data-bs-keyboard="false" tabIndex="-1" data-bs-backdrop="static" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div className="modal-dialog" style={{ minWidth: "60%" }}>
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Account Information</h5>
                                                    <Button data-bs-dismiss="modal" aria-label="Close">X</Button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="mb-2">
                                                        <Button variant="contained" className="float-start" color="primary" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-arrow-left-long me-2"></i>Back</Button>
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
                                                    <Button variant="contained" color="success" className="me-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fa-solid fa-coins me-2"></i>Deposit</Button>
                                                    <Button variant='contained' color="secondary" data-bs-toggle="modal" data-bs-target="#modalWithdraw"><i class="fa-solid fa-angles-down me-2"></i>Withdraw</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal fade w-100 bg-light" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="staticBackdropLabel">Amount you Deposit</h5>
                                                    <Button data-bs-dismiss="modal" aria-label="Close" >X</Button>
                                                </div>
                                                <div class="modal-body">
                                                    <TextField type="number" name="newPrice"
                                                        label="Amount you deposit" onChange={(e) => { setAmount(e.target.value) }}
                                                        value={amount}
                                                        className='w-75 m-2' variant="standard" />
                                                </div>
                                                <div class="modal-footer">
                                                    <Button variant="contained" color="secondary" className='me-2' data-bs-dismiss="modal"><i class="fa-solid fa-arrow-left-long me-2"></i>Back</Button>
                                                    <Button variant="contained" color="success" onClick={() => { handleDeposit() }} data-bs-dismiss="modal"><i class="fa-solid fa-coins me-2"></i>Deposit</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal fade w-100 bg-light" id="modalWithdraw" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="staticBackdropLabel">Amount you Withdraw</h5>
                                                    <Button data-bs-dismiss="modal" aria-label="Close" >X</Button>
                                                </div>
                                                <div class="modal-body">
                                                    <TextField type="number" name="newPrice"
                                                        label={`You can Withdraw   ${items.price} amount`} onChange={(e) => { setAmount(e.target.value) }}
                                                        value={amount}
                                                        className='w-75 m-2' variant="standard" />
                                                </div>
                                                <div class="modal-footer">
                                                    <Button variant="contained" color="secondary" className='me-2' data-bs-dismiss="modal"><i class="fa-solid fa-arrow-left-long me-2"></i>Back</Button>
                                                    <Button variant="contained" color="success" onClick={() => { handleWithdraw() }} data-bs-dismiss="modal"><i class="fa-solid fa-angles-down me-2"></i>Withdraw</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                            :
                            <>
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
                    }
                </> :
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
            }
        </>
    )
}
