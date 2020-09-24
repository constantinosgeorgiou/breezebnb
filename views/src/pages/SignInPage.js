import React, { Component } from "react";

import { Link } from "react-router-dom";
import UserContext from "../_helpers/UserContext";

import { signin } from "../_services/authentication";

import { BiLock } from "react-icons/bi";
import sign_in from "../assets/imgs/sign_in.jpg";

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

const SignInForm = ({ userName, password, handleChange, handleSignIn }) => {
    return (
        <form onSubmit={handleSignIn}>
            <div className="form-group">
                <label htmlFor="inputUsername">Username</label>
                <input
                    id="inputUsername"
                    type="text"
                    className="form-control"
                    placeholder="janedoe"
                    required
                    name="userName"
                    value={userName}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword">Password</label>
                <input
                    id="exampleInputPassword"
                    type="password"
                    className="form-control"
                    placeholder="password"
                    required
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
            </div>
            <button
                type="submit"
                className="btn btn-primary btn-block mt-5 font-weight-bold"
            >
                SIGN IN
            </button>
            <div className="form-row mt-2">
                <div className="col-auto">
                    <small className="form-text">
                        <Link to="/forgot-password">Forgot password?</Link>
                    </small>
                </div>
                <div className="col text-right">
                    <small className="form-text">
                        <Link to="/signup">Don't have an account? Sign Up</Link>
                    </small>
                </div>
            </div>
        </form>
    );
};

export default SignInPage;
