import React from "react";
import AdminTopBar from "../../Shared/AdminTopBar/AdminTopBar";
import AdminSideBar from "../AdminSideBar/AdminSideBar";
import ProjectListArea from "./ProjectListArea";

const ManageProject = () => {
    return (
        <main className="container">
            <AdminTopBar>
                <h4>Manage Projects</h4>
            </AdminTopBar>
            <div className="row">
                <AdminSideBar />
                <ProjectListArea />
            </div>
        </main>
    );
};

export default ManageProject;
