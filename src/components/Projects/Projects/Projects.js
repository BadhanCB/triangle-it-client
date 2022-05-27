import React from "react";
import TopNavBar from "../../Shared/TopNavBar/TopNavBar";

import img from "../../../images/knowledge-haven.web.app_.png";
import ProjectCard from "../ProjectCard/ProjectCard";

const projects = [
    {
        name: "Kanwledge Haven",
        img,
        liveUrl: "https:\\www.google.com",
        githubUrl: "https:\\www.github.com",
        isFeatured: false,
    },
    {
        name: "Kanwledge Haven",
        img,
        liveUrl: "https:\\www.google.com",
        githubUrl: "https:\\www.github.com",
        isFeatured: true,
    },
    {
        name: "Kanwledge Haven",
        img,
        liveUrl: "https:\\www.google.com",
        githubUrl: "https:\\www.github.com",
        isFeatured: false,
    },
    {
        name: "Kanwledge Haven",
        img,
        liveUrl: "https:\\www.google.com",
        githubUrl: "https:\\www.github.com",
        isFeatured: true,
    },
    {
        name: "Kanwledge Haven",
        img,
        liveUrl: "https:\\www.google.com",
        githubUrl: "https:\\www.github.com",
        isFeatured: false,
    },
    {
        name: "Kanwledge Haven",
        img,
        liveUrl: "https:\\www.google.com",
        githubUrl: "https:\\www.github.com",
        isFeatured: true,
    },
    {
        name: "Kanwledge Haven",
        img,
        liveUrl: "https:\\www.google.com",
        githubUrl: "https:\\www.github.com",
        isFeatured: false,
    },
    {
        name: "Kanwledge Haven",
        img,
        liveUrl: "https:\\www.google.com",
        githubUrl: "https:\\www.github.com",
        isFeatured: true,
    },
    {
        name: "Kanwledge Haven",
        img,
        liveUrl: "https:\\www.google.com",
        githubUrl: "https:\\www.github.com",
        isFeatured: false,
    },
    {
        name: "Kanwledge Haven",
        img,
        liveUrl: "https:\\www.google.com",
        githubUrl: "https:\\www.github.com",
        isFeatured: true,
    },
];

const Projects = () => {
    console.log(projects);
    return (
        <>
            <header>
                <TopNavBar />
            </header>
            <section className="container py-5">
                <div className="row g-4">
                    {projects.map((proj, index) => (
                        <ProjectCard
                            name={proj.name}
                            img={proj.img}
                            liveUrl={proj.liveUrl}
                            githubUrl={proj.githubUrl}
                            key={proj.name + index}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Projects;
