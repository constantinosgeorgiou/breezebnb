import React, { Component } from "react";

class Listings extends Component {
    render({ listings }) {
        return (
            <div>
                <center>
                    <h1>Listings</h1>
                </center>
                {listings.map((listing) => (
                    <div>
                        <h1>{listing.name}</h1>
                    </div>
                ))}
            </div>
        );
    }
}

export default Listings;
