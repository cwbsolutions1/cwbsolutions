import './Ultra Turbonator.css'
import image from './What-are-High-Resolution-Images.png'
import { Link } from 'react-router-dom'

const UltraTurbonator = () =>{
    return(
        <div className='ultra-turbonator-container'> 
            <h1>Ultra Turbonator</h1>

            <p>The Ultra Turbonator allows you to charge two different prices to allow your customers to choose between 2 motor or 3 motor functions.
            </p>

            <div className='product-image-in-ultra-turbonator'>
                <img src="" alt="" />
            </div>

            <div className='ultra-turbonator-features-section'>
                <h3>Features</h3>
                <ul type='square'>
                    <li>(3) 1.6 HP, 120 volt motors - <b>Requires 30 AMP service</b></li>
                    <li>3 Motors with 2" hose = 210 CFM / 415.4 Air Watts</li>
                    <li>3 Motors with 1 1/2" hose = 165.9 CFM / 662.3 Air Watts</li>
                    <li>Average vend on Turbo Vacuum $1.50 for 4 minutes</li>
                    <li>Average vend on vacuum $1.00 for 4 minutes</li>
                    <li>Large digital display timer is highly visible and easy to read, scrolls messages, calculates time between functions, recalculates remaining time when switched during any function, and has a built-in coin counter</li>
                    <li>Visual and audible last coin alarm</li>
                    <li>Mars Series 2000 bill acceptor takes $1.00, $2.00, and $5.00 bills </li>
                    <li>Imonex electronic coin acceptor takes U.S. $1.00 coins, U.S. quarters, 1.073 and 0.984 tokens (optional coin mechs available)</li>
                    <li>Comes with 5 Medeco locks (3 for the control door, 1 for an internal bill acceptor locking box, and 1 for an internal coin acceptor locking box)</li>
                    <li>2 lighted push buttons for the following functions: 2 motor vacuum and 3 motor turbo vacuum</li>
                    <li>Hose: 2” x 15’, swivel cuff and nozzle included (15’, 25’, and 50’ available in 1 1/2” or 2”)</li>
                    <li>Hose available in black, red, blue, green, yellow and beige at no additional cost</li>
                    <li>Lighted dome available in red, blue, yellow, dark green, light green, purple, and white</li>
                    <li>Double service doors offer easy access to clean out compartment and 4 filter bag system</li>
                    <li>Optional coin mechs, motors, colored hoses, extra security, and clean-out container are available</li>
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
                        <Link to={'/cwbsolutions.net/replacement-parts-for-vacuums-water-dispensers'}>Learn More</Link>

                    </div>

                    <div className='individual-box-intrested-section-in-water-dispenser-page'>
                        <div><img src={image} alt="" /></div>
                        <div className='individual-box-title-in-water-dispenser-page'>
                        Hot Air Dryer
                        </div>
                        <div>
                        Cut your manpower cost & increase customer satisfaction on you per car wash speed with a spot free finish with  our powerful heated air dryer.
                        </div>
                        <Link to={'/cwbsolutions.net/hot-air-dryer'}>Learn More</Link>
                    </div>

                    <div className='individual-box-intrested-section-in-water-dispenser-page'>
                        <div><img src={image} alt="" /></div>
                        <div className='individual-box-title-in-water-dispenser-page'>
                        Water Dispensers
                        </div>
                        <div>
                        We manufacture, sell, repair and maintain different types of water dispensers: coin operated, cash card operated and aqua save water dispensers
                        </div>
                        <Link to={'/cwbsolutions.net/car-washing-and-car-wash-bays-equipment/water-dispensers'}>Learn More</Link>
                    </div>

                    <div className='individual-box-intrested-section-in-water-dispenser-page'>
                        <div><img src={image} alt="" /></div>
                        <div className='individual-box-title-in-water-dispenser-page'>
                        All in one mini Car Wash
                        </div>
                        <div>
                        The Splash N Dash is a single bay self service all in one car wash station.The first impressive feature is the low Pressure Tire/Engine Cleaner, which uses a special cutting solution
                        </div>
                        <Link to={'/cwbsolutions.net/news/mini-car-washes'}>Learn More</Link>
                    </div>
                </div>


        </div>
    )
}
export default UltraTurbonator;