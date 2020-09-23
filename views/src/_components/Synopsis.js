import React from "react";

import ProfilePicture from "../_components/ProfilePicture";
import Stats from "../_components/Stats";

const Synopsis = ({ userName, picture, reviews }) => {
    return (
        <div>
            <ProfilePicture picture={picture} />
            <Stats userName={userName} reviews={reviews} />
        </div>
    );
};

export default Synopsis;
