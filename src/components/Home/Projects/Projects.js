import React from 'react';
import knowledgeHaven from '../../../images/knowledge-haven.web.app_.png';

const Projects = () => {
    return (
        <section style={{ padding: '100px 0', backgroundColor: '#e9ab04' }}>
            <h3 className='text-center'>Latest Projects</h3>
            <div className="row px-5 container mx-auto">
                <div className="col-lg-6 col-md-12 col-sm-12 p-3">
                    <div className='shadow bg-light rounded p-3'>
                        <div style={{ height: '300px' , overflow: 'hidden'}}>
                            <img src={knowledgeHaven} className='img-fluid' alt="" />
                        </div>
                        <h3 className='text-center mt-3'>Knowledge Haven</h3>
                        <p className='p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum a, laudantium nostrum consectetur cupiditate reprehenderit quidem beatae veniam rerum, iusto temporibus minus similique, doloremque commodi repudiandae distinctio? Itaque, ad labore.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 p-3">
                    <div className="p-3">
                        <div className='shadow bg-light rounded row'>
                            <div className="col-lg-6 col-md-12 col-sm-12 p-3">
                                <img src={knowledgeHaven} className='img-fluid' alt="" />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 p-3">
                                <h3 className='text-center mt-3'>Knowledge Haven</h3>
                                <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum a, laudantium nostrum consectetur cupiditate reprehenderit quidem beatae veniam rerum, iusto temporibus minus similique, doloremque commodi repudiandae distinctio? Itaque, ad labore.</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className='shadow bg-light rounded row'>
                            <div className="col-lg-6 col-md-12 col-sm-12 p-3">
                                <img src={knowledgeHaven} className='img-fluid' alt="" />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 p-3">
                                <h3 className='text-center mt-3'>Knowledge Haven</h3>
                                <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum a, laudantium nostrum consectetur cupiditate reprehenderit quidem beatae veniam rerum, iusto temporibus minus similique, doloremque commodi repudiandae distinctio? Itaque, ad labore.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;