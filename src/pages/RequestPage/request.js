import axios from "axios"
import ReqestItem from "./RequestItem"

export default function Request() {


    const handleRequest = async (e) => {
        const start="ahmedabad"
        e.preventDefault();
        const response = await fetch(`localhost:5000/api/request/timeline/requests`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({start})
          });
          const json = await response.json();
          console.log(json)
    }

   
    // const handleSelect=(e)=>{
    //     console.log(e)
    // }

    return (
        <div className="container">
            <button onClick={handleRequest}>hello</button>
            {/* <h1>All requests</h1>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    City
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">Ahmedabad</a></li>
                    <li><a className="dropdown-item" href="#">Vadodara</a></li>
                    <li><a className="dropdown-item" href="#">Surat</a></li>
                </ul>
            </div>
            <ReqestItem start="a" end="b" /> */}
        </div>
    )
}
