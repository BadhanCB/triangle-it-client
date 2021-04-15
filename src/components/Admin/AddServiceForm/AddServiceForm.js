import React from 'react';

const AddServiceForm = () => {
    return (
        <div className='col-lg-9 col-md-8 col-sm-12 p-4'>
            <form>
                <div class="mb-3">
                    <label for="title" class="form-label">Service Title</label>
                    <input type="text" class="form-control" id="title" name='title' placeholder='Title' />
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea class="form-control" id="description" rows="3" placeholder='Service Description'></textarea>
                </div>
                <div class="mb-3">
                    <label for="image" class="form-label">Image</label>
                    <input class="form-control" type="file" id="image" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddServiceForm;