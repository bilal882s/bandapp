import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DashboardMenu from '../Dashboard/DashboardMenu';
import { AuthContext } from '../../context/Authcontext';

export default function Transactions() {

  const { transactions } = useContext(AuthContext);
  console.log(transactions)
  return (

    <div className='d-flex'>
      <DashboardMenu />
      <div className='center w-100' style={{ height: "60vh" }}>
        <h1 className="text-center">View Transactions</h1>
        <div className="container mt-3 text-center">
          <div className="row">
            <Card className="col-12 col-md-12 col-lg-10 offset-lg-1 shadow ">
              <div class="ftext-center">
                <CardContent>
                  <h4 class="card-title"><i class="fa-solid fa-money-check-dollar mx-1"></i>Transactions</h4>
                  <hr />
                  <Button className='m-1' size="sm" variant={'contained'} color="warning">
                    <Link className='nav-link' to="/dashboard/transactions/view" color='success'>View All Transactions</Link>
                  </Button>
                  <hr />
                  <br />
                  <h1>{transactions}</h1>
                  <h4>Transactions</h4>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
