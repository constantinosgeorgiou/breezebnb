import React, { Fragment } from "react";

const RulesForm = ({ rules, handleChange }) => {
    return (
        <Fragment>
            {/* Pets allowed */}
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                        className="custom-control-input"
                        id="checkboxInputPetsAllowed"
                        type="checkbox"
                        name="petsAllowed"
                        value="rules"
                        checked={rules.petsAllowed ? true : false}
                        onChange={handleChange}
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
                        name="smokingAllowed"
                        value="rules"
                        checked={rules.smokingAllowed ? true : false}
                        onChange={handleChange}
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
                        name="eventsAllowed"
                        value="rules"
                        checked={rules.eventsAllowed ? true : false}
                        onChange={handleChange}
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

export default RulesForm;
