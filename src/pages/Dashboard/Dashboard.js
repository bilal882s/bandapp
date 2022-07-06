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
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);

    navigate("/")
  }
  return (
    <div className='d-flex'>
      <DashboardMenu />
      {/* <div className='m-5' style={{ height: "100vh", width: "100%" }}>
        <h1 className="text-center">Dashboard Page</h1>
        <div className="container mt-3 text-center">
          <div className="row ">
            <div className="col-12 col-md-12 col-lg-5 shadow ">
              <div class="ftext-center">
                <CardContent>
                  <h5 class="card-title"><i class="fa-solid fa-user mb-1 m-2"></i>Accounts</h5>
                  <hr />
                  <Button className='m-1' size="sm" variant={'contained'} color="success">
                    <Link className='nav-link' to="/adduser" >Add New Account</Link>
                  </Button>
                  <Button className='m-1' size="sm" variant={'contained'} color="warning">
                    <Link className='nav-link' to="/dashboard/allaccounts" color='success'>View All Accounts</Link>
                  </Button>
                  <hr />
                  <br />
                  <h1>0</h1>
                  <h4>Accounts</h4>
                </CardContent>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-5 shadow">
            <Card>
              <div class="ftext-center">
                <CardContent>
                  <h5 class="card-title"><i class="fa-solid fa-user mb-1 m-2"></i>Accounts</h5>
                  <hr />
                  <Button className='m-1' size="sm" variant={'contained'} color="success">
                    <Link className='nav-link' to="/adduser" >Add New Account</Link>
                  </Button>
                  <Button className='m-1' size="sm" variant={'contained'} color="warning">
                    <Link className='nav-link' to="/adduser" color='success'>View All Accounts</Link>
                  </Button>
                  <hr />
                  <br />
                  <h1>0</h1>
                  <h4>Accounts</h4>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </div> */}
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
                      <Link className='nav-link' to="/adduser" >Add New Account</Link>
                    </Button>
                    <Button className='m-1' size="sm" variant={'contained'} color="warning">
                      <Link className='nav-link' to="/dashboard/allaccounts" color='success'>View All Accounts</Link>
                    </Button>
                    <hr />
                    <br />
                    <h1>0</h1>
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
                      <Link className='nav-link' to="" color='success'>View All Accounts</Link>
                    </Button>
                    <hr />
                    <br />
                    <h1>0</h1>
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
