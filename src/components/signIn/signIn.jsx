import React, {useState} from 'react'
import {Link} from "react-router-dom";
import './signIn.css'


const SignIn = ({toggle}) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const updateFormData = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    const { email, password } = formData;

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <p className='title-form'>Sign In</p>
            <form onSubmit={handleSubmit} className='form-signIn'>
                <input
                    name='email'
                    value={email}
                    onChange={e => updateFormData(e)}
                    type='email'
                    placeholder='e-mail'
                    className='input'
                    required
                />
                <input
                    name='password'
                    value={password}
                    onChange={e => updateFormData(e)}
                    type='password'
                    placeholder='password'
                    className='input'
                    required
                />
                <div className="admin-btn">
                    <button type="submit" className='form-btn'><span className='effect-btn'>Submit</span></button>
                    <Link to="/sign-up" className='link'>
                        <button onClick={toggle} className='form-btn btn-sign-up'><span className='effect-btn'>Sign Up</span></button>
                    </Link>
                </div>
            </form>
        </>
    )
};

export default SignIn;