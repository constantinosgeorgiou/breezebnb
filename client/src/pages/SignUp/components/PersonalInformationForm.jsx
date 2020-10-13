import React, { Fragment } from "react";

import { Grid, TextField, Typography } from "@material-ui/core";

const PersonalInformationForm = (props) => {
    const { user, handleChange } = props;

    return (
        <Fragment>
            <Typography variant="h6" gutterBottom>
                Personal information
            </Typography>

            <Grid container spacing={3}>
                {/* First name */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="firstName"
                        label="First name"
                        value={user.firstName}
                        onChange={handleChange("firstName")}
                        autoComplete="given-name"
                    />
                </Grid>

                {/* Last name */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="lastName"
                        label="Last name"
                        value={user.lastName}
                        onChange={handleChange("lastName")}
                        autoComplete="family-name"
                    />
                </Grid>

                {/* Phone */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="phone"
                        label="Phone"
                        value={user.phone}
                        onChange={handleChange("phone")}
                        autoComplete="tel"
                    />
                </Grid>

                {/* Birthday */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="birthday"
                        label="Birthday"
                        value={user.birthday}
                        onChange={handleChange("birthday")}
                        autoComplete="bday"
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default PersonalInformationForm;
