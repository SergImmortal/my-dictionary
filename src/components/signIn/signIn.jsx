import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './signIn.css'


const SignIn = ({ toggle }) => {
    const [formDataSet, setFormData] = useState({
        email: "",
        password: ""
    });

    const updateFormData = event =>
        setFormData({
            ...formDataSet,
            [event.target.name]: event.target.value
        });

    const { email, password } = formDataSet;

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://words.pozhdema.in.ua/user/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    'email': email,
                    'password': password
                })
            }).then(data => data.json())
            .then(data => {
                if (!data.status) {
                    alert(data.msg);
                }
                console.log(data);
            });
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