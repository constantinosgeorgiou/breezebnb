import React from "react";
import { Component } from "react";

import { updateListing, removeListing } from "services/listings";

import { BiEdit, BiXCircle, BiErrorCircle } from "react-icons/bi";

import EditListingModal from "./EditListingModal";
import RemoveListingModal from "./RemoveListingModal";
import { Redirect } from "react-router-dom";

class HostActions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEdit: false,
            showRemove: false,
            done: false,
            message: "",

            initialListingState: this.props.initialListingState,
            submitListing: {},
        };
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

        this.handleHideEdit();
    };

    submitRemove = (event) => {
        event.preventDefault();

        const { listing } = this.props;

        console.log("remove listing" + JSON.stringify(listing, null, 4));
        removeListing(listing.id)
            .then((response) => {
                this.setState({
                    done: true,
                    message: "Removed listing",
                });

                // this.props.history.push("/host");
                // window.location.reload();
                return <Redirect to="/host" />;
            })
            .catch((error) => {
                this.setState({
                    done: false,
                    message: error.message,
                });
            });
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
            state: { initialListingState, showEdit, showRemove, done, message },
            handleHideEdit,
            handleHideRemove,
            sumbitEdit,
            submitRemove,
        } = this;

        return (
            <div className="card-body">
                {initialListingState !== listing && (
                    <p className="card-text text-warning text-center">
                        <BiErrorCircle size={36} className="align-middle" />
                        <span className="align-middle font-weight-bold ml-2">
                            Changes not submited!
                        </span>
                    </p>
                )}
                {done ? (
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
                            onClick={handleHideEdit}
                        >
                            <BiEdit size={36} className="align-middle" />
                            <span className="align-middle">Edit listing</span>
                        </button>
                        {/* EditListingModal */}
                        <EditListingModal
                            showEdit={showEdit}
                            handleHideEdit={handleHideEdit}
                            listing={listing}
                            handleEditAddressChange={handleEditAddressChange}
                            handleEditSpaceChange={handleEditSpaceChange}
                            handleEditChange={handleEditChange}
                            sumbitEdit={sumbitEdit}
                        />
                    </div>
                    <div className="col-auto">
                        <button
                            type="button"
                            className="btn btn-outline-danger mx-2 my-2 align-middle"
                            onClick={handleHideRemove}
                        >
                            <BiXCircle size={36} className="align-middle" />
                            <span className="align-middle ml-2">
                                Remove listing
                            </span>
                        </button>
                        {/* RemoveListingModal */}
                        <RemoveListingModal
                            showRemove={showRemove}
                            listing={listing}
                            handleHideRemove={handleHideRemove}
                            submitRemove={submitRemove}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default HostActions;
