import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

import SearchBar from "../_components/SearchBar";
import indexphoto from "../assets/imgs/index.jpg";

const HomePage = () => {
    return (
        <main role="main">

            <Jumbotron>
                <Container>
                    <SearchBar />
                </Container>
            </Jumbotron>
            <Container>
            <img
                                    src={indexphoto}
                                    className="card-img img-sign-in"
                                    alt=""
                                ></img>
            </Container>
        </main>
    );
};

export default HomePage;
