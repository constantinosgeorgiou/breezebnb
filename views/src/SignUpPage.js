import React, { Component } from "react";

class SignUpForm extends Component {
    render() {
        return (
            <form>
                <h1 class="h3 mb-3 font-weight-normal text-center">Sign up</h1>

                {/* Username */}
                <div class="form-group">
                    <label for="usernameInput">Username</label>
                    <input
                        type="text"
                        class="form-control"
                        id="usernameInput"
                        placeholder="janedoe"
                    />
                </div>

                {/* First name */}
                <div class="form-group">
                    <label for="firstNameInput">First name</label>
                    <input
                        type="text"
                        class="form-control"
                        id="firstNameInput"
                        placeholder="Jane"
                        aria-describedby="firstNameNote"
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
                    />
                    <small id="lastNameNote" class="form-text text-muted">
                        Make sure it matches the name on your goverment ID.
                    </small>
                </div>

                {/* Phone */}
                <div class="form-group">
                    <label for="phoneInput">Phone</label>
                    <input
                        type="phone"
                        class="form-control"
                        id="phoneInput"
                        placeholder="Doe"
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

                {/* Apply for hosting */}
                <div class="form-group">
                    <div class="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            class="custom-control-input"
                            id="checkboxInput"
                        />
                        <label class="custom-control-label" for="checkboxInput">
                            Apply for host
                        </label>
                    </div>
                </div>

                {/* Sign up button */}
                <button type="submit" class="btn btn-primary btn-lg btn-block">
                    Sign up
                </button>
            </form>
        );
    }
}

class SignUpPage extends Component {
    render() {
        return (
            <main class="padding-top-5">
                <div class="container-lg">
                    <div class="row justify-content-center">
                        <div class="col-sm-6">
                            <SignUpForm />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default SignUpPage;
