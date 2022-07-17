import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import { AuthContext } from '../../context/Authcontext';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { toast } from 'react-toastify';
import { Button } from '@mui/material';

export default function Navbar() {
    const { isAuthenticated, setIsAuthenticated,  setTable } = useContext(AuthContext)

    const navigate = useNavigate();

    const handleSignOut = (e) => {
        setIsAuthenticated(false);
        setTable([])
        signOut(auth).then(() => {
            toast.success('You Have Successfully Logged Out', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }).catch((error) => {
            toast.error('Something else here!', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        });
        navigate('/');
    }
    return (
        <>
            <Header />
            <nav className="navbar navbar-expand-lg navbar-dark bg-header">
                <div className="container">
                    <Link to="/" className="navbar-brand fs-4"><i style={{ height: "2rem" }} class="fa-solid me-2 fa-building-columns"></i>My Bank</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" style={{ flexGrow: 0 }} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            {!isAuthenticated ? <>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link active">Login

                                    </Link>
                                </li>
                                <li className="nav-item" >
                                    <Link to="/signup" className="nav-link active">Sign Up
                                    </Link>
                                </li>
                            </>
                                :
                                <>
                                    <li className="nav-item">
                                        <Link to="/dashboard" className="nav-link active">DashBoard</Link>
                                    </li>
                                    <Button style={{ height: "2.5rem", textTransform: "none" }} className="mx-2" variant='contained' color="error" onClick={handleSignOut}>Logout
                                    </Button>
                                </>

                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
