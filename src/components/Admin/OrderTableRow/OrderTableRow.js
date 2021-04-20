import React from 'react';

const OrderTableRow = ({ order }) => {
    const { name, email, bookedService, status, _id } = order;

    const handleChange = () => {
        const selectedStatus = document.getElementById(_id).value;
        fetch('https://cryptic-waters-19850.herokuapp.com/changeBookingStatus', {
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
                <select onChange={handleChange} id={_id} class="form-select" style={{width: '115px'}}>
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