import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isReceivingData, setIsReceivingData] = useState(false);

    useEffect(() => {
        setIsReceivingData(true);
        fetch('https://cryptic-waters-19850.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setIsReceivingData(false);
            });
    }, [])

    return (
        <section className='text-center' style={{ padding: '100px 0' }}>
            {
                isReceivingData
                    ? <div className='d-flex justify-content-center'>
                        <div className="spinner-border text-warning" style={{ width: '10rem', height: '10rem' }} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>

                    : <>
                        <p className='text-muted fw-bold fs-5'>OUR SERVICES</p>
                        <h3 className='w-50 mx-auto'>We run all kinds of IT services that vow your success</h3>
                        <div className="row p-5">
                            {
                                services.map(service => <ServiceCard service={service} key={service._id} />)
                            }
                        </div>
                        <Link to='/services'><button className="btn btn-info fs-5 fw-bold" style={{ color: 'white' }}>Explore More</button></Link>
                    </>
            }

        </section>
    );
};

export default Services;