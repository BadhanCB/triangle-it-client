import React from 'react';
import TopNavBar from '../Shared/TopNavBar/TopNavBar';
import TeammateCard from './TeammateCard';

import badhan from './teammatesPic/badhan.jpg';
import dipangker from './teammatesPic/dipangker.jpg';
import tusher from './teammatesPic/tusher.jpg';
import bristy from './teammatesPic/bristy.jpg';

const AboutUs = () => {
    const teammates = [
        {
            profilePic: badhan,
            name: "Badhan Chandra Barman",
            role: "Full-Stack JavaScript Developer"
        },
        {
            profilePic: dipangker,
            name: "Dipangkar Roy",
            role: "UI/UX Designer"
        },
        {
            profilePic: tusher,
            name: "Tawhid Tusher",
            role: "Wordpress Theme Developer"
        },
        {
            profilePic: bristy,
            name: "Bristi Devnath",
            role: "Content Writter",
        }
    ]
    return (
        <main className="container">
            <header>
                <TopNavBar />
            </header>

            <section className="row">
                {
                    teammates.map((member, index) => <TeammateCard member={member} key={index} />)
                }
            </section>
        </main>
    );
};

export default AboutUs;