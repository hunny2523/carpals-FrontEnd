import { useContext, useRef } from 'react'
import "./login.css"
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from 'react-router-dom';

export default function Login() {

  const password = useRef();
  const contact = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { contactNo: contact.current.value, password: password.current.value },
      dispatch
    );
  };

  const history = useHistory();
  const handleRegister = () => {
    history.push("/register");
  }

  return (
    <div className='container mt-md-5 pt-md-5 login-bg'>
      <div className="row justify-content-center">
        <div className="col-12 col-md-4 mt-md-5">
          <h1 className='text-start display-3'>Carpals</h1>
          <h2 className='text-start'>Share your Ride!</h2>
        </div>
        <div className="col-12 col-md-5">
          <h2>Sign In</h2>
          <form onSubmit={handleClick}>
            <div className="m-1 form-group">
              <label htmlFor='number'>Contact No.</label>
              <i className="fa fa-user"></i>
              <input ref={contact} className="form-control login-input" type="text" required name="number" id="number" placeholder="Enter Contact No." />
            </div>
            <div className=" m-1 form-group">
              <label htmlFor='password'>Password</label>
              <i className="fa fa-key"></i>
              <input ref={password} className="form-control" type="password" required name="password" id="password" placeholder="Enter Password" />
            </div>
            <button className="m-1 btn w-50 mt-3 btn-danger" > {isFetching ? ("loding") : ("Log In")}</button>
          </form>
          <div>
            <small className=' m-1 mt-3 text-muted small'>Not have account?</small>
            <button className=' m-3 btn border-dark btn-sm' onClick={handleRegister}>Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}
