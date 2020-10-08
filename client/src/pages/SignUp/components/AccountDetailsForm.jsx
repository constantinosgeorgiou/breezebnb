import React, { Fragment } from "react";
import { Grid, TextField, Typography } from "@material-ui/core";

const AccountDetailsForm = () => {
    return (
        <Fragment>
            <Typography variant="h6" gutterBottom>
                Account details
            </Typography>

            <Grid container spacing={3}>
                {/* Username */}
                <Grid item xs={12}>
                    <TextField
                        id="username"
                        name="username"
                        label="Username"
                        fullWidth
                        autoComplete="username"
                    />
                </Grid>

                {/* Email */}
                <Grid item xs={12}>
                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        autoComplete="email"
                    />
                </Grid>

                {/* Password */}
                <Grid item xs={12} sm={6}>
                    <TextField id="password" name="password" label="Password" fullWidth />
                </Grid>

                {/* Password Confirmation */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="passwordConfirm"
                        name="passwordConfirm"
                        label="Confirm password"
                        fullWidth
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default AccountDetailsForm;
