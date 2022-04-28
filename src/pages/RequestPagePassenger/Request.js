import { useState } from "react";
import Modal from "../../Components/Modal";

export default function Request() {

    const handleSelect = (e) => {
        const targetCity = e.target.options[e.target.selectedIndex].text;
        handleRequest(targetCity);
    };


    const [data, setdata] = useState("default");
    const [isOpen, setIsOpen] = useState(false);
    const handleRequest = async (targetCity) => {
        const body = {
            start: targetCity
        };
        const response = await fetch(`http://localhost:5000/api/request/timeline/requests`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();
        
        setIsOpen(true);
        setdata(data);
    };



    return (
        <div className="container">
            <h3 className="text-primary fw-bolder">Select A City To Pick A Ride: </h3>
            <label htmlFor="cars" className="mt-3 me-2 fw-bold ">Choose a City:</label>
            <select name="cars" id="cars" className="px-3 py-1" defaultValue="none" onChange={handleSelect}>
                <option value="none" disabled hidden>Select a City</option>
                <option value="volvo">ahmedabad</option>
                <option value="saab">vadodara</option>
                <option value="saab">surat</option>
            </select>
            <br />
            {(data !== "default") && <Modal request={data} />}        </div>
    );
}
