import React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
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

    const list = (anchor) => (
        <List>
            <Link className='nav-link' to="/">
                <ListItem>
                    <ListItemButton>
                        <h1 className='text-center text-dark'>
                            My Bank
                        </h1>
                    </ListItemButton>
                </ListItem>
            </Link>
            {links.map((text, index) => (
                <Link className="nav-link" to={text.url}>
                    <ListItem key={text.text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {text.icon}
                            </ListItemIcon>
                            <ListItemText>
                                {text.text}
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </Link>
            ))}
        </List>
    );

    return (
        <div className=''>
            {['Menu'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button variant='outlined border-0' onClick={toggleDrawer(anchor, true)}><i class="fa-solid fa-bars" style={{ fontSize: "1.5rem" }} ></i></Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>

    );
}
