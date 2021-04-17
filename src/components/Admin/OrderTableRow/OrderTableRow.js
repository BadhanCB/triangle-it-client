import React, { useState } from 'react';

const OrderTableRow = ({ order }) => {
    const { name, email, bookedService, status, _id } = order;

    const handleChange = () => {
        const selectedStatus = document.getElementById('status').value;
        fetch('http://localhost:5000/changeBookingStatus', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({status: selectedStatus, id: _id}),
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('Status Updated');
            }
        })
    }
    return (
        <tr>
            <th scope="row">{name}</th>
            <td>{email}</td>
            <td>{bookedService}</td>
            <td>
                <select onChange={handleChange} id='status' class="form-select">
                    <option selected>{status}</option>
                    <option value="pending">pending</option>
                    <option value="on going">on going</option>
                    <option value="done">done</option>
                </select>
            </td>
        </tr>
    );
};

export default OrderTableRow;