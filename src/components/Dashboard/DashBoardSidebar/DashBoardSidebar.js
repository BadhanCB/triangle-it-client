import React from 'react';
import { Link } from 'react-router-dom';

const DashBoardSidebar = () => {
    return (
        <aside className='col-lg-3 col-md-5 col-sm-12'>
            <ul className='sidebar-list border-end border-info border-3'>
                <li>
                    <Link to='/dashboard/book' className='sidebar-item' >Book</Link>
                </li>
                <li>
                    <Link to='/dashboard/bookinglist' className='sidebar-item' >Booking List</Link>
                </li>
                <li>
                    <Link to='/dashboard/review' className='sidebar-item' >Review</Link>
                </li>
            </ul>
        </aside>
    );
};

export default DashBoardSidebar;