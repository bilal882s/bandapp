import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase';
import { Link } from "react-router-dom"

export default function Register() {
    const initialData = { email: "", password: "" };
    const [state, setState] = useState(initialData);
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
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const handleLogout = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
        });
    }
    return (
        <>
            <div className="container col-12 col-md-6 offset-md-3 mt-2 col-lg-8 offset-lg-2  text-center">
                {
                    user.email ?
                        <div className="card border border-1 border-black">
                            <div className="row text-center p-3">
                                <h2>You are Logged In : {user.email} </h2><br /><br />
                                <button onClick={handleLogout} style={{ marginLeft: '35%' }} className="btn text-center btn-danger  w-25">Logout</button>
                            </div>
                        </div>
                        :
                        <div className="row m-2 text-center">
                            <div className="col-12 col-md-6 offset-md-3 col-lg-8 offset-lg-2">
                                <div className="card p-3">
                                    <form onSubmit={submitHandler}>
                                        <h2 className='my-2'>Login</h2>
                                        <div className="card-body">
                                            <input type="email" onChange={handleChange} name="email" placeholder="Email" className='form-control my-3' required />
                                            <input type="password" name="password" placeholder="Password" onChange={handleChange} className='form-control my-3' required />
                                            <button className="btn btn-success w-50">Login</button>
                                        </div>
                                    </form>
                                    {/* Modal of Forget Password */}
                                    <a style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Forget Password
                                    </a>
                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Forget Password</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <input type="email" placeholder='Email For Forget Password' className='form-control' />
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Send Message To Your Email</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
