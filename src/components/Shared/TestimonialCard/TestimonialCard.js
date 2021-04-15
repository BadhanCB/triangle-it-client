import React from 'react';
import img from '../../../images/code.png';

const TestimonialCard = ({ testimonial }) => {
    const { userName, comment } = testimonial;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 p-3">
            <div className='shadow p-3' style={{ borderRadius: '15px' }}>
                <div className='d-flex align-items-center' style={{overflow: 'hidden'}}>
                    <img src={img} className='img-fluid m-3' style={{ height: '70px', borderRadius: '100%' }} alt="" />
                    <div>
                        <h4 className=''>{userName}</h4>
                        <p><small>14 April, 2019</small></p>
                    </div>
                </div>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;