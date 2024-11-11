import './Water I-Vac.css'
import { Link } from 'react-router-dom';
import image from './What-are-High-Resolution-Images.png'

const WaterIVac = () =>{
    return(
        <div className='water-i-vac-container'>
            <h1>Water I-Vac</h1>

            <div className='common-buy-now-section-for-power-vaccums'>
                    <div className='common-buy-now-left-block'>
                        
                    </div>
                    <div className='common-buy-now-right-block'>
                        <h6>Water I- Vac</h6>
                        <p>This ULTRA compact sized WATER-I-VAC provides industrial grade powerful Vacuum & Water dispensing in an all in one car care machine to provide long maintenance free years of a full service wash bay while generating a sustainable revenue stream $1-$2 from per Vacuum usage and 20-40 cents per water usage. Both water and vacuum can be used at the same time</p>

                        

                        <span>
                        <select className='buy-now-configuration-select'>
                            <option value="option1">Intelli Vaccum- Standalone 0.00S$</option>
                            <option value="option2">Intelli Power Vaccum- Coin Operated 0.00S$</option>
                            <option value="option3">Intelli Power Vaccum & Water - Coin Operated 0.00S$</option>
                        </select>
                        </span>
                        <span className='price-button'>Price : 0.00$</span>
                        <span className='checkout-button'> Checkout</span>

                    </div>
                </div>

                <div className='common-features-section-for-water-dispenser'>
                    <h3>Description</h3>
                    <p>This ULTRA compact sized WATER-I-VAC provides industrial grade powerful Vacuum & Water dispensing in an all in one car care machine to provide long maintenance free years of a full service wash bay while generating a sustainable revenue stream $1-$2 from per Vacuum usage and 20-40 cents per water usage. Both water and vacuum can be used at the same time. <br /><br />Upon inserting a coin the large respective countdown LCD screen on an attractive bright yellow with designer outdoor sticker visuals gives an unique satisfaction to residences & car owners. Ideal for medium self-service usage locations at condominiums car parks, workshops, public(HDB), and private residential car wash bays. The Water-I-Vac is the most cost effective & power efficient vacuum  and has only 1 motor and 1 filter bag and fits in the centre of any car wash bay or compactly wall mounted. It can either be manually operated or coin operated as shown above. A water valve with water hose may also be added to enable water dispense functions for the perfect all in car wash bay solution for basic interior and external car care function.</p>
                </div>

                <div className='common-features-section-for-water-dispenser'>
                    <h3>Features</h3>
                    <ul type='square'>
                        <li>J E Adams world renown brand.</li>
                        <li>1 Powerful motor up to 4H.P.</li>
                        <li>Suction(mm/H2O) up to 2567</li>
                        <li>1073 Input Watts per motor</li>
                        <li>Polynomial Peak Airwatts 326.28</li>
                        <li>Hose: 1” x 15’, swivel cuff and nozzle included (15’, 25’, and 50’ available in 1 1/2” or 2”)</li>
                        <li>Internal vacuum hose threading system</li>
                        <li>Anti vandal & double locking for coins compartment for extra security</li>
                        <li>Double service doors offer easy access to clean out compartment and 1 filter bag system </li>
                        <li>Vacuum only with coin configuration option comes with a $1 coin acceptor for 3-7 minute easy user settable usage option.</li>
                        <li>Vacuum + Water coin configuration option comes with 2 coin acceptors side by side on the coin acceptor faceplate that also holds the water tap outlet on it's bottom side. A $1 coin acceptor for Vacuum & a 20 cent coin acceptor for water. Water dispense is at 20 cents for 18 liters/1 min for coin acceptance.</li>
                        <li>While the unit is not in use no power is used.
                        </li>
                        <li>Water hose/retractable options are also enabled as add-on configurations.</li>
                    </ul>
                </div>

                <div className='common-features-section-for-water-dispenser'>
                    <h3>Specifications</h3>
                    <ul type='square'>
                        <li>Body Dimensions: Length 300mm X Breath 150mm X Hight 1150-1450mm (Customisable)</li>
                        <li>Installation: mount: wall mount or floor mount versions available.</li>
                    </ul>
                </div>

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
export default WaterIVac;