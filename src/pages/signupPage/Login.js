import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase';

export default function Register() {
    const initialData = { email: "", password: "" };
    const [state, setState] = useState(initialData);
    const [user, setUser] = useState(initialData);

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(state);
        const { email, password } = state;
        // const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            });
        setUser(user)
    }

    // const [state, setState] = useState(initialData);
    return (
        <div className='login'>
            {
                user.email ?
                    <h1>YOu are logger in {user.email}</h1>
                    :
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <form onSubmit={submitHandler}>
                                        <h2 className='text-center my-2'>Login Page</h2>
                                        <div className="card-body">
                                            <input type="email" onChange={handleChange} name="email" placeholder="Email" className='form-control my-3' />
                                            <input type="password" name="password" placeholder="Password" onChange={handleChange} className='form-control my-3' />
                                            <button className="btn btn-success w-100">Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}
