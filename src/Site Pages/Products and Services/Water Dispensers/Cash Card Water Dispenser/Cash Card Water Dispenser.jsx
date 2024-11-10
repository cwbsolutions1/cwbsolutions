import { Link } from 'react-router-dom'
import './Cash Card Water Dispenser.css'
import image from './What-are-High-Resolution-Images.png'
import coinWaterDispenser from './coin-operated-water-dispenser.png'

const CashCardWaterDispenser = () =>{
        return(
            <div className='cash-card-water-dispenser-container'>
                <h1>Cash Card Water Dispenser</h1>

            {/*CSS are same as aqua save water dispenser */}

            <div className='common-buy-now-section-for-water-dispenser'>
                    <div className='common-buy-now-left-block'>
                        <img src={coinWaterDispenser} alt="" />
                    </div>
                    <div className='common-buy-now-right-block'>
                        <h6>Cash Card Water Dispenser</h6>
                        <p>This water dispenser developed primarily for low to medium volume dispensering without requiring phone line at Car Park's Washing Bay supporting payments for additional self-service add on's.</p>

                        <span className='price-button'>Price : 0.00$</span>
                        <span className='checkout-button'> Checkout</span>

                    </div>
                </div>


                <div className='common-features-section-for-water-dispenser'>
                    <h3>Features</h3>
                    <ul type='square'>
                        <li>Accepts only NETS cash card </li>
                        <li>Manual Data Upload (no Phone line required)</li>
                        <li>Support up to 5 add on's functions.</li>
                        <li>Inwall, Box wall mounted and floor stand mounted configurations available.</li>
                    </ul>
                </div>
                
                {/* 
                <div className='common-applications-section-for-water-dispenser'>
                    <h3>Applications</h3>
                    <ul type='square'>

                    </ul>
                </div> */}

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
                        <Link to={'#'}>Learn More</Link>

                    </div>

                    <div className='individual-box-intrested-section-in-water-dispenser-page'>
                        <div><img src={image} alt="" /></div>
                        <div className='individual-box-title-in-water-dispenser-page'>
                        Aqua Save Water Dispenser
                        </div>
                        <div>
                        This compact  machine, ideal for public locations might cost slightly more but gives you the security peace of mind of knowing your collection remains yours
                        </div>
                        <Link to={'#'}>Learn More</Link>
                    </div>

                    <div className='individual-box-intrested-section-in-water-dispenser-page'>
                        <div><img src={image} alt="" /></div>
                        <div className='individual-box-title-in-water-dispenser-page'>
                        Inwall Coin Operated Water Dispenser
                        </div>This faceplate unit is perfect to fit custom make box designs for customers whom require slim fit solutions for areas with space restrictions. Perfect solution for public showers, swimming pools etc.<div>
                        
                        </div>
                        <Link to={'#'}>Learn More</Link>
                    </div>

                    <div className='individual-box-intrested-section-in-water-dispenser-page'>
                        <div><img src={image} alt="" /></div>
                        <div className='individual-box-title-in-water-dispenser-page'>
                        Cash Card and Flash Pay Combi Water Dispenser
                        </div>
                        <div>This Combi water dispenser with latest NETS technology can be used for water, vacuum and other utilities dispense. </div>
                        <Link to={'#'}>Learn More</Link>
                    </div>
                </div>

            </div>
        )
}
export default CashCardWaterDispenser;

