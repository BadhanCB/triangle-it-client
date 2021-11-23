import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo-lg.png';
const TopNavBar = () => {
    const [user] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useState(() => {
        if (user.email) {
            setIsLoading(true);
            fetch(`https://cryptic-waters-19850.herokuapp.com/isAdmin?email=${user.email}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            })
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data);
                    setIsLoading(false);
                })
        }
    }, [user.email])
    return (
        <header>
            {
                isLoading
                    ? <div className='d-flex justify-content-center'>
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-secondary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-success" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-danger" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-warning" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-info" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-light" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-border text-dark" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>

                    : <nav className="navbar navbar-expand-lg navbar-light bg-transperent">
                        <div className="container-fluid">
                            <img src={logo} alt="" className="img-fluid navbar-brand" style={{ height: '100px' }} />
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to='/home' className="nav-link fs-4 me-4">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/about' className="nav-link fs-4 me-4">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/services' className="nav-link fs-4 me-4">Services</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/projects' className="nav-link fs-4 me-4">Projects</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/blog' className="nav-link fs-4 me-4">Blog</Link>
                                    </li>
                                    {
                                        user.name &&
                                        (isAdmin
                                            ? <li className="nav-item">
                                                <Link to='/admin/orderlist' className="nav-link fs-4 me-4">Admin Panel</Link>
                                            </li>
                                            : <li className="nav-item">
                                                <Link to='/dashboard/book' className="nav-link fs-4 me-4">Dashboard</Link>
                                            </li>)
                                    }


                                    {
                                        !user.name && <li className="nav-item">
                                            <Link to='/login' className="nav-link fs-4 me-4 btn btn-secondary text-white">Login</Link>
                                        </li>
                                    }
                                    {
                                        user.name && <li>
                                            <Link to='/userprofile' className="nav-link fs-4 me-4">{user.name.split(' ')[0]}</Link>
                                        </li>
                                    }
                                </ul>
                            </div>
                        </div>
                    </nav>
            }
        </header>
    );
};

export default TopNavBar;