import React, { useContext } from 'react';
import DashboardMenu from "../Dashboard/DashboardMenu";
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from "../../context/Authcontext";
import Login from "../signupPage/Login"

export default function Dashboard() {
  // const [isAuthenticated, setIsAuthenticated] = useContext(AuthContext);
  // const navigate = useNavigate();

  // const handleLogout = () => {
    // setIsAuthenticated(false);

    // navigate("/")
  // }
  return (
    <div className='d-flex'>
      <DashboardMenu />
      <div className='m-5' style={{ height: "60vh", width: "60rem" }}>
        <h1 className="text-center">Dashboard Page</h1>
        <div className="container mt-3 text-center">
          <div className="row">
            <div className="col">
              <table class="table w-100">
                <thead className='table-dark'>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Accounts</th>
                    <th scope="col">Transaction</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Bilal</th>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">Awais</th>
                    <td>4</td>
                    <td>898</td>
                  </tr>
                  <tr>
                    <th scope="row">Ali</th>
                    <td>1</td>
                    <td>300</td>
                  </tr>
                  {/* <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* {
        !isAuthenticated ?
          <><Login /></>
          :
          <button onClick={handleLogout} className="btn btn-danger">Logout</button>
      } */}
    </div>
  )
}
