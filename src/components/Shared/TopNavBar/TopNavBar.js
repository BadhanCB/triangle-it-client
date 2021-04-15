import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/code.png';

const TopNavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-transperent">
                <div className="container-fluid">
                    <img src={logo} alt="" className="img-fluid navbar-brand" style={{width: '60px'}} />
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
                        <li className="nav-item">
                            <Link to='/admin/orderlist' className="nav-link fs-4 me-4">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/login' className="nav-link fs-4 me-4">Login</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default TopNavBar;