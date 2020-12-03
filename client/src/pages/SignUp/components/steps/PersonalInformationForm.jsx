import React, { Fragment } from "react";

import { Grid, TextField } from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
// import DateFnsUtils from "@date-io/date-fns";

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
                        autoComplete="given-name"
                        label="First name"
                        value={formik.values.firstName}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName ? formik.errors.firstName : ""}
                    />
                </Grid>

                {/* Last name */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="lastName"
                        autoComplete="family-name"
                        label="Last name"
                        value={formik.values.lastName}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName ? formik.errors.lastName : ""}
                    />
                </Grid>

                {/* Phone */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="phone"
                        autoComplete="tel"
                        label="Phone"
                        value={formik.values.phone}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone ? formik.errors.phone : ""}
                    />
                </Grid>

                {/* Birthday */}
                {/* TODO: Date picker */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        id="birthday"
                        autoComplete="bday"
                        label="Birthday"
                        value={formik.values.birthday}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        error={formik.touched.birthday && Boolean(formik.errors.birthday)}
                        helperText={formik.touched.birthday ? formik.errors.birthday : ""}
                    />
                    <DatePicker
                        disableFuture
                        openTo="year"
                        format="dd/MM/yyyy"
                        label="Birthday"
                        name="birthday"
                        views={["year", "month", "date"]}
                        value={formik.birthday}
                        onChange={formik.onChange}
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default PersonalInformationForm;
