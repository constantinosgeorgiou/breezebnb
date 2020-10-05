import React, { Component, Fragment } from "react";

import { BiDoorOpen } from "react-icons/bi";
import sign_up from "assets/images/sign_up.jpg";

import { signup } from "services/authentication.js";

import SignUpForm from "./components/SignUpForm";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            progressPersent: 0,

            user: {
                // Personal Information
                firstName: "",
                lastName: "",
                birthday: "",
                phone: "",

                // Address
                country: "",
                state: "",
                city: "",
                zipCode: "",
                streetAddress: "",
                apartmentNumber: "",

                // Account Information
                photo: "",
                userName: "",
                email: "",
                password: "",
                confirmPassword: "",
                passwordError: false,

                // Hosting
                userRole: false, // false: guest | true: host
            },
        };
    }

    handleChange = (change) => {
        const {
            target: { name, value, type },
            target,
        } = change;

        // If checkbox and checkbox is true then userRole === host
        if (type === "checkbox") {
            if (target.checked) {
                target.setAttribute("checked", true);
            } else {
                target.removeAttribute("checked");
            }

            this.setState((prevState) => ({
                ...prevState,
                user: {
                    ...prevState.user,
                    userRole: !prevState.userRole,
                },
            }));
        } else {
            this.setState((prevState) => ({
                ...prevState,
                user: {
                    ...prevState.user,
                    [name]: value,
                },
            }));
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { user: initialUser } = this.state;

        let user = {
            // Personal Information
            firstName: initialUser.firstName,
            lastName: initialUser.lastName,
            birthday: initialUser.birthday,
            phone: initialUser.phone,

            // Address
            address: {
                country: initialUser.country,
                state: initialUser.state,
                city: initialUser.city,
                zipCode: initialUser.zipCode,
                streetAddress: initialUser.streetAddress,
                apartmentNumber: initialUser.apartmentNumber,
            },

            // Account Information
            photo: initialUser.photo,
            userName: initialUser.userName,
            email: initialUser.email,
            password: initialUser.password,
            confirmPassword: initialUser.confirmPassword,

            // Hosting
            userRole: initialUser.userRole, // false: guest | true: host
        };

        signup(user)
            .then((response) => {
                console.log("Sign up response: ", response.data);
                if (response.data.accessToken) {
                    localStorage.setItem(
                        "user",
                        JSON.stringify(response.data.user)
                    );
                }
                // Redirect to profile page
                this.props.history.push("/profile");
                window.location.reload();
            })
            .catch((error) => console.log("sign up error: ", error));
    };

    // Helper function for next step
    _next = () => {
        let { currentStep, progressPersent } = this.state;

        currentStep = currentStep >= 3 ? 4 : currentStep + 1;
        progressPersent = progressPersent >= 68 ? 100 : progressPersent + 34;

        this.setState((prevState) => ({
            ...prevState,
            currentStep: currentStep,
            progressPersent: progressPersent,
        }));
    };

    // Helper function for previous step
    _previous = () => {
        let { currentStep, progressPersent } = this.state;

        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        progressPersent = progressPersent <= 34 ? 0 : progressPersent - 34;

        this.setState((prevState) => ({
            ...prevState,
            currentStep: currentStep,
            progressPersent: progressPersent,
        }));
    };

    // Helper function that renders previous step button
    previousButton = () => {
        const { currentStep } = this.state;

        if (currentStep !== 1) {
            return (
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={this._previous}
                >
                    Previous
                </button>
            );
        }

        return null;
    };

    // Helper function that renders next step button
    nextButton = () => {
        const {
            currentStep,
            user: { password, confirmPassword },
        } = this.state;

        if (currentStep < 4) {
            return (
                <button
                    className="btn btn-outline-primary float-right"
                    type="button"
                    onClick={this._next}
                    disabled={password === confirmPassword ? false : true}
                >
                    Next
                </button>
            );
        }

        return null;
    };

    // Helper function that renders submit button
    submitButton = () => {
        const {
            currentStep,
            user: { password, confirmPassword },
        } = this.state;

        if (currentStep === 4 && password === confirmPassword) {
            return (
                <Fragment>
                    <button
                        className="btn btn-primary float-right"
                        type="submit"
                    >
                        Finish signing up
                    </button>
                </Fragment>
            );
        }

        return null;
    };

    render() {
        const {
            state: { currentStep, progressPersent, user },
            handleChange,
            handleSubmit,
            previousButton,
            nextButton,
            submitButton,
        } = this;

        return (
            <main role="main">
                <div className="pt-sm-2">
                    <div className="card">
                        <div className="row no-gutters">
                            <div className="col-lg-8 d-none d-lg-block">
                                <img
                                    src={sign_up}
                                    className="card-img img-sign-in"
                                    alt=""
                                ></img>
                            </div>

                            <div className="col-lg-4">
                                <div className="card-body">
                                    <div className="container-sm">
                                        <div className="text-center my-2">
                                            <BiDoorOpen
                                                className="text-primary"
                                                size={60}
                                            />
                                        </div>
                                        <h3 className="card-title mb-4 font-weight-normal text-center">
                                            Sign Up
                                        </h3>
                                        <div className="progress mt-5 mb-4">
                                            <div
                                                className="progress-bar progress-bar-striped bg-primary"
                                                role="progressbar"
                                                aria-valuenow="100"
                                                aria-valuemin="50"
                                                aria-valuemax="100"
                                                style={{
                                                    width:
                                                        progressPersent + "%",
                                                }}
                                            />
                                        </div>

                                        <SignUpForm
                                            user={user}
                                            handleChange={handleChange}
                                            handleSubmit={handleSubmit}
                                            currentStep={currentStep}
                                            previousButton={previousButton}
                                            nextButton={nextButton}
                                            submitButton={submitButton}
                                        />

                                        {user.password !==
                                        user.confirmPassword ? (
                                            <p className="text-danger float-right d-block">
                                                Passwords do not match
                                            </p>
                                        ) : (
                                            <p></p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default SignUp;
