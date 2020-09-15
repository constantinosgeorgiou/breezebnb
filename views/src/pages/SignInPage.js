import React, { Component } from "react";
import { Link } from "react-router-dom";
import sign_in_img from "../assets/imgs/sign_in_img.jpg";
import sign_in from "../assets/imgs/sign_in.jpg";
import { BiLock } from "react-icons/bi";

class SignInForm extends Component {
    render() {
        return (
            <form>
                <div class="form-group">
                    <label for="inputUsername">Username</label>
                    <input
                        type="text"
                        class="form-control"
                        id="inputUsername"
                        placeholder="janedoe"
                    />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword">Password</label>
                    <input
                        type="Password"
                        class="form-control"
                        id="exampleInputPassword"
                        placeholder="password"
                    />
                </div>
                <button
                    type="submit"
                    class="btn btn-primary btn-block mt-5 font-weight-bold"
                >
                    SIGN IN
                </button>
                <div class="form-row mt-2">
                    <div class="col-auto">
                        <small class="form-text">
                            <Link to="/forgot-password">Forgot password?</Link>
                        </small>
                    </div>
                    <div class="col text-right">
                        <small class="forlm-text">
                            <Link to="/signup">
                                Don't have an account? Sign Up
                            </Link>
                        </small>
                    </div>
                </div>
            </form>
        );
    }
}

class SignInPage extends Component {
    render() {
        return (
            <main role="main pt-4 pt-sm-5">
                <div class="card">
                    <div class="row no-gutters">
                        <div class="col-lg-8 d-none d-lg-block">
                            <img
                                src={sign_in}
                                class="card-img img-sign-in"
                                alt=""
                            ></img>
                        </div>
                        <div class="col-lg-4">
                            <div class="card-body">
                                <div class="container-sm">
                                    <div class="text-center my-2">
                                        <BiLock
                                            className="text-danger"
                                            size={60}
                                        />
                                    </div>
                                    <h3 class="card-title mb-4 font-weight-normal text-center">
                                        Please sign in
                                    </h3>
                                    <SignInForm />
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
