import React from 'react';
import RequestList from '../pages/RequestPagePassenger/RequestList';
import ReactModal from "react-modal";
import classes from './modal.module.css';

const Modal = ({ isOpen, requestClose, request }) => {
    return (
        <ReactModal ariaHideApp={false} isOpen={isOpen} onRequestClose={requestClose} className={classes.modal}>
            <h1>Hello</h1>
            <RequestList request={request} />
        </ReactModal>
    );
};

export default Modal;