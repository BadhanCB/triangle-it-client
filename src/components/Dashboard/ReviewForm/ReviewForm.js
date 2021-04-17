import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';

const ReviewForm = () => {
    const [user] = useContext(UserContext);
    const [review, setReview] = useState({name: user.name});
    const history = useHistory();

    const handleBlur = event => {
        const newReview = {...review};
        newReview[event.target.name] = event.target.value;
        setReview(newReview);
    }
    const handleSubmit = event => {
        event.preventDefault();
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(review),
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('Your Review Added Successfully');
                setReview({});
                history.push('/');
            } else{
                alert('Unexpected Error!');
            }
        })
    }
    return (
        <div className='col-lg-9 col-md-7 col-sm-12 p-4'>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque totam quidem veritatis cum animi beatae sint quibusdam. Id ipsa quaerat ea consectetur! Culpa impedit laudantium itaque inventore adipisci suscipit corrupti!</p> */}
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" value={user.name} readOnly class="form-control" id="name" placeholder='Your Name' />
                </div>
                <div class="mb-3">
                    <label for="designation" class="form-label">Designation</label>
                    <input type="text" name='designation' onBlur={handleBlur} class="form-control" id="designation" placeholder="Company's name. Designation" />
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea name='description' onBlur={handleBlur} class="form-control" id="description" rows="3" placeholder='Review Description'></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default ReviewForm;