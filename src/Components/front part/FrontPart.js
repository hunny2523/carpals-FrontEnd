import './frontPart.css'
import { useContext, useState,useEffect } from 'react';
import TypeAnimation from 'react-type-animation';
import { AuthContext } from "../../context/AuthContext";
import DriverForm from '../DriverCreate/DriverForm';
import Request from '../../pages/RequestPagePassenger/Request';
import { Button,Modal,ModalBody,ModalHeader,ModalFooter,Form,FormGroup,Input } from 'reactstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function FrontPart() {
    
    
    
    const { user } = useContext(AuthContext);
    console.log("user");
    console.log(user)
    //    const [driver, setDriver] = useState(false)
    // const handleShareRide=()=>{
        //     if(user.license){
            //         setDriver(true);
            
            //     }
            // }
            const history = useHistory();
            const handleChooseRide = () => {
                history.push("./findRide")
            }
            
            let license = "";
            const handleSubmit = async (e) => {
                e.preventDefault();
                const body = {
                    license: license?.value,
                }
                console.log(body)
                const headers = {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${user.authToken}`
                }
                const res = await fetch("http://localhost:5000/api/auth/UserLicence", {
                    method: "POST",
                    headers,
            body: JSON.stringify(body)
        })
        const data = await res.json();
        console.log(data);
        var x = localStorage.getItem("user");
        console.log(localStorage.user)
        const user1={}
        user1.authToken=user.authToken;
        user1.license=true;
        console.log(user1)
        localStorage.setItem("user",JSON.stringify(user1));
        if (res.status === 200) {
            alert('Added License Number SuccessFully , Now you can Share Your Ride with Others');
        }
        setopen(!open);
        window.location.reload()
    }


    const [open, setopen] = useState(false);

    const handleToggle = () => {
        setopen(!open);
    }
    
    return (
        <div id="home-page">
            <div className='container'>

                <h1 className='text-light text-center home-page-welcome-heading' >
                    Welcome To Carpals !
                </h1>

                <TypeAnimation className="animation-text mt-3 text-center"
                    cursor={true}
                    sequence={[
                        'Gender Friendly',
                        2000,
                        'Save Money',
                        2000,
                        'People Together',
                        2000,
                    ]}
                    wrapper="h2"
                    repeat={Infinity}
                />
                <div className='mt-4 d-flex justify-content-center'>
                    {user.license ? <DriverForm /> : 
                    <div>
                        <Button className='btn btn-outline-light' onClick={handleToggle}>Share a Ride</Button>
                        <Modal isOpen={open} toggle={handleToggle} >
                    <ModalHeader toggle={handleToggle}>Enter License No.</ModalHeader>
                    <ModalBody>
                        <Form action="#" id="userinfo" onSubmit={handleSubmit}>
                            <FormGroup>
                                <Input type="text" name="license" placeholder="Enter License Number"
                                    innerRef={(input) => license = input} />
                            </FormGroup>
                            <Button color="danger">
                                Add No
                            </Button>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={handleToggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                    </div>}
                    <Button color="danger" onClick={handleChooseRide} className='ms-4'>Choose A Ride</Button>
                </div>
            </div>
            {/* {driver &&  <DriverForm/>} */}

        </div>
    )
}







// carousel code of sem 5
// <div className="carousel-size">
//     <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
//         <div className="carousel-indicators">
//             <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//             <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
//             <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
//         </div>
//         <div className="carousel-inner">
//             <div className="carousel-item active" data-bs-interval="3000">
//                 <img src="https://cdn.pixabay.com/photo/2014/09/03/20/15/shoes-434918__480.jpg" className="d-block w-100" alt="..." />
//                 <h3 className="carousel-caption d-none d-md-block">
//                     <h5>Choose Healthy and safe ride</h5>
//                 </h3>
//             </div>
//             <div className="carousel-item" data-bs-interval="3000">
//                 <img src="https://media.istockphoto.com/photos/online-ride-sharing-and-carpool-mobile-application-rideshare-taxi-app-picture-id852475590?k=6&m=852475590&s=612x612&w=0&h=fJLPGVgGpewcACv0Tg9PqdxB9eNAynl56Awx2mfyS1I=" className="d-block w-100" alt="..." />
//                 <h3 className="carousel-caption d-none d-md-block">
//                     find your partner
//                     <br /> in few minutes...!
//                 </h3>
//             </div>
//             <div className="carousel-item" data-bs-interval="3000">
//                 <img src="https://media.istockphoto.com/photos/women-in-car-rideshare-in-city-of-los-angeles-picture-id1139275583?k=6&m=1139275583&s=612x612&w=0&h=aFm713dYxS5FDgAyDmucwhu_iK2SQ_Np-ns2N7v_6Ok=" className="d-block w-100" alt="..." />
//                 <h3 className="carousel-caption d-none d-md-block">
//                 livelihood with carpals !
//                 </h3>
//             </div>
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//         </button>
//     </div>
// </div>