import React, { useContext, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import DashboardMenu from '../Dashboard/DashboardMenu';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { collection, addDoc, getDocs, where } from "firebase/firestore";
import { db } from "../../config/firebase";
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../context/Authcontext';
import { useNavigate } from 'react-router-dom';

export default function AddAccount() {
  const navigate = useNavigate();
  const { uid, setTable } = useContext(AuthContext);
  const initialState = {
    name: "",
    account: "",
    cnic: "",
    price: "",
    branch: "",
    currency: "",
    uid: "",
  }
  const [state, setState] = useState(initialState)
  const [documents, setDocuments] = useState([]);
  const [currency, setCurrency] = useState("")
  const [loading, setLoading] = useState(false)
  const currencies = [{
    label: "Saving",
    value: "Saving",
  },
  {
    label: "Current",
    value: "Current",
  }
  ]
  const handleChange = (e) => {
    setCurrency(e.target.value);
    state.uid = uid;
    setState({ ...state, [e.target.name]: e.target.value });
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, account, price, cnic, branch, currency } = state;
    if (name == "") {
      toast.error('Your Name feild is empty that is not acceptable.', {
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
    if (account.length !== 9) {
      toast.error('Your Account number is not a account number.', {
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
    if (cnic.length !== 13) {
      toast.error('Your CNIC number is not a CNIC Number .', {
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
    if (branch > 99) {
      toast.error('You can use only 99 branches.', {
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
    if (currency == "") {
      toast.error('Your have not chose any currency .', {
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
    if (price < 500) {
      toast.error('Your transactions is less than 500 .', {
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
    try {
      setLoading(true)
      const docRef = await addDoc(collection(db, "Accounts"), state);
      let array = [];
      const querySnapshot = await getDocs(collection(db, "Accounts"));
      querySnapshot.forEach((doc) => {
        if (state.uid === doc.data().uid) {
          setState(initialState)
          // navigate("/dashboard/allaccounts")
          array.push(doc.data());
        };
        setDocuments(array)
        setTable(array)
      }
      )
      setLoading(false)
    }
    catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return (

    <div className='bg' style={{ height: "100vh" }}>
      {!loading
        ?
        <>
          <ToastContainer />
          <DashboardMenu />
          <div className="container text-center mt-4 d-flex">
            <div className="row w-100">
              <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <div className="card p-4">
                  <h2 className='text-center bg-dark text-white p-1 rounded'>Fill this form to add an account</h2>

                  <form onSubmit={handleSubmit} className='text-start'>
                    <div className="d-flex">
                      <TextField className='w-75 mx-2' name='name' value={state.name} label="Full Name" variant="standard" onChange={handleChange} />
                      <TextField type="number" name='cnic' value={state.cnic} className='w-75 mx-2' label="CNIC Number" variant="standard" onChange={handleChange} />
                    </div>
                    <div className="d-flex">
                      <TextField type='number' value={state.branch} name='branch' className='w-75 m-2' label="Branch (1 - 99)" variant="standard" onChange={handleChange} />
                      <TextField type="number" name='account' value={state.account} className='w-75 m-2' label="Account Number (Length should be 9)" variant="standard" onChange={handleChange} />
                    </div>
                    <div className="d-flex">
                      <TextField
                        id="standard-select-currency"
                        select
                        className='w-75 m-2'
                        name='currency'
                        label="Select"
                        value={state.currency}
                        onChange={handleChange}
                        variant="standard"

                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                      <TextField type="number" value={state.price} onChange={handleChange} name='price' className='w-75 m-2' label="Initial Deposit (Minimum 500 Rs.)" variant="standard" />
                    </div>
                    < Button disabled={loading} type='submit' className='float-end m-3' variant={'contained'} color="secondary">Submit
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div >
        </>
        :
        <div className="d-flex align-items-center text-center justify-content-center" style={{ height: "100vh" }}>
          <iframe src="https://embed.lottiefiles.com/animation/96439"></iframe>
        </div>
      }
    </div>
  )
}
