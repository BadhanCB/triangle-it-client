import React from 'react';
import AdminTopBar from '../../Shared/AdminTopBar/AdminTopBar';
import AddProjectForm from '../AddProjectForm/AddProjectForm';
import AdminSideBar from '../AdminSideBar/AdminSideBar';

const AddProject = () => {
    return (
        <main className='container'>
            <AdminTopBar><h4>Add Projects</h4></AdminTopBar>
            <div className='row'>
                <AdminSideBar />
                <AddProjectForm />
            </div>
        </main>
    );
};

export default AddProject;