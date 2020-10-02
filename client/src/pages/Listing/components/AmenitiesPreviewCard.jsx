import React, { Component } from "react";

import Amenity from "./Amenity";

class AmenitiesPreviewCard extends Component {
    render() {
        const { amenities } = this.props;

        return (
            <div className="card-body">
                <h3 className="card-title">Amenities</h3>
                {amenities &&
                    Object.entries(amenities).map((foo) => {
                        if (foo[1] === true) {
                            return (
                                <Amenity
                                    key={foo[0]}
                                    name={foo[0]}
                                    value={foo[0]}
                                />
                            );
                        } else {
                            return <></>;
                        }
                    })}
            </div>
        );
    }
}

export default AmenitiesPreviewCard;
