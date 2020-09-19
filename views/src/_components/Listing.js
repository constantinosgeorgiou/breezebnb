import React from "react";

import { Link } from "react-router-dom";

import { BiStar } from "react-icons/bi";

const Listing = ({ listing }) => {
    return (
        <div className="card rounded-lg border-0">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <Link
                        to={`/listings/${listing.id}`}
                        className="stretched-link text-reset"
                    >
                        <img
                            src={listing.pictures[0].url}
                            alt=""
                            className=" card-img"
                        />
                    </Link>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <Link
                            style={{ textDecoration: "none" }}
                            to={`/listings/${listing.id}`}
                            className="stretched-link text-reset"
                        >
                            <div className="row">
                                <div className="col">
                                    <p className="card-text mb-0">
                                        <small>
                                            {listing.type} in{" "}
                                            {listing.address.state}
                                        </small>
                                    </p>
                                    <h5 className="card-title mb-0">
                                        {listing.title}
                                    </h5>
                                    <p className="card-text mb-0">
                                        <small>
                                            {listing.guests} guest
                                            {listing.guests === 1
                                                ? ""
                                                : "s"} · {listing.space.beds}{" "}
                                            bed
                                            {listing.space.beds === 1
                                                ? ""
                                                : "s"}{" "}
                                            · {listing.space.bathrooms} bathroom
                                            {listing.space.bathrooms === 1
                                                ? ""
                                                : "s"}
                                        </small>
                                    </p>
                                    <p className="card-text">
                                        <small>
                                            {listing.amenities.airConditioning
                                                ? "Air conditioning"
                                                : ""}{" "}
                                            ·{" "}
                                            {listing.amenities.wifi
                                                ? "Wifi"
                                                : ""}{" "}
                                            ·{" "}
                                            {listing.amenities.breakfast
                                                ? "Breakfast"
                                                : ""}
                                        </small>
                                    </p>
                                </div>
                                <div className="col-auto">
                                    <p className="card-text">
                                        <span className="align-middle">
                                            <BiStar
                                                className="text-primary align-middle"
                                                size={24}
                                            />{" "}
                                            <span className="h5 align-middle">
                                                {listing.rating}
                                            </span>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Listing;
