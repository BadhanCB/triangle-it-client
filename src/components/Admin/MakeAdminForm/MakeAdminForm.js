import React from 'react';

const MakeAdminForm = () => {
    return (
        <div className='col-lg-9 col-md-9 col-sm-12 p-4'>
            <form class="row align-items-end">
                <div class="col-lg-9 col-md-9 col-sm-12">
                    <label for="email" class="form-lebel mb-3">Email</label>
                    <input type="email" class="form-control" id="email" placeholder='Admin Email' />
                </div>
                
                <div class="col-lg-3 col-md-3 col-sm-12">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default MakeAdminForm;