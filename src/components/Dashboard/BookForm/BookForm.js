import React, { useContext, useState } from 'react';
import { ServiceContext, UserContext } from '../../../App';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripeCardForm from '../StripeCardForm/StripeCardForm';
import { useHistory } from 'react-router-dom';

const BookForm = () => {
    const [user] = useContext(UserContext);
    const [selectedService] = useContext(ServiceContext);
    const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
    const [isTransferingData, setIsTransferingData] = useState(false);
    let history = useHistory();

    return (
        <div className='col-lg-9 col-md-7 col-sm-12'>
            {
                isTransferingData
                    ? <div className='d-flex justify-content-center'>
                        <div className="spinner-border text-warning" style={{ width: '10rem', height: '10rem' }} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    (
                        selectedService.title
                            ? <div>
                                <div className='mb-3'>
                                    <label for="name" class="form-label">Name</label>
                                    <input type="text" readOnly value={user.name} className='form-control' id="name" />
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" readOnly value={user.email} class="form-control" id="email" />
                                </div>
                                <div class="mb-3">
                                    <label for="serviceName" class="form-label">Service Name</label>
                                    <input type="text" readOnly value={selectedService.title} class="form-control" id="serviceName" />
                                </div>
                                <div class="mb-3">
                                    <label for="price" class="form-label">Price</label>
                                    <input type="text" readOnly value={selectedService.price} class="form-control" id="price" />
                                </div>
                                <Elements stripe={stripePromise}>
                                    <StripeCardForm setIsTransferingData={setIsTransferingData} />
                                </Elements>
                            </div>
                            : <div>
                                <h1>Please Select A service</h1>
                                <button className="btn btn-secondary" onClick={() => history.push("/services")}>Go to Services Page</button>
                            </div>
                    )
            }
        </div>
    );
};

export default BookForm;