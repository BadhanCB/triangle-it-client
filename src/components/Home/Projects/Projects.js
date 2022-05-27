import React from "react";
import knowledgeHaven from "../../../images/knowledge-haven.web.app_.png";
import "./Projects.css";

const Projects = () => {
    return (
        <section
            style={{ padding: "50px 0", backgroundColor: "#e9ab04" }}
            id="featured-project"
        >
            <h1 className="text-center mb-3">Featured Project</h1>
            <div className="container projects-area">
                <div className="image-border">
                    <img src={knowledgeHaven} alt="project-photo" />
                    <h3>Knowledge Haven</h3>
                </div>
                <div className="image-border">
                    <img src={knowledgeHaven} alt="project-photo" />
                    <h3>Knowledge Haven</h3>
                </div>
                <div className="image-border">
                    <img src={knowledgeHaven} alt="project-photo" />
                    <h3>Knowledge Haven</h3>
                </div>
                <div className="image-border">
                    <img src={knowledgeHaven} alt="project-photo" />
                    <h3>Knowledge Haven</h3>
                </div>
                <div className="image-border">
                    <img src={knowledgeHaven} alt="project-photo" />
                    <h3>Knowledge Haven</h3>
                </div>
            </div>
        </section>
    );
};

export default Projects;
