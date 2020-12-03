import { Grid, TextField } from "@material-ui/core";
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
                        autoComplete="street-address"
                        label="Street address"
                        value={formik.values.streetAddress}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.streetAddress && Boolean(formik.errors.streetAddress)}
                        helperText={formik.touched.streetAddress ? formik.errors.streetAddress : ""}
                    />
                </Grid>

                {/* City */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="city"
                        autoComplete="address-level2"
                        label="City"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.city && Boolean(formik.errors.city)}
                        helperText={formik.touched.city ? formik.errors.city : ""}
                    />
                </Grid>

                {/* State */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="state"
                        autoComplete="address-level1"
                        label="State / Province / Region"
                        value={formik.values.state}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.state && Boolean(formik.errors.state)}
                        helperText={formik.touched.state ? formik.errors.state : ""}
                    />
                </Grid>

                {/* Postal code */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="postalCode"
                        autoComplete="postal-code"
                        label="Zip / Postal code"
                        value={formik.values.postalCode}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
                        helperText={formik.touched.postalCode ? formik.errors.postalCode : ""}
                    />
                </Grid>

                {/* Country */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="country"
                        autoComplete="country"
                        label="Country"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.country && Boolean(formik.errors.country)}
                        helperText={formik.touched.country ? formik.errors.country : ""}
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default AddressForm;
