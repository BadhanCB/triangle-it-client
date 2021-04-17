import React from 'react';
import AdminSideBar from '../AdminSideBar/AdminSideBar';
import AdminTopBar from '../../Shared/AdminTopBar/AdminTopBar';
import OrderListTable from '../OrderListTable/OrderListTable';

const OrderList = () => {
    return (
        <main className='container'>
            <AdminTopBar><h4>Order List</h4></AdminTopBar>
            <div className='row'>
                <AdminSideBar />
                <OrderListTable />
            </div>
        </main>
    );
};

export default OrderList;