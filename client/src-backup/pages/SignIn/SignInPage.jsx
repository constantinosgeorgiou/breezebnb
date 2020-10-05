import React, { Component } from "react";

import { Link } from "react-router-dom";

import { BiLock } from "react-icons/bi";

import { UserContextConsumer } from "context/userContext";
import { signin } from "services/authentication";
import sign_in from "assets/imgs/sign_in.jpg";
import SignInForm from "./components/SignInForm"


class SignInPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            loading: false,
            message: "",
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSignIn = this.handleSignIn.bind(this);
    }

    static contextType = UserContext;

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState((prevState) => ({
            [name]: value,
        }));
    };

    handleSignIn = (event) => {
        event.preventDefault();

        signin(this.state.userName, this.state.password).then(
            () => {
                this.props.history.push("/profile");
                window.location.reload(false);
            },
            (error) => {
                console.log("Error!!!! ", error);
                const responseMessage = "Error";
                this.setState((prevState) => ({
                    message: responseMessage,
                }));
            }
        );
    };

    render() {
        return (
            <main role="main" className="pt-sm-2">
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-lg-8 d-none d-lg-block">
                            <img
                                src={sign_in}
                                className="card-img img-sign-in"
                                alt=""
                            ></img>
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
                                        userName={this.state.userName}
                                        password={this.state.password}
                                        handleChange={this.handleChange}
                                        handleSignIn={this.handleSignIn}
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

export default SignInPage;
