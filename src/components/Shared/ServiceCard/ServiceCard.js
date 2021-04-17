import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ServiceContext } from '../../../App';

const ServiceCard = ({ service }) => {
    const { title, price, description, image } = service;
    const {contentType, img} = image;
    const [selectedService, setSelectedService] = useContext(ServiceContext);
    const history = useHistory();

    const handleClick = async () => {
        await setSelectedService(service);
        history.push('/dashboard/book');
    }

    return (
        <div className="col-lg-4 col-md-6 col-sm-12 p-3" >
            <div onClick={handleClick} className='shadow p-3' style={{borderRadius: '15px', cursor: 'pointer'}}>
                <img src={`data:${contentType};base64, ${img}`} className='img-fluid' style={{width: '200px'}} alt=""/>
                <h4 className='my-4'>{title}</h4>
                <h5 className='mb-4'>${price}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;