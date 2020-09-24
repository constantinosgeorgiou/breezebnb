import React from "react";
import { Modal } from "react-bootstrap";
import { BiPlusCircle } from "react-icons/bi";

import Details from "./Details";
import Amenities from "./Amenities";
import Space from "./Space";
import Rules from "./Rules";
import Address from "./Address";

const AddNewListing = ({ show, onHide }) => {
    // listing = {
    //     title: "",
    //     description: "",
    //     propertyType: "",
    //     guests: 0,
    //     minimumBookingDays: 0,
    //     address: {
    //         country: "",
    //         state: "",
    //         city: "",
    //         zipCode: "",
    //         streetAddress: "",
    //         apartmentNumber: "",
    //     },
    //     amenities: {
    //         wifi: false,
    //         shampoo: false,
    //         heating: false,
    //         airConditioning: false,
    //         washer: false,
    //         dryer: false,
    //         breakfast: false,
    //         indoorFireplace: false,
    //         hangers: false,
    //         iron: false,
    //         hairDryer: false,
    //         laptopFriendlyWorkspace: false,
    //         tv: false,
    //         crib: false,
    //         highChair: false,
    //         selfCheckIn: false,
    //         smokeAlarm: false,
    //         carbonMonoxideAlarm: false,
    //         privateBathroom: false,
    //         beachfront: false,
    //         waterfront: false,
    //     },
    //     space: {
    //         beds: false,
    //         bathrooms: false,
    //         rooms: false,
    //         squareMeters: false,
    //         bedrooms: false,
    //         livingRooms: false,
    //         kitchen: false,
    //     },
    //     rules: {
    //         petsAllowed: false,
    //         smokingAllowed: false,
    //         eventsAllowed: false,
    //     },
    //     owner: 23458,
    //     photos: {},
    //     coordinates: {
    //         latitude: 34,
    //         longtitude: 123,
    //     },
    // };

    return (
        <Modal show={show} onHide={onHide} size="md" centered>
            <Modal.Header>
                <Modal.Title>Add new listing</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    {/* Details */}
                    <h5 className=" mb-3">Details</h5>
                    <Details />

                    {/* Address */}
                    <h5 className="mt-4 mb-3">Address</h5>
                    <Address />
                    {/* Coordinates */}
                    {/* TO DO */}

                    {/* Amenities */}
                    <h5 className="mt-4 mb-3">Amenities</h5>
                    <Amenities />

                    {/* Space */}
                    <h5 className="mt-4 mb-3">Space</h5>
                    <Space />

                    {/* Rules */}
                    <h5 className="mt-4 mb-3">Rules</h5>
                    <Rules />
                    {/* Owner */}

                    {/* Photos */}
                    {/* TODO */}
                </form>
            </Modal.Body>
            <Modal.Footer>
                <button
                    type="submit"
                    className="btn btn-primary btn-block font-weight-bold align-middle"
                >
                    ADD LISTING
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddNewListing;
