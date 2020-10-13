import { Grid, TextField, Typography } from "@material-ui/core";
import React, { Fragment } from "react";

const AddressForm = (props) => {
    const { user, handleChange } = props;

    return (
        <Fragment>
            <Typography variant="h6" gutterBottom>
                Address
            </Typography>

            <Grid container spacing={3}>
                {/* Street Address */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="streetAddress"
                        label="Street address"
                        value={user.streetAddress}
                        onChange={handleChange("streetAddress")}
                        autoComplete="street-address"
                    />
                </Grid>

                {/* City */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="city"
                        label="City"
                        value={user.city}
                        onChange={handleChange("city")}
                        autoComplete="address-level2"
                    />
                </Grid>

                {/* State */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="state"
                        label="State / Province / Region"
                        value={user.state}
                        onChange={handleChange("state")}
                        autoComplete="address-level1"
                    />
                </Grid>

                {/* Postal code */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="postalCode"
                        label="Zip / Postal code"
                        value={user.postalCode}
                        onChange={handleChange("postalCode")}
                        autoComplete="postal-code"
                    />
                </Grid>

                {/* Country */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="country"
                        label="Country"
                        value={user.country}
                        onChange={handleChange("country")}
                        autoComplete="country"
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default AddressForm;
