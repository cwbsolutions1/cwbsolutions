import { Carousel } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import './Coin Operated Showers.css'
import image from './W0519.jpg'


const CoinOperatedShowers =() =>{
    return(
        <div className='coin-operated-showers-container'>
            <h1>Coin Operated Showers</h1>

            <Carousel id='carousel-in-coin-operated-showers'>
                <Carousel.Item interval={2500} >
                        <img className='carousle-item-in-coin-operated-showers' src={image} alt="" />
                    </Carousel.Item>

                    <Carousel.Item interval={2500} >
                        <img className='carousle-item-in-coin-operated-showers' src={image} alt="" />
                    </Carousel.Item>

                    <Carousel.Item interval={2500} >
                        <img className='carousle-item-in-coin-operated-showers' src={image} alt="" />
                    </Carousel.Item>
            </Carousel>

            <p>Depending on your needs coin or token operated timers can control cold and/or hot water showers.</p>
            
            <div className='box-for-applicatios-installation-in-coin-operated-showers'>
                <h4>Applications</h4>
                <ul type="square">
                    <li>Our coin operated showers are great a solution for public or commercial showers at <Link to={'/cwbsolutions.net/coin-operated-shower/swimming-pool-showers/'}>swimming pools</Link></li>
                    <li>sporting amenities</li>
                    <li>commercial centres</li>
                    <li>public showers at parks</li>
                    <li>Condo amenities showers and all other locations where you want to create additional revenue generator</li>
                    <li>cover utility bills and restrict the per showering usage</li>
                    <li>And the most important driver, save precious water.</li>

                </ul>
            </div>

            <div className='box-for-applicatios-installation-in-coin-operated-showers'>
                <h4>Features</h4>
                <ul type="square">
                    <li>20/50 cents or $1 single or multiple coin insert acceptors are available</li>
                    <li>LED faceplate countdown timer</li>
                    <li>On site resettable shower timer- 1 to 99 minutes </li>
                    <li>Ultra Compact & cost effective </li>
                    <li>Built in non-resettlabe counter</li>
                    <li>Last minute buzzer</li>
                    <li>Low Voltage 12V DC powered for safety</li>
                    <li>Can control either or both hot & cold water. Different configurations available. e.g. Hot shower chargeable, cold shower free. Hot & cold shower chargeable. Chargeable cold shower only</li>
                </ul>
            </div>

            <div className='box-for-applicatios-installation-in-coin-operated-showers'>
                <h4>Installation</h4>
                <ul type="square">
                    <li>Specific applications also dictate different methods of installation</li>
                    <li>Our showers come in 2 main models
                        <ol>
                            <li>In Wall Model</li>
                            <li>Box model</li>
                        </ol>
                    </li>
                    <li>For walls without beams this in wall/flushed to wall coin operated shower comes with a mirror finish faceplate and count down seconds display option and is virtually vandal  resistant with it's pin screw lock.   
                    </li>
                    <li>All components are mounted behind on the face plate for durability & easy of maintenance. This faceplate unit is also used to fit custom make box designs for customers whom require slim fit solutions for areas with space restrictions.</li>
                </ul>

                <h6>Minimum Dimensions</h6>
                <li>200mm(width) by 280mm(hight) by 135mm(depth)</li>
                <li>*Also used for custom/ultra slim size box requirements. Smaller dimensions available for units without countdown display.</li>
            </div>


            <br /><br />
            <h3 id='you-may-intrested-heading'> You may also be intrested in...</h3>
            <div className='add-on-section-in-water-coin-operated-showers-container'>
                <div className='add-on-individual-box-in-coin-operated-showers-container'>
                    <div><img src={image} alt="" /></div>
                    <div className='add-on-section-individual-box-title-in-coin-operated-showers'>Coin Operated Water Dispenser</div>
                    <div>This easy to maintain, sturdy, cost effective, full stainless steel water dispenser contains an extra protective door with lock for public areas. This model has a proven track record in most HDB car parks for almost 10 years now.</div>
                    <Link 
                    to="/cwbsolutions.net/car-washing-and-car-wash-bays-equipment/water-dispensers/"
                    >Learn More</Link>
                </div>

                <div className='add-on-individual-box-in-coin-operated-showers-container'>
                    <div><img src={image} alt="" /></div>
                    <div className='add-on-section-individual-box-title-in-coin-operated-showers'>Aqua Save Water Dispenser</div>
                    <div>This compact  machine, ideal for public locations might cost slightly more but gives you the security peace of mind of knowing your collection remains yours. </div>
                    <Link 
                    to="/cwbsolutions.net/products/water-dispensers/aqua-save-water-dispenser/"
                    >Learn More</Link>
                </div>

                <div className='add-on-individual-box-in-coin-operated-showers-container'>
                    <div><img src={image} alt="" /></div>
                    <div className='add-on-section-individual-box-title-in-coin-operated-showers'>Cash Card Water Dispenser</div>
                    <div>This water dispenser developed primarily for low to medium volume dispensering without requiring phone line at Car Park's Washing Bay supporting payments for additional self-service add on's.</div>
                    <Link 
                    to="/cwbsolutions.net/car-washing-and-car-wash-bays-equipment/water-dispensers#Cash-Card-and-Flash-Pay-Combi-Water-Dispenser"
                    >Learn More</Link>
                </div>

                <div className='add-on-individual-box-in-coin-operated-showers-container'>
                    <div><img src={image} alt="" /></div>
                    <div className='add-on-section-individual-box-title-in-coin-operated-showers'>Cash Card and Flash Pay Combi Water Dispenser</div>
                    <div>This Combi water dispenser with latest NETS technology can be used for water, vacuum and other utilities dispense. </div>
                    <Link 
                    to="/cwbsolutions.net/car-washing-and-car-wash-bays-equipment/water-dispensers#Cash-Card-and-Flash-Pay-Combi-Water-Dispenser"
                    >Learn More</Link>
                </div>
            </div>

        </div>
    )
}
export default CoinOperatedShowers;