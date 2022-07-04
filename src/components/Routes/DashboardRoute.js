import React from 'react';
import { Routes, Route } from "react-router-dom";
import Accounts from '../../pages/Dashboard/Accounts';

export default function DashboardRoute() {
    return (
        <div>
            <Routes>
                {/* <Route path='/dashboard'> */}
                <Route path='/dashboard/accounts' element={<Accounts />} />
                {/* </Route> */}
            </Routes>
        </div>
    )
}
