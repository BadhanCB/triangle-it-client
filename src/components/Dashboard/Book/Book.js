import React from 'react';
import AdminTopBar from '../../Shared/AdminTopBar/AdminTopBar';
import BookForm from '../BookForm/BookForm';
import DashBoardSidebar from '../DashBoardSidebar/DashBoardSidebar';

const Book = () => {
    return (
        <div className='container'>
            <header>
                <AdminTopBar>
                    <h4>Book A Service</h4>
                </AdminTopBar>
            </header>
            <main className='row'>
                <DashBoardSidebar />
                <BookForm />
            </main>
        </div>
    );
};

export default Book;