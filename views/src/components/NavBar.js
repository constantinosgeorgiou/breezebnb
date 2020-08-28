import React from "react";

import { List, ListItem, ListItemText, Typography } from "@material-ui/core";

import { Link } from "@react-router-dom";

const NavBar = (props) => {
    return (
        <List component="nav">
            <ListItem compontent="div">
                <ListItemText inset>
                    <Link to="/">
                        <Typography color="inherit" variant="title">
                            Home
                        </Typography>
                    </Link>
                </ListItemText>
            </ListItem>
        </List>
    );
};

export default NavBar;
{
    /* <main>
<nav>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/signup">Sign Up</Link>
        </li>
        <li>
            <Link to="/signin">Sign In</Link>
        </li>
    </ul>
</nav> */
}
