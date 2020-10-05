import React from "react";

import { BiChevronRight } from "react-icons/bi";

const Amenity = ({ name, value }) => {
    return (
        <p className="card-text">
            <BiChevronRight />
            {name}
        </p>
    );
};

export default Amenity;
