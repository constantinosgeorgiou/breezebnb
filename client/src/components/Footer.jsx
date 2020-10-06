import React from "react";

import Copyright from "components/Copyright";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: "auto",
        backgroundColor:
            theme.palette.type === "light" ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));

const Footer = (props) => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Copyright />
        </footer>
    );
};

export default Footer;
