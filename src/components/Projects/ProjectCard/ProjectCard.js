import React from "react";

const ProjectCard = ({ name, img, liveUrl, githubUrl }) => {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="card w-100 bg-light">
                <img className="card-img-top" src={img} alt={name} />
                <div className="card-body">
                    <h3>{name}</h3>
                    <div className="w-100 d-flex justify-content-evenly">
                    <a href={liveUrl} className="btn btn-secondary">Visit Website</a>
                    <a href={githubUrl} className="btn btn-dark">See Code</a>
                    </div>
                </div>
            </div>
        </div>
        // <div>
        //     <img src={img} alt={name} />
        //     <div>
        //         <h1>{name}</h1>
        //         <a href={liveUrl}>Visit Live Website</a>
        //         <a href={githubUrl}>See Source Code</a>
        //     </div>
        // </div>
    );
};

export default ProjectCard;
