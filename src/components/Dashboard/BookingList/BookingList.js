import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminTopBar from '../../Shared/AdminTopBar/AdminTopBar';
import BookingListCard from '../BookingListCard/BookingListCard';
import DashBoardSidebar from '../DashBoardSidebar/DashBoardSidebar';

const BookingList = () => {
    const [bookingList, setBookingList] = useState([]);
    const [user] = useContext(UserContext);
    const [isTransferingData, setIsTransferingData] = useState(false);

    useEffect(() => {
        setIsTransferingData(true);
        fetch('https://triangle-it-server.onrender.com/allBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: user.email }),
        })
            .then(res => res.json())
            .then(data => {
                setBookingList(data);
                setIsTransferingData(false);
            });
    }, [user.email]);

    return (
        <div className='container'>
            <header>
                <AdminTopBar><h4>Booking List</h4></AdminTopBar>
            </header>
            <main className='row'>
                <DashBoardSidebar />
                <div className="col-lg-9 col-md-7 col-sm-12 p-3 bg-light">
                    {
                        isTransferingData
                            ? <div className='d-flex justify-content-center'>
                                <div className="spinner-border text-warning" style={{ width: '10rem', height: '10rem' }} role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            : <div className="row">
                                {
                                    bookingList.map(booking => <BookingListCard booking={booking} key={booking._id} />)
                                }
                            </div>
                    }

                </div>
            </main>
        </div>
    );
};

export default BookingList;