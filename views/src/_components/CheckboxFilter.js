import React from "react";

import Checkbox from "../_components/Checkbox";

const CheckboxFilter = ({
    title,
    checkboxes,
    handleChecboxChange,
    ...props
}) => {
    console.log("chckbx: " + Object.entries(checkboxes))
    const values = Object.keys(checkboxes);
    console.log("Title: " + title + " values: " + values);
    // Find middle position of values array
    const middlePosition = Math.floor((values.length - 1) / 2) + 1; // Biased torwards firstSection

    // Find last position of array propertyTypes
    const lastPosition = values.length;

    // Make split copies of values array
    // fistSection starts at the beginning of values and ends at its middle position
    // secondSection starts at the middle position of values and ends at its end position
    const firstSection = values.slice(0, middlePosition);
    const secondSection = values.slice(middlePosition, lastPosition);

    return (
        <div className="pb-4">
            <h5 className="card-text pb-1">{title}</h5>
            <div className="form-row">
                <div className="col-md">
                    {firstSection.map((value) => (
                        // TODO: add name, value (for input) and label (for label)
                        <Checkbox
                            label={value}
                            key={values.indexOf(value)}
                            handleChecboxChange={handleChecboxChange}
                        />
                    ))}
                </div>
                <div className="col-md">
                    {secondSection.map((value) => (
                        <Checkbox
                            label={value}
                            key={values.indexOf(value)}
                            handleChecboxChange={handleChecboxChange}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CheckboxFilter;
