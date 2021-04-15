import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const serviceData = [
    {
        name: 'E-Commerce Website Design',
        price: '560',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum a, laudantium nostrum consectetur cupiditate reprehenderit quidem beatae veniam rerum, iusto temporibus minus similique, doloremque commodi repudiandae distinctio? Itaque, ad labore.'
    },
    {
        name: 'Complete Website Development',
        price: '1050',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum a, laudantium nostrum consectetur cupiditate reprehenderit quidem beatae veniam rerum, iusto temporibus minus similique, doloremque commodi repudiandae distinctio? Itaque, ad labore.'
    },
    {
        name: 'ReactJS Web App',
        price: '730',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum a, laudantium nostrum consectetur cupiditate reprehenderit quidem beatae veniam rerum, iusto temporibus minus similique, doloremque commodi repudiandae distinctio? Itaque, ad labore.'
    }
]

const Services = () => {
    return (
        <section className='text-center my-5'>
            <p className='text-muted fw-bold fs-5'>OUR SERVICES</p>
            <h3 className='w-50 mx-auto'>We run all kinds of IT services that vow your success</h3>
            <div className="row">
                {
                    serviceData.map(service => <ServiceCard service={service} />)
                }
            </div>
            <Link to='/services'><button className="btn btn-info fs-5 fw-bold" style={{ color: 'white' }}>Explore More</button></Link>
        </section>
    );
};

export default Services;