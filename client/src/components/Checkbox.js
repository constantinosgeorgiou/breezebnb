import React from "react";

const Checkbox = ({ label, name, isSelected, handleCheckboxChange }) => {
    return (
        <div className=" form-check">
            <input
                type="checkbox"
                id={name}
                name={name}
                defaultChecked={isSelected}
                onChange={(e) => {
                    console.log(e);
                }}
                className="form-check-input"
            />
            <label htmlFor={name}>{label}</label>
        </div>
    );
};

export default Checkbox;
