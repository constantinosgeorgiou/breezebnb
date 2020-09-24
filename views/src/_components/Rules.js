import React, { Fragment } from "react";

const Rules = () => {
    return (
        <Fragment>
            {/* Pets allowed */}
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                        className="custom-control-input"
                        id="checkboxInputPetsAllowed"
                        type="checkbox"
                        // defaultChecked={props.userRole}
                        name="petsAllowed"
                        // onChange={props.handleChange}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="checkboxInputPetsAllowed"
                    >
                        Pets allowed
                    </label>
                </div>
            </div>
            {/* Smoking allowed */}
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                        className="custom-control-input"
                        id="checkboxInputSmokingAllowed"
                        type="checkbox"
                        // defaultChecked={props.userRole}
                        name="smokingAllowed"
                        // onChange={props.handleChange}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="checkboxInputSmokingAllowed"
                    >
                        Smoking allowed
                    </label>
                </div>
            </div>

            {/* Events allowed */}
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                        className="custom-control-input"
                        id="checkboxInputEventsAllowed"
                        type="checkbox"
                        // defaultChecked={props.userRole}
                        name="eventsAllowed"
                        // onChange={props.handleChange}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="checkboxInputEventsAllowed"
                    >
                        Events allowed
                    </label>
                </div>
            </div>
        </Fragment>
    );
};

export default Rules;
