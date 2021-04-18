import React from 'react';

const Achievements = () => {
    return (
        <section className='bg-lightDark text-white' style={{ padding: '100px 0' }}>
            <div className="row p-3">
                <div className="col-lg-3 col-md-4 col-sm-6 border-start border-end mt-4">
                    <h4>Successful work with</h4>
                    <h1>1790</h1>
                    <h6>HAPPY CLIENTS</h6>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 border-start border-end mt-4">
                    <h4>Successfully completed</h4>
                    <h1>491</h1>
                    <h6>FINISHED PROJECTS</h6>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 border-start border-end mt-4">
                    <h4>We have more than</h4>
                    <h1>245</h1>
                    <h6>SKILLED EXPERTS</h6>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 border-start border-end mt-4">
                    <h4>Blog update</h4>
                    <h1>1090</h1>
                    <h6>MEDIA POSTS</h6>
                </div>
            </div>
        </section>
    );
};

export default Achievements;