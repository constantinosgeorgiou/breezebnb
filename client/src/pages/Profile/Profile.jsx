import React from "react";

import {
    Container,
    Grid,
    Paper,
    makeStyles,
    Card,
    CardContent,
    CardMedia,
} from "@material-ui/core";

import { UserContextConsumer } from "context/userContext";

import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },

    avatar: {
        borderRadius: "50%",
        height: "auto",
        maxWidth: "150px",
        padding: theme.spacing(2),
    },
}));

const Profile = () => {
    const classes = useStyles();

    return (
        <UserContextConsumer>
            {(context) => (
                <Container component="main" maxWidth="xs" className={classes.root}>
                    <Grid container md direction="row" justify="center" spacing={2}>
                        <Grid item xs={12} md={4} className={classes.redBorder}>
                            {/* Left section */}
                            <Card>
                                <CardMedia
                                    className={classes.avatar}
                                    component="img"
                                    alt={context.user.userName + "'s photo"}
                                    image={context.user.avatar}
                                    title={context.user.userName + "'s photo"}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            {/* Right section */}
                            <RightSection />
                        </Grid>
                    </Grid>
                </Container>
            )}
        </UserContextConsumer>
    );
};

export default Profile;
