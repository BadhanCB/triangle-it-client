import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ServiceContext } from '../../../App';
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const ServiceCard = ({ service }) => {
    const { title, price, description, image } = service;
    const { contentType, img } = image;
    const [selectedService, setSelectedService] = useContext(ServiceContext);
    const history = useHistory();

    const handleClick = async () => {
        await setSelectedService(service);
        history.push('/dashboard/book');
    }

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (
        <div className="col-lg-4 col-md-6 col-sm-12 p-3" >
            <animated.div
                onClick={handleClick}
                className='shadow p-3 bg-white'
                style={{ borderRadius: '15px', cursor: 'pointer', transform: props.xys.interpolate(trans) }}
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
            >
                <img src={`data:${contentType};base64, ${img}`} className='img-fluid' style={{ height: '200px' }} alt="" />
                <h4 className='my-4'>{title}</h4>
                <h5 className='mb-4'>${price}</h5>
                <p>{description}</p>
            </animated.div>
        </div>
    );
};

export default ServiceCard;