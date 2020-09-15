import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import ListingPreview from "./ListingPreview";
import axios from "axios";

class LocationSearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            listings: [],
            listing_location: "",
            check_in: "",
            check_out: "",
        };
    }

    handleChangeOnLocation = (event) => {
        this.setState({ listing_location: event.target.value });
    };
    handleChangeOnCheckIn = (event) => {
        this.setState({ check_in: event.target.value });
    };
    handleChangeOnCheckOut = (event) => {
        this.setState({ check_out: event.target.value });
    };
    handleSubmit = (event) => {
        event.preventDefault();

        const location = {
            listing_location: this.state.listing_location,
            check_in: this.state.check_in,
            check_out: this.state.check_out,
        };

        axios.post(`http://localhost:5000/listings/search`, location).then(
            (res) => {
                this.setState({
                    isLoaded: true,
                    listings: res.data,
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error,
                });
            }
        );
    };
    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="listing_location"
                        onChange={this.handleChangeOnLocation}
                    />
                    <input
                        type="text"
                        name="check_in"
                        placeholder="DD/MM/YYYY"
                        onChange={this.handleChangeOnCheckIn}
                    />
                    <input
                        type="text"
                        name="check_out"
                        placeholder="DD/MM/YYYY"
                        onChange={this.handleChangeOnCheckOut}
                    />
                    <button>Search</button>
                </form>
                <Container fluid="md">
                    <Jumbotron>
                        <h1>Available places to stay</h1>
                    </Jumbotron>
                    <Row>
                        {this.state.listings.map((listing) => (
                            <Col md={3}>
                                <Link to={`/listings/${listing.listing_id}`}>
                                    <ListingPreview
                                        key={listing.listing_id}
                                        {...listing}
                                    />
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
export default LocationSearchBar;
