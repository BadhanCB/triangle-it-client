import React, { useEffect, useState } from 'react';
import TestimonialCard from '../../Shared/TestimonialCard/TestimonialCard';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allReviews')
        .then(res => res.json())
        .then(data => setTestimonials(data))
    }, [])

    return (
        <section className='mt-5'>
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