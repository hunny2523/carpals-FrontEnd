import React, { useEffect, useRef } from 'react'
import RequestList from '../pages/RequestPagePassenger/RequestList'
import {ReactModal } from "react-modal"
export default function Modal(props) {
    // const ref=useRef();
    // const closeRef=useRef();
    // useEffect(()=>{
    //     ref.current.click();
    //     return ()=>{
    //         closeRef.current.click();
    //     }
    // },[])

    return (
        <div>
            <ReactModal>
                isOpen={
                    false}
                <p>Modal Content
                <RequestList request={props.request}/>
                </p>
            </ReactModal>




            {/* <button ref={ref} type="button" className="d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <RequestList request={props.request}/>
                        </div>
                        <div className="modal-footer">
                            <button ref={closeRef} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
