import './Engineering Solutions.css';
import animation from '../Engineering Solutions/Animation - 1730428796813.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';

const EngineeringSolutions = () => {
    return (
        <div className='engineering-solutions-container'>
           <h1>Engineering Solutions </h1>

        <div className='engineering-solutions-description'>
            <p>
                CWB Solutions Pte Ltd provides a wide range of product engineering solutions & services including product architecture, design services, embedded software development, PCB boards design and development, testing, maintenance and product support.
               
            </p>

            <div className="float-animation">
                <Lottie
                animationData={animation}
                background="transparent"
                speed="1"
                style={{ width: "350px", height: "350px" }}
                loop
                autoplay>
                </Lottie>

            </div>

            <p>
                Our engineering practice integrates in-depth knowledge of technology platforms and profound understanding of business needs for the automobile industry: washing bays, carparks, car washes, petrol stations. Recently we began also to develop solutions for business centres and recreation zones as well as the development of electric car charging stations.
                
            </p>

            <p>
                For this moment, we provide engineering solutions in the following fields:
            </p>

        </div>


            <div className='engineering-solutions-category'>
                <div>
                    <Link id='link-item' to={'/car-barrier-systems/'}>Barrier Systems</Link>
                    <div>Booking Systems</div>
                </div>
                <div>
                    <Link id='link-item' to={'/engineering/customised-solutions/'}>Customised Solutions</Link>
                    <Link id='link-item' to={'/electric-bbq-pits/'}>Customised BBQ Pits</Link>
                </div>
                <div>
                    <Link id='link-item' to={"/engineering-solutions/consultation-services/"}>Consultation Services</Link>
                    <div>Payment Modules
                        <p> Coin, Cash Card/Flash Pay, Top Up</p>
                    </div>
                </div>
                <div>
                    <Link id='link-item' to={"/engineering/payment-modules/nets-cashcard-and-flashpay/ez-link-/payments-integration/"}>
                        <div>Payment Integration
                            <p>Ezy link, NETS</p>
                        </div>
                    </Link>
                    
                    <Link id='link-item' to={"/pcb-boards/"}>PCB Boards</Link>
                </div>
                <div>
                    <Link id='link-item' to={"/engineering-solutions/system-integration-and-product-design/"}>System integration & Product Design</Link>
                    <div>
                        Parking Guidence System (PGS)
                        <p>GSM modules</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EngineeringSolutions;
