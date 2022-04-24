import "./register.css"
import { useRef, useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom'
export default function Register() {
  const password = useRef();
  const contact = useRef();
  const name = useRef();
  const LicenseNo = useRef();
  const Repeatpassword = useRef();
  const history = useHistory();
  const handleClick = async (e) => {
    e.preventDefault();
    const user = {
      name: name.current.value,
      contactNo: contact.current.value,
      password: password.current.value,
      licenseNo:LicenseNo.current.value
    }

    try {
      console.log(password.current.value+" "+Repeatpassword.current.value);
      if(password.current.value===Repeatpassword.current.value){
        await axios.post("http://localhost:5000/api/auth/UserRegister", user);
        history.push("/login");
      }
      else{
        alert("wrong password");
      }
    } catch (error) {
      console.log(error);
    }
  };


  const handleLogin = () => {
    history.push("/login");
  }

  const [License, setLicense] = useState(true);
  const handleLicense = () => {
    setLicense(!License);
  }

  return (
    <div className='container login-bg mt-md-5 pt-md-5'>
      <div className="row">
        <div className="col-12 col-md-4 offset-md-1 mt-md-5">
          <h1 className='text-start display-3'>Carpals</h1>
          <h2 className='text-start'>Share your Ride!</h2>
        </div>
        <div className="col-12 col-md-5">
          <h2>Register Now</h2>
          <form onSubmit={handleClick}>
            <div className="form-group m-1">
              <label htmlFor='number'>Enter your Name</label>
              <i className="fa fa-user"></i>
              <input ref={name} className="form-control login-input" type="text" required name="name" id="name" placeholder="Enter Your Name" />
            </div>
            <div className="form-group m-1">
              <label htmlFor='number'>Contact No.</label>
              <i className="fa fa-user"></i>
              <input ref={contact} className="form-control login-input" type="text" required name="number" id="number" placeholder="Enter Contact No." />
            </div>
            <div className="row mt-1">
              <div className="form-group col-md-6 col-12">
                <label htmlFor='password'>Password</label>
                <i className="fa fa-key"></i>
                <input ref={password} className="form-control" type="password" required name="password" id="password" placeholder="Enter Password" />
              </div>
              <div className="form-group col-md-6 col-12 ">
                <label htmlFor='passwordRepeat'>Confirm Password</label>
                <i className="fa fa-key"></i>
                <input ref={Repeatpassword} className="form-control" type="password" required name="passwordRepeat" id="passwordRepeat" placeholder="Enter Password Again" />
              </div>
            </div>
            <div className="form-check m-1 mt-2">
              <input type="checkbox" onChange={handleLicense} className="form-check-input" id="checkDriver" />
              <label className="form-check-label" htmlFor="checkDriver">Register As Driver</label>
            </div>
            <div className="form-group m-1">
              <label htmlFor='Enter License Number'>License No.</label>
              <i className="fa fa-key"></i>
              <input disabled={License} ref={LicenseNo} className="form-control" type="text" required name="Enter License Number" id="Enter License Number" placeholder="Enter Password Again" />
            </div>
            <button className="btn m-1 w-50 mt-3 btn-danger"> Register</button>
          </form>
          <div>
            <small className='mt-3 m-1 text-muted small'>Already have Account?</small>
            <button className=' m-3 btn border-dark btn-sm' onClick={handleLogin}>Sign in</button>
          </div>
        </div>
      </div>
    </div>
  )
}
