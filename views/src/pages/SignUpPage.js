import React, { Component } from "react";

import { Link } from "react-router-dom";

import { BiDoorOpen, BiHomeSmile } from "react-icons/bi";

import sign_up from "../assets/imgs/sign_up.jpg";

class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            progressPersent: 0,
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
            userName: "",
            email: "",
            password: "",
            // Hosting
            applyForHost: false,
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let user = {
            // Personal Information
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            birthday: this.state.birthday,
            phone: this.state.phone,
            // Address
            address: {
                country: this.state.country,
                state: this.state.state,
                city: this.state.city,
                zipCode: this.state.zipCode,
                streetAddress: this.state.streetAddress,
                apartmentNumber: this.state.apartmentNumber,
            },
            // Account Information
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,
            applyForHost: this.state.applyForHost,
        };

        alert("You are submitting " + user);
    };

    // Helper function for next step
    _next = () => {
        let currentStep = this.state.currentStep;
        let progressPersent = this.state.progressPersent;

        currentStep = currentStep >= 3 ? 4 : currentStep + 1;
        progressPersent = progressPersent >= 68 ? 100 : progressPersent + 34;

        this.setState({
            currentStep: currentStep,
            progressPersent: progressPersent,
        });
    };

    // Helper function for previous step
    _previous = () => {
        let currentStep = this.state.currentStep;
        let progressPersent = this.state.progressPersent;

        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        progressPersent = progressPersent <= 34 ? 0 : progressPersent - 34;

        this.setState({
            currentStep: currentStep,
            progressPersent: progressPersent,
        });
    };

    // Helper function that renders previous step button
    previousButton() {
        let currentStep = this.state.currentStep;

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
    }

    // Helper function that renders next step button
    nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep < 4) {
            return (
                <button
                    className="btn btn-outline-primary float-right"
                    type="button"
                    onClick={this._next}
                >
                    Next
                </button>
            );
        }

        return null;
    }

    // Helper function that renders submit button
    submitButton() {
        let currentStep = this.state.currentStep;

        if (currentStep === 4) {
            return (
                <button className="btn btn-primary float-right" type="submit">
                    Finish signing up
                </button>
            );
        }

        return null;
    }

    render() {
        return (
            <main role="main">
                <div class="pt-sm-2">
                    <div class="card">
                        <div class="row no-gutters">
                            <div class="col-lg-8 d-none d-lg-block">
                                <img
                                    src={sign_up}
                                    class="card-img img-sign-in"
                                    alt=""
                                ></img>
                            </div>
                            <div class="col-lg-4">
                                <div class="card-body">
                                    <div class="container-sm">
                                        <div class="text-center my-2">
                                            <BiDoorOpen
                                                className="text-primary"
                                                size={60}
                                            />
                                        </div>
                                        <h3 class="card-title mb-4 font-weight-normal text-center">
                                            Sign Up
                                        </h3>
                                        <div class="progress mt-5 mb-4">
                                            <div
                                                class="progress-bar progress-bar-striped bg-primary"
                                                role="progressbar"
                                                aria-valuenow="100"
                                                aria-valuemin="50"
                                                aria-valuemax="100"
                                                style={{
                                                    width:
                                                        this.state
                                                            .progressPersent +
                                                        "%",
                                                }}
                                            />
                                        </div>
                                        <form onSubmit={this.handleSubmit}>
                                            <Step1
                                                currentStep={
                                                    this.state.currentStep
                                                }
                                                handleChange={this.handleChange}
                                                firstName={this.state.firstName}
                                                lastName={this.state.lastName}
                                                birthday={this.state.birthday}
                                                phone={this.state.phone}
                                            />
                                            <Step2
                                                currentStep={
                                                    this.state.currentStep
                                                }
                                                handleChange={this.handleChange}
                                                country={this.state.country}
                                                state={this.state.state}
                                                city={this.state.city}
                                                zipCode={this.state.zipCode}
                                                streetAddress={
                                                    this.state.streetAddress
                                                }
                                                apartmentNumber={
                                                    this.state.apartmentNumber
                                                }
                                            />
                                            <Step3
                                                currentStep={
                                                    this.state.currentStep
                                                }
                                                handleChange={this.handleChange}
                                                userName={this.state.userName}
                                                email={this.state.email}
                                                password={this.state.password}
                                            />
                                            <Step4
                                                currentStep={
                                                    this.state.currentStep
                                                }
                                                handleChange={this.handleChange}
                                                applyForHost={
                                                    this.state.applyForHost
                                                }
                                            />
                                            {this.previousButton()}
                                            {this.nextButton()}
                                            {this.submitButton()}
                                        </form>
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

// Step 1: Personal Information
const Step1 = (props) => {
    if (props.currentStep !== 1) {
        return null;
    }

    return (
        <div class="mb-5">
            <small class="form-text mb-2">
                <Link to="/signin">Already have an account? Sign in</Link>
            </small>
            <h4 class="mb-4">
                Step 1: <span class="text-muted">Personal Information</span>
            </h4>
            {/* First name */}
            <div class="form-group">
                <label for="firstNameInput">First name</label>
                <input
                    type="text"
                    class="form-control"
                    id="firstNameInput"
                    placeholder="Jane"
                    aria-describedby="firstNameNote"
                    name="firstName"
                    value={props.firstName}
                    onChange={props.handleChange}
                />
                <small id="firstNameNote" class="form-text text-muted">
                    Make sure it matches the name on your goverment ID.
                </small>
            </div>

            {/* Last name */}
            <div class="form-group">
                <label for="lastNameInput">Last name</label>
                <input
                    type="text"
                    class="form-control"
                    id="lastNameInput"
                    placeholder="Doe"
                    aria-describedby="lastNameNote"
                    name="lastName"
                    value={props.lastName}
                    onChange={props.handleChange}
                />
                <small id="lastNameNote" class="form-text text-muted">
                    Make sure it matches the name on your goverment ID.
                </small>
            </div>

            {/* Birthday */}
            <div class="form-group">
                <label for="birthdayInput">Birthday</label>
                <input
                    type="text"
                    class="form-control"
                    id="birthdayInput"
                    placeholder="01 JANUARY 2000"
                    name="birthday"
                    value={props.birthday}
                    onChange={props.handleChange}
                />
            </div>

            {/* Phone */}
            <div class="form-group">
                <label for="phoneInput">Phone</label>
                <input
                    type="phone"
                    class="form-control"
                    id="phoneInput"
                    placeholder="123 456 7891"
                    name="phone"
                    value={props.phone}
                    onChange={props.handleChange}
                />
            </div>
        </div>
    );
};

// Step 2: Address
const Step2 = (props) => {
    if (props.currentStep !== 2) {
        return null;
    }

    return (
        <div class="mb-5">
            <small class="form-text mb-2">
                <Link to="/signin">Already have an account? Sign in</Link>
            </small>
            <h4 class="mb-4">
                Step 2: <span class="text-muted">Address</span>
            </h4>

            {/* Country */}
            <div class="form-group">
                <label for="inputCountry">Country</label>
                <input
                    type="text"
                    class="form-control"
                    id="inputCountry"
                    placeholder="Greece"
                    name="country"
                    value={props.country}
                    onChange={props.handleChange}
                />
            </div>

            {/* State */}
            <div class="form-group">
                <label for="inputState">State</label>
                <input
                    type="text"
                    class="form-control"
                    id="inputState"
                    placeholder="Attiki"
                    name="state"
                    value={props.state}
                    onChange={props.handleChange}
                />
            </div>

            {/* City */}
            <div class="form-group">
                <label for="inputCity">City</label>
                <input
                    type="text"
                    class="form-control"
                    id="inputCity"
                    placeholder="Athens"
                    name="city"
                    value={props.city}
                    onChange={props.handleChange}
                />
            </div>

            {/* Zipcode */}
            <div class="form-group">
                <label for="inputZipCode">Zip code</label>
                <input
                    type="text"
                    class="form-control"
                    id="inputZipCode"
                    placeholder="12345"
                    name="zipCode"
                    value={props.zipCode}
                    onChange={props.handleChange}
                />
            </div>

            {/* Street Address */}
            <div class="form-group">
                <label for="inputAddress">Street Address</label>
                <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                    name="streetAddress"
                    value={props.streetAddress}
                    onChange={props.handleChange}
                />
            </div>

            {/* Apartment Number */}
            <div class="form-group">
                <label for="inputApartmentNumber">Apartment number</label>
                <input
                    type="text"
                    class="form-control"
                    id="inputApartmentNumber"
                    placeholder="1234 Main St"
                    name="apartmentNumber"
                    value={props.apartmentNumber}
                    onChange={props.handleChange}
                />
            </div>
        </div>
    );
};

// Step 3: Account Information
const Step3 = (props) => {
    if (props.currentStep !== 3) {
        return null;
    }

    return (
        <div class="mb-5">
            <small class="form-text mb-2">
                <Link to="/signin">Already have an account? Sign in</Link>
            </small>
            <h4 class="mb-4">
                Step 3: <span class="text-muted">Account Information</span>
            </h4>

            {/* Username */}
            <div class="form-group">
                <label for="usernameInput">Username</label>
                <input
                    type="text"
                    class="form-control"
                    id="usernameInput"
                    placeholder="janedoe"
                    name="userName"
                    value={props.userName}
                    onChange={props.handleChange}
                />
            </div>

            {/* Email */}
            <div class="form-group">
                <label for="emailInput">Email</label>
                <input
                    type="text"
                    class="form-control"
                    id="emailInput"
                    placeholder="jane@doe.com"
                    aria-describedby="emailNote"
                    name="email"
                    value={props.email}
                    onChange={props.handleChange}
                />
                <small id="emailNote" class="form-text text-muted">
                    We'll email you trip confirmations and receipts.
                </small>
            </div>

            {/* Password */}
            <div class="form-group">
                <label for="passwordInput">Password</label>
                <input
                    type="password"
                    class="form-control"
                    id="passwordInput"
                    placeholder="password"
                    name="password"
                    value={props.password}
                    onChange={props.handleChange}
                />
            </div>

            {/* Confirm password */}
            <div class="form-group">
                <label for="confirmPasswordInput">Confirm password</label>
                <input
                    type="password"
                    class="form-control"
                    id="confirmPasswordInput"
                    placeholder="Write your password again."
                />
            </div>
        </div>
    );
};

// Step 4: Hosting
const Step4 = (props) => {
    if (props.currentStep !== 4) {
        return null;
    }

    return (
        <div class="mb-5">
            <div class="mb-4 align-middle">
                <small class="form-text mb-2">
                    <Link to="/signin">Already have an account? Sign in</Link>
                </small>
                <span class="h4 align-middle">Step 4: </span>
                <span class="h4 text-muted align-middle">Hosting </span>
                <BiHomeSmile className="text-muted align-middle" size={36} />
            </div>

            {/* Hosting */}
            <div class="form-group">
                <p class="form-text">
                    If you have an extra room, entire home, or expertise, you
                    can earn money by sharing it with anyone in the world. You
                    can host your home, activity, or do both. When you host is
                    up to you.
                </p>

                <div class="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        class="custom-control-input"
                        id="checkboxInput"
                        name="applyForHost"
                        value={props.applyForHost}
                        onChange={props.handleChange}
                    />
                    <label class="custom-control-label" for="checkboxInput">
                        Apply for host
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
