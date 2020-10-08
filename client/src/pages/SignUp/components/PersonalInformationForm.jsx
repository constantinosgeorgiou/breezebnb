import React, { Fragment } from "react";

import { Grid, TextField, Typography } from "@material-ui/core";

const PersonalInformationForm = () => {
    return (
        <Fragment>
            <Typography variant="h6" gutterBottom>
                Personal information
            </Typography>

            <Grid container spacing={3}>
                {/* First name */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                    />
                </Grid>

                {/* Last name */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                    />
                </Grid>

                {/* Phone */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="phone"
                        name="phone"
                        label="Phone"
                        fullWidth
                        autoComplete="phone"
                    />
                </Grid>

                {/* Birthday */}
                <Grid item xs={12} sm={6}>
                    <TextField id="birthday" name="phone" label="Birthday" fullWidth />
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default PersonalInformationForm;
