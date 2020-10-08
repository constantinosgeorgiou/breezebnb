import React, { Fragment } from "react";

import { Box, Checkbox, FormControlLabel, Grid, makeStyles, Typography } from "@material-ui/core";

import HouseOutlinedIcon from "@material-ui/icons/HouseOutlined";

const useStyles = makeStyles((theme) => ({
    hosting: {
        marginBottom: theme.spacing(2),
    },
}));

const HostingForm = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <Box alignItems="center" display="flex" className={classes.hosting}>
                <Box>
                    <HouseOutlinedIcon fontSize="large" />
                </Box>
                <Box>
                    <Typography variant="h6">Hosting</Typography>
                </Box>
            </Box>
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
                        control={<Checkbox color="secondary" name="host" value="yes" />}
                        label="Apply for hosting"
                    />
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default HostingForm;
