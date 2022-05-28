import React from "react";

const FeaturedProjectCard = ({ projectName, image, liveUrl }) => {
    return (
        <div className="image-border" onClick={() => window.open(liveUrl)}>
            <img className="card-img-top" src={`data:${image.contentType};base64, ${image.img}`} alt={projectName} />
            <h3>{projectName}</h3>
        </div>
    );
};

export default FeaturedProjectCard;
