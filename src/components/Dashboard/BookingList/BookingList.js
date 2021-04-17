import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminTopBar from '../../Shared/AdminTopBar/AdminTopBar';
import BookingListCard from '../BookingListCard/BookingListCard';
import DashBoardSidebar from '../DashBoardSidebar/DashBoardSidebar';

const BookingList = () => {
    const [bookingList, setBookingList] = useState([]);
    const [user] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/allBooking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: user.email }),
        }).then(res => res.json())
            .then(data => setBookingList(data));
    }, [user.email]);

    return (
        <div className='container'>
            <header>
                <AdminTopBar><p>Booking List</p></AdminTopBar>
            </header>
            <main className='row'>
                <DashBoardSidebar />
                <div className="col-lg-9 col-md-7 col-sm-12 p-3 bg-light">
                    <div className="row">
                        {
                            bookingList.map(booking => <BookingListCard booking={booking} key={booking._id} />)
                        }
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BookingList;