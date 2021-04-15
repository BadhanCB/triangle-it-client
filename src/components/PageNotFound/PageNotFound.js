import React from 'react';

const PageNotFound = () => {
    return (
        <section>
            <div className='bg-light d-flex align-items-center justify-content-center' style={{height: '40vh'}}>
                <h1 style={{fontSize: '100px'}}>404</h1>
            </div>
            <div className='bg-dark d-flex align-items-center justify-content-center text-center' style={{height: '40vh', color: 'white'}}>
                <h3>The Page You are looking for doesn't exists</h3>
            </div>
        </section>
    );
};

export default PageNotFound;