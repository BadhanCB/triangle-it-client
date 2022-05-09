import React, { useEffect, useState } from 'react';
import TestimonialCard from '../../Shared/TestimonialCard/TestimonialCard';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [isReceivingData, setIsReceivingData] = useState(false);

    useEffect(() => {
        setIsReceivingData(true);
        fetch('https://cryptic-waters-19850.herokuapp.com/allReviews')
            .then(res => res.json())
            .then(data => {
                setTestimonials(data);
                setIsReceivingData(false);
            })
            .catch(e => {
                setIsReceivingData(false);
            })
    }, [])

    return (
        <section className='mt-5 px-5 bg-grey' style={{ padding: '100px 0' }}>
            {
                isReceivingData
                    ? <div style={{ height: '100vh', width: '100vw' }} className='d-flex justify-content-center align-items-center'>
                        <div className="spinner-border text-warning" style={{ width: '10rem', height: '10rem' }} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>

                    : <>
                        <p className='text-muted fw-bold fs-5 text-center'>Testimonials</p>
                        <div className='row'>
                            {
                                testimonials.map(testimonial => <TestimonialCard testimonial={testimonial} key={testimonial._id} />)
                            }
                        </div>
                    </>
            }

        </section>
    );
};

export default Testimonials;