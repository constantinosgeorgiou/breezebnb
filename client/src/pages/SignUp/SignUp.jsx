import React, { Fragment, useState } from "react";

import { Hidden } from "@material-ui/core";

import { useFormik } from "formik";
import * as yup from "yup";

import PersonalInformationForm from "./components/steps/PersonalInformationForm";
import AddressForm from "./components/steps/AddressForm";
import AccountDetailsForm from "./components/steps/AccountDetailsForm";
import HostingForm from "./components/steps/HostingForm";
import ReviewSignUp from "./components/steps/ReviewSignUp";

import MobileView from "./components/MobileView";
import DesktopView from "./components/DesktopView";

const validationSchema = yup.object({
    firstName: yup.string("Enter your first name").required("First name is required"),
    lastName: yup.string("Enter your last name").required("Last name is required"),
    phone: yup.string("Enter your phone number").required("Phone number is required"),
    birthday: yup.date("Enter your birthday").required("Birthday is required"),
    email: yup.string("Enter an email").email("Enter a valid email").required("Email is required"),
    password: yup
        .string("Enter password")
        .min(8, "Password should be of minimum 8 characters length")
        .required("Password is required"),
    confirmPassword: yup
        .string("Confirm password")
        .required("Confirm your password")
        .oneOf([yup.ref("password")], "Passwords do not match"),
});

const getSteps = () => {
    return ["Personal information", "Address", "Account details", "Hosting", "All good?"];
};

const getStepContent = (step, formik) => {
    switch (step) {
        case 0:
            return <PersonalInformationForm formik={formik} />;
        case 1:
            return <AddressForm formik={formik} />;
        case 2:
            return <AccountDetailsForm formik={formik} />;
        case 3:
            return <HostingForm formik={formik} />;
        case 4:
            return <ReviewSignUp formik={formik} />;

        default:
            throw new Error("unknown step");
    }
};

const SignUp = (props) => {
    const steps = getSteps();

    const [activeStep, setActiveStep] = useState(0);

    const formik = useFormik({
        initialValues: {
            // Personal information
            firstName: "",
            lastName: "",
            birthday: "",
            phone: "",

            // Address
            streetAddress: "",
            city: "",
            state: "",
            postalCode: "",
            country: "",

            // Account details
            username: "",
            email: "",
            password: "",
            confirmPassword: "",

            // Hosting
            hosting: false,
        },

        validationSchema: validationSchema,

        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 4));
        },
    });

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <Fragment>
            {/* Desktop view */}
            <Hidden smUp>
                <MobileView
                    getSteps={getSteps}
                    getStepContent={getStepContent}
                    activeStep={activeStep}
                    handleNext={handleNext}
                    handleBack={handleBack}
                    formik={formik}
                />
            </Hidden>

            {/* Mobile view */}
            <Hidden xsDown>
                <DesktopView
                    getSteps={getSteps}
                    getStepContent={getStepContent}
                    activeStep={activeStep}
                    handleNext={handleNext}
                    handleBack={handleBack}
                    formik={formik}
                />
            </Hidden>
        </Fragment>
    );
};

export default SignUp;
