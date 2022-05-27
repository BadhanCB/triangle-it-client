import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo-lg.png';

const HomeBanner = () => {
    return (
        <section className='bg-lightDark' style={{minHeight: '100vh'}}>
            <div className='row p-4 container mx-auto d-flex h-100 w-100 align-items-center justify-content-evenly'>
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
                    <div className="mx-auto">
                        <h1 className='text-white'>Triangle IT</h1>
                        <p className='w-75 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius, rerum optio est asperiores pariatur illum sed eligendi dolores iure nihil dolorum eos, assumenda delectus animi quidem odio repellat totam?</p>
                        <Link to='/services'><button className="btn btn-success fs-5 fw-bold" style={{ color: 'white' }}>Get Started</button></Link>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                    <img src={logo} className='img-fluid mx-auto' alt="" />
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;