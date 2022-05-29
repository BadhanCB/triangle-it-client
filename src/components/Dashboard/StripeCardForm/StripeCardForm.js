import React, { useContext, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { ServiceContext, UserContext } from '../../../App';
import { useHistory } from 'react-router-dom';

const StripeCardForm = ({ setIsTransferingData }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [user] = useContext(UserContext);
    const [selectedService, setSelectedService] = useContext(ServiceContext);
    const history = useHistory();

    const [isFrontEndLangSelected, setIsFrontEndLangSelected] = useState(true);
    const [isBackEndLangSelected, setIsBackEndLangSelected] = useState(true);
    const [isApplicationTypeWritten, setIsApplicationTypeWritten] = useState(true);
    const [isProjectDescriptionWritten, setIsProjectDescriptionWritten] = useState(true);

    const resetAllInputCondition = () => {
        setIsFrontEndLangSelected(true);
        setIsBackEndLangSelected(true);
        setIsApplicationTypeWritten(true);
        setIsProjectDescriptionWritten(true);
    }

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
            const frontEndLang = document.getElementById("front-end-lang").value;
            const backEndLang = document.getElementById("back-end-lang").value;
            const appType = document.getElementById("app-type").value;
            const projectDescription = document.getElementById("project-description").value;
            
            if (frontEndLang == null || frontEndLang == '') {
                setIsFrontEndLangSelected(false);
            } else if(backEndLang == null || backEndLang == ''){
                setIsBackEndLangSelected(false);
            } else if(appType == null || appType == ''){
                setIsApplicationTypeWritten(false);
            } else if(projectDescription == null || projectDescription == '' || projectDescription.length < 40){
                setIsProjectDescriptionWritten(false);
            } else if(isFrontEndLangSelected && isBackEndLangSelected && isApplicationTypeWritten && isProjectDescriptionWritten){
                 
                // console.log(frontEndLang, backEndLang, appType, projectDescription);

                // setIsTransferingData(true);
                const newBooking = {
                    ...user,
                    bookedServiceId: selectedService._id,
                    bookedService: selectedService.title,
                    paymentId: paymentMethod.id,
                    paymentCard: paymentMethod.card,
                    status: 'pending',
                    submissionDate: new Date(),
                    frontEndLang,
                    backEndLang,
                    appType,
                    projectDescription
                }

                fetch('https://cryptic-waters-19850.herokuapp.com/addBooking', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newBooking),
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result) {
                            alert('Booking Successful');
                            setSelectedService({});
                            history.push('/dashboard/bookinglist');
                            setIsTransferingData(false);
                        } else {
                            alert('Unexpected Error!');
                            setIsTransferingData(false);
                        }
                    }).catch(() => {
                        alert('Unexpected Error!');
                        setIsTransferingData(false);
                    })
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-5">
            <div class="mb-3">
                <label for="front-end-lang" class="form-label">Front-End Language</label>
                <select class="form-control" id="front-end-lang" onChange={resetAllInputCondition}>
                    <option value=''>Select a Option</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="PHP">PHP</option>
                    <option value="React">React</option>
                    <option value="Laravel">Laravel</option>
                    <option value="TypeScript">TypeScript</option>
                </select>
                {
                    !isFrontEndLangSelected &&
                    <small id="front-end-lang-warning" class="form-text text-danger">Please select a Front-End Language</small>
                }
            </div>
            <div class="mb-3">
                <label for="back-end-lang" class="form-label">Back-End Language</label>
                <select class="form-control" id="back-end-lang" onChange={resetAllInputCondition}>
                    <option value=''>Select a Option</option>
                    <option value="Node">Node</option>
                    <option value="Express">Express</option>
                    <option value="Python">Python</option>
                    <option value="Go">GO</option>
                    <option value="Java">Java</option>
                </select>
                {
                    !isBackEndLangSelected &&
                    <small id="back-end-lang-warning" class="form-text text-danger">Please select a Back-End Language</small>
                }
            </div>
            <div class="mb-3">
                <label for="app-type" class="form-label">Application Type</label>
                <input type="text" placeholder="Personal/E-commerce/Agency" class="form-control" id="app-type" onChange={resetAllInputCondition} />
                {
                    !isApplicationTypeWritten &&
                    <small id="app-type-warning" class="form-text text-danger">Please write your application type</small>
                }
            </div>
            <div class="mb-3">
                <label for="project-description">Project Description</label>
                <textarea class="form-control" placeholder="About Your Project" id="project-description" rows="3" onChange={resetAllInputCondition}></textarea>
                {
                    !isProjectDescriptionWritten &&
                    <small id="desc-warning" class="form-text text-danger">Please write down details about your project</small>
                }
            </div>
            <CardElement />
            <button type="submit" className='mt-3 btn btn-success ms-auto' disabled={!stripe}>Book The Service</button>
        </form>
    );
};

export default StripeCardForm;