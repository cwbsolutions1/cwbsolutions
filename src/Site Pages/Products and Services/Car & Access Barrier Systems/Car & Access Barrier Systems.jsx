import { Link } from 'react-router-dom'
import './Car & Access Barrier Systems.css'

const CarAndAccessBarrierSystems =()=>{
    return(
        <div className='car-and-access-barrier-systems-container'>
            <h1>Car & Access Barrier Systems</h1>

            <h3>Carpark Barrier Systems </h3>
            <p>Our Barrier systems are the ideal solution if you need to control vehicle transit in public parking areas, car parks, condominiums parking, even when the traffic is heavy. CWB Solutions supply, install and maintain full range of quality carpark barrier systems & accessories in Singapore, such as CASHCARD, SEASON EPS, SEMI AND FULL EPS System as well as automatic car park barrier gates, swing arm barriers, intelligent parking systems, parking lot barriers and a complete range of car park accessories.</p>

            <p>Should you require an EPS Barrier system or replacement of the broken or spoiled barrier, please contact us for catalogs and a price quote.</p>

            <p>We use cost effective approaches such as contact-less or RFID or Season or Semi EPS to operate the barriers since the full EPS systems are very costly to implement and maintain.You can also choose an online or off-line payment modules <span style={{color:'red'}}>here</span> to integrate or contact us for a custom project that we can improve your productivity from.</p>

            <p>We have done standard Installations inclusive of all civil works for many Car parks and buildings in Singapore. We have also created custom solutions for various industries inclusive of a EPS Plant batching system, Weigh bridge integration with custom hardware requirements as well as localized Software and Network based database software solutions with designer Dashboards. </p>


            <div className='car-and-access-barrier-systems-products-navigation-container'>
                <div id='automatic-car-park-barrier-gate-section' className='car-and-access-barrier-systems-products-navigation-box'>
                    <h4>Automatic Car Park Barrier Gates</h4>
                    <div className='car-and-access-barrier-systems-products-navigation-box-sub-headings'>
                        <Link 
                        to={'/barrier-systems/automatic-car-park-barrier-gates/came-barrier-gates'}
                        className='car-and-access-barrier-item'>CAME Barrier Gates
                        </Link>
                        <Link 
                        to={'/barrier-systems/automatic-car-park-barrier-gates/nice-wil-parking-barrier-gate'}
                        className='car-and-access-barrier-item'>NICE WIL Parking Barrier Gate
                        </Link>
                        <Link 
                        to={'/barrier-systems/automatic-car-park-barrier-gates/automatic-car-park-barrier-gates'}
                        className='car-and-access-barrier-item'>Automatic Car Park Barrier Gates</Link>
                        <Link 
                        to={'/barrier-systems/automatic-car-park-barrier-gates/automatic-traffic-barrier-with-led-signal'}
                        className='car-and-access-barrier-item'>Automatic Traffic Barrier With LED Signal</Link>
                    </div>
                </div>
                <div id='intelligent-car-parking-systems' className='car-and-access-barrier-systems-products-navigation-box'>
                    <h4>Intelligent Car Parking System</h4>
                    <div className='car-and-access-barrier-systems-products-navigation-box-sub-headings'>
                        <Link 
                        to={"/barrier-systems/intelligent-car-parking-system/intelligent-car-parking-system-management-"}className='car-and-access-barrier-item'>Intelligent Car Parking System Management
                        </Link>
                        <Link 
                        to={'/barrier-systems/intelligent-car-parking-system/intelligent-car-parking-system-management-with-led-display'}
                        className='car-and-access-barrier-item'>Intelligent Car Parking System Management with LED Display
                        </Link>
                        <Link 
                        to={'/barrier-systems/intelligent-car-parking-system/automated-car-parking-system-for-hotels---residenses--'}
                        className='car-and-access-barrier-item'>Automated Car Parking System for Hotels & Residencies</Link>
                    </div>
                </div>
                <div id='swing-arm-barrier-section' className='car-and-access-barrier-systems-products-navigation-box'>
                    <h4>Swing Arm Barriers</h4>
                    <div className='car-and-access-barrier-systems-products-navigation-box-sub-headings'>
                        <Link 
                        to={'/barrier-systems/swing-arm-barriers/stainless-steel-automatic-single-arm-swing-gate'}
                        className='car-and-access-barrier-item'>Stainless steel Automatic Single Arm Swing Gate</Link>
                        <Link 
                        to={'/barrier-systems/swing-arm-barriers/smart-swing-security-arm-barrier-for-hotel-community-financial-institutions'}
                        className='car-and-access-barrier-item'>Smart Swing Security Arm Barrier for Hotel Community Financial Institutions
                        </Link>
                        <Link 
                        to={'/barrier-systems/swing-arm-barriers/access-control-time-attendance-versatile-stainless-steel-flap-swing-arm-barrier'}
                        className='car-and-access-barrier-item'>Access control Time attendance Versatile Stainless Steel Flap Swing Arm Barrier
                        </Link>
                        <Link 
                        to={'/barrier-systems/swing-arm-barriers/waterproof-stainless-steel-lan-sock-pedestrian-barrier-gate-swing-barriers'}
                        className='car-and-access-barrier-item'
                        >Waterproof stainless steel LAN Sock pedestrian barrier gate Swing barriers
                        </Link>
                        <Link 
                        to={'/barrier-systems/swing-arm-barriers/flap-barrier-(speed-gate)'}
                        className='car-and-access-barrier-item'>Flap Barrier (Speed Gate)
                        </Link>
                        
                    </div>
                </div>
                <div id='parking-lot-barriers-section' className='car-and-access-barrier-systems-products-navigation-box'>
                    <h4>Parking Lot Barriers</h4>
                    <div className='car-and-access-barrier-systems-products-navigation-box-sub-headings'>
                        <Link 
                        to={"/barrier-systems/parking-space-barrier/remote-control-automatic-smooth-running-parking-space-barriers-"}
                        className='car-and-access-barrier-item'>Remote Control Automatic smooth running Parking Space Barriers
                        </Link>
                        <Link 
                        to={"/barrier-systems/parking-space-barrier/stainless-steel-remote-control-parking-space-barrier"}
                        className='car-and-access-barrier-item'>Stainless steel Remote Control Parking Space Barrier
                        </Link>
                        <Link 
                        to={"/barrier-systems/parking-space-barrier/waterproof-parking-lot-protector"}
                        className='car-and-access-barrier-item'>Waterproof Parking Lot Protector
                        </Link>

                    </div>
                </div>
                <div id='turnstiles' className='car-and-access-barrier-systems-products-navigation-box'>
                    <h4>Turnstile</h4>
                    <div className='car-and-access-barrier-systems-products-navigation-box-sub-headings'>
                        <Link 
                        to={"/turnstile/full-height-turnstile"}
                        className='car-and-access-barrier-item'>Full Height Turnstile
                        </Link>
                        <Link
                        to={'/tripod-turnstile'}
                        className='car-and-access-barrier-item'>Tripod Turnstile
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default CarAndAccessBarrierSystems