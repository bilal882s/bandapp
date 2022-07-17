import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth, provider, facebookprovider } from '../../config/firebase';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

export default function Signup() {
    const navigate = useNavigate();
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
                    navigate("/dashboard")
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
            toast.error('Something Wring here.', {
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

    // const handleFacebook = () => {
    //     signInWithPopup(auth, facebookprovider)
    //         .then((result) => {
    //             console.log("Hi");
    //             // The signed-in user info.
    //             const user = result.user;

    //             // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //             const credential = FacebookAuthProvider.credentialFromResult(result);
    //             const accessToken = credential.accessToken;

    //             // ...
    //         })
    //         .catch((error) => {
    //             console.log("error");
    //             // Handle Errors here.
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             // The email of the user's account used.
    //             const email = error.customData.email;
    //             // The AuthCredential type that was used.
    //             const credential = FacebookAuthProvider.credentialFromError(error);

    //             // ...
    //         });
    // }

    const handleGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                navigate("/dashboard")
                toast.success('You are successfully logged in with Google.', {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                toast.error('Something else here Google.', {
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
        <div className='center bg'>
            <Link to="/" className="nav-link bg-primary m-2"><Button variant='contained'>Back To Home</Button></Link>
            <ToastContainer />
            <div className="container">
                <div className="row text-center">
                    <div className="col-12 col-md-8 offset-md-2 col-lg-10 offset-lg-1">
                        <div className="card p-3">
                            <form onSubmit={submitHandler}>
                                <h2 className='text-center my-2'>Sign Up</h2>
                                <div className="card-body">
                                    <TextField type="email" onChange={handleChange} name="email" label="Email" className='w-100' required variant="standard" />
                                    <div className="input-group">
                                        <TextField className="w-100 my-3" label="Password" name="password" onChange={handleChange} type={isPasswordShow ? "text" : "password"} variant="standard" />
                                        <span style={{
                                            position: 'absolute', left: '95%',
                                        }} onClick={() => { setIsPasswordShow(!isPasswordShow) }} id="basic-addon2"><i className={`fa-solid mt-4 fa-eye${isPasswordShow ? "" : "-slash"}`}></i></span>
                                    </div>
                                    <div className="input-group">
                                        <TextField className="w-100 mb-3" label="Confirm Password" name="password" onChange={handleChange} type={isConPasswordShow ? "text" : "password"} variant="standard" />
                                        <span style={{
                                            position: 'absolute', left: '95%',
                                        }} onClick={() => { setIsConPasswordShow(!isConPasswordShow) }} id="basic-addon2"><i className={`fa-solid mt-4 fa-eye${isConPasswordShow ? "" : "-slash"}`}></i></span>
                                    </div>
                                    <button className="btn btn-success w-50">Sign Up</button>
                                </div>
                            </form>
                            <hr />
                            <h3 className='or'>OR</h3>
                            <div className="d-flex text-center justify-content-center">
                                <div className="text-center" onClick={handleGoogle}>
                                    <img style={{ cursor: "pointer", height: "2.5rem", width: "2.5rem" }} src="https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1=w240-h480-rw" alt="Sign uo with Google" />
                                </div>
                                {/* <div className="text-center mt-1" onClick={handleFacebook}>
                                    <img style={{ cursor: "pointer", height: "2rem", width: "2rem" }} src="https://www.citypng.com/public/uploads/preview/-11595327237ulqckjabpb.png" />
                                </div> */}
                            </div>
                            {/* <hr /> */}
                            <div className="text-center">
                                <Link to="/login">Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
