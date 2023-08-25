import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');

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
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
                <p>Already have account? Please <Link to='/login'>Login</Link></p>
            </form>
        </div>
    );
};

export default Registration;