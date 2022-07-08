import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import DashboardMenu from './DashboardMenu';
import { AuthContext } from '../../context/Authcontext';
export default function Accounts() {
    const { index, setIndex } = useContext(AuthContext);
    return (
        <div className='d-flex'>
            <DashboardMenu />
            <div className='center w-100' style={{ height: "80vh" }}>
                <h1 className="text-center">Add / View Accounts</h1>
                <div className="container mt-3 text-center">
                    <div className="row">
                        <Card className="col-12 col-md-6 col-lg-10 offset-lg-1 shadow ">
                            <div class="ftext-center">
                                <CardContent>
                                    <h5 class="card-title"><i class="fa-solid fa-user mb-1 m-2"></i>Accounts</h5>
                                    <hr />
                                    <Button className='m-1' size="sm" variant={'contained'} color="success">
                                        <Link className='nav-link' to="/dashboard/adduser" >Add New Account</Link>
                                    </Button>
                                    <Button className='m-1' size="sm" variant={'contained'} color="warning">
                                        <Link className='nav-link' to="/dashboard/allaccounts" color='success'>View All Accounts</Link>
                                    </Button>
                                    <hr />
                                    <br />
                                    <h1>{index}</h1>
                                    <h4>Accounts</h4>
                                </CardContent>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
