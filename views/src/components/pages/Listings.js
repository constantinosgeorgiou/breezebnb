import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";

import ListingPreview from "../ListingPreview";

class Listings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            listings: [],
        };
    }

    componentDidMount() {
        axios.get("http://localhost:5000/listings").then(
            (result) => {
                // console.log("Result: ", result);
                this.setState({
                    isLoaded: true,
                    listings: result.data,
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error,
                });
            }
        );
    }

    render() {
        const { error, isLoaded, listings } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Container fluid="md">
                    <Jumbotron>
                        <h1>Available places to stay</h1>
                    </Jumbotron>
                    <Row>
                        {listings.map((listing) => (
                            <Col md={3}>
                                <Link to={`/listings/${listing.listing_id}`}>
                                    <ListingPreview key={listing.listing_id} {...listing} />
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Container>
            );
        }
    }
}

export default Listings;
