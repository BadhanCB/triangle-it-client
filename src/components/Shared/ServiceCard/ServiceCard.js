import React from 'react';
import img from '../../../images/code.png';

const ServiceCard = ({ service }) => {
    const { name, price, description } = service;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 p-3">
            <div className='shadow p-3' style={{borderRadius: '15px'}}>
                <img src={img} className='img-fluid' style={{width: '70px'}} alt=""/>
                <h4 className='my-4'>{name}</h4>
                <h5 className='mb-4'>${price}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;