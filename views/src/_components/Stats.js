import React from "react";

import { BiUser, BiStar } from "react-icons/bi";

const Stats = ({ userName, reviews }) => {
    return (
        <div className="card my-4">
            <div className="card-body">
                <p className="card-text">
                    <BiUser className="align-middle" size={24} />
                    <span className="pl-2">{userName}</span>
                </p>
                <p className="card-text">
                    <BiStar className="align-middle" size={24} />
                    <span className="card-text pl-2">{reviews} reviews</span>
                </p>
            </div>
        </div>
    );
};

export default Stats;
