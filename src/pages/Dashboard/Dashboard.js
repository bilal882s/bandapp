import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import DashboardMenu from "../Dashboard/DashboardMenu"

export default function Dashboard() {
  return (
    <>
      <DashboardMenu />
      <div className='center' style={{ height: "60vh" }}>
        <h1 className="text-center">Dashboard Page</h1>
        <div className="container mt-3 text-center">
          <div className="row">
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
    </>
  )
}
