import React from "react";

const Jumbotron = (props) => {
    const { image } = props;

    const withBackgroundImage = {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: `100vw`,
        height: "80vh",
    };

    return <div style={withBackgroundImage}>{props.children}</div>;
};

export default Jumbotron;
