import React from 'react';
import logo from '../../../../images/code.png';

const CompanyAddress = () => {
    return (
        <div className='col-lg-3 col-md-4 col-sm-6 text-center p-3'>
            <div className='d-flex align-items-center'>
                <img src={logo} style={{ width: '150px' }} alt="" />
                <h3 className='heading-text'>Triangle IT</h3>
            </div>
            <h5 className='my-3 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas tempora laudantium aspernatur quia iste. Delectus?</h5>
            <h6>+8801000202020</h6>
            <h6>www.abc.com</h6>
        </div>
    );
};

export default CompanyAddress;