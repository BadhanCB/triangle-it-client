import React from 'react';
import { Link } from 'react-router-dom';
import './FooterList.css';

const FooterList = ({ heading, listItems }) => {
    return (
        <div className='col-lg-3 col-md-4 col-sm-6 p-5'>
            <h3 className='heading-text mb-4'>{heading}</h3>
            <ul className='footer-list'>
                {
                    listItems.map(item => <li className='footer-list-item' >
                        <Link className='footer-list-item-content'>{item}</Link>
                    </li>)
                }

            </ul>
        </div>
    );
};

export default FooterList;