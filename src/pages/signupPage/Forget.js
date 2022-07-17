import React, { useState, useContext } from 'react';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../config/firebase';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/Authcontext';
import TextField from '@mui/material/TextField';

export default function Forget() {

    // const initialEmail = 
    const { loading, setLoading } = useContext(AuthContext);
    const [state, setState] = useState({ email: "" });

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }


    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        const { email } = state;
        // const auth = getAuth();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success('Email is Sent.', {
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
                toast.error('Please refresh and Resend again email.', {
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
        <div className="bg">
            <div className="container text-center d-flex align-items-center min-vh-100">
                <div className="row w-100">
                    <div className="col-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2">
                        <div className="card p-3">
                            <form onSubmit={submitHandler}>
                                <h2 className='my-2'>Login</h2>
                                {/* <input type="eamil" name="email" placeholder="Email" onChange={handleChange} className='form-control my-3' required /> */}
                                <TextField variant="standard" className='w-100 my-3' type="eamil" name="email" label="Email" onChange={handleChange} required />
                                <button className="btn btn-success w-50" disabled={loading}>
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
