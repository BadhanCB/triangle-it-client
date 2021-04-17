import React, { useEffect, useState } from 'react';
import ServiceTableRow from '../ServiceTableRow/ServiceTableRow';

const ServiceTable = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-waters-19850.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div className='col-lg-9 col-md-8 col-sm-12 p-4 table-responsive'>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(service => <ServiceTableRow service={service} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ServiceTable;