import React, { Component, Fragment } from "react";
import { BiStar } from "react-icons/bi";
import Listings from "../_components/Listings";
import AddNewListing from "../_components/AddNewListing";
import UserContext from "../_helpers/UserContext";

import { getListingsOfUser } from '../_services/users'

import { BiPlusCircle } from "react-icons/bi";

class HostDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoading: true,
            listings: []
        };
    }

    static contextType = UserContext;


    componentDidMount() {
        const { user: { id } } = this.context;

        getListingsOfUser(id).then((response) => {
            const { data: { listings } } = response

            this.setState((prevState) => ({
                ...prevState,
                listings,
                isLoading: false
            }))
        }).catch((error) => {
            this.setState((prevState) => ({
                ...prevState,
                error,
                isLoading: false
            }))
        })
    }

    render() {
        const { error, isLoading, listings } = this.state

        if (error) {
            return <div>Error: {error}</div>
        } else if (isLoading) {
            return <div>Loading...</div>
        } else {
            return (
                <main role="main">
                    <div className="container pt-sm-2">
                        <h1>Dashboard Host</h1>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col">
                                        <Stats />
                                        <ListingsHost
                                            listings={listings}
                                        />
                                    </div>
                                </div>
                            </div>
                            {Messages.length > 0 ?
                                <div className="col-lg-4">
                                    <div className="row">
                                        <div className="col">
                                            <Messages />
                                        </div>
                                    </div>
                                </div> : <Fragment></Fragment>
                            }
                        </div>
                    </div>
                </main>
            );
        }
    }
}

const Stats = () => {
    return (
        <div className="card my-4">
            <div className="card-body">
                <h2 className="card-text">Stats</h2>
                <div className="row">
                    <div className="col-sm">
                        <p className="card-text">
                            <BiStar className="align-middle mr-1" size={24} />
                            <span className="card-text">
                                4.3 Overall Rating
                            </span>
                        </p>
                    </div>
                    <div className="col-sm">
                        <span className="card-text">10 Total reviews</span>
                    </div>
                    <div className="col-sm">
                        <span className="card-text">
                            343.31$ Total earnings
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Messages = () => {
    return (
        <div className="card my-4">
            <div className="card-body">
                <h2 className="card-text">Messages</h2>
            </div>
        </div>
    );
};

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
        const { isOpen } = this.state
        const { listings } = this.props
        console.log("state: " + JSON.stringify(this.state, null, 4))


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
                        {listings.length > 0 ? <Listings listings={listings} />
                            : <div><p className="card-text">Add new listings to start earning</p></div>}
                    </div>
                </div>
            </div>
        );
    }
}

export default HostDashboard;
