import React, { useState } from 'react';
import Button from '@mui/material/Button';
import DashboardMenu from '../Dashboard/DashboardMenu';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export default function AddAccount() {
  const [currency, setCurrency] = useState("")
  const currencies = [{
    label: "Saving",
    value: "Saving",
  },
  {
    label: "Current",
    value: "Current",
  }
  ]
  const handleChange = (event) => {
    setCurrency(event.target.value);
  }
  return (
    <>
      <DashboardMenu />

      <div className="container text-center mt-3">
        <div className="row w-100">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <div className="card p-4">
              <h2 className='text-center bg-dark text-white p-1 rounded'>Fill this form to add an account</h2>

              <form className='text-start'>
                <div className="d-flex">
                  <TextField className='w-75 mx-2' label="Full Name" variant="standard" />
                  <TextField type="number" className='w-75 mx-2' label="CNIC Number" variant="standard" />
                </div>
                <div className="d-flex">
                  <TextField type='number' className='w-75 m-2' label="Branch (1 - 99)" variant="standard" />
                  <TextField type="number" className='w-75 m-2' label="Account Number (Length should be 9)" variant="standard" />
                </div>
                <div className="d-flex">
                  <TextField
                    id="standard-select-currency"
                    select
                    className='w-75 m-2'
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    variant="standard"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField type="number" className='w-75 m-2' label="Initial Deposit (Minimum 500 Rs.)" variant="standard" />
                </div>
                <Button className='float-end m-3' variant={'contained'} color="secondary">
                  Click Me
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
