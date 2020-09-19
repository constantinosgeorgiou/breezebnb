import React from "react";

const NumberFilter = ({ filterName, filterValue, handleNumberInputChange }) => {
    return (
        <div className="row mb-2">
            <div className="col pl-3 pt-2">
                <label htmlFor={filterName} className="">
                    {filterName}
                </label>
            </div>
            <div className="col-auto align-items-end">
                <div className="d-inline-flex flex-row h-100 align-items-center">
                    <div className="align-self-middle">
                        <input
                            type="number"
                            // The following removes white space from string and make it lowercase
                            name={filterName.replace(/\s+/g, "").toLowerCase()}
                            className="form-control number-input-filter"
                            defaultValue={filterValue}
                            onClick={handleNumberInputChange}
                            min={0}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NumberFilter;
