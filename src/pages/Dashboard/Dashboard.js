import React from 'react';
import DashboardMenu from "./DashboardMenu";

export default function Dashboard() {
  return (
    <>
    <h1 className="text-center">Dashboard Page</h1>
      <div className="container mt-3 text-center">
        <div className="row d-flex">
          <div className="col-12 col-md-6 col-lg-6">
            <div class="card shadow text-center">
              <div class="card-body">
                <h5 class="card-title"><i class="fa-solid fa-user"></i>Accounts</h5>
                <hr />
                <button class="btn btn-primary p-1"><i class="fa-solid fa-plus p-1"></i>Add New User</button>
                <button class="btn btn-secondary ms-3 p-1"><i class="fa-solid fa-eye p-1"></i>View All Accounts</button>
                <hr />
                <br />
                <h1>0</h1>
                <h4>Accounts</h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 shadow">
            <div class="card  text-center">
              <div class="card-body">
                <h5 class="card-title"><i class="fa-solid fa-money-bill-1"></i>Transactions</h5>
                <hr />
                <button class="btn btn-secondary ms-3 p-1"><i class="fa-solid fa-eye p-1"></i>View All Accounts</button>
                <hr />
                <br />
                <h1>0</h1>
                <h4>Transactions</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
