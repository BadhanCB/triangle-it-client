import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { signOut } from '../LogIn/firebaseAuthentication';
import TopNavBar from '../Shared/TopNavBar/TopNavBar';

const UserProfile = () => {
    const [user, setUser] = useContext(UserContext);
    const handleSignOut = () => {
        signOut();
        setUser({});
    }
    return (
        <div className='text-center'>
            <TopNavBar />
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <button className="btn btn-danger" onClick={handleSignOut}>Sign Out</button>
        </div>
    );
};

export default UserProfile;