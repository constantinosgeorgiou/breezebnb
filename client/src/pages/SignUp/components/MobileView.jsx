import React from "react";
import {
    Avatar,
    Box,
    Button,
    Container,
    MobileStepper,
    Paper,
    Typography,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded";
import KeyboardArrowLeftRoundedIcon from "@material-ui/icons/KeyboardArrowLeftRounded";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(1),
    },

    title: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    body: {
        marginTop: theme.spacing(2),
    },

    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.light,
    },

    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
}));

const MobileView = (props) => {
    const { getSteps, getStepContent, activeStep, handleNext, handleBack, formik } = props;

    const theme = useTheme();
    const classes = useStyles();

    const steps = getSteps();
    const maxSteps = steps.length;

    return (
        <Container>
            <Paper elevation={0} className={classes.paper}>
                <Box className={classes.title}>
                    <Avatar className={classes.avatar}>
                        <ExploreOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                </Box>

                <Container className={classes.body}>
                    <Typography component="h2" variant="h6" gutterBottom>
                        {steps[activeStep]}
                    </Typography>
                    {getStepContent(activeStep, formik)}
                </Container>

                <MobileStepper
                    steps={maxSteps}
                    position="bottom"
                    variant="progress"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next
                            {theme.direction === "rtl" ? (
                                <KeyboardArrowLeftRoundedIcon />
                            ) : (
                                <KeyboardArrowRightRoundedIcon />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === "rtl" ? (
                                <KeyboardArrowRightRoundedIcon />
                            ) : (
                                <KeyboardArrowLeftRoundedIcon />
                            )}
                            Back
                        </Button>
                    }
                />
            </Paper>
        </Container>
    );
};

export default MobileView;
