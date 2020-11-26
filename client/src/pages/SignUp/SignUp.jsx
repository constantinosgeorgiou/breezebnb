import React, { Fragment, useState } from "react";

import { Hidden } from "@material-ui/core";

import { useFormik } from "formik";

import PersonalInformationForm from "./components/steps/PersonalInformationForm";
import AddressForm from "./components/steps/AddressForm";
import AccountDetailsForm from "./components/steps/AccountDetailsForm";
import HostingForm from "./components/steps/HostingForm";
import ReviewSignUp from "./components/steps/ReviewSignUp";

import MobileView from "./components/MobileView";
import DesktopView from "./components/DesktopView";

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
            firstName: "Jane",
            lastName: "Doe",
            birthday: "12 / 08 / 2000",
            phone: "901 - 123434",

            // Address
            streetAddress: "Blah 12",
            city: "Athens",
            state: "Attiki",
            postalCode: "54123",
            country: "Greece",

            // Account details
            username: "janedoe",
            email: "jane@doe.com",
            password: "123456",
            passwordConfirm: "123456",

            // Hosting
            hosting: false,
        },
        validateOnChange: {},
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
