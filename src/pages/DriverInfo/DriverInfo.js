import React,{useContext,useEffect,useState} from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useLocation } from 'react-router-dom';

export default function DriverInfo() {
    useEffect(()=>{
        fetchNumber()
    },[])
    
  const { user } = useContext(AuthContext)
    const location = useLocation();
    const request = location.state.requestId;

    const [data, setdata] = useState("loding")
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
        console.log(data);
        setdata(data);
    }

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    This is some text within a card body.
                    <h1>the phone number is : {data.driver}</h1>
                    {console.log(data)}
                </div>
            </div>
        </div>
    )
}
