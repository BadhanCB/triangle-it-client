import React, { useState } from 'react';

const MakeAdminForm = () => {
    const [email, setEmail] = useState('');
    const [isTransferingData, setIsTransferingData] = useState(false);

    const handleInput = () => {
        setEmail(document.getElementById('email').value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        setIsTransferingData(true);
        fetch(`https://triangle-it-server.onrender.com/addAdmin?email=${email}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            .then(result => {
                setIsTransferingData(false);
                if (result) {
                    alert('Added Successfully');
                } else {
                    alert('Something Worng');
                }
            });
    }

    return (
        <div className='col-lg-9 col-md-8 col-sm-12 p-4'>
            {
                isTransferingData
                    ? <div className='d-flex justify-content-center'>
                        <div className="spinner-border text-warning" style={{ width: '10rem', height: '10rem' }} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    : <form onSubmit={handleSubmit} class="row align-items-end">
                        <div class="col-lg-9 col-md-9 col-sm-12">
                            <label for="email" class="form-lebel mb-3">Email</label>
                            <input type="email" onChange={handleInput} class="form-control" id="email" placeholder='Admin Email' />
                        </div>

                        <div class="col-lg-3 col-md-3 col-sm-12">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
            }
        </div>
    );
};

export default MakeAdminForm;