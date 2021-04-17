import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import TopNavBar from '../Shared/TopNavBar/TopNavBar';
import { createAccount, facebookSignIn, googleSignIn, initializeFirebase, passwordSignIn } from './firebaseAuthentication';

const LogIn = () => {
    initializeFirebase();
    const [isNewUser, setIsNewUser] = useState(false);
    const [newUserInfo, setNewUserInfo] = useState({});
    const [user, setUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const handleBlur = event => {
        const newUser = { ...newUserInfo };
        newUser[event.target.name] = event.target.value;
        setNewUserInfo(newUser);
    }

    const handleLogIn = () => {
        passwordSignIn(newUserInfo.email, newUserInfo.password)
            .then(result => {
                setUser({
                    name: result.displayName,
                    email: result.email,
                })
                history.replace(from);
            }).catch(() => alert('Failed to Login'));
    }

    const handleSignUp = () => {
        createAccount(newUserInfo.email, newUserInfo.password)
            .then(result => {
                result.updateProfile({
                    displayName: newUserInfo.name,
                }).then(() => {
                    setUser({
                        name: newUserInfo.name,
                        email: result.email,
                    })
                    history.replace(from);
                }).catch((error) => {
                    alert(error);
                });
            });
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            setUser({
                name: result.displayName,
                email: result.email,
            })
            history.replace(from);
        }).catch(() => alert('Failed to Login'));
    }

    const handleFacebookSignIn = () => {
        facebookSignIn()
        .then(result => {
            setUser({
                name: result.displayName,
                email: result.email,
            })
            history.replace(from);
        }).catch(() => alert('Failed to Login'));
    }

    return (
        <main className='container'>
            <TopNavBar />
            <div className='row justify-content-center'>
                <div className="col-lg-6 col-md-8 col-sm-12 bg-light p-3 rounded-3">
                    <h3>{isNewUser ? 'Create an Account' : 'Login'}</h3>
                    {
                        isNewUser && <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" name='name' onBlur={handleBlur} class="form-control" id="name" placeholder='Name' />
                        </div>
                    }
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" name='email' onBlur={handleBlur} class="form-control" id="email" placeholder='Email' />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" name='password' onBlur={handleBlur} class="form-control" id="password" placeholder='Password' />
                    </div>
                    {
                        isNewUser
                            ? <button onClick={handleSignUp} type="submit" class="btn btn-primary">Sign Up</button>
                            : <button onClick={handleLogIn} type="submit" class="btn btn-primary">Log In</button>
                    }
                    {
                        isNewUser
                            ? <p>Already Have an Account! <span onClick={() => setIsNewUser(!isNewUser)} style={{ cursor: 'pointer' }}>Log In</span></p>
                            : <p>Don't Have any Account! <span onClick={() => setIsNewUser(!isNewUser)} style={{ cursor: 'pointer' }}>Create</span></p>
                    }
                </div>
                <h5 className='text-center'>Or</h5>
                <div className="col-lg-6 col-md-8 col-sm-12 bg-light p-3 rounded-3" >
                    <div className='d-flex justify-content-center' onClick={handleGoogleSignIn} style={{ cursor: 'pointer' }}>
                        <div className='d-flex border border-3 border-success px-1 align-items-center' style={{ borderRadius: '100px' }}>
                            <FontAwesomeIcon className='fs-2 text-primary me-3' icon={faGoogle} />
                            <p className='m-0'>Continue With Google</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center mt-2' onClick={handleFacebookSignIn} style={{ cursor: 'pointer' }}>
                        <div className='d-flex border border-3 border-success px-1 align-items-center' style={{ borderRadius: '100px' }}>
                            <FontAwesomeIcon className='fs-2 text-primary me-3' icon={faFacebook} />
                            <p className='m-0'>Continue With Facebook</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LogIn;