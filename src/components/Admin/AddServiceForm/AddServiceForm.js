import React, { useState } from 'react';
import { useHistory } from 'react-router';

const AddServiceForm = () => {
    const [serviceInfo, setServiceInfo] = useState({});
    const [imageFile, setImageFile] = useState(null);
    const history = useHistory();
    const [isSendingData, setIsSendingData] = useState(false);

    const handleBlur = event => {
        const newServiceInfo = { ...serviceInfo };
        newServiceInfo[event.target.name] = event.target.value;
        setServiceInfo(newServiceInfo);
    }

    const handleImageFileChange = event => {
        const newFile = event.target.files[0];
        setImageFile(newFile);
    }

    const handleSubmit = event => {
        event.preventDefault();
        setIsSendingData(true);
        const formData = new FormData();
        formData.append('file', imageFile);
        formData.append('title', serviceInfo.title);
        formData.append('price', serviceInfo.price);
        formData.append('description', serviceInfo.description);

        fetch('https://triangle-it-server.onrender.com/addService', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(result => {
                setIsSendingData(false);
                if (result) {
                    alert('Added SuccessFully');
                    history.push('/admin/manageservice');
                } else {
                    alert('Failed to add Service');
                }
            })
            .catch(error => {
                alert(error);
                setIsSendingData(false);
            })
    }

    return (
        <div className='col-lg-9 col-md-8 col-sm-12 p-4'>
            {
                isSendingData
                    ? <div className='d-flex justify-content-center'>
                        <div className="spinner-border text-warning" style={{ width: '10rem', height: '10rem' }} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="title" class="form-label">Service Title</label>
                            <input type="text" name='title' onBlur={handleBlur} class="form-control" id="title" placeholder='Title' />
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">Price</label>
                            <input type="text" name='price' onBlur={handleBlur} class="form-control" id="price" placeholder='Price' />
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea name='description' onBlur={handleBlur} class="form-control" id="description" rows="3" placeholder='Service Description'></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="image" class="form-label">Image</label>
                            <input onChange={handleImageFileChange} class="form-control" type="file" id="image" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
            }
        </div>
    );
};

export default AddServiceForm;