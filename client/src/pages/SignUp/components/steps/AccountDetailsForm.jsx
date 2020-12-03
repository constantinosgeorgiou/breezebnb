import React, { Fragment } from "react";

import { Grid, TextField } from "@material-ui/core";

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
                        autoComplete="username"
                        label="Username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username ? formik.errors.username : ""}
                    />
                </Grid>

                {/* Email */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="email"
                        autoComplete="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email ? formik.errors.email : ""}
                    />
                </Grid>

                {/* Password */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="password"
                        autoComplete="current-password"
                        label="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password ? formik.errors.password : ""}
                    />
                </Grid>

                {/* Password Confirmation */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="confirmPassword"
                        label="Confirm password"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)
                        }
                        helperText={
                            formik.touched.confirmPassword ? formik.errors.confirmPassword : ""
                        }
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default AccountDetailsForm;
