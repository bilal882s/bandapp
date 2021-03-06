import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import DashboardMenu from '../Dashboard/DashboardMenu';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { collection, addDoc, getDocs } from "firebase/firestore/lite";
import { db } from "../../config/firebase";
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/Authcontext';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import LinearProgress from '@mui/material/LinearProgress';

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
    date: "",
    time: "",
  }
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [setDocuments] = useState([]);
  const [setCurrency] = useState("");
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
    // setCurrency(e.target.value);
    state.uid = uid;
    state.date = dayjs().format("DD MMM YYYY");
    state.time = dayjs().format("hh:mm a ");
    setState({ ...state, [e.target.name]: e.target.value });
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, account, price, cnic, branch, currency } = state;
    if (name === "") {
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
    if (currency === "") {
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
    setLoading(true)
    try {
      const docRef = await addDoc(collection(db, "Accounts"), state);
      state.currency = "Credit";
      const amount = await addDoc(collection(db, "Amount"), state);
      console.log(docRef, amount);
      toast.success(`Dear ${state.name} , Your account has been created at account No : ${state.account}`, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      let array = [];
      const querySnapshot = await getDocs(collection(db, "Accounts"));
      querySnapshot.forEach((doc) => {
        if (state.uid === doc.data().uid) {
          setState(initialState)
          navigate("/dashboard/allaccounts")
          array.push(doc.data());
        }
        setDocuments(array)
        setTable(array)
      }
      )
      setLoading(false)
    }
    catch (e) {
    }
  }
  return (
    <div style={{ height: "90vh" }}>
      {!loading ?
        <>
          <div className="float-start m-3 d-flex flex-column">
            <DashboardMenu />
          </div>
          <div className="container text-center d-flex">
            <div className="row w-100">
              <div className="col-12 mt-4 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
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
                    <Button type='submit' className='float-end m-3' variant={'contained'} color="secondary">Submit
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div >
        </>
        :
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      }
    </div >
  )
}
