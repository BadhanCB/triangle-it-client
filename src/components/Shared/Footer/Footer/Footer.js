import React from 'react';
import CompanyAddress from '../CompanyAddress/CompanyAddress';
import FooterList from '../FooterList/FooterList';

const Footer = () => {
    const companyServices = [
        'IT Software',
        'IT Support',
        'IT Platforms',
        'Cloud Computing',
        'Cyber Security'
    ];

    const quickLinks = [
        'Pick up locations',
        'Terms of Payment',
        'Privacy Policy',
        'Where to Find Us',
    ];

    const support = [
        'Forum Support',
        'Help & FAQ',
        'Contact Us',
        'Pricing and plans',
        'Cookies Policy'
    ]

    return (
        <footer className='container row mx-auto'>
            <CompanyAddress />
            <FooterList heading='IT Services' listItems={companyServices} />
            <FooterList heading='Quick Links' listItems={quickLinks} />
            <FooterList heading='Support' listItems={support} />
            <h3 className='text-center text-success'>© {`${new Date().getFullYear()}`} Triangle IT. All Rights Reserved</h3>
        </footer>
    );
};

export default Footer;