import './Dual Commercial Ultra Power Vacuum with 4 motors.css'
import { Link } from 'react-router-dom'
import image from './What-are-High-Resolution-Images.png'

const DualCommercialUltraPowerVacuumWith4Motors = () =>{
    return(
        <div className='dual-commercial-ultra-power-vaccum-with-4-motors-container'> 
            <h1>Dual Commercial Ultra Power Vacuum with 4 motors</h1>

            <p>
            This unit is specially designed for car washes or high traffic places. Regarding to 4 motors (2 on each side) it can be used for 2 cars at the same time. You can also have 2 different claw type at the end of each hose, 1 nosed type and the other claw type.
            </p>

            <div className='product-image-in-dual-commercial-ultra-power-vaccum-with-4-motors'>
                <img src="" alt="" />
            </div>

            <div className='dual-commercial-ultra-power-vaccum-features-section'>
                <h3>Features</h3>
                <ul type='square'>
                    <li>Two motors function per side</li>
                    <li>One shared coin box for easy collections</li>
                    <li>Face plate with 1 Medeco cam lock per side </li>
                    <li>Four service doors offer easy access to clean-out compartments and 4 filter bag system </li>
                    <li>Imonex coin acceptors take coins</li>
                    <li>SSAC 220 volt accumulating timers </li>
                    <li>Plastic clean-out bins included</li>
                    <li>Hoses: 2” x 15’, swivel cuff and nozzle included (15’, 25’, and 50’ available in 1 1/2” or 2”)</li>
                    <li>Lighted dome available in green, yellow, white, blue, red, and purple</li>
                    <br />
                    <p>*Optional coin mechs, motors, colored hoses, and extra security are available.</p>
                </ul>
            </div>

            {/*Below classes has been duplicated from water dispensers page. look in the css file of ".aqua-save-water-dispenser-container" */}
            <h3 id='you-mayebe-intrested-heading'>You also may be interested in . . .</h3>
                <div className='you-maybe-intrested-section-in-water-dispenser-page'>
                    <div className='individual-box-intrested-section-in-water-dispenser-page'>
                        <div ><img src={image} alt="" /></div>
                        <div className='individual-box-title-in-water-dispenser-page'>
                        Replacement Hose 
                        </div>
                        <div>J E adams Hoses are of the highest quality available 6 different colours and lengths of 15 ,25 & 50 feet </div>
                        <Link to={'/replacement-parts-for-vacuums-water-dispensers'}>Learn More</Link>

                    </div>

                    <div className='individual-box-intrested-section-in-water-dispenser-page'>
                        <div><img src={image} alt="" /></div>
                        <div className='individual-box-title-in-water-dispenser-page'>
                        Hot Air Dryer
                        </div>
                        <div>
                        Cut your manpower cost & increase customer satisfaction on you per car wash speed with a spot free finish with  our powerful heated air dryer.
                        </div>
                        <Link to={'/hot-air-dryer'}>Learn More</Link>
                    </div>

                    <div className='individual-box-intrested-section-in-water-dispenser-page'>
                        <div><img src={image} alt="" /></div>
                        <div className='individual-box-title-in-water-dispenser-page'>
                        Water Dispensers
                        </div>
                        <div>
                        We manufacture, sell, repair and maintain different types of water dispensers: coin operated, cash card operated and aqua save water dispensers
                        </div>
                        <Link to={'/car-washing-and-car-wash-bays-equipment/water-dispensers'}>Learn More</Link>
                    </div>

                    <div className='individual-box-intrested-section-in-water-dispenser-page'>
                        <div><img src={image} alt="" /></div>
                        <div className='individual-box-title-in-water-dispenser-page'>
                        All in one mini Car Wash
                        </div>
                        <div>
                        The Splash N Dash is a single bay self service all in one car wash station.The first impressive feature is the low Pressure Tire/Engine Cleaner, which uses a special cutting solution
                        </div>
                        <Link to={'/news/mini-car-washes'}>Learn More</Link>
                    </div>
                </div>


        </div>
    )
}
export default DualCommercialUltraPowerVacuumWith4Motors