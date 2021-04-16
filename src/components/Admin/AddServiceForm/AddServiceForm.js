import React, { useState } from 'react';

const AddServiceForm = () => {
    const [serviceInfo, setServiceInfo] = useState({});
    const [imageFile, setImageFile] = useState(null);

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
        const formData = new FormData();
        formData.append('file', imageFile);
        formData.append('title', serviceInfo.title);
        formData.append('price', serviceInfo.price);
        formData.append('description', serviceInfo.description);

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className='col-lg-9 col-md-8 col-sm-12 p-4'>
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
        </div>
    );
};

export default AddServiceForm;