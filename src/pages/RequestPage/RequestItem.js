import React from 'react'

export default function ReqestItem(props) {
  return (
    <div>
         <div className="card">
                <div className="card-header">
                    {props.start}
                </div>
                <div className="card-body">
                    <h5 className="card-title">date and time of request</h5>
                    <p className="card-text">end : </p>
                    <p className="card-text">passenger required : </p>
                    <p className="card-text">vehicle type : </p>
                    <button>Accept</button>
                </div>
            </div>
    </div>
  )
}
