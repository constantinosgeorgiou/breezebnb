import React, { Component } from "react";

import { BiPlusCircle } from "react-icons/bi";
import AddNewListing from "components/AddNewListing/AddNewListing";
import Listings from "components/Listings";

class ListingsHost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    setIsOpen = () => {
        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
        }));
    };

    render() {
        const { isOpen } = this.state;
        const { listings } = this.props;
        console.log("state: " + JSON.stringify(this.state, null, 4));

        return (
            <div className="card my-4">
                <div className="card-body">
                    <div className="card-text">
                        <div className="row mb-4 justify-content-between">
                            <div className="col-auto ">
                                <h2>Listings</h2>
                            </div>
                            <div className="col-auto ">
                                <button
                                    type="button"
                                    className="btn btn-lg  btn-outline-success"
                                    onClick={this.setIsOpen}
                                >
                                    <span>
                                        <BiPlusCircle
                                            className="align-middle"
                                            size={36}
                                        />
                                        <span className="align-middle ml-2">
                                            Add new listing
                                        </span>
                                    </span>
                                </button>
                                <AddNewListing
                                    show={isOpen}
                                    onHide={this.setIsOpen}
                                />
                            </div>
                        </div>
                        {listings.length > 0 ? (
                            <Listings listings={listings} />
                        ) : (
                            <div>
                                <p className="card-text">
                                    Add new listings to start earning
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default ListingsHost;
