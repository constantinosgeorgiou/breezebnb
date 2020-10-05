import React, { Component } from "react";

import { Modal } from "react-bootstrap";

import { BiErrorCircle } from "react-icons/bi";

class RemoveListingModal extends Component {
    render() {
        const {
            listing,
            showRemove,
            handleHideRemove,
            submitRemove,
        } = this.props;

        return (
            <Modal
                show={showRemove}
                onHide={handleHideRemove}
                size="lg"
                centered
            >
                <form onSubmit={submitRemove}>
                    <Modal.Header>
                        <Modal.Title className="text-danger font-weight-bold">
                            Remove {listing.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="">
                            <div className="text-center">
                                <BiErrorCircle size={48} />
                            </div>
                            <p className="h5 text-center">
                                This will remove the listing forever
                            </p>
                            <p className="text-center">Are you sure?</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button
                            type="button"
                            className="btn btn-secondary btn-block font-weight-bold
                align-middle"
                            value="showRemove"
                            onClick={handleHideRemove}
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
