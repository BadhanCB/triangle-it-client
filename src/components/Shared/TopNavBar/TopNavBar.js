import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../images/logo-lg.png";
import {
    ChartBarIcon,
    ClipboardListIcon,
    HomeIcon,
    InformationCircleIcon,
    LoginIcon,
    TableIcon,
    TruckIcon,
    UserIcon,
    ViewGridAddIcon,
} from "@heroicons/react/solid";
import "./TopNavBar.css";

const TopNavBar = () => {
    const [user] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    let history = useHistory();

    useState(() => {
        if (user.email) {
            setIsLoading(true);
            fetch(
                `https://cryptic-waters-19850.herokuapp.com/isAdmin?email=${user.email}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    setIsAdmin(data);
                    setIsLoading(false);
                });
        }
    }, [user.email]);
    return (
        <header>
            {isLoading ? (
                <div className="d-flex justify-content-center">
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
            ) : (
                <nav className="navbar navbar-expand-lg navbar-light bg-transperent">
                    <div className="container-fluid">
                        <img
                            src={logo}
                            alt="brand-logo"
                            className="img-fluid navbar-brand logo"
                            onClick={() => history.push("/")}
                        />
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link
                                        to="/home"
                                        className="nav-link fs-5 me-4 d-flex justify-content-center align-items-center gap-2"
                                    >
                                        <HomeIcon className="nav-bar-icon" />
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/about"
                                        className="nav-link fs-5 me-4 d-flex justify-content-center align-items-center gap-2"
                                    >
                                        <InformationCircleIcon className="nav-bar-icon" />
                                        About Us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/services"
                                        className="nav-link fs-5 me-4 d-flex justify-content-center align-items-center gap-2"
                                    >
                                        <TruckIcon className="nav-bar-icon" />
                                        Services
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/projects"
                                        className="nav-link fs-5 me-4 d-flex justify-content-center align-items-center gap-2"
                                    >
                                        <ChartBarIcon className="nav-bar-icon" />
                                        Projects
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/blog"
                                        className="nav-link fs-5 me-4 d-flex justify-content-center align-items-center gap-2"
                                    >
                                        <TableIcon className="nav-bar-icon" />
                                        Blog
                                    </Link>
                                </li>
                                {user.name &&
                                    (isAdmin ? (
                                        <li className="nav-item">
                                            <Link
                                                to="/admin/orderlist"
                                                className="nav-link fs-5 me-4 d-flex justify-content-center align-items-center gap-2"
                                            >
                                                <ViewGridAddIcon className="nav-bar-icon" />
                                                Admin Panel
                                            </Link>
                                        </li>
                                    ) : (
                                        <li className="nav-item">
                                            <Link
                                                to="/dashboard/book"
                                                className="nav-link fs-5 me-4 d-flex justify-content-center align-items-center gap-2"
                                            >
                                                <ClipboardListIcon className="nav-bar-icon" />
                                                Dashboard
                                            </Link>
                                        </li>
                                    ))}

                                {!user.name && (
                                    <li className="nav-item">
                                        <Link
                                            to="/login"
                                            className="nav-link fs-5 me-4 btn btn-secondary text-white d-flex justify-content-center align-items-center gap-2"
                                        >
                                            <LoginIcon className="nav-bar-icon" />
                                            Login
                                        </Link>
                                    </li>
                                )}
                                {user.name && (
                                    <li>
                                        <Link
                                            to="/userprofile"
                                            className="nav-link fs-5 me-4 d-flex justify-content-center align-items-center gap-2"
                                        >
                                            <UserIcon className="nav-bar-icon" />
                                            {user.name.split(" ")[0]}
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default TopNavBar;
