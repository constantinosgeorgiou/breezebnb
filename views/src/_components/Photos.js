import React from 'react'
import { Carousel } from "react-bootstrap";

const Photos = ({ photos }) => {
    return (
        <Carousel>
            <Carousel.Item>
                <img src={photos[0]} alt="" />
            </Carousel.Item>
        </Carousel>
    );
};

export default Photos