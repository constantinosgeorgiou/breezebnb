import React from "react";

import { Modal } from "react-bootstrap";

const Greeting = ({
    user,
    handleChange,
    handleAddressChange,
    handleSubmitAccInfo,
    handleSubmitPassword,
    handleSubmitAddress,
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
                        <h4>Change Password</h4>
                        <form onSubmit={handleSubmitPassword}>
                            <div className="form-group">
                                <label htmlFor="CurrentPasswordInput">Current Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="CurrentPasswordInput"
                                    name="password"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="NewPasswordInput">New Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="NewPasswordInput"
                                    name="newpassword"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="ConfirmNewPasswordInput">Confirm New Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="CurrentPasswordInput"
                                    name="confirmnewpassword"
                                    onChange={handleChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary mb-2"
                            >
                                Change Password
                            </button>
                        </form>
                        <h4>Account Inforamtions</h4>
                        <form onSubmit={handleSubmitAccInfo}>
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
                            <div className="form-group">
                                <label htmlFor="phoneInput">Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phoneInput"
                                    name="phone"
                                    value={user.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="firstNameInput">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstNameInput"
                                    name="firstName"
                                    value={user.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastNameInput">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    name="lastName"
                                    value={user.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            
                            <button
                                type="submit"
                                className="btn btn-primary mb-2"
                            >
                                Change Account Inforamtions
                            </button>
                        </form>
                        <h4>Address</h4>
                        <form onSubmit={handleSubmitAddress}>
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
                            <div className="form-group">
                                <label htmlFor="stateInput">State</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="stateInput"
                                    name="state"
                                    value={user.address.state}
                                    onChange={handleAddressChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cityInput">City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cityInput"
                                    name="city"
                                    value={user.address.city}
                                    onChange={handleAddressChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="zipCodeInput">Zip Code</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="zipCodeInput"
                                    name="zipCode"
                                    value={user.address.zipCode}
                                    onChange={handleAddressChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="streetAddressInput">Street Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="streetAddressInput"
                                    name="streetAddress"
                                    value={user.address.streetAddress}
                                    onChange={handleAddressChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="zipCodeInput">Apartment Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="apartmentNumberInput"
                                    name="apartmentNumber"
                                    value={user.address.apartmentNumber}
                                    onChange={handleAddressChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary mb-2"
                            >
                                Change Address Inforamtions
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
