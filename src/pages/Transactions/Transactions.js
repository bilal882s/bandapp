import React from 'react'
import { Link } from 'react-router-dom'

export default function Transactions() {
  return (
    <>
      <div className="container center">
        <Link to="/" className="btn btn-success m-2">Back To Home</Link>
        <div className="row w-100">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <div className="card border border-1 border-black text-center" >
              <Link to="/dashboard" className='Link'>Back to Dashboard</Link>
              <h3 class="card-title"><i class="fa-solid icon fa-money-bill-1"></i>Transactions</h3>
              <hr />
              <h3>You didn't make a transaction yet</h3>
              <hr />
            </div>
          </div>
        </div >
      </div >
    </>
  )
}
