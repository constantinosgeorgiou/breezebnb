import React from "react";

import About from "./About";
import Greeting from "./Greeting";
import Reviews from "./Reviews";

const MainSection = ({
    user,
    password,
    reviews,
    handlePasswordChange,
    handleChange,
    handleAddressChange,
    handleSubmitAccInfo,
    handleSubmitPassword,
    handleSubmitAddress,
}) => {
    return (
        <div>
            <Greeting
                user={user}
                password={password}
                handlePasswordChange={handlePasswordChange}
                handleChange={handleChange}
                handleAddressChange={handleAddressChange}
                handleSubmitAccInfo={handleSubmitAccInfo}
                handleSubmitPassword={handleSubmitPassword}
                handleSubmitAddress={handleSubmitAddress}
            />
            <About
                about={user.about}
                state={user.address.state}
                country={user.address.country}
            />
            {reviews.length === 0 ? "" : <Reviews reviews={reviews} />}
        </div>
    );
};

export default MainSection;
