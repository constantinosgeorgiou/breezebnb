import React from "react";

import { Container, Typography } from "@material-ui/core";

// import SearchBar from "components/SearchBar";

import eifell_tower from "assets/images/eifell_tower.jpg";

const Home = () => {
    const withBackgroundImage = {
        backgroundImage: `url(${eifell_tower})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: `100vw`,
        height: "80vh",
    };

    return (
        <Container
            component="main"
            maxWidth="xl"
            disableGutters
            style={withBackgroundImage}
        >
            <Typography component="h1" variant="h3" color="inherit">
                This is a title
            </Typography>
            {/* <SearchBar /> */}
        </Container>
    );
};

export default Home;
