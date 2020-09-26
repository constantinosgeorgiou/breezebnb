import React from "react";

const SpaceCard = ({ name, quantity, icon }) => {
    return (
        <div className="card mb-4 rounded-pill">
            <div className="card-body">
                <div className="row justify-content-center">
                    {icon}
                </div>
                <div className="row justify-content-center">
                    <h5 className="card-title mb-0">
                        {name}
                    </h5>
                </div>
                <div className="row justify-content-center">
                    <p className="font-weight-normal mb-0">
                        {quantity}
                    </p>
                </div>
            </div>
        </div>
    );
};
export default SpaceCard;
