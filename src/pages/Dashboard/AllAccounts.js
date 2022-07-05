import React from 'react'
import DashboardMenu from './DashboardMenu'

export default function AllAccounts() {
    return (
        <>
            <DashboardMenu />
            <h1 className="text-center">All Accounts </h1>
            <div className='center' style={{ height: "60vh" }}>
                <div className="container mt-3 text-center">
                    <div className="row">
                        <div className="col">
                            <table class="table">
                                <thead className='table-dark'>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Accounts</th>
                                        <th scope="col">Transaction</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Bilal</th>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Awais</th>
                                        <td>4</td>
                                        <td>898</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Ali</th>
                                        <td>1</td>
                                        <td>300</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
