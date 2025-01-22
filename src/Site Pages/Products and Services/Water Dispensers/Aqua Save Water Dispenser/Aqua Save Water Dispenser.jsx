import { Link } from 'react-router-dom'
import './Aqua Save Water Dispenser.css'
import image from './What-are-High-Resolution-Images.png'
import coinWaterDispenser from './coin-operated-water-dispenser.png'

const AquaSaveWaterDispenser = () =>{
    return(
        <div className='aqua-save-water-dispenser-container'>
                <h1>Aqua Save Water Dispenser</h1>

                <div className='common-buy-now-section-for-water-dispenser'>
                    <div className='common-buy-now-left-block'>
                        <img src={coinWaterDispenser} alt="" />
                    </div>
                    <div className='common-buy-now-right-block'>
                        <h6>Aqua Coin Dispenser</h6>
                        <p>This compact  machine, ideal for public locations might cost slightly more but gives you the security peace of mind of knowing your collection remains yours. Comes with power indicator LED to indicate  power status in the case of power shortage</p>

                        <span className='price-button'>Price : 0.00$</span>
                        <span className='checkout-button'> Checkout</span>

                    </div>
                </div>


                <div className='common-features-section-for-water-dispenser'>
                    <h3>Features</h3>
                    <ul type='square'>
                        <li>20 cents for 18 liters/1 min flow of water</li>
                        <li>A/C single phase 230 power required/ 5A MCB. Low powered.</li>
                        <li>Less then 1A power per dispense.No power consumed while idle.</li>
                        <li>Extra security coin volt ideal for high risk public locations</li>
                        <li>Compact design</li>
                        <li>On wall mounted</li>
                    </ul>
                </div>

                <h3 id='you-mayebe-intrested-heading'>You also may be interested in . . .</h3>
                <div className='you-maybe-intrested-section-in-water-dispenser-page'>
                    <div className='individual-box-intrested-section-in-water-dispenser-page'>
                        <div ><img src={image} alt="" /></div>
                        <div className='individual-box-title-in-water-dispenser-page'>
                        Coin Operated Water Dispenser
                        </div>
                        <div>This easy to maintain, sturdy, cost effective, full stainless steel water dispenser contains an extra protective door with lock for public areas. This model has a proven track record in most HDB car parks for almost 10 years now.</div>
                        <Link to={'/coin-operated-water-dispenser/'}>Learn More</Link>

                    </div>

                    <div className='individual-box-intrested-section-in-water-dispenser-page'>
                        <div><img src={image} alt="" /></div>
                        <div className='individual-box-title-in-water-dispenser-page'>
                        Inwall Coin Operated Water Dispenser
                        </div>
                        <div>
                        This faceplate unit is perfect to fit custom make box designs for customers whom require slim fit solutions for areas with space restrictions. Perfect solution for public showers, swimming pools etc.
                        </div>
                        <Link to={'/products/water-dispensers/inwall-coin-operated-water-dispenser/'}>Learn More</Link>
                    </div>

                    <div className='individual-box-intrested-section-in-water-dispenser-page'>
                        <div><img src={image} alt="" /></div>
                        <div className='individual-box-title-in-water-dispenser-page'>
                        Cash Card Water Dispenser
                        </div>
                        <div>
                        This water dispenser developed primaruly for low to medium volume dispensering without requiring phone line at Car Park's Washing Bay supporting payments for additional self-service add on's.
                        </div>
                        <Link to={'/products/water-dispensers/cash-card-water-dispenser/'}>Learn More</Link>
                    </div>

                    <div className='individual-box-intrested-section-in-water-dispenser-page'>
                        <div><img src={image} alt="" /></div>
                        <div className='individual-box-title-in-water-dispenser-page'>
                        Cash Card and Flash Pay Combi Water Dispenser
                        </div>
                        <div>
                        This Combi water dispenser with latest NETS technology can be used for water, vacuum and other utilities dispense.
                        </div>
                        <Link to={'/products/water-dispensers/cash-card-and-flash-pay-combi-water-dispenser'}>Learn More</Link>
                    </div>
                </div>
        </div>
    )
}
export default AquaSaveWaterDispenser;