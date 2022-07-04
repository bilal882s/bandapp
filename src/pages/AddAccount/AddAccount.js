import React from 'react';
import Button from '@mui/material/Button';

export default function AddAccount() {
  return (
    <>
      <div className="container center min-vh-100">
        <div className="row w-100">
          {/* <h2 className='text-center bg-danger'>Fill this form to add an account</h2> */}
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <div className="card p-4">

              <form className='text-start'>
                <Button variant={'contained'} color="light">Submit</Button>
              </form>
            </div>
            {/* <div className="d-flex">
              <input type="text" id='Name' className='form-control m-3' placeholder='Full Name' />
              <input type="number" className='form-control m-3' placeholder='CNIC Number' />
            </div>
          </div>
        </div>
        <div className="row w-100">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <div className="d-flex">
              <input type="number" className='form-control m-3' placeholder='Branch Code(1 - 99)' />
              <input type="number" className='form-control m-3' placeholder='Account Number(Length should be 9)' />
            </div> */}
          </div>
        </div>
      </div >
    </>
  )
}
