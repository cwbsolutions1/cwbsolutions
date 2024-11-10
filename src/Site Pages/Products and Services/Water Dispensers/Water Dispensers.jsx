import './Water Dispensers.css'
import image from './1200x630wa.png'
import { Link } from 'react-router-dom'

const WaterDispensers = () =>{
    return(
        <div className='water-dispensers-container'>
            <h1>Water Dispensers</h1>
            <p>
            Cash card & Coin operated water dispensers remain the best companions for car owners in Singapore saving them the hassle of carrying pails of water to and fro while washing their cars. This long lasting, self sustaining, revenue generating dispensers also stops abuse and wastage of water. All units are built for easy maintenance, requiring no manning and have become a popular must have in all multi story car parks and most condominiums car washing bays in Singapore.</p>

            <p>We manufacture, sell, repair and maintain different types of water dispensers: coin operated water dispensers, cash card operated water dispensers, cash card and Flash Pay operated combi water dispensers with top-up facility and have various self service add-on's available such as Vacuums, Hot air dryers and floor mat spot removers and retractable hoses to further add to the convenience of vehicle owners & adding sustainable profitability for those offering these services.</p>

            <p>Depending on your needs, specifications and price requirements we can provide you the ideal product solution with our range of ready made water dispensers and add-on's or  alternatively create a customized solution specially for you. </p>

            <p>We also have rental water dispensers & quantity discounts available. Simply contact us now with your requirements and contact details for a quote.</p>

            <br />
            <h3>Coin Operated Water Dispensers</h3>
            <div className='merchandise-section-in-water-dispensers'>
                
                <div className='merchandise-individual-box-in-water-dispensers'>
                    <div><img src={image} alt="" /></div>
                    <div className='merchandise-title-individual-box-in-water-dispensers'>Coin Operated Water Dispenser</div>
                    <div>This easy to maintain, sturdy, cost effective, full stainless steel water dispenser contains an extra protective door with lock for public areas. This model has a proven track record in most HDB car parks for almost 10 years now.</div>
                    <Link 
                    to={"/cwbsolutions.net/coin-operated-water-dispenser/"}
                    className='buy-now-section-in-water-dispensers'>Buy Now</Link>

                </div>

                <div className='merchandise-individual-box-in-water-dispensers'>
                    <div><img src={image} alt="" /></div>
                    <div className='merchandise-title-individual-box-in-water-dispensers'>Aqua Save Water Dispenser</div>
                    <div>This compact  machine, ideal for public locations might cost slightly more but gives you the security peace of mind of knowing your collection remains yours.</div>
                    <Link 
                    to={'/cwbsolutions.net/products/water-dispensers/aqua-save-water-dispenser/'}
                    className='buy-now-section-in-water-dispensers'>Buy Now</Link>

                </div>

                <div className='merchandise-individual-box-in-water-dispensers'>
                    <div><img src={image} alt="" /></div>
                    <div className='merchandise-title-individual-box-in-water-dispensers'>Inwall Coin Operated Water Dispenser</div>
                    <div>This faceplate unit is perfect to fit custom make box designs for customers whom require slim fit solutions for areas with space restrictions. Perfect solution for public showers, swimming pools etc.</div>
                    <Link 
                    to={'/cwbsolutions.net/products/water-dispensers/inwall-coin-operated-water-dispenser/'}
                    className='buy-now-section-in-water-dispensers'>Buy Now</Link>

                </div>

            </div>

            <br /><br />
            <h3 id='Cash-Card-and-Flash-Pay-Combi-Water-Dispenser'>Cash Card & Flash Pay Operated Water Dispensers</h3>
            <div className='merchandise-section-in-water-dispensers'>
                <div className='merchandise-individual-box-in-water-dispensers'>
                    <div><img src={image} alt="" /></div>
                    <div className='merchandise-title-individual-box-in-water-dispensers'>Ultra Slim Water Dispenser</div>
                    <div>This Ultra Slim Water Dispenser comes with a mirror finish faceplate and count down seconds display option.
                        <p>Dimensions:L150 x W150 x 400mm</p>
                    </div>
                    <Link 
                    to={'/www.cwbsolutions.net/products/water-dispensers/ultra-slim-water-dispenser'}
                    className='buy-now-section-in-water-dispensers'>Buy Now</Link>
                </div>

                <div className='merchandise-individual-box-in-water-dispensers'>
                    <div> <img src={image} alt="" /></div>
                    <div className='merchandise-title-individual-box-in-water-dispensers'>Cash Card Water Dispenser</div>
                    <div>This water dispenser developed primaruly for low to medium volume dispensering without requiring phone line at Car Park's Washing Bay supporting payments for additional self-service add on's.</div>
                    <Link 
                    to={'/cwbsolutions.net/products/water-dispensers/cash-card-water-dispenser/'}
                    className='buy-now-section-in-water-dispensers'>Buy Now</Link>
                </div>

                <div className='merchandise-individual-box-in-water-dispensers'>
                    <div> <img src={image} alt="" /></div>
                    <div  className='merchandise-title-individual-box-in-water-dispensers'>Cash Card and Flash Pay Combi Water Dispenser</div>
                    <div>This Combi water dispenser with latest NETS technology and modular design to support future upgrade in technology, ease transactions collections and settlement process multifunctional dispenser can be used for water, vacuum and other utilities dispense that also rings together with Cash Card & Flashpay Top Up function. Over 130 units have been home to Punggol Pasir Ris Town council for over 3 years ongoing now.</div>
                    <Link 
                    to={'/www.cwbsolutions.net/products/water-dispensers/cash-card-and-flash-pay-combi-water-dispenser'}
                    className='buy-now-section-in-water-dispensers'>Buy Now</Link>
                </div>
            </div>

            <br /><br />
            <h3>Add On's to Water Dispensers</h3>
            <div className='add-on-section-in-water-dispensers'>
                <div className='add-on-individual-box-in-water-dispensers'>
                    <div><img src={image} alt="" /></div>
                    <div className='merchandise-title-individual-box-in-water-dispensers'>Power Vacuums</div>
                    <div>We are distributing the worls's most powerful vacuums in the  industry. Whether you are looking for a revenue generator, to stop replacing shop-vacs or to provide your customers or residents with  great quality vacuum for free we've got options for you. All parts are quality parts from USA proven for over 20 years.</div>
                    <Link 
                    to="/cwbsolutions.net/car-washing-and-car-wash-bays-equipment/power-vacuums/"
                    >Learn More</Link>
                </div>

                <div className='add-on-individual-box-in-water-dispensers'>
                    <div><img src={image} alt="" /></div>
                    <div className='merchandise-title-individual-box-in-water-dispensers'>Car Wash Hoses</div>
                    <div>You want to increase the usage of your water dispensers or just need to replace the hose in your car wash or your power vacuum? We can provide you with vacuum and water dispenser hoses and accessories. Different colors,  sizes & lengths  available.</div>
                    <Link 
                    to="/cwbsolutions.net/replacement-parts-for-vacuums-water-dispensers/"
                    >Learn More</Link>
                </div>

                <div className='add-on-individual-box-in-water-dispensers'>
                    <div><img src={image} alt="" /></div>
                    <div className='merchandise-title-individual-box-in-water-dispensers'>Weep Trigger Gun</div>
                    <div>Extra durable, industries most cost effective weep trigger gun from USA for use with retractable water hose either with normal HDB water pressure to give pressures up to 60 PSI or for use at Car Washes connected  to a pressure washer or compressor pump.</div>
                    <Link 
                    to="/cwbsolutions.net/replacement-parts-for-vacuums-water-dispensers/"
                    >Learn More</Link>
                </div>
            </div>


        </div>
    )
}
export default WaterDispensers;