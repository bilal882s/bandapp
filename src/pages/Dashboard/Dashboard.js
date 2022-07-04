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
                <Button className='m-1' size="sm" variant={'contained'} color="success">View All Dashboard
                </Button>
                <Button variant="outlined" color="secondary" >Click Me</Button>
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
