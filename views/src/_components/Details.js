import React, { Fragment } from "react";

const Details = () => {
    return (
        <Fragment>
            {/* Title */}
            <div className="form-group">
                <label htmlFor="inputTitle">Title</label>
                <input
                    id="inputTitle"
                    type="text"
                    className="form-control"
                    required
                    name="title"
                    // value={}
                    // onChange={}
                />
            </div>

            {/* Description */}
            <div className="form-group">
                <label htmlFor="inputDescription">Description</label>
                <textarea
                    class="form-control"
                    id="inputDescription"
                    name="description"
                    rows="3"
                ></textarea>
            </div>

            {/* Property Type */}
            <div className="form-group">
                <label htmlFor="inputPropertyType">Property type</label>
                <select id="inputPropertyType" class="form-control">
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Bed and Breakfast</option>
                    <option>Hostel</option>
                    <option>Hotel</option>
                    <option>Vill</option>
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
                            min={0}
                            required
                            name="guests"
                            // value={}
                            // onChange={}
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
                            required
                            name="minimumBookingDays"
                            // value={}
                            // onChange={}
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
                            required
                            name="cost"
                            // value={}
                            // onChange={}
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
                    required
                    name="photos"
                    // value={}
                    // onChange={}
                />
            </div>
        </Fragment>
    );
};

export default Details;
