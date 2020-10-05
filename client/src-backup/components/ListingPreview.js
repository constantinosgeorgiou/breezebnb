import React, { Fragment } from "react";
import { Card } from "react-bootstrap";

const ListingPreview = (props, { match }) => {
    return (
        <Fragment>
            <Card key={props.listing_id}>
                <Card.Img variant="top" src={props.picture} />
                <Card.Body>
                    <Card.Text>
                        {props.property_type}
                        {" : "}
                        {props.listing_location}
                    </Card.Text>
                    <Card.Text>{props.listing_title}</Card.Text>
                </Card.Body>
            </Card>
            <p></p>
        </Fragment>
    );
};

export default ListingPreview;
