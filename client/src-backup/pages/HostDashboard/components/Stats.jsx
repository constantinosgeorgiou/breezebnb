import React from "react";

import { BiStar } from "react-icons/bi";

const Stats = () => {
    return (
        <div className="card my-4">
            <div className="card-body">
                <h2 className="card-text">Stats</h2>
                <div className="row">
                    <div className="col-sm">
                        <p className="card-text">
                            <BiStar className="align-middle mr-1" size={24} />
                            <span className="card-text">
                                4.3 Overall Rating
                            </span>
                        </p>
                    </div>
                    <div className="col-sm">
                        <span className="card-text">10 Total reviews</span>
                    </div>
                    <div className="col-sm">
                        <span className="card-text">
                            343.31$ Total earnings
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
