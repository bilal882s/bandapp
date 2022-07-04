import React from 'react'

export default function AddAccount() {
  return (
    <>
      <div className="container center min-vh-100">
        <div className="row w-100">
          {/* <h2 className='text-center bg-danger'>Fill this form to add an account</h2> */}
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <div className="card p-4">

              <form className='text-start'>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
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
      </div>
    </>
  )
}
