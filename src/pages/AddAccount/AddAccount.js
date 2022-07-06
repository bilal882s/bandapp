import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DashboardMenu from '../Dashboard/DashboardMenu';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

export default function AddAccount() {
  const initialState = {
    name: "",
    account: "",
    cnic: "",
    price: "",
    branch: "",
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
    setState({ ...state, [e.target.name]: e.target.value });
  }


  const handleSubmit = async (e) => {

    e.preventDefault();

    const { name, account, price, cnic, branch, currency } = state;

    if (name == "" || account == "" || price == "" || cnic == "" || branch == "" || currency == "") {
      console.log("Something else");
      return;
    }
    setLoading(true);


    try {

      const docRef = await addDoc(collection(db, "Accounts"), state);

      console.log("Document written with ID: ", docRef.id);
      setState(initialState)
      let array = [];
      array.push(state, ...documents);

      setDocuments(array)
      setLoading(false)


    } catch (e) {

      console.error("Error adding document: ", e);

      setLoading(false)

    }
    const querySnapshot = await getDocs(collection(db, "Accounts"));
    querySnapshot.forEach((doc) => {

      const oldData = doc.data();
      console.log(doc.id, " => ", oldData);

      setLoading(false)
    })


  }
  return (

    <div className='d-flex'>
      <DashboardMenu />
      <div className="container text-center mt-4">
        <div className="row w-100">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <div className="card p-4">
              <h2 className='text-center bg-dark text-white p-1 rounded'>Fill this form to add an account</h2>

              <form onSubmit={handleSubmit} className='text-start'>
                <div className="d-flex">
                  <TextField className='w-75 mx-2' name='name' value={state.name} label="Full Name" variant="standard" required onChange={handleChange} />
                  <TextField type="number" name='cnic' value={state.cnic} className='w-75 mx-2' label="CNIC Number" variant="standard" required onChange={handleChange} />
                </div>
                <div className="d-flex">
                  <TextField type='number' value={state.branch} name='branch' className='w-75 m-2' label="Branch (1 - 99)" variant="standard" required onChange={handleChange} />
                  <TextField type="number" name='account' value={state.account} className='w-75 m-2' label="Account Number (Length should be 9)" variant="standard" required onChange={handleChange} />
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
                    required
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField type="number" value={state.price} onChange={handleChange} name='price' className='w-75 m-2' label="Initial Deposit (Minimum 500 Rs.)" variant="standard" required />
                </div>

                <Button disabled={loading} type='submit' className='float-end m-3' variant={'contained'} color="secondary">
                  {!loading
                    ? "Submit"
                    : <div className="spinner-border spinner-border-sm"></div>
                  }
                </Button>
              </form>
            </div>
          </div>
        </div>
        <table class="table">
          {
            !loading
              ?
              <>
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Account No</th>
                    <th scope="col">CNIC No</th>
                    <th scope="col">Price</th>
                    <th scope="col">Branch No</th>
                    <th scope="col">Currency</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    documents.map((item, index) => (
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.account}</td>
                        <td>{item.cnic}</td>
                        <td>{item.price}</td>
                        <td>{item.branch}</td>
                        <td>{item.currency}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </>
              :
              <div className='text-center text-success mt-4'><div class="spinner-grow" style={{ width: '3rem', height: "3rem" }} role="status">
                <span class="visually-hidden">Loading...</span>
              </div></div>
          }
        </table>
      </div >
    </div >
  )
}
