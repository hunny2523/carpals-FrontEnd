import { useRef, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Modal, ModalBody, ModalFooter, ModalHeader, Form, Button, FormGroup, Input } from 'reactstrap'
export default function DriverForm() {

    const { user } = useContext(AuthContext);

    // const start = useRef();
    // const end = useRef();
    // const passengers = useRef();
    // const Vehicletype = useRef();
    // const vehicleNo = useRef();
    let start = ""
    let end = ""
    let passengers = ""
    let Vehicletype = ""
    let vehicleNo = ""
    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            start: start?.value,
            end: end?.value,
            passengers: passengers?.value,
            vehicleNo: vehicleNo?.value,
            Vehicletype: Vehicletype?.value,
        }
        console.log(body)
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.authToken}`
        }
        const res = await fetch("http://localhost:5000/api/request", {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        })
        const data = await res.json();

        if (res.status === 200) {
            alert('Request Succefully Created, We will inform you whenever any passenger accept your request');
        }

        setopen(!open);
    }


    const [open, setopen] = useState(false);

    const handleToggle = () => {
        setopen(!open);
    }
    return (
        <div>
            <div>
                <Button color="danger" onClick={handleToggle}>Share A Ride</Button>
                <Modal isOpen={open} toggle={handleToggle} >
                    <ModalHeader toggle={handleToggle}>Enter Details of Ride</ModalHeader>
                    <ModalBody>
                        <Form action="#" id="userinfo" onSubmit={handleSubmit}>
                            <FormGroup>
                                <Input type="text" name="start" placeholder="Start destination"
                                    innerRef={(input) => start = input} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" name="end" placeholder="End destination"
                                    innerRef={(input) => end = input} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="number" name="passengers" placeholder="passenger"
                                    innerRef={(input) => passengers = input} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" name="Vehicletype" placeholder="vehicle type"
                                    innerRef={(input) => Vehicletype = input} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" name="vehicleNo" placeholder="vehicle no"
                                    innerRef={(input) => vehicleNo = input} />
                            </FormGroup>
                            <Button color="danger">
                                Create Request
                            </Button>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={handleToggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
            {/* <h4 className="text-center">Enter Details of Ride</h4>
            <form action="#" id="userinfo" onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={start} placeholder="Start destination" />
                    <input type="text" ref={end} placeholder="End destination" />
                    <input type="number" ref={passengers} placeholder="passenger" />
                    <input type="text" ref={Vehicletype} placeholder="vehicle type" />
                    <input type="text" ref={vehicleNo} placeholder="vehicle no" />
                </div>
                //  <div><i className="fa fa-users" aria-hidden="true"></i><input type="number" placeholder="Passengers" />
                //     <i className="fa fa-calendar" aria-hidden="true"></i>
                //     <input type="datetime-local" placeholder="Date/Time" />
                // </div> 
                <button className="btn" id="secPartBtn">
                    Create Request
                </button>
            </form> */}
        </div>
    )
}
