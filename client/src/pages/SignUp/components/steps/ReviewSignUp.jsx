import React, { Fragment } from "react";

import { Box, Checkbox, FormControlLabel, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    muted: {
        color: theme.palette.grey.A700,
    },
}));

const ReviewSignUp = (props) => {
    const { formik } = props;

    const classes = useStyles();

    return (
        <Fragment>
            <Grid container spacing={3}>
                {/* First name    Last name */}
                <Grid item xs={6}>
                    <Typography variant="caption" className={classes.muted}>
                        First name
                    </Typography>
                    <Typography>{formik.values.firstName}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="caption" className={classes.muted}>
                        Last name
                    </Typography>
                    <Typography>{formik.values.lastName}</Typography>
                </Grid>

                {/* Birthday */}
                <Grid item xs={6}>
                    <Typography variant="caption" className={classes.muted}>
                        Birthday
                    </Typography>
                    <Typography>{formik.values.birthday}</Typography>
                </Grid>

                {/* Phone */}
                <Grid item xs={6}>
                    <Typography variant="caption" className={classes.muted}>
                        Phone
                    </Typography>
                    <Typography>{formik.values.phone}</Typography>
                </Grid>

                {/* Address */}
                <Grid item xs={12}>
                    <Typography variant="caption" className={classes.muted}>
                        Address
                    </Typography>
                    <Typography>
                        {formik.values.streetAddress}, {formik.values.city}
                    </Typography>
                    <Typography>
                        {formik.values.state}, {formik.values.postalCode}, {formik.values.country}
                    </Typography>
                </Grid>

                {/* Username */}
                <Grid item xs={12}>
                    <Typography variant="caption" className={classes.muted}>
                        Username
                    </Typography>
                    <Typography>{formik.values.username}</Typography>
                </Grid>

                {/* Email */}
                <Grid item xs={12}>
                    <Typography variant="caption" className={classes.muted}>
                        Email
                    </Typography>
                    <Typography>{formik.values.email}</Typography>
                </Grid>

                {/* Password */}
                <Grid item xs={12}>
                    <Typography variant="caption" className={classes.muted}>
                        Password
                    </Typography>
                    <Typography>{formik.values.password}</Typography>
                </Grid>

                {/* Hosting */}
                {formik.values.hosting ? (
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
                                    checked={formik.values.hosting}
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

export default ReviewSignUp;
