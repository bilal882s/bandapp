import React, { useState, useEffect } from 'react';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../config/firebase';
import { toast, ToastContainer } from 'react-toastify';

export default function Forget() {

    // const initialEmail = 
    const [state, setState] = useState({ email: "" });

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }


    const submitHandler = (e) => {
        e.preventDefault();
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
                toast.success('Email sent.', {
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
        <div className="container w-100">
            <div className="row">
                <div className="col-12 col-md-8 offset-md-2 col-lg-10 offset-lg-1">
                    <div className="card p-3">
                        <form onSubmit={submitHandler}>
                            <h2 className='my-2'>Login</h2>
                            <input type="eamil" name="email" placeholder="Email" onChange={handleChange} className='form-control my-3' required />
                            <button onClick={submitHandler} className="btn btn-success w-50">Sent Password Reset</button>
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
