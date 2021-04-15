import React from 'react';
import TopNavBar from '../../Shared/TopNavBar/TopNavBar';
import AboutUsHome from '../AboutUsHome/AboutUsHome';
import HomeBanner from '../HomeBanner/HomeBanner';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <main className='container'>
            <TopNavBar />
            <HomeBanner />
            <AboutUsHome />
            <Services />
            <Testimonials />
        </main>
    );
};

export default Home;