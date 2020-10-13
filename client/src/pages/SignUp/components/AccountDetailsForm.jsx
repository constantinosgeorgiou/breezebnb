import React, { Fragment } from "react";

import { Grid, TextField, Typography } from "@material-ui/core";

const AccountDetailsForm = (props) => {
    const { user, handleChange } = props;

    return (
        <Fragment>
            <Typography variant="h6" gutterBottom>
                Account details
            </Typography>

            <Grid container spacing={3}>
                {/* Username */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="username"
                        label="Username"
                        value={user.username}
                        onChange={handleChange("username")}
                        autoComplete="username"
                    />
                </Grid>

                {/* Email */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="email"
                        label="Email"
                        value={user.email}
                        onChange={handleChange("email")}
                        autoComplete="email"
                    />
                </Grid>

                {/* Password */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="password"
                        label="Password"
                        value={user.password}
                        onChange={handleChange("password")}
                        autoComplete="current-password"
                    />
                </Grid>

                {/* Password Confirmation */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="passwordConfirm"
                        label="Confirm password"
                        value={user.passwordConfirm}
                        onChange={handleChange("passwordConfirm")}
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default AccountDetailsForm;
