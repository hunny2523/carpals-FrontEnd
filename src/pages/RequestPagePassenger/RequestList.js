import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';

import DriverInfo from '../DriverInfo/DriverInfo';

const RequestListItem = ({ request }) => {
  const history = useHistory();


  const handleClick = async () => {
    history.push("/userInfo",{requestId:request._id});
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
