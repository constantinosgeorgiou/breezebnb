import React from "react";

import { Modal } from "react-bootstrap";

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

export default Greeting;
