import React from 'react';
import Footer from '../../Shared/Footer/Footer/Footer';
import TopNavBar from '../../Shared/TopNavBar/TopNavBar';
import AboutUsHome from '../AboutUsHome/AboutUsHome';
import Achievements from '../Achievements/Achievements';
import ContactUs from '../ContactUs/ContactUs';
import HomeBanner from '../HomeBanner/HomeBanner';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import TopScrollButton from '../TopScrollButton/TopScrollButton';

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
            <ContactUs />
            <Footer />
            <TopScrollButton />
        </main>
    );
};

export default Home;