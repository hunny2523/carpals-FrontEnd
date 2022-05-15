import Carousel from '../../Components/front part/FrontPart'
import Footer from '../../Components/footer/Footer'
import { AuthContext } from "../../context/AuthContext";
import Navbar from '../../Components/navbar/Navbar'

import Request from '../RequestPagePassenger/Request';
import DriverForm from '../../Components/DriverCreate/DriverForm'
import './home.css'
import { useEffect, useContext } from 'react';
import FrontPart from '../../Components/front part/FrontPart';
import Feedback from '../../Components/Feedback/Feedback';

export default function Home() {

    const { user, license } = useContext(AuthContext);


    return (
        <div>
            <Navbar />
            <FrontPart />

            <section id="coverpic" className='mx-auto w-50'>
                <div>
                    <h1>Carpool Services!</h1>
                    <p> Carpools can help you to find your favourite group to share your ride.A better utilisation of your vehicle, money and time with the trusted network to share a ride with an addition of unique gender friendly feature.
                    </p>
                </div>
            </section>
            <section id="basic-info-bar" className=' m-0'>
                <div id="info1"><i className="fa fa-credit-card-alt" aria-hidden="true"></i>&ensp; <h4>Let's Save money</h4>
                    <br />
                    <span>Choose your ride with lowest prices with Share & Save quality of carplas...! </span>
                </div>
                <div id="info2"><i className="fa fa-female " aria-hidden="true"></i><i className="fa fa-male"
                    aria-hidden="true"></i>&ensp; <h4>Wherever,Whenevr,or Whoever
                    </h4><br />
                    <span>Select your ride with your comfortness... Do as you like !</span>
                </div>
                <div id="info3"><i className="fa fa-id-card-o" aria-hidden="true"></i>&ensp; <h4>Trust who you travel with</h4>
                    <br />
                    <span>Its our resposibily of your security. know your partner first and let us check users identity
                    </span>
                </div>
            </section>
            <div  className='row mx-1'>
                <div className='col-md-6  img-fluid col-12'>
                    <img src="https://media.istockphoto.com/vectors/yellow-taxi-order-or-share-flat-line-illustration-vector-id1141727347?k=6&m=1141727347&s=612x612&w=0&h=1XpV9MIlY79RsUbX92pY3VDYcE5Sf3IAbyzkxoKnvno="
                        alt="" />
                </div>
                <div className='col-md-6 mt-5 p-5 col-12'>
                    <Feedback />
                </div>

            </div>
            <Footer />
        </div>
    )
}
