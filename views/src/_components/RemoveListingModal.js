import React, { Component } from "react";

import { Modal } from "react-bootstrap";

import DetailsForm from "./DetailsForm";
import AmenitiesForm from "./AmenitiesForm";
import SpaceForm from "./SpaceForm";
import RulesForm from "./RulesForm";
import AddressForm from "./AddressForm";

class RemoveListingModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            listing,
            showRemove,
            handleHideRemove,
            // handleRemove,
        } = this.props;

        return (
            <Modal
                show={showRemove}
                onHide={handleHideRemove}
                size="lg"
                centered
            >
                <form>
                    <Modal.Header>
                        <Modal.Title className="text-danger font-weight-bold">
                            Remove {listing.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body></Modal.Body>
                    <Modal.Footer>
                        <button
                            type="button"
                            className="btn btn-secondary btn-block font-weight-bold
                align-middle"
                            value="showRemove"
                            onClick={
                                handleHideRemove
                            }
                        >
                            Go back
                        </button>
                        <button
                            type="submit"
                            className="btn btn-outline-danger btn-block font-weight-bold align-middle"
                        >
                            REMOVE
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
        );
    }
}

export default RemoveListingModal;
