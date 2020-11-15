import { Grid, TextField, Typography } from "@material-ui/core";
import React, { Fragment } from "react";

const AddressForm = (props) => {
    const { formik } = props;

    return (
        <Fragment>
            <Grid container spacing={3}>
                {/* Street Address */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="streetAddress"
                        label="Street address"
                        value={formik.values.streetAddress}
                        onChange={formik.handleChange}
                        autoComplete="street-address"
                    />
                </Grid>

                {/* City */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="city"
                        label="City"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        autoComplete="address-level2"
                    />
                </Grid>

                {/* State */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="state"
                        label="State / Province / Region"
                        value={formik.values.state}
                        onChange={formik.handleChange}
                        autoComplete="address-level1"
                    />
                </Grid>

                {/* Postal code */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="postalCode"
                        label="Zip / Postal code"
                        value={formik.values.postalCode}
                        onChange={formik.handleChange}
                        autoComplete="postal-code"
                    />
                </Grid>

                {/* Country */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="country"
                        label="Country"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        autoComplete="country"
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default AddressForm;
