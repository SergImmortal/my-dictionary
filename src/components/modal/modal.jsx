import React from "react";
import ReactDOM from 'react-dom';
import FontAwesome from "react-fontawesome";
import './modal.css'

const Modal = ({show, hide, children}) => show ? ReactDOM.createPortal(
    <React.Fragment>
        <div className='modal'  onClick={(event) => {
            if (event.target.classList.contains("modal")) {
                hide()
            }
        }}>
            <button onClick={hide} className='modal-btn-close'>
                <FontAwesome
                    className="fas fa-times"
                    name="close"
                    style={{color: '#dcdcdd'}}
                />
            </button>
            <section className='modal-main'>
                {children}
            </section>
        </div>
    </React.Fragment>, document.body
) : null;

export default Modal;