import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    const { name, designation, description } = testimonial;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 p-3">
            <div className='shadow p-3 bg-white' style={{ borderRadius: '15px' }}>
                <h4>{name}</h4>
                <h6>{designation}</h6>
                <hr/>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;