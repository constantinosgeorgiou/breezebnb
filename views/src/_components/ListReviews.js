import React from "react";

import ReviewAuthor from "./ReviewAuthor";

const ListReviews = ({ review, isLast }) => {
    return (
        <div>
            <div className="card-body">
                <small>{review.created}</small>
                <p>{review.text}</p>
                <ReviewAuthor author={review.author} />
            </div>
            <div>
                {isLast ? (
                    <hr className="my-0 d-none" />
                ) : (
                    <hr className="my-0" />
                )}
            </div>
        </div>
    );
};

export default ListReviews;
