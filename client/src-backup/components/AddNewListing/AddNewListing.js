import React, { Component } from "react";
import { Modal } from "react-bootstrap";

import { addListing } from "services/listings";

import { UserContextConsumer } from "context/userContext";

import AddressForm from "./AddressForm";
import AmenitiesForm from "./AmenitiesForm";
import DetailsForm from "./DetailsForm";
import RulesForm from "./RulesForm";
import SpaceForm from "./SpaceForm";

class AddNewListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listing: {
                title: "",
                description: "",
                propertyType: "House",
                guests: 0,
                minimumBookingDays: 0,
                owner: 0,
                photos: null,
                coordinates: {
                    latitude: 34,
                    longtitude: 123,
                },
                address: {
                    country: "",
                    state: "",
                    city: "",
                    zipCode: "",
                    streetAddress: "",
                    apartmentNumber: "",
                },
                amenities: {
                    wifi: false,
                    shampoo: false,
                    heating: false,
                    airConditioning: false,
                    washer: false,
                    dryer: false,
                    breakfast: false,
                    indoorFireplace: false,
                    hangers: false,
                    iron: false,
                    hairDryer: false,
                    laptopFriendlyWorkspace: false,
                    tv: false,
                    crib: false,
                    highChair: false,
                    selfCheckIn: false,
                    smokeAlarm: false,
                    carbonMonoxideAlarm: false,
                    privateBathroom: false,
                    beachfront: false,
                    waterfront: false,
                },
                space: {
                    beds: 0,
                    bathrooms: 0,
                    rooms: 0,
                    squareMeters: 0,
                    bedrooms: 0,
                    livingRooms: 0,
                    kitchens: 0,
                },
                rules: {
                    petsAllowed: false,
                    smokingAllowed: false,
                    eventsAllowed: false,
                },
            },
            selectedFile: null,
        };
    }

    static contextType = UserContextConsumer;

    handleSubmit = (event) => {
        event.preventDefault();

        let listing = this.state.listing;
        listing.owner = this.context.user.id;

        addListing(this.state.listing)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        this.props.onHide();
        window.location.reload();
    };

    // On file select (from the pop up)
    onFileChange = (event) => {
        // Update the state
        this.setState({
            selectedFile: event.target.files[0],
        });
    };

    handleChange = ({ target }) => {
        const { name, value, type } = target;

        if (type === "checkbox") {
            // Checked contains the value
            // Value contains the object to change
            const { checked } = target;

            this.setState((prevState) => ({
                ...prevState,
                listing: {
                    ...prevState.listing,
                    [value]: {
                        ...prevState.listing[value],
                        [name]: checked,
                    },
                },
            }));
        } else {
            this.setState((prevState) => ({
                ...prevState,
                listing: {
                    ...prevState.listing,
                    [name]: value,
                },
            }));
        }
    };

    handleAddressChange = ({ target }) => {
        const { name, value } = target;

        this.setState((prevState) => ({
            listing: {
                ...prevState.listing,
                address: {
                    ...prevState.listing.address,
                    [name]: value,
                },
            },
        }));
    };

    handleSpaceChange = ({ target }) => {
        const { name, value } = target;

        this.setState((prevState) => ({
            listing: {
                ...prevState.listing,
                space: {
                    ...prevState.listing.space,
                    [name]: value,
                },
            },
        }));
    };

    render() {
        const { show, onHide } = this.props;
        return (
            <Modal show={show} onHide={onHide} size="lg" centered>
                <form onSubmit={this.handleSubmit}>
                    <Modal.Header>
                        <Modal.Title>Add new listing</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Details */}
                        <h5 className=" mb-3">Details</h5>
                        <DetailsForm
                            listing={this.state.listing}
                            handleChange={this.handleChange}
                        />

                        {/* Address */}
                        <h5 className="mt-4 mb-3">Address</h5>
                        <AddressForm
                            address={this.state.listing.address}
                            handleChange={this.handleAddressChange}
                        />
                        {/* Coordinates */}
                        {/* TO DO */}

                        {/* Amenities */}
                        <h5 className="mt-4 mb-3">Amenities</h5>
                        <AmenitiesForm
                            amenities={this.state.listing.amenities}
                            handleChange={this.handleChange}
                        />

                        {/* Space */}
                        <h5 className="mt-4 mb-3">Space</h5>
                        <SpaceForm
                            space={this.state.listing.space}
                            handleChange={this.handleSpaceChange}
                        />

                        {/* Rules */}
                        <h5 className="mt-4 mb-3">Rules</h5>
                        <RulesForm
                            rules={this.state.listing.rules}
                            handleChange={this.handleChange}
                        />
                        {/* Owner */}

                        {/* Photos */}
                        <div>
                            <input type="file" onChange={this.onFileChange} />
                            <button onClick={this.onFileUpload}>Upload!</button>
                        </div>
                        {/* TODO */}
                    </Modal.Body>
                    <Modal.Footer>
                        <button
                            type="button"
                            className="btn btn-outline-secondary btn-block font-weight-bold
                align-middle"
                            onClick={onHide}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary btn-block font-weight-bold align-middle"
                        >
                            ADD LISTING
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
        );
    }
}

export default AddNewListing;
