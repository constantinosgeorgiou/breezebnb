import React, { Fragment } from "react";

const Details = ({ listing, handleChange }) => {
    return (
        <Fragment>
            {/* Title */}
            <div className="form-group">
                <label htmlFor="inputTitle">Title</label>
                <input
                    id="inputTitle"
                    type="text"
                    className="form-control"
                    // required
                    name="title"
                    value={listing.title}
                    onChange={handleChange}
                />
            </div>

            {/* Description */}
            <div className="form-group">
                <label htmlFor="inputDescription">Description</label>
                <textarea
                    className="form-control"
                    id="inputDescription"
                    rows="3"
                    name="description"
                    value={listing.description}
                    onChange={handleChange}
                ></textarea>
            </div>

            {/* Property Type */}
            <div className="form-group">
                <label htmlFor="inputPropertyType">Property type</label>
                <select
                    id="inputPropertyType"
                    className="form-control"
                    name="propertyType"
                    value={listing.propertyType}
                    onChange={handleChange}
                >
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="bedAndBreakfast">Bed and Breakfast</option>
                    <option value="hostel">Hostel</option>
                    <option value="hotel">Hotel</option>
                    <option value="villa">Villa</option>
                </select>
            </div>

            {/* Guests */}
            <div className="form-group my-4">
                <div className="row align-items-center">
                    <div className="col">
                        <label htmlFor="inputGuest" className="m-0">
                            Guests:
                        </label>
                    </div>
                    <div className="col-3">
                        <input
                            className="form-control"
                            id="inputGuests"
                            type="number"
                            min={1}
                            // required
                            name="guests"
                            value={listing.guests}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            {/* Minimum booking days */}
            <div className="form-group my-3">
                <div className="row align-items-center">
                    <div className="col">
                        <label
                            htmlFor="inputMinimumBookingDays"
                            className="m-0"
                        >
                            Minimum bookin days:
                        </label>
                    </div>
                    <div className="col-3">
                        <input
                            className="form-control"
                            id="inputMinimumBookingDays"
                            type="number"
                            min={1}
                            // required
                            name="minimumBookingDays"
                            value={listing.minimumBookingDays}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            {/* Cost */}
            <div className="form-group my-3">
                <div className="row align-items-center">
                    <div className="col">
                        <label htmlFor="inputCost" className="m-0">
                            Cost per night:
                        </label>
                    </div>
                    <div className="col-3">
                        <input
                            className="form-control"
                            id="inputCost"
                            type="number"
                            min={1}
                            // required
                            name="cost"
                            value={listing.cost}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            {/* Photos */}
            <div className="form-group">
                <label htmlFor="inputPhotos">Photos</label>
                <input
                    id="inputPhotos"
                    type="text"
                    className="form-control"
                    // required
                    name="photos"
                    value={listing.photos}
                    onChange={handleChange}
                />
            </div>
        </Fragment>
    );
};

export default Details;
