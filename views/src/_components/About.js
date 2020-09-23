import React from "react";

import { BiHomeCircle } from "react-icons/bi";

const About = ({ about, state, country }) => {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <h2 className="card-title">About</h2>
                <p className="card-text">{about}</p>
                <div className="card-text mt-4">
                    <BiHomeCircle className="align-middle" size={24} />
                    <span className="h5 pl-2 align-middle">
                        Lives in {state}, {country}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default About;
