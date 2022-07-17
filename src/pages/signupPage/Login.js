import React, { useState, useEffect, useContext } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { Button } from '@mui/material';
import { AuthContext } from '../../context/Authcontext';
import TextField from '@mui/material/TextField';

export default function Register() {
    const initialData = { email: "", password: "" };
    const [state, setState] = useState(initialData);
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [setUser] = useState({});
    const { setIsAuthenticated, setUid, setLoading } = useContext(AuthContext);


    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
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
            .then(() => {
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
            .catch(() => {
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
    return (
        <div className='bg'>
            <div className="container center">
                <Link to="/" className="m-2"><Button variant="contained">Back To Home</Button></Link>
                <div className="row w-100">
                    <div className="col-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2">
                        <div className="card p-3">
                            <form onSubmit={submitHandler}>
                                <h2 className='my-2'>Login</h2>
                                <div className="card-body">

                                    <TextField label="Email" name="email" onChange={handleChange} type="email" variant="standard" className='w-100' />
                                    <div className="input-group w-100 mt-2">
                                        <TextField className="w-100" label="Password" name="password" onChange={handleChange} type={isPasswordShow ? "text" : "password"} variant="standard" />
                                        <span style={{
                                            position: 'absolute', left: '95%',
                                        }} onClick={() => { setIsPasswordShow(!isPasswordShow) }} id="basic-addon2"><i className={`fa-solid mt-4 fa-eye${isPasswordShow ? "" : "-slash"}`}></i></span>
                                    </div>

                                    <Button onClick={submitHandler} className="bg-success w-50 mt-3" variant="contained" >
                                        Login
                                    </Button>
                                    <Link to="/forget" className='nav-link mt-3'>Forget Password</Link>
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
            </div >
        </div>
    )
}
