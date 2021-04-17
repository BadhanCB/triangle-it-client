import React from 'react';

const ServiceTableRow = ({ service }) => {
    const {title, price, description} = service;
    return (
        <tr>
            <th>{title}</th>
            <th>{price}</th>
            <th style={{width: '300px'}}>{description}</th>
            <th>
                <button className="btn btn-secondary m-1">Update</button>
                <button className="btn btn-danger m-1">Delete</button>
            </th>
        </tr>
    );
};

export default ServiceTableRow;