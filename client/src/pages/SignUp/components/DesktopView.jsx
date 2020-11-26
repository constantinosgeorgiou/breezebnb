import React from "react";

import {
    Avatar,
    Box,
    Button,
    Container,
    Paper,
    Typography,
    makeStyles,
    Stepper,
    Step,
    StepLabel,
} from "@material-ui/core";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
    },

    title: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.light,
    },

    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },

    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    buttons: {
        display: "flex",
        justifyContent: "flex-end",
    },

    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
}));

const DesktopView = (props) => {
    const { getSteps, getStepContent, activeStep, handleNext, handleBack, formik } = props;

    const classes = useStyles();
    const steps = getSteps();
    const maxSteps = steps.length;

    return (
        <Container component="main" maxWidth="sm">
            <Paper elevation={0} className={classes.paper}>
                <Box className={classes.title}>
                    <Avatar className={classes.avatar}>
                        <ExploreOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                </Box>

                <Stepper activeStep={activeStep} className={classes.stepper} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                {/* Render the form of each step */}
                {getStepContent(activeStep, formik)}

                <div className={classes.buttons}>
                    {activeStep !== 0 && (
                        <Button onClick={handleBack} className={classes.button}>
                            Back
                        </Button>
                    )}

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                    >
                        {activeStep === maxSteps - 1 ? "Create account" : "Next"}
                    </Button>
                </div>
            </Paper>
        </Container>
    );
};

export default DesktopView;
