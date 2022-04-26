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
            alert('Data saved.')
        }
    }


    return (
        <div>
            <form action="#" id="userinfo" onSubmit={handleSubmit}>
                <div>
                    <i className="fa fa-location-arrow" aria-hidden="true"></i>
                    <input type="text" ref={start} placeholder="Start destination" />

                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <input type="text" ref={end} placeholder="end" />
                    <input type="text" ref={passengers} placeholder="passenger" />
                    <input type="text" ref={Vehicletype} placeholder="vehicle type" />
                    <input type="text" ref={vehicleNo} placeholder="vehicle no" />
                </div>
                {/* <div><i className="fa fa-users" aria-hidden="true"></i><input type="number" placeholder="Passengers" />
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <input type="datetime-local" placeholder="Date/Time" />
                </div> */}
                <button id="secPartBtn">
                    <i className="fa fa-search" aria-hidden="true"></i>submit
                </button>
            </form>
        </div>
    )
}
