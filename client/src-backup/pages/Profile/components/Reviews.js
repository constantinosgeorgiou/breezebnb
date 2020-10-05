import React from "react";
import ListReviews from "./ListReviews";

import { BiStar } from "react-icons/bi";

const Reviews = ({ reviews }) => {
    const listReviews = reviews.map((review) =>
        review === reviews[reviews.length - 1] ? (
            <ListReviews key={review.id} review={review} isLast={true} />
        ) : (
            <ListReviews key={review.id} review={review} isLast={false} />
        )
    );

    return (
        <div className="card mb-5">
            <div className="card-body">
                <div className="card-title">
                    <span className="align-middle">
                        <BiStar className="align-middle" size={36} />
                        <span className="h2 pl-2 align-middle">
                            {reviews.length} reviews
                        </span>
                    </span>
                </div>

                <div>{listReviews}</div>
            </div>
        </div>
    );
};

export default Reviews;
