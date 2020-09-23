import React from "react";

import About from "./About";
import Greeting from "./Greeting";
import Reviews from "./Reviews";

const Profile = ({
    user,
    reviews,
    handleChange,
    handleAddressChange,
    handleSubmit,
}) => {
    return (
        <div>
            <Greeting
                user={user}
                handleChange={handleChange}
                handleAddressChange={handleAddressChange}
                handleSubmit={handleSubmit}
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
