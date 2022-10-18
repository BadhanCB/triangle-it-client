import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import OrderTableRow from '../OrderTableRow/OrderTableRow';

const OrderListTable = () => {
    const [orderList, setOrderList] = useState([]);
    const [user] = useContext(UserContext);
    const [isReceivingData, setIsReceivingData] = useState(false);

    useEffect(() => {
        setIsReceivingData(true);
        fetch('https://triangle-it-server.onrender.com/allBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: user.email }),
        })
            .then(res => res.json())
            .then(data => {
                setOrderList(data);
                setIsReceivingData(false);
            });
    }, [user.email]);

    return (
        <div className='col-lg-9 col-md-8 col-sm-12 p-4 table-responsive'>
            {
                isReceivingData
                    ? <div className='d-flex justify-content-center'>
                        <div className="spinner-border text-warning" style={{ width: '10rem', height: '10rem' }} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    : <table class="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Client Info</th>
                                <th scope="col">Order Details</th>
                                <th scope="col">Project Description</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderList.map(order => <OrderTableRow order={order} />)
                            }
                        </tbody>
                    </table>
            }
        </div>
    );
};

export default OrderListTable;