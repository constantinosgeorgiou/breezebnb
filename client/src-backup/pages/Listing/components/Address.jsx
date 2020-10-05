import React from "react";

import { BiMap } from "react-icons/bi";

const Address = ({ address }) => {
    return (
        <div className="card-body">
            <h3 className="card-title">
                <BiMap size={36} /> Location
            </h3>
            <p className="card-text">
                {address.city}, {address.state}, {address.country}
            </p>
        </div>
    );
};

export default Address;
