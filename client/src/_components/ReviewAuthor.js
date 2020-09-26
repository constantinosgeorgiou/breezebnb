import React from "react";

const ReviewAuthor = ({ author }) => {
    return (
        <div className="">
            <div className="row no-gutters">
                <div className="col-auto mr-2">
                    <img
                        src={author.photo}
                        className="rounded-circle img-circle-60"
                        alt=""
                    />
                </div>
                <div className="col">
                    <p className="mb-0 ">
                        <strong>
                            {author.firstName}, {author.address.state},{" "}
                            {author.address.country}
                        </strong>
                    </p>
                    <small className="text-muted m-0">
                        Joined in {author.joined}
                    </small>
                </div>
            </div>
        </div>
    );
};

export default ReviewAuthor;
