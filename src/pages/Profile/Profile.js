import React, { useEffect, useState, useContext } from 'react'
import Navbar from '../../Components/navbar/Navbar';
import { AuthContext } from "../../context/AuthContext";
import { format } from 'timeago.js';


const RequestListItem = ({ request }) => {

    return (
        <div className='container'>


        <div id="profile">
            {/* <img id="profile-image" className='img-fluid' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile-image" /> */}
            
        </div>
            <div className="card my-4 mx-auto" style={{ "width": "710px" }}>
                <div className="card-header">
                    <h5 className="card-title">{format(request.date)}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">Start: <b>{request.start[0].toUpperCase() + request.start.substring(1)}</b> </p>
                    <p className="card-text">End Destination: <b> {request.end[0].toUpperCase() + request.end.substring(1)}</b> </p>
                    <p className="card-text">Passenger Required: <b> {request.passengers} </b></p>
                    <p className="card-text">Vehicle Type: <b> {request.Vehicletype[0].toUpperCase() + request.Vehicletype.substring(1)}</b></p>
                    <p className='card-text'>Passengers: <b> {
                        request.followers.map(follower=>{
                           return  (<span>{follower}<br></br></span>
                               )
                        })
                        }
                        </b></p>
                </div>
            </div >
        </div>
    )
}





export default function Profile() {

    const { user } = useContext(AuthContext);

    useEffect(() => {
        handleRequest();
    }, [])

    const [request, setRequest] = useState([])
    const handleRequest = async () => {
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.authToken}`
        }
        const response = await fetch(`http://localhost:5000/api/request/profile`, {
            method: 'POST',
            headers
        });
        const requests = await response.json();
        console.log("req")
      
        setRequest(requests);
        
    };
    return (
        <div>
            <Navbar />
            <div>
                {
                    (request.length !== 0) ?
                        request.map(request => <RequestListItem request={request} key={request._id} />)
                        : <h1>No Ride available</h1>
                }
            </div>
        </div>
    )
}


