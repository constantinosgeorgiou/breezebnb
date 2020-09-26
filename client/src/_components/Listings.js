import React, { Fragment } from "react";

import Listing from "./Listing.js";

const Listings = ({ listings }) => {
    const listListings = listings.map((listing) => (
        <Fragment key={listing.id}>
            <Listing listing={listing} />
            {/* Diplay <hr /> if current listing is not the last one */}
            {listing === listings[listings.length - 1] ? (
                <hr className="d-none" />
            ) : (
                <hr className="my-4" />
            )}
        </Fragment>
    ));

    return (
        <div className="card">
            <div className="card-body">
                {listListings}
            </div>
        </div>
    );
};

export default Listings;
