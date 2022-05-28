import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSideBar.css';

const AdminSideBar = () => {
    return (
        <aside className='col-lg-3 col-md-4 col-sm-12 p-4'>
            <div className="container-fluid">
            <ul className='sidebar-list border-end border-info border-3'>
                <li>
                    <Link to='/admin/orderlist' className='sidebar-item' >Order List</Link>
                </li>
                <li>
                    <Link to='/admin/addservice' className='sidebar-item' >Add Service</Link>
                </li>
                <li>
                    <Link to='/admin/addproject' className='sidebar-item' >Add Project</Link>
                </li>
                <li>
                    <Link to='/admin/makeadmin' className='sidebar-item' >Make Admin</Link>
                </li>
                <li>
                    <Link to='/admin/manageservice' className='sidebar-item' >Manage Services</Link>
                </li>
                <li>
                    <Link to='/admin/manageproject' className='sidebar-item' >Manage Projects</Link>
                </li>
            </ul>
            </div>
        </aside>
    );
};

export default AdminSideBar;