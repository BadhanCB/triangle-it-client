import React, { useEffect, useState } from "react";
import TopNavBar from "../../Shared/TopNavBar/TopNavBar";

import img from "../../../images/knowledge-haven.web.app_.png";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("https://cryptic-waters-19850.herokuapp.com/projects", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((documents) => setProjects(documents));
    }, []);

    return (
        <>
            <header>
                <TopNavBar />
            </header>
            <section className="container py-5">
                {projects.length ? (
                    <div className="row g-4">
                        {projects.map((proj) => (
                            <ProjectCard
                                projectName={proj.projectName}
                                image={proj.image}
                                liveUrl={proj.liveUrl}
                                githubUrl={proj.githubUrl}
                                key={proj._id}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="w-100 text-center">
                        <div
                        class="spinner-border"
                        style={{width: "7rem", height: "7rem"}}
                        role="status"
                    >
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    </div>
                )}
            </section>
        </>
    );
};

export default Projects;
