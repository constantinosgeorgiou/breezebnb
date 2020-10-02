import React, { Component, Fragment } from "react";

import { UserContextConsumer } from "context/userContext";

import { getListingsOfUser } from "services/users";

import Messages from "./components/Messages";
import Stats from "./components/Stats";
import ListingsHost from "./components/ListingsHost";

class HostDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoading: true,
            listings: [],
        };
    }

    static contextType = UserContextConsumer;

    componentDidMount() {
        const {
            user: { id },
        } = this.context;

        getListingsOfUser(id)
            .then((response) => {
                const {
                    data: { listings },
                } = response;

                this.setState((prevState) => ({
                    listings,
                    isLoading: false,
                }));
            })
            .catch((error) => {
                this.setState((prevState) => ({
                    error,
                    isLoading: false,
                }));
            });
    }

    render() {
        const { error, isLoading, listings } = this.state;

        if (error) {
            return <div>Error: {error}</div>;
        } else if (isLoading) {
            return <div>Loading...</div>;
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
                                        <ListingsHost listings={listings} />
                                    </div>
                                </div>
                            </div>
                            {Messages.length > 0 ? (
                                <div className="col-lg-4">
                                    <div className="row">
                                        <div className="col">
                                            <Messages />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Fragment></Fragment>
                            )}
                        </div>
                    </div>
                </main>
            );
        }
    }
}

export default HostDashboard;
