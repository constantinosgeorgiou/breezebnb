import React, { Component } from "react";

import { BiLock } from "react-icons/bi";

import { signin } from "services/authentication";

import sign_in from "assets/images/sign_in.jpg";

import SignInForm from "./components/SignInForm";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",

            error: null,
            loading: false,
            message: "",
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState((prevState) => ({
            [name]: value,
        }));
    };

    handleSignIn = (event) => {
        event.preventDefault();

        signin(this.state.userName, this.state.password).then(
            (response) => {
                this.setState((prevState) => ({
                    ...prevState,
                    loading: false,
                    message: response.data.message,
                }));

                this.props.history.push("/profile");
                window.location.reload();
            },
            (error) => {
                this.setState((prevState) => ({
                    ...prevState,
                    error,
                    message: error.message,
                }));
            }
        );
    };

    render() {
        const {
            state: { userName, password, error, loading, message },
            handleChange,
            handleSignIn,
        } = this;

        if (error) {
            return (
                <div>
                    {error}: {message}
                </div>
            );
        } else if (loading) {
            return <div>Loading...</div>;
        } else {
            return (
                <main role="main" className="pt-sm-2">
                    <div className="card">
                        <div className="row no-gutters">
                            <div className="col-lg-8 d-none d-lg-block">
                                <img
                                    src={sign_in}
                                    className="card-img img-sign-in"
                                    alt=""
                                />
                            </div>
                            <div className="col-lg-4">
                                <div className="card-body">
                                    <div className="container-sm">
                                        <div className="text-center my-2">
                                            <BiLock
                                                className="text-danger"
                                                size={60}
                                            />
                                        </div>
                                        <h3 className="card-title mb-4 font-weight-normal text-center">
                                            Please sign in
                                        </h3>
                                        <SignInForm
                                            userName={userName}
                                            password={password}
                                            handleChange={handleChange}
                                            handleSignIn={handleSignIn}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            );
        }
    }
}

export default SignIn;
