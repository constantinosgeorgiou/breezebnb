import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const Navigation = () => {
    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
        >
            <Toolbar className={classes.toolbar}>
                <Typography
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    BreezeBnB
                </Typography>
                <nav>
                    <NavLink
                        variant="button"
                        color="textPrimary"
                        to="/travel"
                        className={classes.link}
                    >
                        Travel
                    </NavLink>
                    <Link
                        variant="button"
                        color="textPrimary"
                        href="#"
                        className={classes.link}
                    >
                        Host
                    </Link>
                </nav>
                <NavLink to="/register">
                    <Button
                        href="/register"
                        color="primary"
                        variant="outlined"
                        className={classes.link}
                    >
                        Register
                    </Button>
                </NavLink>
                <NavLink to="/login">
                    <Button
                        href="/login"
                        color="primary"
                        variant="outlined"
                        className={classes.link}
                    >
                        Login
                    </Button>
                </NavLink>
            </Toolbar>
        </AppBar>
    );
};

export default Navigation;
