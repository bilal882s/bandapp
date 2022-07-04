import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export default function DashboardMenu() {
    return (
        <div>
            <nav class="navbar bg-light">
                <Button data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"><i class="fa-solid fa-bars"></i></Button>
            </nav>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Dashboard Menu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <Link className='w-100 text-white btn btn-success' to="/dashboard/accounts" >Accounts</Link>
                </div>
            </div>
        </div>
    )
}
