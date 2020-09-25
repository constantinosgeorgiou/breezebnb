import React, { Component } from "react";

import Synopsis from "../_components/Synopsis";
import HostingInformation from "../_components/HostingInformation";
import Profile from "../_components/Profile";

import {
    getCurrentUser,
    getReceivedReviews,
    updateUserAdd,
    updateUserInfo,
} from "../_services/users";

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            user: getCurrentUser(),
            reviews: [],

            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
            passwordError: false,
        };

        this.handleChange = this.handleChange.bind(
            this
        );
    }

    componentDidMount() {
        getReceivedReviews(
            this.state.user.userName
        )
            .then((response) => {
                this.setState((prevState) => ({
                    reviews:
                        response.data.reviews,
                }));
            })
            .catch((error) => {
                this.setState((prevState) => ({
                    message: error.message,
                }));
            });
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState((prevState) => ({
            user: {
                ...prevState.user,
                [name]: value,
            },
        }));
    };

    handleAddressChange = (event) => {
        const { name, value } = event.target;

        this.setState((prevState) => ({
            user: {
                ...prevState.user,
                address: {
                    ...prevState.user.address,
                    [name]: value,
                },
            },
        }));
    };

    handlePasswordChange = (event) => {
        const { name, value } = event.target;
        console.log(name + " " + value);
        this.setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    handleSubmitPassword = (event) => {
        const {
            currentPassword,
            newPassword,
            confirmPassword,
        } = this.state;

        if (newPassword !== confirmPassword) {
            this.setState((prevState) => ({
                ...prevState,
                passwordError: true,
            }));
        } else {
            this.setState((prevState) => ({
                ...prevState,
                passwordError: false,
            }));
        }
        event.preventDefault();

        // alert("changed user: " + JSON.stringify(this.state.user, null, 4));
        // updateUser(user);
    };
    handleSubmitAccInfo = (event) => {
        event.preventDefault();

        console.log(
            "state: " +
                JSON.stringify(
                    this.state,
                    null,
                    4
                )
        );

        // alert("changed user: " + JSON.stringify(this.state.user, null, 4));
        //   updateUserInfo(this.state.user);
    };
    handleSubmitAddress = (event) => {
        event.preventDefault();

        console.log(
            "state: " +
                JSON.stringify(
                    this.state,
                    null,
                    4
                )
        );

        //  alert("changed user: " + JSON.stringify(this.state.user, null, 4));
        // updateUser(user);
    };

    render() {
        return (
            <main role="main">
                <p>{this.state.message}</p>
                <div className="container pt-sm-2">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col">
                                    <Synopsis
                                        userName={
                                            this
                                                .state
                                                .user
                                                .userName
                                        }
                                        picture={
                                            this
                                                .state
                                                .user
                                                .photo
                                        }
                                        reviews={
                                            this
                                                .state
                                                .reviews
                                                .length
                                        }
                                    />
                                    <HostingInformation />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col">
                                    <Profile
                                        password={{
                                            currentPassword: this
                                                .state
                                                .currentPassword,
                                            newPassword: this
                                                .state
                                                .newPassword,
                                            confirmPassword: this
                                                .state
                                                .confirmPassword,
                                            passwordError: this
                                                .state
                                                .passwordError,
                                        }}
                                        user={
                                            this
                                                .state
                                                .user
                                        }
                                        reviews={
                                            this
                                                .state
                                                .reviews
                                        }
                                        handleChange={
                                            this
                                                .handleChange
                                        }
                                        handlePasswordChange={
                                            this
                                                .handlePasswordChange
                                        }
                                        handleAddressChange={
                                            this
                                                .handleAddressChange
                                        }
                                        handleSubmitAccInfo={
                                            this
                                                .handleSubmitAccInfo
                                        }
                                        handleSubmitAddress={
                                            this
                                                .handleSubmitAddress
                                        }
                                        handleSubmitPassword={
                                            this
                                                .handleSubmitPassword
                                        }
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

export default ProfilePage;
