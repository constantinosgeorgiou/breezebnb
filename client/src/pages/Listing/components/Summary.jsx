import React from 'react'

const Summary = ({ propertyType, guests, space, owner }) => {
    return (
        <div className="card-header bg-transparent p-0">
            <div className="row no-gutters">
                <div className="col">
                    <h2 className="card-title mb-1">
                        <span className="col-md p-0">{propertyType}</span>
                        <span className="col-md p-0"> hosted by {owner.firstName}</span>
                    </h2>
                    <p>
                        <span>
                            {guests} guest
                            {guests === 1 ? "" : "s"}
                        </span>
                        <span className="mx-2">·</span>
                        <span>
                            {space.beds} bed
                            {space.beds === 1 ? "" : "s"}
                        </span>
                        <span className="mx-2">·</span>
                        <span>
                            {space.bedrooms} bedroom
                            {space.bedrooms === 1 ? "" : "s"}
                        </span>
                        <span className="mx-2">·</span>
                        <span>
                            {space.bathrooms} bathroom
                            {space.bathrooms === 1 ? "" : "s"}
                        </span>
                    </p>
                </div>
                <div className="col-auto mr-2  align-self-center red-border">
                    <img
                        src={owner.photo}
                        className="rounded-circle img-circle-60"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Summary