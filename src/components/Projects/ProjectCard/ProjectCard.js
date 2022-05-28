import React from "react";

const ProjectCard = ({ projectName, image, liveUrl, githubUrl }) => {
    
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card w-100 bg-light h-100">
                <img className="card-img-top" src={`data:${image.contentType};base64, ${image.img}`} alt={projectName} />
                <div className="card-body">
                    <h3 className="text-center">{projectName}</h3>
                    <div className="w-100 d-flex justify-content-evenly">
                    <a href={liveUrl} className="btn btn-secondary">Visit Website</a>
                    <a href={githubUrl} className="btn btn-dark">See Code</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
