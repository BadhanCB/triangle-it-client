import React from 'react';
import AdminTopBar from '../../Shared/AdminTopBar/AdminTopBar';
import DashBoardSidebar from '../DashBoardSidebar/DashBoardSidebar';
import ReviewForm from '../ReviewForm/ReviewForm';

const Review = () => {
    return (
        <div className='container'>
            <header>
                <AdminTopBar><p>Review</p></AdminTopBar>
            </header>
            <main className='row'>
                <DashBoardSidebar />
                <ReviewForm />
            </main>
        </div>
    );
};

export default Review;