import React from 'react';

const TeammateCard = ({ member }) => {
    const { profilePic, name, role } = member;
    console.log(name, role);
    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="card h-100">
                <img src={profilePic} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{role}</p>
                </div>
            </div>
        </div>
    );
};

export default TeammateCard;