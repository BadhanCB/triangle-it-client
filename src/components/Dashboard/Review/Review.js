import React from 'react';
import AdminTopBar from '../../Shared/AdminTopBar/AdminTopBar';
import DashBoardSidebar from '../DashBoardSidebar/DashBoardSidebar';
import ReviewForm from '../ReviewForm/ReviewForm';

const Review = () => {
    return (
        <div className='container'>
            <header>
                <AdminTopBar><h4>Review</h4></AdminTopBar>
            </header>
            <main className='row'>
                <DashBoardSidebar />
                <ReviewForm />
            </main>
        </div>
    );
};

export default Review;