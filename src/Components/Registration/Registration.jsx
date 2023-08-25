import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import app from '../Hook/firebaseConfig';


const auth = getAuth(app);

const Registration = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const [ isDisabled, setIsDesabled ] = useState( true );

    const handleName = e => {
        e.preventDefault(); // To handle form default behave
        const name = e.target.value;
        setName( name );
    }
    const handleEmail = e =>{
        e.preventDefault();
        const email = e.target.value;
        const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
        if( !validEmail ){
            setError(' Please enter a valid email! ');
            return;
        }
        setError('');
        setEmail(email);
    }
    const handlePassword = e =>{
        e.preventDefault();
        const password = e.target.value;
        const validPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
        if( !validPassword ){
            setError( 'You must need at least 1 Uppercase, Lowercase, number and a special charecter!!' );
            return;
        }
        setError('');
        setPassword(password);
    }
    const handleregistration = e =>{
        e.preventDefault();
        if( name, email, password ){
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    updateName();
                    verifyEmail();
                    setError('');
                    console.log(user);
                    // ...
                })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                // ..
            });
        }
    }

    const updateName = () =>{
        updateProfile(auth.currentUser, {
            displayName: name,
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }
    const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
                // ...
            });
    }
    return (
        <div className='container'>
            <form className='w-50 justify-content-center'>
                <p className='text-danger'>Error: { error }</p>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Enter Your Name</label>
                    <input onBlur={ handleName } type="Text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter Your Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input onBlur={ handleEmail } type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onBlur={ handlePassword } type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-check">
                <input onClick={()=>setIsDesabled(!isDisabled)} type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Accept all terms & conditions</label>
            </div>
                <button onClick={ handleregistration } disabled={ isDisabled } type="submit" className="btn btn-primary mt-3">Register</button>
                <p>Already have account? Please <Link to='/login'>Login</Link></p>
            </form>
        </div>
    );
};

export default Registration;