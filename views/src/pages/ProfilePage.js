import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BiUser, BiStar, BiHomeCircle, BiHomeSmile } from "react-icons/bi";

import { getCurrentUser } from "../_services/authentication";
import { getReceivedReviews } from "../_services/user";

// const REVIEWS = getReceivedReviews(getCurrentUser().userName);

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: getCurrentUser(),
        };
    }

    render() {
        console.log("Profile User: " + JSON.stringify(this.state.user, null, 4));
        return (
            <main role="main">
                <div className="container pt-sm-2">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col">
                                    {/* <Synopsis user={this.state.user} /> */}
                                    <Hosting />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col">
                                    {/* <Profile user={this.state.user} /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

const Hosting = () => {
    return (
        <div className="card border-info my-4">
            <div className="card-body text-info">
                <div className="card-title">
                    <span className="align-middle">
                        <BiHomeSmile className="align-middle" size={24} />
                        <span className="card-title pl-2 h5 align-middle">
                            What is hosting?
                        </span>
                    </span>
                </div>

                <p className="card-text">
                    If you have an extra room, entire home, or expertise, you
                    can earn money by sharing it with anyone in the world. You
                    can host your home, activity, or do both. When you host is
                    up to you.
                </p>
                <div className="text-center">
                    <Link className="btn btn-lg btn-outline-info">
                        Apply for hosting
                    </Link>
                </div>
            </div>
        </div>
    );
};

const ProfilePicture = (props) => {
    return (
        <div className="card">
            <div className="card-body text-center">
                <img
                    className="card-img-center rounded-circle img-fluid img-circle-252 "
                    src={props.picture}
                    alt=""
                />
                <p className="card-text pt-4">
                    <Link className="text-dark">Update phote</Link>
                </p>
            </div>
        </div>
    );
};

const Stats = (props) => {
    return (
        <div className="card my-4">
            <div className="card-body">
                <p className="card-text">
                    <BiUser className="align-middle" size={24} />
                    <span className="pl-2">{props.userName}</span>
                </p>
                <p className="card-text">
                    <BiStar className="align-middle" size={24} />
                    <span className="card-text pl-2">
                        {props.reviews} reviews
                    </span>
                </p>
            </div>
        </div>
    );
};

const Greeting = (props) => {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <h1 className="card-title">Hi, I'm {props.firstName}</h1>
                <p className="card-text">{props.joined}</p>
                <Link className="card-text btn btn-outline-dark">
                    Edit profile
                </Link>
            </div>
        </div>
    );
};

const About = (props) => {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <h2 className="card-title">About</h2>
                <p className="card-text">{props.about}</p>
                <div className="card-text mt-4">
                    <BiHomeCircle className="align-middle" size={24} />
                    <span className="h5 pl-2 align-middle">
                        Lives in {props.address}
                    </span>
                </div>
            </div>
        </div>
    );
};

const ReviewAuthor = (props) => {
    const author = props.author;

    return (
        <div className="">
            <div className="row no-gutters">
                <div className="col-auto mr-2">
                    <img
                        src={author.picture}
                        className="rounded-circle img-circle-60"
                        alt=""
                    />
                </div>
                <div className="col">
                    <p className="mb-0 ">
                        <strong>
                            {author.firstName}, {author.address}
                        </strong>
                    </p>
                    <small className="text-muted m-0">
                        Joined in {author.joined_on}
                    </small>
                </div>
            </div>
        </div>
    );
};

const ListReviews = (props) => {
    const isLast = props.isLast;
    const review = props.review;

    return (
        <div>
            <div className="card-body">
                <small>{review.posted_on}</small>
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

const Reviews = (props) => {
    const reviews = props.reviews;
    const listReviews = reviews.map((review) =>
        review === reviews[reviews.length - 1] ? (
            <ListReviews key={review.reviewId} review={review} isLast={true} />
        ) : (
            <ListReviews key={review.reviewId} review={review} isLast={false} />
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

const Synopsis = (props) => {
    return (
        <div>
            <ProfilePicture picture={props.user.picture} />
            <Stats
                userName={props.user.userName}
                reviews={props.user.reviews.length}
            />
        </div>
    );
};

const Profile = (props) => {
    const user = props.user;

    return (
        <div>
            <Greeting firstName={user.firstName} joined={user.joined_on} />
            <About about={user.about} address={user.address} />
            <Reviews reviews={user.reviews} />
        </div>
    );
};

export default ProfilePage;
