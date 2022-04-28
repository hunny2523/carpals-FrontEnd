import { useRef ,useContext} from "react";
import { AuthContext } from "../../context/AuthContext";

export default function DriverForm() {

    const {user} = useContext(AuthContext);

    const start=useRef();
    const end=useRef();
    const passengers=useRef();
    const Vehicletype=useRef();
    const vehicleNo=useRef();
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const body={
            start:start.current.value,
            end:end.current.value,
            passengers:passengers.current.value,
            vehicleNo:vehicleNo.current.value,
            Vehicletype:Vehicletype.current.value,
        }
        const headers={
            "Content-Type":"application/json",
            "Authorization":`Bearer ${user.authToken}`
        }
        const res=await fetch("http://localhost:5000/api/request",{
            method:"POST",
            headers,
            body:JSON.stringify(body)
        })
        const data=await res.json();

        if(res.status === 200){
            alert('Request Succefully Created, We will inform you whenever any passenger accept your request');
        }
    }


    return (
        <div>
            <h4 className="text-center">Enter Details of Ride</h4>
            <form action="#" id="userinfo" onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={start} placeholder="Start destination" />
                    <input type="text" ref={end} placeholder="End destination" />
                    <input type="number" ref={passengers} placeholder="passenger" />
                    <input type="text" ref={Vehicletype} placeholder="vehicle type" />
                    <input type="text" ref={vehicleNo} placeholder="vehicle no" />
                </div>
                {/* <div><i className="fa fa-users" aria-hidden="true"></i><input type="number" placeholder="Passengers" />
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <input type="datetime-local" placeholder="Date/Time" />
                </div> */}
                <button className="btn" id="secPartBtn">
                    Create Request
                </button>
            </form>
        </div>
    )
}
