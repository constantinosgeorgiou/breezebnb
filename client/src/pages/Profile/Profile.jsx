import React from "react";

import {
    Box,
    Container,
    Grid,
    makeStyles,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
} from "@material-ui/core";

import { UserContextConsumer } from "context/userContext";

import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

const avatar_placeholder = {
    image: require("assets/images/placeholders/avatar_placeholder_960_540.png"),
    alt_text: "Placeholder image for avatar",
};

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4),
        flexGrow: 1,
    },

    alignIcon: {
        verticalAlign: "middle",
        display: "flex",
    },

    avatar: {
        height: 250,
    },

    card: {
        marginBottom: theme.spacing(4),
    },

    cardContent: {
        paddingTop: theme.spacing(3),
    },

    icon: {
        marginRight: theme.spacing(1),
    },

    about: {
        marginBottom: theme.spacing(2),
    },
}));

const Profile = () => {
    const classes = useStyles();
    // TODO: Retrieve reviews from back end
    const reviews = [];

    return (
        <UserContextConsumer>
            {(context) => (
                <main>
                    <Container className={classes.root}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={4}>
                                {/* Left section */}

                                {/* Profile Avatar */}
                                <Card className={classes.card}>
                                    <CardMedia
                                        component="img"
                                        className={classes.avatar}
                                        alt={
                                            context.user.avatar
                                                ? context.user.avatar
                                                : avatar_placeholder.alt_text
                                        }
                                        image={
                                            context.user.avatar
                                                ? context.user.userName + "'s photo"
                                                : avatar_placeholder.image
                                        }
                                        title={context.user.userName + "'s photo"}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography
                                            variant="body1"
                                            component="p"
                                            gutterBottom={reviews.length === 0 ? false : true}
                                            className={classes.alignIcon}
                                        >
                                            <PersonOutlineRoundedIcon className={classes.icon} />{" "}
                                            {context.user.userName}
                                        </Typography>

                                        {reviews.length === 0 ? (
                                            <></>
                                        ) : (
                                            <Typography
                                                variant="body1"
                                                component="p"
                                                className={classes.alignIcon}
                                            >
                                                <StarBorderRoundedIcon className={classes.icon} />{" "}
                                                {reviews.length} reviews
                                            </Typography>
                                        )}
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                {/* Right section */}

                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography component="h1" variant="h3">
                                            Hi, I'm {context.user.firstName}
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            Joined {context.user.joined.month}{" "}
                                            {context.user.joined.year}
                                        </Typography>
                                        <Button variant="outlined" style={{ marginTop: "2%" }}>
                                            Edit profile
                                        </Button>
                                    </CardContent>
                                </Card>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography component="h2" variant="h4" gutterBottom>
                                            About
                                        </Typography>
                                        <Typography variant="body1" className={classes.about}>
                                            {context.user.about}
                                        </Typography>
                                        <Box alignItems="center" display="flex">
                                            <Box>
                                                <HomeRoundedIcon
                                                    fontSize="large"
                                                    className={classes.icon}
                                                />
                                            </Box>
                                            <Box>
                                                <Typography
                                                    variant="h6"
                                                    className={classes.alignIcon}
                                                >
                                                    Lives in {context.user.address.city},{" "}
                                                    {context.user.address.state},{" "}
                                                    {context.user.address.country}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                                {reviews.length === 0 ? (
                                    <></>
                                ) : (
                                    <Card className={classes.card}>
                                        {/* TODO: Display reviews */}
                                        <CardContent>
                                            <Typography component="h2" variant="h4" gutterBottom>
                                                Reviews
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                )}
                            </Grid>
                        </Grid>
                    </Container>
                </main>
            )}
        </UserContextConsumer>
    );
};

export default Profile;
