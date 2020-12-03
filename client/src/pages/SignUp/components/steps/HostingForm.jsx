import React, { Fragment } from "react";

import { Checkbox, FormControlLabel, Grid, Typography } from "@material-ui/core";

const HostingForm = (props) => {
    const { formik } = props;

    return (
        <Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography>
                        If you have an extra room, entire home, or expertise, you can earn money by
                        sharing it with anyone in the world. You can host your home, activity, or do
                        both. When you host is up to you.
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="secondary"
                                checked={formik.values.hosting}
                                value={formik.values.hosting}
                                onChange={formik.handleChange}
                            />
                        }
                        label="Apply for hosting"
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default HostingForm;
