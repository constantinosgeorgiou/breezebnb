import React, { Fragment } from "react";

import { Box, Checkbox, FormControlLabel, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    muted: {
        color: theme.palette.grey.A700,
    },
}));

const Review = (props) => {
    const { user } = props;

    const classes = useStyles();

    return (
        <Fragment>
            <Typography variant="h6" gutterBottom>
                All good?
            </Typography>

            <Grid container spacing={3}>
                {/* First name    Last name */}
                <Grid item xs={6}>
                    <Typography variant="caption" className={classes.muted}>
                        First name
                    </Typography>
                    <Typography>{user.firstName}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="caption" className={classes.muted}>
                        Last name
                    </Typography>
                    <Typography>{user.lastName}</Typography>
                </Grid>

                {/* Birthday */}
                <Grid item xs={6}>
                    <Typography variant="caption" className={classes.muted}>
                        Birthday
                    </Typography>
                    <Typography>{user.birthday}</Typography>
                </Grid>

                {/* Phone */}
                <Grid item xs={6}>
                    <Typography variant="caption" className={classes.muted}>
                        Phone
                    </Typography>
                    <Typography>{user.phone}</Typography>
                </Grid>

                {/* Address */}
                <Grid item xs={12}>
                    <Typography variant="caption" className={classes.muted}>
                        Address
                    </Typography>
                    <Typography>
                        {user.streetAddress}, {user.city}
                    </Typography>
                    <Typography>
                        {user.state}, {user.postalCode}, {user.country}
                    </Typography>
                </Grid>

                {/* Username */}
                <Grid item xs={12}>
                    <Typography variant="caption" className={classes.muted}>
                        Username
                    </Typography>
                    <Typography>{user.username}</Typography>
                </Grid>

                {/* Email */}
                <Grid item xs={12}>
                    <Typography variant="caption" className={classes.muted}>
                        Email
                    </Typography>
                    <Typography>{user.email}</Typography>
                </Grid>

                {/* Password */}
                <Grid item xs={12}>
                    <Typography variant="caption" className={classes.muted}>
                        Password
                    </Typography>
                    <Typography>{user.password}</Typography>
                </Grid>

                {/* Hosting */}
                {user.hosting ? (
                    <Grid item xs={12}>
                        <Box>
                            <Typography variant="caption" className={classes.muted}>
                                Hosting
                            </Typography>
                        </Box>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color="secondary"
                                    checked={user.hosting}
                                    disableRipple="false"
                                />
                            }
                            label="Applied for hosting"
                        />
                    </Grid>
                ) : (
                    <></>
                )}
            </Grid>
        </Fragment>
    );
};

export default Review;
