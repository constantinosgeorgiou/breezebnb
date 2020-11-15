import React, { Fragment } from "react";

import { Grid, TextField, Typography } from "@material-ui/core";

const PersonalInformationForm = (props) => {
    const { formik } = props;

    return (
        <Fragment>
            <Grid container spacing={3}>
                {/* First name */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="firstName"
                        label="First name"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        autoComplete="given-name"
                    />
                </Grid>

                {/* Last name */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="lastName"
                        label="Last name"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        autoComplete="family-name"
                    />
                </Grid>

                {/* Phone */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="phone"
                        label="Phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        autoComplete="tel"
                    />
                </Grid>

                {/* Birthday */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="birthday"
                        label="Birthday"
                        value={formik.values.birthday}
                        onChange={formik.handleChange}
                        autoComplete="bday"
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default PersonalInformationForm;
