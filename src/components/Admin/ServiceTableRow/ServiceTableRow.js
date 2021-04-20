import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');


const ServiceTableRow = ({ service, handleDelete, loadServices }) => {
    const { title, price, description, _id } = service;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [updatedSrvice, setUpdatedService] = useState({
        title,
        price,
        description
    });
    const [isTransferingData, setIsTransferingData] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleInput = event => {
        const newUpdatedSrvice = { ...updatedSrvice };
        newUpdatedSrvice[event.target.name] = event.target.value;
        setUpdatedService(newUpdatedSrvice);
    }

    const handleSubmit = event => {
        event.preventDefault();
        setIsTransferingData(true);
        fetch(`https://cryptic-waters-19850.herokuapp.com/updateService/${_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedSrvice),
        })
            .then(res => res.json())
            .then(result => {
                setIsTransferingData(false);
                if (result) {
                    alert('Updated Successfully');
                    closeModal();
                    loadServices();
                } else {
                    alert('Failed to Update');
                }
            })
            .catch(() => {
                alert('Failed to Update');
                setIsTransferingData(false);
            });
    }

    return (
        <tr>
            <th>{title}</th>
            <th>{price}</th>
            <th style={{ width: '300px' }}>{description}</th>
            <th>
                <button onClick={openModal} className="btn btn-secondary m-1">Update</button>
                <button onClick={() => handleDelete(_id)} className="btn btn-danger m-1">Delete</button>
            </th>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {
                    isTransferingData
                        ? <div className='d-flex justify-content-center'>
                            <div className="spinner-border text-warning" style={{ width: '10rem', height: '10rem' }} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        : <> <div className='d-flex mb-3'>
                            <h2>Update The Service Details</h2>
                            <button className='btn btn-danger ms-3' onClick={closeModal}>close</button>
                        </div>
                            <form onSubmit={handleSubmit}>
                                <div class="mb-3">
                                    <label for="title" class="form-lebel">Title</label>
                                    <input type="text" onChange={handleInput} name='title' className="form-control" id="title" defaultValue={title} />
                                </div>
                                <div class="mb-3">
                                    <label for="price" class="form-lebel">Price</label>
                                    <input type="number" onChange={handleInput} name='price' className="form-control" id="price" defaultValue={price} />
                                </div>
                                <div class="mb-3">
                                    <label for="description" class="form-lebel">Description</label>
                                    <textarea onChange={handleInput} name='description' defaultValue={description} className="form-control" id="description" rows="3"></textarea>
                                </div>
                                <div class="mb-3">
                                    <input type="submit" className="btn btn-success" />
                                </div>
                            </form>
                        </>
                }

            </Modal>
        </tr>
    );
};

export default ServiceTableRow;