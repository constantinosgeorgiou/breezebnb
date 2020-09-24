import React from "react";

import About from "./About";
import Greeting from "./Greeting";
import Reviews from "./Reviews";

const Profile = ({
    user,
    reviews,
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

export default Profile;
