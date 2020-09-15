import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BiUser, BiStar, BiHomeCircle, BiHomeSmile } from "react-icons/bi";

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                userName: "terminator",
                firstName: "Arnold",
                lastName: "Schwarzenegger",
                email: "gettothe@choppa.com",
                phone: "999-999-9099",
                role: "host",
                address: "Santa Monica, California",
                joined_on: "October 2018",
                about:
                    "Lorem consectetur labore id esse dolor culpa aliquip do cillum. Eu consequat aute nulla amet in ut est cupidatat commodo. Nisi aute Lorem enim veniam elit adipisicing enim culpa eiusmod exercitation fugiat amet incididunt anim. Ex voluptate esse adipisicing in commodo cillum ad id ullamco consequat aute deserunt ad. Reprehenderit ipsum irure minim elit consectetur sit do minim irure velit sit esse est ad. Aliquip aliqua quis do anim cillum. Occaecat mollit ullamco proident pariatur in cupidatat culpa sunt magna dolore esse cupidatat nisi.",
                picture:
                    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fbe%2FArnold_Schwarzenegger_-_2019_%252833730956438%2529_%2528cropped%2529.jpg%2F1200px-Arnold_Schwarzenegger_-_2019_%252833730956438%2529_%2528cropped%2529.jpg&f=1&nofb=1",
                reviews: [
                    {
                        reviewId: "1",
                        author: {
                            firstName: "Lucia",
                            picture:
                                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.cbrimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2019%2F06%2Fblack-widow-civil-war3.jpg&f=1&nofb=1",
                            address: "Houston, Texas",
                            joined_on: "July 2010",
                        },
                        text:
                            "Eiusmod enim adipisicing sunt ipsum occaecat laborum eu commodo. Deserunt occaecat qui consequat officia ipsum in veniam incididunt ut. Labore magna qui ad duis ad cillum dolore commodo deserunt pariatur enim. Officia incididunt ad nisi in proident eiusmod aliquip voluptate cupidatat fugiat voluptate excepteur adipisicing adipisicing. Est cillum cupidatat officia ex incididunt aliqua adipisicing do elit culpa irure ad eu eu. Veniam deserunt aliquip non laborum ut cillum aliqua tempor anim laboris qui deserunt qui cillum. Aute mollit id pariatur reprehenderit cillum sunt cupidatat.",
                        posted_on: "October 2018",
                    },
                    {
                        reviewId: "2",
                        author: {
                            firstName: "Andrew",
                            address: "Athens, Greece",
                            picture:
                                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnyppagesix.files.wordpress.com%2F2019%2F09%2Fshia.jpg%3Fquality%3D90%26strip%3Dall%26w%3D1200&f=1&nofb=1",
                            joined_on: "July 2013",
                        },
                        text:
                            "Eiusmod enim adipisicing sunt ipsum occaecat laborum eu commodo. Deserunt occaecat qui consequat officia ipsum in veniam incididunt ut. Labore magna qui ad duis ad cillum dolore commodo deserunt pariatur enim. Officia incididunt ad nisi in proident eiusmod aliquip voluptate cupidatat fugiat voluptate excepteur adipisicing adipisicing. Est cillum cupidatat officia ex incididunt aliqua adipisicing do elit culpa irure ad eu eu. Veniam deserunt aliquip non laborum ut cillum aliqua tempor anim laboris qui deserunt qui cillum. Aute mollit id pariatur reprehenderit cillum sunt cupidatat.",
                        posted_on: "October 2020",
                    },
                ],
            },
        };
    }

    render() {
        return (
            <main role="main">
                <div className="container pt-sm-2">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col">
                                    <Synopsis user={this.state.user} />
                                    <Hosting />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col">
                                    <Profile user={this.state.user} />
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
                    <span className="card-text pl-2">{props.reviews} reviews</span>
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
                {isLast ? <hr className="my-0 d-none" /> : <hr className="my-0" />}
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
