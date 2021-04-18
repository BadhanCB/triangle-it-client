import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/code.png';

const HomeBanner = () => {
    return (
        <section className='bg-lightDark'>
            <div className='row p-4 container mx-auto'>
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
                    <div>
                        <h1 className='text-white'>Triangle IT</h1>
                        <p className='w-75 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius, rerum optio est asperiores pariatur illum sed eligendi dolores iure nihil dolorum eos, assumenda delectus animi quidem odio repellat totam?</p>
                        <Link to='/services'><button className="btn btn-success fs-5 fw-bold" style={{ color: 'white' }}>Get Started</button></Link>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={logo} className='img-fluid' alt="" />
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;