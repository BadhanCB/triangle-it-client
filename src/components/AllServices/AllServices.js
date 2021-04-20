import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer/Footer';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';
import TopNavBar from '../Shared/TopNavBar/TopNavBar';

const AllServices = () => {
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
        <main className='container'>
            <header>
                <TopNavBar />
            </header>
            {
                isReceivingData
                    ? <div className='d-flex justify-content-center'>
                        <div className="spinner-border text-warning" style={{ width: '10rem', height: '10rem' }} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>

                    : <div className="row">
                        {
                            services.map(service => <ServiceCard service={service} key={service._id} />)
                        }
                    </div>
            }
            <Footer />
        </main>
    );
};

export default AllServices;