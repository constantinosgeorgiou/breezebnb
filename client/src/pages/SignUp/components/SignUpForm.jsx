import React from "react";

import { Step1, Step2, Step3, Step4 } from "pages/SignUp/components/index.js";

const SignUpForm = ({
    user,
    handleChange,
    handleSubmit,

    currentStep,
    previousButton,
    nextButton,
    submitButton,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Step1
                currentStep={currentStep}
                user={user}
                handleChange={handleChange}
            />
            <Step2
                currentStep={currentStep}
                user={user}
                handleChange={handleChange}
            />
            <Step3
                currentStep={currentStep}
                user={user}
                handleChange={handleChange}
            />
            <Step4
                currentStep={currentStep}
                user={user}
                handleChange={handleChange}
            />

            {previousButton()}
            {nextButton()}
            {submitButton()}
        </form>
    );
};

export default SignUpForm;
