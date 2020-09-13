import React, { Component } from "react";

class SignInForm extends Component {
    render() {
        return (
            <form>
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>

                <div class="form-group">
                    <label for="usernameInputUsername">Username</label>
                    <input
                        type="text"
                        class="form-control"
                        id="usernameInputUsername"
                        placeholder="janedoe"
                    />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword">Password</label>
                    <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword"
                        placeholder="password"
                    />
                    <small id="forgotPassword" class="form-text">
                        <a href="/forgot-password">Forgot password</a>
                    </small>
                </div>
                <button type="submit" class="btn btn-primary btn-lg btn-block">
                    Sign in
                </button>
            </form>
        );
    }
}

class SignInPage extends Component {
    render() {
        return (
            <main role="main" class="padding-top-5">
                    <div class="container-lg">
                        <div class="row justify-content-center">
                            <div class="col-sm-6">
                                <SignInForm />
                            </div>
                        </div>
                    </div>
            </main>
        );
    }
}

export default SignInPage;
