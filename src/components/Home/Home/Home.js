import React from 'react';
import TopNavBar from '../../Shared/TopNavBar/TopNavBar';
import AboutUsHome from '../AboutUsHome/AboutUsHome';
import Achievements from '../Achievements/Achievements';
import HomeBanner from '../HomeBanner/HomeBanner';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <main className='bg-light'>
            <TopNavBar />
            <HomeBanner />
            <AboutUsHome />
            <Services />
            <Testimonials />
            <Projects />
            <Achievements />
        </main>
    );
};

export default Home;