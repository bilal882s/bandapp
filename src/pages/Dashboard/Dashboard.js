import React, { useContext, useState, useEffect } from 'react';
import DashboardMenu from "../Dashboard/DashboardMenu";
import { AuthContext } from "../../context/Authcontext";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Dashboard() {
  const { user, setIndex, index, transactions, setTransactions } = useContext(AuthContext);
  const [loading, setLoading] = useState(false)

  const fetchDocuments = async () => {
    setLoading(true);
    let num = 0;
    let price = 0;
    const amount = await getDocs(collection(db, "Amount"));
    amount.forEach((doc) => {
      if (user.uid === doc.data().uid) {
        price = price + 1;
      }
    })
    setTransactions(price)

    const querySnapshot = await getDocs(collection(db, "Accounts"));
    querySnapshot.forEach((doc) => {
      if (user.uid === doc.data().uid) {
        num = num + 1;
      }
    })
    setIndex(num);
    setLoading(false);
  }

  useEffect(() => {
    fetchDocuments();
  }, [user])
  return (
    <div>
      {!loading ?
        <>
          <div className="float-start">
            <DashboardMenu />
          </div>
          <div className='center w-100 mt-3' style={{ height: "100vh" }}>
            <h1 className="text-center mt-5">Add / View Accounts</h1>
            <div className="container mt-3 text-center">
              <div className="row d-flex m-4">
                <div className="col-12 col-md-6 col-lg-6  ">
                  <Card className='shadow-lg'>
                    <div className="text-center">
                      <CardContent>
                        <h5 className="card-title"><i className="fa-solid fa-user mb-1 m-2"></i>Accounts</h5>
                        <hr />
                        <div className="d-flex justify-content-center">
                          <Link className='nav-link' to="/dashboard/adduser" >
                            <Button className='m-1' size="sm" variant={'contained'} color="success">
                              Add
                            </Button>
                          </Link>
                          <Link className='nav-link' to="/dashboard/allaccounts" color='success'>
                            <Button className='m-1' size="sm" variant={'contained'} color="warning">
                              View
                            </Button>
                          </Link>
                        </div>
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
                    <div className="text-center">
                      <CardContent>
                        <h5 className="card-title"><i class="fa-solid fa-money-bill-1-wave me-2"></i>Transactions</h5>
                        <hr />
                        <Link className='nav-link' to="/dashboard/transactions/view" color='success'>
                          <Button className='m-1' size="sm" variant={'contained'} color="warning">
                            View
                          </Button>
                        </Link>
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
        </>
        :
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      }
    </div>
  )
}
