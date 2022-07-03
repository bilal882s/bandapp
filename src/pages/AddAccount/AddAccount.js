import React from 'react'

export default function AddAccount() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <div className="d-flex">
              <input type="text" id='Name' className='form-control m-3' placeholder='Full Name' />
              <input type="number" className='form-control m-3' placeholder='CNIC Number' />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <div className="d-flex">
              <input type="number" className='form-control m-3' placeholder='Branch Code(1 - 99)' />
              <input type="number" className='form-control m-3' placeholder='Account Number(Length should be 9)' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
