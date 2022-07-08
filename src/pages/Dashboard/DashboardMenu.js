import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom"

export default function DashboardMenu() {
    const links = [
        {
            text: "Home",
            url: "/dashboard",
            icon: <i className="fa-solid fa-house"></i>
        },
        {
            text: "Accounts",
            url: "/dashboard/accounts",
            icon: <i className='fa-solid fa-user'></i>,
        },
        {
            text: "Transactions",
            url: "/dashboard/transactions",
            icon: <i className="fa-solid fa-money-bill-1-wave"></i>
        }
    ]
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <>
            <div className=''>
                <button className="btn btn-light m-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <ListItem>
                            <h1 className='text-center text-dark'><Link className='nav-link' to="/">My Bank</Link></h1>
                        </ListItem>
                        {
                            links.map((text, index) => (
                                <Link className="btn btn-success color-white w-100 my-2 text-center" to={text.url}>
                                    <div className="d-flex" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                                        <ListItemText>
                                            {text.text}
                                        </ListItemText>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>

    );
}
