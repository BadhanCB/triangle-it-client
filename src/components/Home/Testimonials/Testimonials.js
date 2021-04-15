import React from 'react';
import TestimonialCard from '../../Shared/TestimonialCard/TestimonialCard';

const testimonialsData = [
    {
        userName: 'NNNNNNNNNNNNNNNNNNNNNNNNNN',
        comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid laboriosam explicabo aperiam! Illum perferendis vitae temporibus vel ad ipsa nemo voluptatibus a, quibusdam, quo voluptate recusandae doloribus, harum ipsum. Repellat?',
        userImg: '',
        submitDate: '',
    },
    {
        userName: 'NNNNNNNNNNNNNNNNNNNN',
        comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid laboriosam explicabo aperiam! Illum perferendis vitae temporibus vel ad ipsa nemo voluptatibus a, quibusdam, quo voluptate recusandae doloribus, harum ipsum. Repellat?',
        userImg: '',
        submitDate: '',
    },
    {
        userName: 'NNNNNNNNNNNNNNNNNNN',
        comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid laboriosam explicabo aperiam! Illum perferendis vitae temporibus vel ad ipsa nemo voluptatibus a, quibusdam, quo voluptate recusandae doloribus, harum ipsum. Repellat?',
        userImg: '',
        submitDate: '',
    }
]

const Testimonials = () => {
    return (
        <section>
            <p className='text-muted fw-bold fs-5 text-center'>Testimonials</p>
            <div className='row'>
                {
                    testimonialsData.map(testimonial => <TestimonialCard testimonial={testimonial} />)
                }
            </div>
        </section>
    );
};

export default Testimonials;