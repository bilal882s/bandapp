import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import { AuthContext } from '../../context/Authcontext';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { toast } from 'react-toastify';

export default function Navbar() {
    // const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)

    const navigate = useNavigate();

    const handleSignOut = (e) => {
        // setIsAuthenticated(false);
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
        // navigate('/');
    }
    return (
        <>
            <Header />
            <nav className="navbar navbar-expand-lg navbar-dark bg-header">
                <div className="container">
                    <Link to="/" className="navbar-brand">My Bank</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" style={{ flexGrow: 0 }} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard" className="nav-link active">DashBoard</Link>
                            </li>
                            {/* {!isAuthenticated ? <>
                                <li className="nav-item">
                                    <Link to="/login" className="btn btn-dark">Login

                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/signup" className="btn btn-dark">Sign Up

                                    </Link>
                                </li>
                            </>
                                :
                                <>
                                    <li className="nav-item">
                                        <Link to="/dashboard" className="nav-link active">DashBoard</Link>
                                    </li>
                                    <li className="nav-item">
                                        <button type='button' className="mx-2 btn btn-dark" onClick={handleSignOut}>Logout
                                        </button>
                                    </li>
                                </>

                            } */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
