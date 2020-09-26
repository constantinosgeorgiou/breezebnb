import React, { Component } from "react";

import { Modal } from "react-bootstrap";

import DetailsForm from "./DetailsForm";
import AmenitiesForm from "./AmenitiesForm";
import SpaceForm from "./SpaceForm";
import RulesForm from "./RulesForm";
import AddressForm from "./AddressForm";

class EditListingModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            showEdit,
            handleHideEdit,

            listing,

            handleEditAddressChange,
            handleEditChange,
            handleEditSpaceChange,

            sumbitEdit,
        } = this.props;

        return (
            <Modal
                show={showEdit}
                onHide={handleHideEdit}
                size="lg"
                centered
            >
                <form onSubmit={sumbitEdit}>
                    <Modal.Header>
                        <Modal.Title>
                            Edit {listing.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Details */}
                        <h5 className=" mb-3">
                            Details
                        </h5>
                        <DetailsForm
                            listing={listing}
                            handleChange={
                                handleEditChange
                            }
                        />

                        {/* Address */}
                        <h5 className="mt-4 mb-3">
                            Address
                        </h5>
                        <AddressForm
                            address={
                                listing.address
                            }
                            handleChange={
                                handleEditAddressChange
                            }
                        />
                        {/* Coordinates */}
                        {/* TO DO */}

                        {/* Amenities */}
                        <h5 className="mt-4 mb-3">
                            Amenities
                        </h5>
                        <AmenitiesForm
                            amenities={
                                listing.amenities
                            }
                            handleChange={
                                handleEditChange
                            }
                        />

                        {/* Space */}
                        <h5 className="mt-4 mb-3">
                            Space
                        </h5>
                        <SpaceForm
                            space={listing.space}
                            handleChange={
                                handleEditSpaceChange
                            }
                        />

                        {/* Rules */}
                        <h5 className="mt-4 mb-3">
                            Rules
                        </h5>
                        <RulesForm
                            rules={listing.rules}
                            handleChange={
                                handleEditChange
                            }
                        />
                        {/* Owner */}

                        {/* Photos */}
                        <div>
                            <input
                                type="file"
                                onChange={
                                    this
                                        .onFileChange
                                }
                            />
                            <button
                                onClick={
                                    this
                                        .onFileUpload
                                }
                            >
                                Upload!
                            </button>
                        </div>
                        {/* TODO */}
                    </Modal.Body>
                    <Modal.Footer>
                        <button
                            type="button"
                            className="btn btn-outline-secondary btn-block font-weight-bold
                align-middle"
                            onClick={
                                handleHideEdit
                            }
                        >
                            Cancel changes
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary btn-block font-weight-bold align-middle"
                        >
                            SAVE CHANGES
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
        );
    }
}

export default EditListingModal;
