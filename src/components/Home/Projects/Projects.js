import React, { useState } from "react";
import knowledgeHaven from "../../../images/knowledge-haven.web.app_.png";
import FeaturedProjectCard from "./FeaturedProjectCard";
import "./Projects.css";

const Projects = () => {
    const [featuredProjects, setFeaturedProjects] = useState([]);

    useState(() => {
        fetch("https://triangle-it-server.onrender.com/featured-projects")
            .then((res) => res.json())
            .then((data) => setFeaturedProjects(data));
    }, []);

    return (
        <section
            style={{ padding: "50px 0", backgroundColor: "#e9ab04" }}
            id="featured-project"
        >
            <h1 className="text-center mb-3">Featured Project</h1>
            <div >
                {featuredProjects.length ? (
                    <div className="container projects-area">
                        {featuredProjects.map((proj) => (
                            <FeaturedProjectCard
                                projectName={proj.projectName}
                                image={proj.image}
                                liveUrl={proj.liveUrl}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="w-100 text-center">
                        <div
                            class="spinner-border"
                            style={{ width: "7rem", height: "7rem" }}
                            role="status"
                        >
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
