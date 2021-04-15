import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsHome = () => {
    return (
        <section className='text-center my-5 bg-light py-3'>
            <p className='text-muted fw-bold fs-5'>OUR COMPANY</p>
            <h3 className='w-50 mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, exercitationem.</h3>
            <div className="row mt-5">
                <div className="col-lg-5 col-md-5 col-sm-12 offset-lg-1 offset-md-1">
                    <div className='d-flex align-items-center justify-content-center'>
                        <h1 className='text-success' style={{fontSize: '100px'}}>32</h1>
                        <p>YEARS’ EXPERIENCE IN IT</p>
                    </div>
                    <h5>More About Our Success Stories</h5>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 text-start">
                    <h5 className='text-secondary'>The IT services that Mitech are running can be segmented by the type of skills employed to deliver the service (design, build, run). Technically, these fall into three main categories: business process services, application services, and infrastructure services.</h5>
                    <Link to='/projects' className='fs-5'style={{textDecoration: 'none', color: 'blue'}}>Discover More <FontAwesomeIcon icon={faLongArrowAltRight} /></Link>
                </div>
            </div>
        </section>
    );
};

export default AboutUsHome;