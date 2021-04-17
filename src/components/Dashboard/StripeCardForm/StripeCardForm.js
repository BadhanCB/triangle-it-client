import React, { useContext } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { ServiceContext, UserContext } from '../../../App';
import { useHistory } from 'react-router-dom';

const StripeCardForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [user] = useContext(UserContext);
    const [selectedService, setSelectedService] = useContext(ServiceContext);
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            alert(error.message);
        } else {
            // console.log('[PaymentMethod]', paymentMethod);
            const newBooking = {
                ...user,
                bookedServiceId: selectedService._id,
                bookedService: selectedService.title,
                paymentId: paymentMethod.id,
                paymentCard: paymentMethod.card,
                status: 'pending',
                submissionDate: new Date(),
            }
            fetch('https://cryptic-waters-19850.herokuapp.com/addBooking', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newBooking),
            })
            .then(res => res.json())
            .then(result => {
                if(result){
                    alert('Booking Successful');
                    setSelectedService({});
                    history.push('/dashboard/bookinglist');
                } else{
                    alert('Unexpected Error!');
                }
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" className='mt-3 btn btn-success ms-auto' disabled={!stripe}>Pay</button>
        </form>
    );
};

export default StripeCardForm;