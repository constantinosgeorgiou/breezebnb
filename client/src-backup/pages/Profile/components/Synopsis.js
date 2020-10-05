import React from "react";

import ProfilePicture from "./ProfilePicture";
import Stats from "./Stats";

const Synopsis = ({ userName, picture, reviews }) => {
    return (
        <div>
            <ProfilePicture picture={picture} />
            <Stats userName={userName} reviews={reviews} />
        </div>
    );
};

export default Synopsis;
