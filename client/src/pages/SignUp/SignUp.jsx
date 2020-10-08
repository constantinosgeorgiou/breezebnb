import React, { useState } from "react";

import {
    Avatar,
    Button,
    Container,
    makeStyles,
    Paper,
    Step,
    StepLabel,
    Stepper,
    Typography,
} from "@material-ui/core";

import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";

import AccountDetailsForm from "./components/AccountDetailsForm";
import AddressForm from "./components/AddressForm";
import HostingForm from "./components/HostingForm";
import PersonalInformationForm from "./components/PersonalInformationForm";

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.light,
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    buttons: {
        display: "flex",
        justifyContent: "flex-end",
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
}));

const steps = ["Personal information", "Address", "Account details", "Hosting", "All good?"];

const getStepContent = (step) => {
    switch (step) {
        case 0:
            return <PersonalInformationForm />;
        case 1:
            return <AddressForm />;
        case 2:
            return <AccountDetailsForm />;
        case 3:
            return <HostingForm />;
        case 4:
            return 5;
        default:
            throw new Error("Unknown step");
    }
};

const SignUp = (props) => {
    const classes = useStyles();

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <Container component="main" maxWidth="sm">
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <ExploreOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {/* Render the form of each step */}
                {getStepContent(activeStep)}

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
                        {activeStep === steps.length - 1 ? "Create account" : "Next"}
                    </Button>
                </div>
            </Paper>
        </Container>
    );
};

export default SignUp;
