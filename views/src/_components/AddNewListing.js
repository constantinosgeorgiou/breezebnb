import React, { Component } from "react";
import { Modal } from "react-bootstrap";

import Details from "./Details";
import Amenities from "./Amenities";
import Space from "./Space";
import Rules from "./Rules";
import Address from "./Address";

class AddNewListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listing: {
                title: "",
                description: "",
                propertyType: "",
                guests: 0,
                minimumBookingDays: 0,
                owner: 23458,
            },
            photos: {},
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
                beds: false,
                bathrooms: false,
                rooms: false,
                squareMeters: false,
                bedrooms: false,
                livingRooms: false,
                kitchen: false,
            },
            rules: {
                petsAllowed: false,
                smokingAllowed: false,
                eventsAllowed: false,
            },
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let listing = this.state.listing;
        listing.amenities = this.state.amenities;

        alert("New listing: " + JSON.stringify(this.state.listing, null, 4));
    };

    handleChange = (event) => {
        const { name, value } = event.target;

        console.log(name + " with " + value);
        this.setState((prevState) => ({
            ...prevState,
            listing: {
                ...prevState.listing,
                [name]: value,
            },
        }));

        console.log("state: " + JSON.stringify(this.state.listing, null, 4));
    };

    handleAmenitiesChange = (event) => {
        const { name } = event.target;

        this.setState((prevState) => ({
            amenities: {
                ...prevState.amenities,
                [name]: !prevState.amenities[name],
            },
        }));
    };

    render() {
        return (
            <Modal
                // show={this.props.show}
                show={true}
                onHide={this.props.onHide}
                size="lg"
                centered
            >
                <form onSubmit={this.handleSubmit}>
                    <Modal.Header>
                        <Modal.Title>Add new listing</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {/* Details */}
                        <h5 className=" mb-3">Details</h5>
                        <Details
                            listing={this.state.listing}
                            handleChange={this.handleChange}
                        />

                        {/* Address */}
                        <h5 className="mt-4 mb-3">Address</h5>
                        <Address />
                        {/* Coordinates */}
                        {/* TO DO */}

                        {/* Amenities */}
                        <h5 className="mt-4 mb-3">Amenities</h5>
                        <Amenities
                            amenities={this.state.amenities}
                            handleChange={this.handleAmenitiesChange}
                        />

                        {/* Space */}
                        <h5 className="mt-4 mb-3">Space</h5>
                        <Space />

                        {/* Rules */}
                        <h5 className="mt-4 mb-3">Rules</h5>
                        <Rules />
                        {/* Owner */}

                        {/* Photos */}
                        {/* TODO */}
                    </Modal.Body>
                    <Modal.Footer>
                        <button
                            type="button"
                            className="btn btn-outline-secondary btn-block font-weight-bold
                align-middle"
                            onClick={this.props.onHide}
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
