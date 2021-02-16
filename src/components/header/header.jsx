import React from 'react'
import './header.css'
import FontAwesome from 'react-fontawesome'
import SignIn from "../signIn/signIn";
import useModal from "../useModal/useModal";
import Modal from "../modal/modal";
import {Link} from "react-router-dom";


const Header = () => {
    const {show, toggle} = useModal();
    return (
        <header className='header'>
            <Link to="/" className='link'>
                <h1>Two seals</h1>
            </Link>
            <button onClick={toggle} className='btn-sign'>
                <FontAwesome name="sign" className="fa-sign-in"/>
            </button>
            <Modal
                show={show}
                hide={toggle}
            >
                <SignIn toggle={toggle}/>
            </Modal>
        </header>
    )
};

export default Header;