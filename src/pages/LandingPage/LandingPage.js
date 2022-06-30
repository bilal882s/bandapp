import React from 'react'

export default function LandingPage() {
    return (
        <div className='bg-image'>
            <div className="container w-50 mt-0 mx-5">
                <div className="row">
                    <div className="col">
                        <div className="card m-5 bg-primary border border-1 border-black shadow-lg text-white">
                            <div className="card-body">
                                <h1>Get a $400 bouns then make it btter.</h1>
                                <p>Create an account to save your salery on <b><i>My Bank</i></b></p>
                                <button className="btn btn-success">Go to Accounts</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
