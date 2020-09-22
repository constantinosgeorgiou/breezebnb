import React from "react";

const Checkbox = ({ label, isSelected, handleCheckboxChange }) => {
    return (
        <div className=" form-check">
            <label>
                <input
                    type="checkbox"
                    name={label}
                    checked={isSelected}
                    onChange={handleCheckboxChange}
                    className="form-check-input"
                />
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
