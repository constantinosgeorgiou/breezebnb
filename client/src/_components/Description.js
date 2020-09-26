import React from 'react'

const Description = ({ description, contactHost }) => {
    return (
        <div className="card-body p-0">
            <p className="card-text">{description}</p>

            <button className="btn btn-outline-secondary" onClick={contactHost}>
                Contact host
            </button>
        </div>
    );
};

export default Description