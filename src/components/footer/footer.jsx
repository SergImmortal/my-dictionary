import React from 'react'
import './footer.css'

const Footer = () => {
    return(
        <footer className='copyright'>
            <p className='copy'> &copy; 2020 - {new Date().getFullYear()}</p>
        </footer>
    )
};

export default Footer;