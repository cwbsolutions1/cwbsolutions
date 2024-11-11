import { Link } from 'react-router-dom'
import './Inwall Coin Operated Water Dispenser.css'
import image from './What-are-High-Resolution-Images.png'
import coinWaterDispenser from './coin-operated-water-dispenser.png'

const InwallCoinOperatedWaterDispenser = () =>{
    return(
        <div className='inwall-coin-operated-water-dispenser'>
            <h1>Inwall Coin Operated Water Dispenser</h1>

                    {/*CSS are same as aqua save water dispenser */}

                    <div className='common-buy-now-section-for-water-dispenser'>
                    <div className='common-buy-now-left-block'>
                        <img src={coinWaterDispenser} alt="" />
                    </div>
                    <div className='common-buy-now-right-block'>
                        <h6>Inwall Coin Operated Water Dispenser</h6>
                        <p>For walls without beams this in wall/flushed to wall coin operated water dispenser comes with a mirror finish faceplate and count down seconds display option and is virtually vandal  resistant with it's pin screw lock. All components are mounted behind on the face plate for durability & easy of maintenance. This faceplate unit is also used to fit custom make box designs for customers whom require slim fit solutions for areas with space restrictions.  
                        </p>

                        <span className='price-button'>Price : 0.00$</span>
                        <span className='checkout-button'> Checkout</span>

                    </div>
                </div>


                <div className='common-features-section-for-water-dispenser'>
                    <h3>Features</h3>
                    <ul type='square'>
                        <li>20 cents for 18 liters/ 1 min flow of water</li>
                        <li>Ultra Compact & cost effective </li>
                        <li>Also used for custom/ultra slim size box requirements (min hight 290 x width 180 x depth 135mm)</li>
                        <li>Able to add-on $1 coin acceptor to control other devices</li>
                    </ul>
                </div>
                
                
                <div className='common-applications-section-for-water-dispenser'>
                    <h3>Applications</h3>
                    <ul type='square'>
                        <li>public areas</li>
                        <li>public swimming pools</li>
                        <li>commercial centres</li>
                        <li>public showers and all other locations where you want to provide your customers with paid water facilities.</li>
                    </ul>
                </div> 

                <h3 id='you-mayebe-intrested-heading'>You also may be interested in . . .</h3>
                <div className='you-maybe-intrested-section-in-water-dispenser-page'>
                    <div className='individual-box-intrested-section-in-water-dispenser-page'>
                        <div ><img src={image} alt="" /></div>
                        <div className='individual-box-title-in-water-dispenser-page'>
                        Coin Operated Water Dispenser
                        </div>
                        <div>
                        This easy to maintain, sturdy, cost effective, full stainless steel water dispenser contains an extra protective door with lock for public areas. This model has a proven track record in most HDB car parks for almost 10 years now.
                        </div>
                        <Link to={'/cwbsolutions.net/coin-operated-water-dispenser/'}>Learn More</Link>

                    </div>

                    <div className='individual-box-intrested-section-in-water-dispenser-page'>
                        <div><img src={image} alt="" /></div>
                        <div className='individual-box-title-in-water-dispenser-page'>
                        Aqua Save Water Dispenser
                        </div>
                        <div>
                        This compact  machine, ideal for public locations might cost slightly more but gives you the security peace of mind of knowing your collection remains yours
                        </div>
                        <Link to={'/cwbsolutions.net/products/water-dispensers/aqua-save-water-dispenser/'}>Learn More</Link>
                    </div>

                    <div className='individual-box-intrested-section-in-water-dispenser-page'>
                        <div><img src={image} alt="" /></div>
                        <div className='individual-box-title-in-water-dispenser-page'>
                        Cash Card Water Dispenser
                        </div>This water dispenser developed primarily for low to medium volume dispensering without requiring phone line at Car Park's Washing Bay supporting payments for additional self-service add on's.<div>
                        
                        </div>
                        <Link to={'/cwbsolutions.net/products/water-dispensers/cash-card-water-dispenser/'}>Learn More</Link>
                    </div>

                    <div className='individual-box-intrested-section-in-water-dispenser-page'>
                        <div><img src={image} alt="" /></div>
                        <div className='individual-box-title-in-water-dispenser-page'>
                        Cash Card and Flash Pay Combi Water Dispenser
                        </div>
                        <div>This Combi water dispenser with latest NETS technology can be used for water, vacuum and other utilities dispense. </div>
                        <Link to={'/cwbsolutions.net/products/water-dispensers/cash-card-and-flash-pay-combi-water-dispenser'}>Learn More</Link>
                    </div>
                </div>

        </div>
    )
}
export default InwallCoinOperatedWaterDispenser;