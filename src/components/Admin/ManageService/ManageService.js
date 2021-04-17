import React from 'react';
import AdminTopBar from '../../Shared/AdminTopBar/AdminTopBar';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import ServiceTable from '../ServiceTable/ServiceTable';

const ManageService = () => {
    return (
        <main className='container'>
            <AdminTopBar><h4>Manage Service</h4></AdminTopBar>
            <div className='row'>
                <AdminSideBar />
                <ServiceTable />
            </div>
        </main>
    );
};

export default ManageService;