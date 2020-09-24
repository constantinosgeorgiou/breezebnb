import React, { Fragment } from "react";

const Space = ({ space, handleChange }) => {
    return (
        <Fragment>
            {/* Beds */}
            <div className="form-group">
                <div className="row align-items-center">
                    <div className="col">
                        <label htmlFor="inputBeds" className="m-0">
                            Beds:
                        </label>
                    </div>
                    <div className="col-3">
                        <input
                            className="form-control"
                            id="inputBeds"
                            type="number"
                            min={0}
                            // required
                            name="beds"
                            value={space.beds}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            {/* Bathrooms */}
            <div className="form-group">
                <div className="row align-items-center">
                    <div className="col">
                        <label htmlFor="inputBathrooms" className="m-0">
                            Bathrooms:
                        </label>
                    </div>
                    <div className="col-3">
                        <input
                            className="form-control"
                            id="inputBathrooms"
                            type="number"
                            min={0}
                            // required
                            name="bathrooms"
                            value={space.bathrooms}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            {/* Rooms */}
            <div className="form-group">
                <div className="row align-items-center">
                    <div className="col">
                        <label htmlFor="inputRooms" className="m-0">
                            Rooms:
                        </label>
                    </div>
                    <div className="col-3">
                        <input
                            className="form-control"
                            id="inputRooms"
                            type="number"
                            min={0}
                            // required
                            name="rooms"
                            value={space.rooms}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            {/* Square meters */}
            <div className="form-group">
                <div className="row align-items-center">
                    <div className="col">
                        <label htmlFor="inputSquareMeters" className="m-0">
                            Square meters:
                        </label>
                    </div>
                    <div className="col-3">
                        <input
                            className="form-control"
                            id="inputSquareMeters"
                            type="number"
                            min={0}
                            // required
                            name="squareMeters"
                            value={space.squareMeters}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            {/* Bedrooms */}
            <div className="form-group">
                <div className="row align-items-center">
                    <div className="col">
                        <label htmlFor="inputBedrooms" className="m-0">
                            Bedrooms:
                        </label>
                    </div>
                    <div className="col-3">
                        <input
                            className="form-control"
                            id="inputBedrooms"
                            type="number"
                            min={0}
                            // required
                            name="bedrooms"
                            value={space.bedrooms}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            {/* Living rooms */}
            <div className="form-group">
                <div className="row align-items-center">
                    <div className="col">
                        <label htmlFor="inputLivingRooms" className="m-0">
                            Living rooms:
                        </label>
                    </div>
                    <div className="col-3">
                        <input
                            className="form-control"
                            id="inputLivingRooms"
                            type="number"
                            min={0}
                            // required
                            name="livingRooms"
                            value={space.livingRooms}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            {/* Kitchen */}
            <div className="form-group">
                <div className="row align-items-center">
                    <div className="col">
                        <label htmlFor="inputKitchen" className="m-0">
                            Kitchen:
                        </label>
                    </div>
                    <div className="col-3">
                        <input
                            className="form-control"
                            id="inputKitchen"
                            type="number"
                            min={0}
                            // required
                            name="kitchen"
                            value={space.kitchen}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Space;
