import React, { useEffect, useState } from 'react';
import ServiceTableRow from '../ServiceTableRow/ServiceTableRow';

const ServiceTable = () => {
    const [services, setServices] = useState([]);
    const [isTransferingData, setIsTransferingData] = useState(false);

    const loadServices = () => {
        setIsTransferingData(true);
        fetch('https://cryptic-waters-19850.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setIsTransferingData(false);
            });
    }

    useEffect(() => {
        loadServices();
    }, []);

    const handleDelete = id => {
        setIsTransferingData(true);
        fetch(`https://cryptic-waters-19850.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                setIsTransferingData(false);
                if (result) {
                    alert('Successfully Deleted');
                    loadServices();
                } else {
                    alert('Failed to delete');
                }
            })
            .catch(() => {
                alert('Failed to delete');
                setIsTransferingData(false);
            });
    }

    return (
        <div className='col-lg-9 col-md-8 col-sm-12 p-4 table-responsive'>
            {
                isTransferingData
                    ? <div className='d-flex justify-content-center'>
                        <div className="spinner-border text-warning" style={{ width: '10rem', height: '10rem' }} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    : <table class="table table-dark table-striped">
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
                                services.map(service => <ServiceTableRow service={service} handleDelete={handleDelete} loadServices={loadServices} key={service._id} />)
                            }
                        </tbody>
                    </table>
            }

        </div>
    );
};

export default ServiceTable;