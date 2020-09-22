import React from "react";

import Listing from "./Listing.js";

const Listings = ({ listings }) => {
    const listListings = listings.map((listing) =>
        // Is current listing the last one? Do not display <hr /> else display <hr />
        listing === listings[listings.length - 1] ? (
            <>
                <Listing key={listing.id} listing={listing} />
                <hr className="d-none" />
            </>
        ) : (
            <>
                <Listing key={listing.id} listing={listing} />

                <hr className="my-4" />
            </>
        )
    );

    return (
        <div className="card">
            <div className="card-body">
                <h1 className="mb-5">Stays in {listings[0].location}</h1>
                {listListings}
            </div>
        </div>
    );
};

export default Listings;
