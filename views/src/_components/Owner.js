import React from "react";

const Owner = ({ owner }) => {
    console.log(
        "owner: " + JSON.stringify(owner)
    );
    return (
        <div className="card-body">
            <div className="row no-gutters">
                <div className="col-auto mr-2">
                    <img
                        src={owner.photo}
                        className="rounded-circle img-circle-60"
                        alt=""
                    />
                </div>
                <div className="col">
                    <h3 className="card-title mb-0">
                        Hosted by{" "}
                        {owner.firstName},{" "}
                    </h3>
                    <small className="text-muted m-0">
                        Joined in {owner.joined}
                    </small>
                </div>
            </div>
        </div>
    );
};

export default Owner;
