import React from "react";

import Checkbox from "../_components/Checkbox";

const CheckboxFilter = ({
    title,
    labels,
    values,
    handleChecboxChange,
    ...props
}) => {
    // Find middle position of values array
    const middlePosition = Math.floor((labels.length - 1) / 2) + 1; // Biased torwards firstSection

    // Find last position of array propertyTypes
    const lastPosition = labels.length;

    // Make split copies of values array
    // fistSection starts at the beginning of values and ends at its middle position
    // secondSection starts at the middle position of values and ends at its end position
    const firstSection = labels.slice(0, middlePosition);
    const secondSection = labels.slice(middlePosition, lastPosition);

    return (
        <div className="pb-4">
            <h5 className="card-text pb-1">{title}</h5>
            <div className="form-row">
                <div className="col-md">
                    {firstSection.map((value) => (
                        // TODO: add name, value (for input) and label (for label)
                        <Checkbox
                            label={value}
                            handleChecboxChange={handleChecboxChange}
                            key={value
                                // Capitalize first letter of each word
                                .replace(/\b\w/g, (c) => c.toUpperCase())
                                // Remove whitespace
                                .replace(/\s+/g, "")
                                // Lowercase the first letter of the string
                                .replace(/^\w/, (c) => c.toLowerCase())}
                            name={value
                                // Capitalize first letter of each word
                                .replace(/\b\w/g, (c) => c.toUpperCase())
                                // Remove whitespace
                                .replace(/\s+/g, "")
                                // Lowercase the first letter of the string
                                .replace(/^\w/, (c) => c.toLowerCase())}
                            isSelected={
                                values[
                                    values.indexOf(
                                        value
                                            // Capitalize first letter of each word
                                            .replace(/\b\w/g, (c) =>
                                                c.toUpperCase()
                                            )
                                            // Remove whitespace
                                            .replace(/\s+/g, "")
                                            // Lowercase the first letter of the string
                                            .replace(/^\w/, (c) =>
                                                c.toLowerCase()
                                            )
                                    )
                                ]
                            }
                        />
                    ))}
                </div>
                <div className="col-md">
                    {secondSection.map((value) => (
                        <Checkbox
                            label={value}
                            handleChecboxChange={handleChecboxChange}
                            key={value
                                // Capitalize first letter of each word
                                .replace(/\b\w/g, (c) => c.toUpperCase())
                                // Remove whitespace
                                .replace(/\s+/g, "")
                                // Lowercase the first letter of the string
                                .replace(/^\w/, (c) => c.toLowerCase())}
                            name={value
                                // Capitalize first letter of each word
                                .replace(/\b\w/g, (c) => c.toUpperCase())
                                // Remove whitespace
                                .replace(/\s+/g, "")
                                // Lowercase the first letter of the string
                                .replace(/^\w/, (c) => c.toLowerCase())}
                            isSelected={
                                values[
                                    values.indexOf(
                                        value
                                            // Capitalize first letter of each word
                                            .replace(/\b\w/g, (c) =>
                                                c.toUpperCase()
                                            )
                                            // Remove whitespace
                                            .replace(/\s+/g, "")
                                            // Lowercase the first letter of the string
                                            .replace(/^\w/, (c) =>
                                                c.toLowerCase()
                                            )
                                    )
                                ]
                            }
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CheckboxFilter;
