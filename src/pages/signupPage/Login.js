import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../config/firebase';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export default function Register() {
    const initialEmail = { verifyEmail: "" }
    const initialData = { email: "", password: "" };
    const [state, setState] = useState(initialData);
    const [email, setEmail] = useState(initialEmail);
    const [user, setUser] = useState({});

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
            }
        });
    }, [])
    const submitHandler = (e) => {
        e.preventDefault();
        const { email, password } = state;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                toast.success('You are Logged in.', {
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
                toast.error('You are not Sign up.', {
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
    const handleLogout = () => {
        signOut(auth).then(() => {
            toast.success('You are Logged out.', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setUser({});
        }).catch((error) => {
            toast.error('Something else here.', {
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
    const handleEmail = () => {
        const { verifyEmail } = email;
        sendPasswordResetEmail(getAuth, verifyEmail)
            .then(() => {
                console.log("Email sent");
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <>
            <div className="container center">
                <Link to="/" className="btn btn-success m-2">Back To Home</Link>
                <ToastContainer />
                {
                    user.email ?
                        <div className="card border border-1 border-black">
                            <div className="row text-center p-3">
                                <h2>You are Logged In : {user.email} </h2><br /><br />
                                <button onClick={handleLogout} style={{ marginLeft: '35%' }} className="btn text-center btn-danger  w-25">Logout</button>
                            </div>
                        </div>
                        :
                        <div className="row w-100">
                            <div className="col-12 col-md-8 offset-md-2 col-lg-10 offset-lg-1">
                                <div className="card p-3">
                                    <form onSubmit={submitHandler}>
                                        <h2 className='my-2'>Login</h2>
                                        <div className="card-body">
                                            <input type="email" onChange={handleChange} name="email" placeholder="Email" className='form-control my-3' required />
                                            <input type="password" name="password" placeholder="Password" onChange={handleChange} className='form-control my-3' required />
                                            <button className="btn btn-success w-50">Login</button>
                                            <Link to="/forget" className='nav-link'>Forget Password</Link>
                                        </div>
                                    </form>
                                    <hr />
                                    <h3 className='or'>OR</h3>
                                    <div className="text-center">
                                        <Link to="/signup">Sign Up</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </>
    )
}
