import React, { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../config/firebase';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export default function Signup() {
    const initialData = { email: "", password: "", confirmpassword: "" };
    const [state, setState] = useState(initialData);
    const [users, setUsers] = useState({});
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [isConPasswordShow, setIsConPasswordShow] = useState(false);

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)
            } else {
            }
        });

    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        const { email, password, confirmpassword } = state;
        if (password === confirmpassword || password.length < 8) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    toast.success('You are sign up and Login also.', {
                        position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                })
                .catch((error) => {
                    toast.error('Something else here.', {
                        position: "bottom-left",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                })
        } else {
            toast.error('Email / Password is incorrect', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    }

    const handleLogout = () => {
        signOut(auth).then(() => {
            setUsers({});
            toast.success('You are Logged out.', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }).catch((error) => {
            toast.error('This account is Sign up before.', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        });
    }
    return (
        <div className='center'>
            <Link to="/" className="btn btn-success m-2">Back To Home</Link>
            <ToastContainer />
            <div className="container">
                {
                    users.email ?
                        <>
                            <h2>You are Logged In : {users.email} </h2><br /><br />
                            <Link to="/dashboard" className='btn btn-success'>Go To Dashboard</Link><br /><br />
                            <button onClick={handleLogout} className="btn btn-danger w-25">Sign Out</button>
                        </>
                        :
                        <div className="row text-center">
                            <div className="col-12 col-md-8 offset-md-2 col-lg-10 offset-lg-1">
                                <div className="card p-3">
                                    <form onSubmit={submitHandler}>
                                        <h2 className='text-center my-2'>Sign Up</h2>
                                        <div className="card-body">
                                            <input type="email" onChange={handleChange} name="email" placeholder="Email" className='form-control my-3' required />
                                            {/* <input type="password" name="password" placeholder="Password" onChange={handleChange} className='form-control my-3' required />
                                            <input type="password" name="confirmpassword" placeholder="Confirm Password" onChange={handleChange} className='form-control my-3' required /> */}

                                            <div class="input-group">
                                                <input type={isPasswordShow ? "text" : "password"} name="password" placeholder="Password" onChange={handleChange} className='form-control my-3' required />
                                                <span class="input-group-text eye" onClick={() => { setIsPasswordShow(!isPasswordShow) }} id="basic-addon2"><i class={`fa-solid fa-eye${isPasswordShow ? "" : "-slash"}`}></i></span>
                                            </div>
                                            <input type="password" value="123456789" className="form-control" disabled />

                                            <div class="input-group">
                                                <input type={isConPasswordShow ? "text" : "password"} name="confirmpassword" placeholder="Confirm Password" onChange={handleChange} className='form-control my-3' required />
                                                <span class="input-group-text eye" onClick={() => { setIsConPasswordShow(!isConPasswordShow) }} id="basic-addon2"><i class={`fa-solid fa-eye${isConPasswordShow ? "" : "-slash"}`}></i></span>
                                            </div>
                                            <button className="btn btn-success w-50">Sign Up</button>
                                        </div>
                                    </form>
                                    <hr />
                                    <h3 className='or'>OR</h3>

                                    <div className="text-center">
                                        <Link to="/login">Login</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}
