import React from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import AdminTopBar from '../../Shared/AdminTopBar/AdminTopBar';
import MakeAdminForm from '../MakeAdminForm/MakeAdminForm';

const MakeAdmin = () => {
    return (
        <main className='container'>
            <AdminTopBar><h4>Make Admin</h4></AdminTopBar>
            <div className='row'>
                <AdminSideBar />
                <MakeAdminForm />
            </div>
        </main>
    );
};

export default MakeAdmin;