import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/code.png';

const AdminTopBar = (props) => {
    const [user] = useContext(UserContext);
    return (
        <nav className='row'>
            <div className="col-md-3 d-flex text-center" style={{ height: '80px' }}>
                <Link to='/' className='me-3 text-secondary'><FontAwesomeIcon className='fs-1 d-block' icon={faLongArrowAltLeft} />Back</Link>
                <img src={logo} className='img-fluid' alt="" />
                <div>
                    <h3>Triangle</h3>
                    <h3>IT</h3>
                </div>
            </div>
            <div className="col-md-7 d-flex justify-content-lg-start justify-content-md-center align-items-center">
                {
                    props.children
                }
            </div>
            <div className="col-md-2">
                <h4>{user.name}</h4>
                <p>{user.email}</p>
            </div>
        </nav>
    );
};

export default AdminTopBar;