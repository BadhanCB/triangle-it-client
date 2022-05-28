import React from "react";
import AdminTopBar from "../../Shared/AdminTopBar/AdminTopBar";
import AdminSideBar from "../AdminSideBar/AdminSideBar";

const ManageProject = () => {
    return (
        <main className="container">
            <AdminTopBar>
                <h4>Manage Projects</h4>
            </AdminTopBar>
            <div className="row">
                <AdminSideBar />
                <h1>All Projects</h1>
            </div>
        </main>
    );
};

export default ManageProject;
