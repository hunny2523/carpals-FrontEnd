import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';

const RequestListItem = ({ request }) => {

  const { user } = useContext(AuthContext)

  const handleClick = async () => {

    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${user.authToken}`
    }

    const res = await fetch(`http://localhost:5000/api/request/${request._id}/accept`, {
      method: 'PUT',
      headers
    })

    const data = await res.json()

    console.log(data);  
  }

  return (
    <div className="card">
      <div className="card-header">
        {request.start}
      </div>
      <div className="card-body">
        <h5 className="card-title">{request.date}</h5>
        <p className="card-text">end :{request.end} </p>
        <p className="card-text">passenger required :{request.passengers} </p>
        <p className="card-text">vehicle type : {request.Vehicletype}</p>
        <button onClick={handleClick}>Accept</button>
      </div>
    </div >
  )

}

export default function RequestList(props) {
  return (
    <div>
      {
        (props.request.length !== 0) ?
          props.request.map(request => <RequestListItem request={request} key={request._id} />)
          : <h1>No Ride available</h1>
      }
    </div>
  )
}
