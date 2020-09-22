import React from "react";

import NumberFilter from "../_components/NumberFilter";
import CheckboxFilter from "../_components/CheckboxFilter";

const Filters = ({
    filters,
    propertyTypes,
    amenities,
    rules,
    handleFiltersChange,
    handleNumberInputChange,
    handleAmenitiesChange,
    handlePropertyTypesChange,
    handleRulesChange,
    ...props
}) => {
    return (
        <form onSubmit={handleFiltersChange}>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Filters</h4>

                    {/* Rooms and beds */}
                    <h5 className="card-text pb-1">Rooms and Beds</h5>

                    {/* Beds */}
                    <NumberFilter
                        filterName={"Beds"}
                        filterValue={filters.beds}
                        handleNumberInputChange={handleNumberInputChange}
                    />

                    {/* Rooms */}
                    <NumberFilter
                        filterName={"Rooms"}
                        filterValue={filters.rooms}
                        handleNumberInputChange={handleNumberInputChange}
                    />

                    {/* Bedrooms */}
                    <NumberFilter
                        filterName={"Bedrooms"}
                        filterValue={filters.bedrooms}
                        handleNumberInputChange={handleNumberInputChange}
                    />

                    {/* Bathrooms */}
                    <NumberFilter
                        filterName={"Bathrooms"}
                        filterValue={filters.bathrooms}
                        handleNumberInputChange={handleNumberInputChange}
                    />

                    {/* Living rooms */}
                    <NumberFilter
                        filterName={"Living rooms"}
                        filterValue={filters.livingrooms}
                        handleNumberInputChange={handleNumberInputChange}
                    />

                    {/* Kitchens */}
                    <NumberFilter
                        filterName={"Kitchens"}
                        filterValue={filters.kitchens}
                        handleNumberInputChange={handleNumberInputChange}
                    />

                    {/* Property type */}
                    <CheckboxFilter
                        title={"Property type"}
                        labels={propertyTypes}
                        values={Object.values(filters.propertyTypes)}
                        handleChecboxChange={handlePropertyTypesChange}
                    />

                    {/* Amenities */}
                    <CheckboxFilter
                        title={"Amenities"}
                        labels={amenities}
                        values={Object.values(filters.amenities)}
                        handleChecboxChange={handleAmenitiesChange}
                    />

                    {/* House rules */}
                    <CheckboxFilter
                        title={"House rules"}
                        labels={rules}
                        values={Object.values(filters.rules)}
                        handleChecboxChange={handleRulesChange}
                    />

                    <input type="submit" />
                </div>
            </div>
        </form>
    );
};

export default Filters;
