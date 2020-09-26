import React, { Fragment } from "react";

const AmenitiesForm = ({ amenities, handleChange }) => {
    return (
        <Fragment>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                        className="custom-control-input"
                        id="checkboxInputWifi"
                        type="checkbox"
                        name="wifi"
                        value="amenities"
                        checked={amenities.wifi ? true : false}
                        onChange={handleChange}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="checkboxInputWifi"
                    >
                        Wifi
                    </label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                        className="custom-control-input"
                        id="checkboxInputShampoo"
                        type="checkbox"
                        name="shampoo"
                        checked={amenities.shampoo ? true : false}
                        value="amenities"
                        onChange={handleChange}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="checkboxInputShampoo"
                    >
                        Shampoo
                    </label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                        className="custom-control-input"
                        id="checkboxInputHeating"
                        type="checkbox"
                        name="heating"
                        checked={amenities.heating ? true : false}
                        value="amenities"
                        onChange={handleChange}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="checkboxInputHeating"
                    >
                        Heating
                    </label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                        className="custom-control-input"
                        id="checkboxInputAirConditioning"
                        type="checkbox"
                        name="airConditioning"
                        checked={amenities.airConditioning ? true : false}
                        value="amenities"
                        onChange={handleChange}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="checkboxInputAirConditioning"
                    >
                        Air Conditioning
                    </label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                        className="custom-control-input"
                        id="checkboxInputWasher"
                        type="checkbox"
                        name="washer"
                        checked={amenities.washer ? true : false}
                        value="amenities"
                        onChange={handleChange}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="checkboxInputWasher"
                    >
                        Washer
                    </label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                        className="custom-control-input"
                        id="checkboxInputDryer"
                        type="checkbox"
                        name="dryer"
                        checked={amenities.dryer ? true : false}
                        value="amenities"
                        onChange={handleChange}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="checkboxInputDryer"
                    >
                        Dryer
                    </label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                        className="custom-control-input"
                        id="checkboxInputBreakfast"
                        type="checkbox"
                        name="breakfast"
                        checked={amenities.breakfast ? true : false}
                        value="amenities"
                        onChange={handleChange}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="checkboxInputBreakfast"
                    >
                        Breakfast
                    </label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                        className="custom-control-input"
                        id="checkboxInputIndoorFireplace"
                        type="checkbox"
                        name="indoorFireplace"
                        checked={amenities.indoorFireplace ? true : false}
                        value="amenities"
                        onChange={handleChange}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="checkboxInputIndoorFireplace"
                    >
                        Indoor Fireplace
                    </label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                        className="custom-control-input"
                        id="checkboxInputHangers"
                        type="checkbox"
                        name="hangers"
                        checked={amenities.hangers ? true : false}
                        value="amenities"
                        onChange={handleChange}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="checkboxInputHangers"
                    >
                        Hangers
                    </label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                        className="custom-control-input"
                        id="checkboxInputIron"
                        type="checkbox"
                        name="iron"
                        checked={amenities.iron ? true : false}
                        value="amenities"
                        onChange={handleChange}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="checkboxInputIron"
                    >
                        Iron
                    </label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                        className="custom-control-input"
                        id="checkboxInputHairDryer"
                        type="checkbox"
                        name="hairDryer"
                        checked={amenities.hairDryer ? true : false}
                        value="amenities"
                        onChange={handleChange}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="checkboxInputHairDryer"
                    >
                        Hair Dryer
                    </label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                        className="custom-control-input"
                        id="checkboxInputLaptopFriendlyWorkspace"
                        type="checkbox"
                        name="laptopFriendlyWorkspace"
                        checked={amenities.laptopFriendlyWorkspace ? true : false}
                        value="amenities"
                        onChange={handleChange}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="checkboxInputLaptopFriendlyWorkspace"
                    >
                        Laptop Friendly Workspace
                    </label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                        className="custom-control-input"
                        id="checkboxInputTV"
                        type="checkbox"
                        name="tv"
                        checked={amenities.tv ? true : false}
                        value="amenities"
                        onChange={handleChange}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="checkboxInputTV"
                    >
                        TV
                    </label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                        className="custom-control-input"
                        id="checkboxInputCrib"
                        type="checkbox"
                        name="crib"
                        checked={amenities.crib ? true : false}
                        value="amenities"
                        onChange={handleChange}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="checkboxInputCrib"
                    >
                        Crib
                    </label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                        className="custom-control-input"
                        id="checkboxInputHighChair"
                        type="checkbox"
                        name="highChair"
                        checked={amenities.highChair ? true : false}
                        value="amenities"
                        onChange={handleChange}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="checkboxInputHighChair"
                    >
                        High Chair
                    </label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                        className="custom-control-input"
                        id="checkboxInputSelfCheckIn"
                        type="checkbox"
                        name="selfCheckIn"
                        checked={amenities.selfCheckIn ? true : false}
                        value="amenities"
                        onChange={handleChange}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="checkboxInputSelfCheckIn"
                    >
                        Self Check In
                    </label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                        className="custom-control-input"
                        id="checkboxInputSmokeAlarm"
                        type="checkbox"
                        name="smokeAlarm"
                        checked={amenities.smokeAlarm ? true : false}
                        value="amenities"
                        onChange={handleChange}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="checkboxInputSmokeAlarm"
                    >
                        Smoke Alarm
                    </label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                        className="custom-control-input"
                        id="checkboxInputCarbonMonoxideAlarm"
                        type="checkbox"
                        name="carbonMonoxideAlarm"
                        checked={amenities.carbonMonoxideAlarm ? true : false}
                        value="amenities"
                        onChange={handleChange}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="checkboxInputCarbonMonoxideAlarm"
                    >
                        Carbon Monoxide Alarm
                    </label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                        className="custom-control-input"
                        id="checkboxInputPrivateBathroom"
                        type="checkbox"
                        name="privateBathroom"
                        checked={amenities.privateBathroom ? true : false}
                        value="amenities"
                        onChange={handleChange}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="checkboxInputPrivateBathroom"
                    >
                        Private Bathroom
                    </label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                        className="custom-control-input"
                        id="checkboxInputBeachfront"
                        type="checkbox"
                        name="beachfront"
                        checked={amenities.beachfront ? true : false}
                        value="amenities"
                        onChange={handleChange}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="checkboxInputBeachfront"
                    >
                        Beachfront
                    </label>
                </div>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input
                        className="custom-control-input"
                        id="checkboxInputWaterfront"
                        type="checkbox"
                        name="waterfront"
                        checked={amenities.waterfront ? true : false}
                        value="amenities"
                        onChange={handleChange}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="checkboxInputWaterfront"
                    >
                        Waterfront
                    </label>
                </div>
            </div>
        </Fragment>
    );
};

export default AmenitiesForm;
