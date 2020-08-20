import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    "@global": {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: "none",
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: "wrap",
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
    },
    cardPricing: {
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));

const Navigation = () => {
    const classes = useStyles();
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
