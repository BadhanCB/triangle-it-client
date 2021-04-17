import React from 'react';
import AdminTopBar from '../../Shared/AdminTopBar/AdminTopBar';
import BookForm from '../BookForm/BookForm';
import DashBoardSidebar from '../DashBoardSidebar/DashBoardSidebar';

const Book = () => {
    return (
        <div className='container'>
            <header>
                <AdminTopBar>
                    <p>Book A Service</p>
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