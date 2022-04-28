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
    <div className="card m-4" style={{"width":"710px"}}>
      <div className="card-header">
        <h5 className="card-title">{format(request.date)}</h5>
      </div>
      <div className="card-body">
     
        <p className="card-text">Start  : <b>{request.start}</b> </p>
        <p className="card-text">End Destination: <b> {request.end}</b> </p>
        <p className="card-text">passenger required : <b> {request.passengers} </b></p>
        <p className="card-text">vehicle type : <b> {request.Vehicletype}</b></p>
        <button className='btn btn-danger' onClick={handleClick}>Accept</button>
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
