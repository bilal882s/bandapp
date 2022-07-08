import React, { useContext } from 'react';
import DashboardMenu from "../Dashboard/DashboardMenu";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/Authcontext";
import Login from "../signupPage/Login";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { isAuthenticated, setIsAuthenticated, index, transactions } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);

    navigate("/")
  }
  return (
    <div className='d-flex'>
      <DashboardMenu />
      <div className='center w-100' style={{ height: "100vh" }}>
        <h1 className="text-center">Add / View Accounts</h1>
        <div className="container mt-3 text-center">
          <div className="row d-flex m-4">
            <div className="col-12 col-md-6 col-lg-6  ">
              <Card className='shadow-lg'>
                <div class="text-center">
                  <CardContent>
                    <h5 class="card-title"><i class="fa-solid fa-user mb-1 m-2"></i>Accounts</h5>
                    <hr />
                    <Button className='m-1' size="sm" variant={'contained'} color="success">
                      <Link className='nav-link' to="/dashboard/adduser" >Add</Link>
                    </Button>
                    <Button className='m-1' size="sm" variant={'contained'} color="warning">
                      <Link className='nav-link' to="/dashboard/allaccounts" color='success'>View</Link>
                    </Button>
                    <hr />
                    <br />
                    <h1>{index}</h1>
                    <h4>Accounts</h4>
                  </CardContent>
                </div>
              </Card>
            </div>
            <div className='col-12 col-md-6 col-lg-6'>
              <Card className="shadow-lg">
                <div class="text-center">
                  <CardContent>
                    <h5 class="card-title"><i class="fa-solid fa-user mb-1 m-2"></i>Transactions</h5>
                    <hr />
                    <Button className='m-1' size="sm" variant={'contained'} color="warning">
                      <Link className='nav-link' to="/dashboard/transactions/view" color='success'>View</Link>
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
    </div>
  )
}
