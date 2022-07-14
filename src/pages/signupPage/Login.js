import React, { useState, useEffect, useContext } from 'react';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../context/Authcontext'
import { setUserId } from 'firebase/analytics';

export default function Register() {
    const initialEmail = { verifyEmail: "" }
    const initialData = { email: "", password: "" };
    const [state, setState] = useState(initialData);
    const [email, setEmail] = useState(initialEmail);
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});
    const { setIsAuthenticated, uid, setUid, table, setTable } = useContext(AuthContext);


    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setUid(user.uid)
            } else {
            }
        });
    }, [])

    // Authentication




    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true);
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
                setIsAuthenticated(true);

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
        setLoading(false)
    }
    const handleLogout = () => {
        signOut(auth).then(() => {
            setTable([]);
            toast.success('You are Logged out.', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setIsAuthenticated(false)
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
    return (
        <div className='bg'>
            <div className="container center">
                <Link to="/" className="btn btn-success m-2">Back To Home</Link>
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

                                            <input type={email} className="form-control" placeholder="Email" name='email' onChange={handleChange} />
                                            <div className="input-group">
                                                <input type={isPasswordShow ? "text" : "password"} name="password" placeholder="Password" onChange={handleChange} className='form-control my-3' required />
                                                <span className="input-group-text eye" onClick={() => { setIsPasswordShow(!isPasswordShow) }} id="basic-addon2"><i className={`fa-solid fa-eye${isPasswordShow ? "" : "-slash"}`}></i></span>
                                            </div>

                                            <button className="btn btn-success w-50" disabled={loading}>
                                                {!loading ?
                                                    "Login"
                                                    :
                                                    <div className='spinner-border spinner-border-sm'></div>
                                                }
                                            </button>
                                            <Link to="/forget" className='nav-link'>Forget Password</Link>
                                        </div>
                                    </form>
                                    <hr />
                                    <h3 className='or'>OR</h3>
                                    <div className="text-center">
                                        <Link to="/signup">
                                            Sign Up
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div >
        </div>
    )
}
