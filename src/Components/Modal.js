import React,{useEffect, useState} from 'react';
import RequestList from '../pages/RequestPagePassenger/RequestList';
import ReactModal from "react-modal";
import classes from './modal.module.css';
import {Button,Modal,ModalBody,ModalHeader,ModalFooter} from 'reactstrap'


export default function Model(props) {

    // useEffect(()=>{
    //     setopen(!open);
    //     return ()=>{
    //         setopen(!open)
    //     }
    // },[])

  const [open, setopen] = useState(true);

const handleToggle=()=>{
    setopen(!open);
}

    return (
        <div>
            <Button color="danger" className='mt-4' onClick={handleToggle}>Search For Ride</Button>
            <Modal size='lg' isOpen={open} toggle={handleToggle} >
                <ModalHeader toggle={handleToggle}>Modal title</ModalHeader>
                <ModalBody>
                    <RequestList request={props.request}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={handleToggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

