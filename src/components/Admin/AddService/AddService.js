import React from 'react';
import AddServiceForm from '../AddServiceForm/AddServiceForm';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import AdminTopBar from '../../Shared/AdminTopBar/AdminTopBar';

const AddService = () => {
    return (
        <main className='container'>
            <AdminTopBar><h4>Add Service</h4></AdminTopBar>
            <div className='row'>
                <AdminSideBar />
                <AddServiceForm />
            </div>
        </main>
    );
};

export default AddService;