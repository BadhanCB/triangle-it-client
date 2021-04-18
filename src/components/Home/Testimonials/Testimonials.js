import React, { useEffect, useState } from 'react';
import TestimonialCard from '../../Shared/TestimonialCard/TestimonialCard';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-waters-19850.herokuapp.com/allReviews')
        .then(res => res.json())
        .then(data => setTestimonials(data))
    }, [])

    return (
        <section className='mt-5 px-5 bg-grey' style={{padding: '100px 0'}}>
            <p className='text-muted fw-bold fs-5 text-center'>Testimonials</p>
            <div className='row'>
                {
                    testimonials.map(testimonial => <TestimonialCard testimonial={testimonial} key={testimonial._id} />)
                }
            </div>
        </section>
    );
};

export default Testimonials;