import React, { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, deleteUser } from "firebase/auth";
import { auth } from '../../config/firebase';
import {Link } from "react-router-dom"
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
    const initialData = { email: "", password: "" };
    const [state, setState] = useState(initialData);
    const [users, setUsers] = useState({});

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)
                // console.log(user);
            } else {
            }
        });

    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        const { email, password } = state;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // setUsers(user)
                // toast.success('You are logged in', {
                //     position: "bottom-left",
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                // });
            })
            .catch((error) => {
            })

    }
    const handleLogout = () => {
        signOut(auth).then(() => {
            // deleteUser(auth).then(()=>{})
            setUsers({});
            // toast.success('You are logged out', {
            //     position: "bottom-left",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            // });
        }).catch((error) => {
            console.error(error);
        });
    }
    return (
        <div className='d-flex p-3'>
            {/* <ToastContainer /> */}
            <div className="container">
                {
                    users.email ?
                        <div className="row text-center">
                            <div className="col-12 col-md-6 offset-md-3 col-lg-8 offset-lg-2">
                                <h2>You are Logged In and Your Email is : {users.email} </h2><br /><br />
                                <button onClick={handleLogout} className="btn btn-danger text-center">Logout</button>
                            </div>
                        </div>
                        :
                        <div className="row m-5 text-center">
                            <div className="col-12 col-md-6 offset-md-3 col-lg-8 offset-lg-2">
                                <div className="card p-3">
                                    <form onSubmit={submitHandler}>
                                        <h2 className='text-center my-2'>Sign Up</h2>
                                        <div className="card-body">
                                            <input type="email" onChange={handleChange} name="email" placeholder="Email" className='form-control my-3' required />
                                            <input type="password" name="password" placeholder="Password" onChange={handleChange} className='form-control my-3' required />
                                            <button className="btn btn-success w-50">Sign Up</button>
                                        </div>
                                    </form>
                                    <hr />
                                    <h3 className='or'>OR</h3>

                                    <div className="text-center">
                                        <Link className='btn btn-success' to="/login">Login</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}
