import React from "react";
import { Link } from "react-router-dom";
import { BiHomeSmile } from "react-icons/bi";

const HostingInformation = () => {
    return (
        <div className="card border-info my-4">
            <div className="card-body text-info">
                <div className="card-title">
                    <span className="align-middle">
                        <BiHomeSmile className="align-middle" size={24} />
                        <span className="card-title pl-2 h5 align-middle">
                            What is hosting?
                        </span>
                    </span>
                </div>

                <p className="card-text">
                    If you have an extra room, entire home, or expertise, you
                    can earn money by sharing it with anyone in the world. You
                    can host your home, activity, or do both. When you host is
                    up to you.
                </p>
                <div className="text-center">
                    <Link
                        to="/apply-for-hosting"
                        className="btn btn-lg btn-outline-info"
                    >
                        Apply for hosting
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HostingInformation;
