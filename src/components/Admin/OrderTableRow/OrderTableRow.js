import React from 'react';

const OrderTableRow = ({ order }) => {
    const { name, email, bookedService, status, _id, frontEndLang, backEndLang, appType, projectDescription } = order;

    const handleChange = () => {
        const selectedStatus = document.getElementById(_id).value;
        fetch('https://triangle-it-server.onrender.com/changeBookingStatus', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: selectedStatus, id: _id }),
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Status Updated');
                }
            })
    }
    return (
        <tr>
            <th scope="row">
                <p>Name: <span className="fw-light">{name}</span></p>
                <p>Email: <span className="fw-light">{email}</span></p>
                <p>Service: <span className="fw-light">{bookedService}</span></p>
            </th>
            <td>
                <p>Front-End Language: <span className="fw-light">{frontEndLang}</span></p>
                <p>Back-End Language: <span className="fw-light">{backEndLang}</span></p>
                <p>Application Type: <span className="fw-light">{appType}</span></p>
            </td>
            <td>{projectDescription}</td>
            <td>
                <select onChange={handleChange} id={_id} class="form-select" style={{ width: '115px' }}>
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