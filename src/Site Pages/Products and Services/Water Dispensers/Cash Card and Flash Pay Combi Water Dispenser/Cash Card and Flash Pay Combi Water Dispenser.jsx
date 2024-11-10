import { Link } from 'react-router-dom'
import './Cash Card and Flash Pay Combi Water Dispenser.css'
import image from './What-are-High-Resolution-Images.png'
import coinWaterDispenser from './coin-operated-water-dispenser.png'

const CashCardAndFlashPayCombiWaterDispenser = () => {
    return(
        <div className='cash-card-and-flash-pay-combi-water-dispenser-container'>
            <h1>Cash Card and Flash Pay Combi Water Dispenser</h1>

                    {/*CSS are same as aqua save water dispenser */}

                    <div className='common-buy-now-section-for-water-dispenser'>
                    <div className='common-buy-now-left-block'>
                        <img src={coinWaterDispenser} alt="" />
                    </div>
                    <div className='common-buy-now-right-block'>
                        <h6>Combi Dispenser</h6>
                        <p>This Combi water dispenser with latest NETS technology and modular design to support future upgrade in technology, ease transactions collections and settlement process multifunctional dispenser can be used for water, vacuum and other utilities dispense that also rings together with Cash Card & Flashpay Top Up function. Over 130 units have been home to Punggol Pasir Ris Town council for over 3 years ongoing now.</p>

                        <p>Also used in other application functions such as car park payments and barrier system operations without EPS.</p>

                        <span className='price-button'>Price : 0.00$</span>
                        <span className='checkout-button'> Checkout</span>

                    </div>
                </div>


                <div className='common-features-section-for-water-dispenser'>
                    <h3>Features</h3>
                    <ul type='square'>
                        <li>Automatic data upload via line</li>
                        <li>Support up to 5 Add-on's </li>
                        <li>ACash Card Top Up function</li>
                    </ul>
                </div>
                
                
                <div className='common-applications-section-for-water-dispenser'>
                    <h3>Applications</h3>
                    <ul type='square'>
                    ,
                        <li>Multi Storey Car Parks</li>
                        <li>HDB carparks</li>
                        <li>Shopping centres</li>
        
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
                        Inwall Coin Operated Water Dispenser
                        </div>
                        <div>This faceplate unit is perfect to fit custom make box designs for customers whom require slim fit solutions for areas with space restrictions. Perfect solution for public showers, swimming pools etc. </div>
                        <Link to={'/cwbsolutions.net/products/water-dispensers/inwall-coin-operated-water-dispenser/'}>Learn More</Link>
                    </div>
                </div>

        </div>
    )
}
export default CashCardAndFlashPayCombiWaterDispenser