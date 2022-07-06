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
            icon: <i class="fa-solid fa-house"></i>
        },
        {
            text: "Accounts",
            url: "/dashboard/accounts",
            icon: <i class='fa-solid fa-user'></i>,
        },
        {
            text: "Transactions",
            url: "/dashboard/transactions",
            icon: <i class="fa-solid fa-money-bill-1-wave"></i>
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
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem>
                    <ListItemButton>
                        <h1 className='text-center text-dark'><Link className='nav-link' to="/">My Bank</Link></h1>
                    </ListItemButton>
                </ListItem>
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
            <Divider />
        </Box>
    );

    return (
        <div className=''>
            {['MenuIcon'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button variant='outlined' onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
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
