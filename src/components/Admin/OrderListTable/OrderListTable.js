import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import OrderTableRow from '../OrderTableRow/OrderTableRow';

const OrderListTable = () => {
    const [orderList, setOrderList] = useState([]);
    const [user] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/allBooking', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: user.email}),
        })
        .then(res => res.json())
        .then(data => setOrderList(data));
    }, [user.email])

    return (
        <div className='col-lg-9 col-md-8 col-sm-12 p-4'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Service</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderList.map(order => <OrderTableRow order={order} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default OrderListTable;