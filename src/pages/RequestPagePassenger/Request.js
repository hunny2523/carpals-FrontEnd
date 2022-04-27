import axios from "axios"
import RequestList from "./RequestList"
import { useState } from "react"
import Modal from "../../Components/Modal"

export default function Request() {
    
        const handleSelect=(e)=>{
            const targetCity=e.target.options[e.target.selectedIndex].text
        //   console.log(targetCity);
          handleRequest(targetCity);
        }


    const [data, setdata] = useState("default");
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
        // console.log(data);
        setdata(data);
    };



    return (
        <div className="container">
            <label htmlFor="cars">Choose a City:</label>
            <select name="cars" id="cars" defaultValue="none" onChange={handleSelect}>
                <option value="none"  disabled hidden>Select an Option</option>
                    <option value="volvo">ahmedabad</option>
                    <option value="saab">vadodara</option>
                    <option value="saab">surat</option>
            </select>
            <br/>
            {(data!=="default")&&<Modal request={data}/>}
        </div>
    )
}
