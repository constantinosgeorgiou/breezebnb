import React from "react";

const ProfilePicture = ({ picture }) => {
    return (
        <div className="card">
            <div className="card-body text-center">
                <img
                    className="card-img-center rounded-circle img-fluid img-circle-252 "
                    src={picture}
                    alt=""
                />
                {/* <p className="card-text pt-4">
                    <Link className="text-dark">Update phote</Link>
                </p> */}
            </div>
        </div>
    );
};

export default ProfilePicture;
