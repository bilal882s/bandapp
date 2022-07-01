import React, { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
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
        // const { email, password } = state;

        // signInWithEmailAndPassword(auth, email, password)
        //     .then((userCredential) => {
        //         // Signed in 
        //         const user = userCredential.user;
        //         // ...
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //     });

    }
    const handleLogout = () => {
        signOut(auth).then(() => {
            setUser({});
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
        });
    }

    // signInWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         // Signed in 
    //         const user = userCredential.user;
    //         // ...
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //     });





    // const [state, setState] = useState(initialData);
    return (
        <>
            <div className='p-3'>
                {
                    //         user.email ? <div className='border border-1 border-warning'>
                    //             <h1>You are logged in : {user.email}</h1>
                    //             <button className="btn btn-danger" onClick={handleLogout}>Logout</button></div>
                    //             :
                    //             <div className="container">
                    //                 <div className="row">
                    //                     <div className="col-12 col-md-6 offset-md-3 col-lg-8 offset-lg-2">
                    //                         <div className="card">
                    //                             <form onSubmit={submitHandler}>
                    //                                 <h2 className='text-center my-2'>Login</h2>
                    //                                 {/* <p>If you are Sign Up before.</p> */}
                    //                                 <div className="card-body">
                    //                                     <input type="email" onChange={handleChange} name="email" placeholder="Email" className='form-control my-3' />
                    //                                     <input type="password" name="password" placeholder="Password" onChange={handleChange} className='form-control my-3' />
                    //                                     {/* <label for="inputPassword2" class="visually-hidden">Password</label>
                    //                                     <input type="password" name='password' class="form-control" id="inputPassword2" placeholder="Password" onChange={handleChange}></input> */}
                    //                                     <button className="btn btn-success w-100">Register</button>
                    //                                     <Link className='nav-link' to="/signup">Sign Up</Link>
                    //                                 </div>
                    //                             </form>
                    //                         </div>
                    //                     </div>
                    //                 </div>
                    //             </div>
                }</div>
            <div>
                {/* <ToastContainer /> */}
                <div className="container col-12 col-md-6 offset-md-3 col-lg-8 offset-lg-2">
                    {
                        user.email ?
                            <div className="card border border-1 border-black">
                                <div className="row text-center">
                                    <div className="">
                                        <h2>You are Logged In and Your Email is : {user.email} </h2><br /><br />
                                        <button onClick={handleLogout} className="btn btn-danger text-center">Logout</button>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className="row m-2 text-center">
                                <div className="col-12 col-md-6 offset-md-3 col-lg-8 offset-lg-2">
                                    <div className="card p-3">
                                        <form onSubmit={submitHandler}>
                                            <h2 className='text-center my-2'>Login</h2>
                                            <div className="card-body">
                                                <input type="email" onChange={handleChange} name="email" placeholder="Email" className='form-control my-3' required />
                                                <input type="password" name="password" placeholder="Password" onChange={handleChange} className='form-control my-3' required />
                                                <button className="btn btn-success w-50">Login</button>
                                            </div>
                                        </form>
                                        <hr />
                                        <h3 className='or'>OR</h3>
                                        <div className="text-center">
                                            <Link className='btn btn-success' to="/signup">Sign Up</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}
