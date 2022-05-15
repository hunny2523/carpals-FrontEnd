import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { format } from 'timeago.js';

import DriverInfo from '../DriverInfo/DriverInfo';

const RequestListItem = ({ request }) => {
  const history = useHistory();


  const handleClick = async () => {
    history.push("/userInfo",{requestId:request._id});
  }

  return (
    <div className='container'>

    <div className="card my-4 mx-auto" style={{"width":"710px"}}>
      <div className="card-header">
        <h5 className="card-title">{format(request.date)}</h5>
      </div>
      <div className="card-body">
     
        <p className="card-text">Start: <b>{request.start[0].toUpperCase() + request.start.substring(1)}</b> </p>
        <p className="card-text">End Destination: <b> {request.end[0].toUpperCase() + request.end.substring(1)}</b> </p>
        <p className="card-text">Passenger Required: <b> {request.passengers} </b></p>
        <p className="card-text">Vehicle Type: <b> {request.Vehicletype[0].toUpperCase() + request.Vehicletype.substring(1)}</b></p>
        <button className='btn btn-danger' onClick={handleClick}>Accept</button>
      </div>
    </div >
    </div>
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
