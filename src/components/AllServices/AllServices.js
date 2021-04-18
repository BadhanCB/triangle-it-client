import React, { useEffect, useState } from 'react';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';
import TopNavBar from '../Shared/TopNavBar/TopNavBar';

const AllServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-waters-19850.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <main className='container'>
            <header>
                <TopNavBar />
            </header>
            <div className="row">
                {
                    services.map(service => <ServiceCard service={service} key={service._id} />)
                }
            </div>
        </main>
    );
};

export default AllServices;