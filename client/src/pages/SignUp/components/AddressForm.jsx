import { Grid, TextField, Typography } from "@material-ui/core";
import React, { Fragment } from "react";

const AddressForm = (props) => {
    return (
        <Fragment>
            <Typography variant="h6" gutterBottom>
                Address
            </Typography>

            <Grid container spacing={3}>
                {/* Address */}
                <Grid item xs={12}>
                    <TextField
                        id="address"
                        name="address"
                        label="Address line"
                        fullWidth
                        autoComplete="shipping addressLine"
                    />
                </Grid>

                {/* City */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="shipping city"
                    />
                </Grid>

                {/* State */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="state"
                        name="state"
                        label="State / Province / Region"
                        fullWidth
                        autoComplete="shipping state"
                    />
                </Grid>

                {/* Postal code */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="postalCode"
                        name="postalCode"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="shipping postalCode"
                    />
                </Grid>

                {/* Country */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default AddressForm;
