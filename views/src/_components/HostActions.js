import React from "react";
import { Component } from "react";

import { updateListing } from "../_services/listings";

import {
    BiEdit,
    BiXCircle,
    BiErrorCircle,
} from "react-icons/bi";

import EditListingModal from "./EditListingModal";
import RemoveListingModal from "./RemoveListingModal";

class HostActions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEdit: false,
            showRemove: false,
            updated: false,
            message: "",

            initialListingState: this.props
                .initialListingState,
            submitListing: {},
        };
    }

    componentDidMount() {
        this.setState((prevState) => ({
            listing: this.props.listing,
        }));
    }

    handleHideEdit = () => {
        this.setState((prevState) => ({
            showEdit: !prevState.showEdit,
        }));
    };

    handleHideRemove = () => {
        this.setState((prevState) => ({
            showRemove: !prevState.showRemove,
        }));
    };

    sumbitEdit = (event) => {
        event.preventDefault();

        let { submitListing } = this.state;
        submitListing = this.props.listing;

        updateListing(submitListing)
            .then((response) => {
                this.setState({
                    updated: true,
                    message: "Updated listing",
                    initialListingState: submitListing,
                });
            })
            .catch((error) => {
                this.setState({
                    updated: false,
                    message: error.message,
                });
            });

        this.handleHideEdit()
    };

    handleRemoveChange = (change) => {
        change.preventDefault();
    };

    render() {
        const {
            props: {
                listing,

                handleEditAddressChange,
                handleEditChange,
                handleEditSpaceChange,

                // handleRemoveChange,
            },
            state: {
                initialListingState,
                showEdit,
                showRemove,
                updated,
                message,
            },
            handleHideEdit,
            handleHideRemove,
            sumbitEdit,
        } = this;

        console.log(
            "actions: " +
                handleEditAddressChange +
                handleEditChange +
                handleEditSpaceChange
        );

        return (
            <div className="card-body">
                {initialListingState !==
                    listing && (
                    <p className="card-text text-warning text-center">
                        <BiErrorCircle
                            size={36}
                            className="align-middle"
                        />
                        <span className="align-middle font-weight-bold ml-2">
                            Changes not submited!
                        </span>
                    </p>
                )}
                {updated ? (
                    <p className="card-text text-success text-center">
                        {message}
                    </p>
                ) : (
                    <p className="card-text text-warning text-center">
                        {message}
                    </p>
                )}
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <button
                            type="button"
                            className="btn btn-outline-warning mx-2 my-2 align-middle"
                            onClick={
                                handleHideEdit
                            }
                        >
                            <BiEdit
                                size={36}
                                className="align-middle"
                            />
                            <span className="align-middle">
                                Edit listing
                            </span>
                        </button>
                        {/* EditListingModal */}
                        <EditListingModal
                            showEdit={showEdit}
                            handleHideEdit={
                                handleHideEdit
                            }
                            listing={listing}
                            handleEditAddressChange={
                                handleEditAddressChange
                            }
                            handleEditSpaceChange={
                                handleEditSpaceChange
                            }
                            handleEditChange={
                                handleEditChange
                            }
                            sumbitEdit={
                                sumbitEdit
                            }
                        />
                    </div>
                    <div className="col-auto">
                        <button
                            type="button"
                            className="btn btn-outline-danger mx-2 my-2 align-middle"
                            onClick={
                                handleHideRemove
                            }
                        >
                            <BiXCircle
                                size={36}
                                className="align-middle"
                            />
                            <span className="align-middle ml-2">
                                Remove listing
                            </span>
                        </button>
                        {/* RemoveListingModal */}
                        <RemoveListingModal
                            showRemove={
                                showRemove
                            }
                            listing={listing}
                            handleHideRemove={
                                handleHideRemove
                            }
                            // handleRemoveChange={
                            //     handleRemoveChange
                            // }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default HostActions;
