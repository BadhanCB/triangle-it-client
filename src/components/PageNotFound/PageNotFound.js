import React from 'react';
import TopNavBar from '../Shared/TopNavBar/TopNavBar';

const PageNotFound = () => {
    return (
        <section>
            <TopNavBar />
            <div className='bg-light d-flex align-items-center justify-content-center' style={{height: '40vh'}}>
                <h1 style={{fontSize: '100px'}}>404</h1>
            </div>
            <div className='bg-dark d-flex align-items-center justify-content-center text-center' style={{height: '40vh', color: 'white'}}>
                <div>
                <h1 style={{fontSize: '50px'}}>Page Not Found</h1>
                <h3>The Page You are looking for doesn't exists</h3>
                </div>
            </div>
        </section>
    );
};

export default PageNotFound;