import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BiUser, BiStar, BiHomeCircle, BiHomeSmile } from "react-icons/bi";

import { getCurrentUser } from "../_services/authentication";
import { getReceivedReviews } from "../_services/user";

import { Modal } from "react-bootstrap";

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: getCurrentUser(),
            reviews: [],
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        getReceivedReviews(this.state.user.userName).then((response) => {
            this.setState((prevState) => ({
                reviews: response.data.reviews,
            }));
        });
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState((prevState) => ({
            user: {
                ...prevState.user,
                [name]: value,
            },
        }));
    };

    handleAddressChange = (event) => {
        const { name, value } = event.target;

        this.setState((prevState) => ({
            user: {
                ...prevState.user,
                address: {
                    ...prevState.user.address,
                    [name]: value,
                },
            },
        }));
    };

    handleSubmit = (event) => {
        event.preventDefault();

        alert("changed user: " + JSON.stringify(this.state.user, null, 4));
        // updateUser(user);
    };

    render() {
        return (
            <main role="main">
                <div className="container pt-sm-2">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col">
                                    <Synopsis
                                        user={this.state.user}
                                        reviews={this.state.reviews}
                                    />
                                    <Hosting />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col">
                                    <Profile
                                        user={this.state.user}
                                        reviews={this.state.reviews}
                                        handleChange={this.handleChange}
                                        handleAddressChange={
                                            this.handleAddressChange
                                        }
                                        handleSubmit={this.handleSubmit}
                                    />
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
                    <Link
                        to="/apply-for-hosting"
                        className="btn btn-lg btn-outline-info"
                    >
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
                {/* <p className="card-text pt-4">
                    <Link className="text-dark">Update phote</Link>
                </p> */}
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

const Greeting = ({
    user,
    handleChange,
    handleAddressChange,
    handleSubmit,
}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h1 className="card-title">Hi, I'm {user.firstName}</h1>
                <p className="card-text">{user.joined}</p>
                {/* <Link className="card-text btn btn-outline-dark">
                    Edit profile
                </Link> */}
                <button
                    className="card-text btn btn-outline-dark"
                    onClick={showModal}
                >
                    Edit Profile
                </button>
                <Modal show={isOpen} onHide={hideModal} size="lg">
                    <Modal.Header>
                        <Modal.Title>Edit Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Account Inforamtions</h4>
                        <label htmlFor="inputPassword">
                            &nbsp;&nbsp;&nbsp;&nbsp;Password
                        </label>
                        <form className="form-inline">
                            <div className="form-group mb-2"></div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label for="inputPassword" className="sr-only">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputPassword"
                                    placeholder="Password"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary mb-2"
                            >
                                Change password
                            </button>
                        </form>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="emailInput">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="emailInput"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* <label htmlFor="inputEmail">
                                &nbsp;&nbsp;&nbsp;&nbsp;Email Address
                            </label>
                            <div className="form-group mb-2"></div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label for="inputEmail" className="sr-only">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="inputEmail"
                                    placeholder="new@mail.com"
                                />
                            </div> */}
                            <button
                                type="submit"
                                className="btn btn-primary mb-2"
                            >
                                Change Email Address
                            </button>
                        </form>

                        <label htmlFor="inputPhone">
                            &nbsp;&nbsp;&nbsp;&nbsp;Phone
                        </label>
                        <form className="form-inline">
                            <div className="form-group mb-2"></div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label for="inputPhone" className="sr-only">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputPhone"
                                    placeholder="123 456 7891"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary mb-2"
                            >
                                Change Phone
                            </button>
                        </form>
                        <h4>Address</h4>
                        <label htmlFor="inputCountry">
                            &nbsp;&nbsp;&nbsp;&nbsp;Country
                        </label>
                        <form className="form-inline">
                            <div className="form-group mb-2"></div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label for="inputCountry" className="sr-only">
                                    Country
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputCountry"
                                    placeholder="Greece"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary mb-2"
                            >
                                Change Country
                            </button>
                        </form>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="countryInput">Country</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="countryInput"
                                    name="country"
                                    value={user.address.country}
                                    onChange={handleAddressChange}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary mb-2"
                            >
                                Change Address
                            </button>
                        </form>

                        <label htmlFor="inputState">
                            &nbsp;&nbsp;&nbsp;&nbsp;State
                        </label>
                        <form className="form-inline">
                            <div className="form-group mb-2"></div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label for="inputState" className="sr-only">
                                    State
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputState"
                                    placeholder="Attiki"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary mb-2"
                            >
                                Change State
                            </button>
                        </form>

                        <label htmlFor="inputCity">
                            &nbsp;&nbsp;&nbsp;&nbsp;City
                        </label>
                        <form className="form-inline">
                            <div className="form-group mb-2"></div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label for="inputCity" className="sr-only">
                                    City
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputCity"
                                    placeholder="Athens"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary mb-2"
                            >
                                Change City
                            </button>
                        </form>
                        <label htmlFor="inputZipCode">
                            &nbsp;&nbsp;&nbsp;&nbsp;Zip Code
                        </label>
                        <form className="form-inline">
                            <div className="form-group mb-2"></div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label for="inputZipCode" className="sr-only">
                                    Zip Code
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputZipCode"
                                    placeholder="12345"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary mb-2"
                            >
                                Change Zip Code
                            </button>
                        </form>
                        <label htmlFor="inputStreetAddress">
                            &nbsp;&nbsp;&nbsp;&nbsp;Street Address
                        </label>
                        <form className="form-inline">
                            <div className="form-group mb-2"></div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label
                                    for="inputStreetAddress"
                                    className="sr-only"
                                >
                                    Street Address
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputStreetAddress"
                                    placeholder="1234 Main St"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary mb-2"
                            >
                                Change Street Address
                            </button>
                        </form>
                        <label htmlFor="inputApartmentNumber">
                            &nbsp;&nbsp;&nbsp;&nbsp;Apartment number
                        </label>
                        <form className="form-inline">
                            <div className="form-group mb-2"></div>
                            <div className="form-group mx-sm-3 mb-2">
                                <label
                                    for="inputApartmentNumber"
                                    className="sr-only"
                                >
                                    Apartment number
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputApartmentNumber"
                                    placeholder="1234 Main St"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary mb-2"
                            >
                                Change Apartment number
                            </button>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button
                            className="card-text btn btn-outline-dark"
                            onClick={hideModal}
                        >
                            Exit
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

const About = ({ user }) => {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <h2 className="card-title">About</h2>
                <p className="card-text">{user.about}</p>
                <div className="card-text mt-4">
                    <BiHomeCircle className="align-middle" size={24} />
                    <span className="h5 pl-2 align-middle">
                        Lives in {user.address.state}, {user.address.country}
                    </span>
                </div>
            </div>
        </div>
    );
};

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

const Synopsis = ({ user, reviews }) => {
    return (
        <div>
            <ProfilePicture picture={user.picture} />
            <Stats userName={user.userName} reviews={reviews.length} />
        </div>
    );
};

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
            <About user={user} />
            {reviews.length === 0 ? "" : <Reviews reviews={reviews} />}
        </div>
    );
};

export default ProfilePage;
