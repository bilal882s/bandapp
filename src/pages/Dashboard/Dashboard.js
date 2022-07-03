import React from 'react';
import DashboardMenu from "./DashboardMenu";
import { Link } from "react-router-dom"

export default function Dashboard() {
  return (
    <>
      <Link to="/" className="btn btn-success m-2">Back To Home</Link>
      <div className='center' style={{ height: "60vh" }}>
        <h1 className="text-center">Dashboard Page</h1>
        <div className="container mt-3 text-center">
          <div className="row d-flex">
            <div className="col-12 col-md-6 col-lg-6">
              <div class="card shadow text-center">
                <div class="card-body">
                  <h5 class="card-title"><i class="fa-solid icon fa-user"></i>Accounts</h5>
                  <hr />
                  <Link class="btn btn-primary m-sm-2 p-1" to="/adduser"><i class="fa-solid icon fa-plus p-1"></i>Add New User</Link>
                  <button class="btn btn-secondary m-sm-2 ms-3 p-1"><i class="fa-solid icon fa-eye p-1"></i>View All Accounts</button>
                  <hr />
                  <br />
                  <h1>0</h1>
                  <h4>Accounts</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div class="card shadow text-center">
                <div class="card-body">
                  <h5 class="card-title"><i class="fa-solid icon fa-money-bill-1"></i>Transactions</h5>
                  <hr />
                  <button class="btn btn-secondary m-xs-2 m-sm-2 ms-3 p-1"><i class="fa-solid icon fa-eye p-1"></i>View All Accounts</button>
                  <hr />
                  <br />
                  <h1>0</h1>
                  <h4>Transactions</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
