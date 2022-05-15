import React,{useContext,useEffect,useState} from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useLocation } from 'react-router-dom';
import Navbar from '../../Components/navbar/Navbar';

export default function DriverInfo() {
    useEffect(()=>{
        fetchNumber()
    },[])
    
  const { user } = useContext(AuthContext)
    const location = useLocation();
    const request = location.state.requestId;

    const [data, setdata] = useState("loding");

    const fetchNumber=async ()=>{
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.authToken}`
        }
        const res = await fetch(`http://localhost:5000/api/request/${request}/accept`, {
            method: 'PUT',
            headers
        })
        const data = await res.json()
        setdata(data);
    }

    return (
        <div>
            <Navbar/>
        <div className='container mt-5 justify-content-center d-flex'>
            <div className="card mt-5 w-75">
                <div className="card-header fw-bold">Driver Information: </div>
                <div className="card-body">
                    <p>Driver Name: <b>{data.Name}</b> </p>
                    <p>Contact number: <b>{data.contact}</b> </p>
                </div>
            </div>
        </div>
        </div>
    )
}
