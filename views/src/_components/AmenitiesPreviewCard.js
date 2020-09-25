import React, {
    Component,
    Fragment,
} from "react";

import { BiChevronRight } from "react-icons/bi";

const Amenity = ({ name, value }) => {
    return (
        <p className="card-text">
            <BiChevronRight />
            {name}
        </p>
    );
};

class AmenitiesPreviewCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { amenities } = this.props;

        return (
            <div className="card-body">
                <h3 className="card-title">
                    Amenities
                </h3>
                {amenities &&
                    Object.entries(amenities).map(
                        (foo) => {
                            if (foo[1] === true) {
                                return (
                                    <Amenity
                                        key={
                                            foo[0]
                                        }
                                        name={
                                            foo[0]
                                        }
                                        value={
                                            foo[0]
                                        }
                                    />
                                );
                            }
                            {
                            }
                        }
                    )}
            </div>
        );
    }
}

export default AmenitiesPreviewCard;
