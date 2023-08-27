import React from "react";

function Featurebox({ image, title }) {
    return (
        <div className="a-box">
            <div className="a-b-img">
                <img src={image} alt={title} />
            </div>
            <div className="a-b-text">
                <h2>{title}</h2>
                <p>Start Your Fitness Journey With Us...</p>
            </div>
        </div>
    );
}

export default Featurebox;
