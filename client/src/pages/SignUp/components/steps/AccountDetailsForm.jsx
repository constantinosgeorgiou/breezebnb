import React, { Fragment } from "react";

import { Grid, TextField, Typography } from "@material-ui/core";

const AccountDetailsForm = (props) => {
    const { formik } = props;

    return (
        <Fragment>
            <Grid container spacing={3}>
                {/* Username */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="username"
                        label="Username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        autoComplete="username"
                    />
                </Grid>

                {/* Email */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        autoComplete="email"
                    />
                </Grid>

                {/* Password */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="password"
                        label="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        autoComplete="current-password"
                    />
                </Grid>

                {/* Password Confirmation */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="passwordConfirm"
                        label="Confirm password"
                        value={formik.values.passwordConfirm}
                        onChange={formik.handleChange}
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default AccountDetailsForm;
