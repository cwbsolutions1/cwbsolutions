import './Air Machines.css'
import airMachineImage from './Air_Machine.jpeg'
import image1 from './Mini-Touchless-Automatic-Waterless-Car-Wash-Machinery.png'
import vaccumCleaner from './Commercial-Vacuum-CleanerPower.png'
import airDryer from'./Hot-Air-Dryer.jpg'
import { Link } from 'react-router-dom'

const AirMachines = () =>{
    return(
        <div className='air-machines-container'>
            <h1>Air Machines</h1>

            <p>We offer a high quality stainless steel air machine for your petrol station,  detail shop, multi store car-park  or anywhere you want to offer your customers air compression. Whether you are looking for a revenue generator or to provide your customers or residents with additional service we've got all the right options for you. With multiple payment options for your customer (free, pay, token) to choose from you will find this equipment will pay for itself quickly.</p>

            <img id='air-machine-image' src={airMachineImage} alt="" />

            <div className='air-machines-features-container'>
                <h6>Features</h6>

                <ul type="square">
                    <li>Coin operated or “Free” service models available</li>
                    <li>SSAC 110 volt non-accumulating timer</li>
                    <li>Only available with Devilbiss 3 HP air compressor, 6-month warranty </li>
                    <li>Cut resistant 50’ x 1/4” wire braid service station quality air hose with 120 PSI inline air gauge </li>
                    <li>High security lock bar system</li>
                    <li>Imonex mechanical coin acceptor takes quarters </li>
                    <li>JB7 coin box with optional locking cover </li>
                    <li>Wall or pedestal mounted variants</li>
                    <li>Optional timers, coin mechs, cycle counters, and coin counters are available</li>
                    <li>Optional: “Free Service” wireless push button remote control allows customers to receive free use of either service for the normal cycle time. The optional “Free Service” can be activated by the attendant or the cashier with the push of a button for customer convenience</li>
                    
                </ul>
            </div>

            
            <div className='add-ons-to-air-machines-container'>
                <h6>Add On's to Air Machines</h6>

                <div className='add-ons-to-air-machines-container-grid'>
                    
                    <div className='add-ons-to-air-machines-box'>
                        <div><img src={vaccumCleaner} alt="" /></div>
                        <div className='add-ons-to-air-machines-box-title'>Commercial Power Vacuum</div>
                        <div className='add-ons-to-air-machines-box-description'>We are distributing the worls's most powerful vacuums in the  industry. Whether you are looking for a revenue generator, to stop replacing shop-vacs or to provide your customers or residents with  great quality vacuum for free we've got options for you. </div>
                        <Link to={"/car-washing-and-car-wash-bays-equipment/power-vacuums/"}>Learn More</Link>
                    </div>

                    <div className='add-ons-to-air-machines-box'>
                        <div><img src={airDryer} alt="" /></div>
                        <div className='add-ons-to-air-machines-box-title'>Hot Air Dryer</div>
                        <div className='add-ons-to-air-machines-box-description'>Cut your manpower cost & increase customer satisfaction on you per car wash speed with a spot free finish with  our powerful heated air dryer. </div>
                        <Link to={"/hot-air-dryer/"}>Learn More</Link>
                    </div>

                    <div className='add-ons-to-air-machines-box'>
                        <div><img src={image1} alt="" /></div>
                        <div className='add-ons-to-air-machines-box-title'>All in one mini Car Wash</div>
                        <div className='add-ons-to-air-machines-box-description'>The Splash N Dash is a single bay self service all in one car wash station. The first impressive feature is the low Pressure Tire/Engine Cleaner, which uses a special cutting solution</div>
                        <Link to={'/news/mini-car-washes/'}>Learn More</Link>
                    </div>
                </div>

            </div>


        </div>
    )
}
export default AirMachines;