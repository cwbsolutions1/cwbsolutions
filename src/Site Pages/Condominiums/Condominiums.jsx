import './Condominiums.css'
import image from './png-transparent-add-image-icon.png'
import image2 from './ai-nuclear-energy-background-future-innovation-disruptive-technology.jpg'
import speedBumpImage from '../Road Humps/Thermo plastic road hump.png'
import chainLinkFenceImage from '../Products and Services/Perimeter Fencing & Gates/commercial-fence-barb-selvage.jpg'
import pvcCoatedChainLink from '../Products and Services/Perimeter Fencing & Gates/PVC-Coated-Chain-Link-Mesh.jpg'
import brcFencingImage from '../Products and Services/Perimeter Fencing & Gates/BRC-fence-mp4.png'
import solarPoweredStud from '../Road Accessories/Solar Powered Studs/solar-studs.jpg'
import ivacImage from '../Home Page/Images/I-Vac.png'
import { HashLink as Link } from 'react-router-hash-link';


const Condominiums = () =>{
    return(
        <div className='condominiums-container'>
            <h1>Condominiums</h1>

            <div className='products-suited-for-condos-section'>
                <h2>Products Suited For Condominiums</h2>

                <p>There is one thing that is true of modern life, it has become much busier. Time really seems to be at a premium these days and there is hardly enough time to get everything done in a day. People choose to pay more and stay in Condo to have full range of facilities at their doorstep. That's why its so important to provide them with the best. We produce & maintain wide range of equipment for Condominium</p>

                <ol>
                    <li><Link>Outdoor Furniture</Link>, Consisting of <Link>Outdoor parasols & Umbrellas</Link>, <Link>Outdoor Dining</Link>, <Link>Outdoor Sofas</Link> , Poolside Furniture consisting of Deck Chairs, Day beds and Sun Loungers ; Please visit our in-house partner's <Link>web-store</Link> for list prices or <Link>contact us</Link> for bulk discount rates for quantity bulk rates.</li>

                    <li>Security Systems, Consisting of Barrier & Access control systems such as <Link>Season-EPS IU Access system</Link>, <Link>Semi-EPS IU System</Link>, <Link>RFID Systems</Link>, Full range of High Quality Italian <Link>CAME</Link> or <Link>NICE </Link>Car Barrier Systems. <Link>barrier systems</Link>, <Link>swing arm barriers</Link>, <Link>parking lot barriers</Link></li>

                    <li><Link>Road Safety accessories and Signage</Link>, Consisting of Safety Bollards, Safety Cones, Road Signs, Road divider flaps, Reflective Road Studs, Solar LED Road Studs, Road Humps, Wheel Clamps, Road Safety Plastic & Metal movable Barriers as well as reflective tapes.</li>
                    <li>Self Service value added machinery, Consisting of <Link>Customised electric BBQ pits</Link>, and car care machines located at Car Wash Bays such as, <Link>powerful vacuums</Link>, <Link>water dispensers</Link>, <Link>coin operated showers</Link> etc. which meet specific purchasing and maintenance requirements. </li>
                    
                </ol>
            </div>

            <div className='fullscreen-product-display-in-condominiums'>
                
                <div className='title-in-fullscreen-product-display-in-condominiums'> Outdoor Parasols & Umbrellas</div>
                <div><img src={image2} alt="" /></div>
                <div>Parasols, buy high quality, durable garden parasol at Ten Falcons web store, Large parasol range including the cantilever parasol. If you are after a parasol base, parasol cover, parasol heater or parasol lights visit our parasol partner web store, prices inclusive : Parasol outlet - garden and outdoor parasols, Welcome to parasol outlet, we sell a large range of garden and outdoor parasols at best prices. money back guarantee on all items.</div>

                
                <div className='title-in-fullscreen-product-display-in-condominiums'> Solar Road Studs - High powered LED</div>
                <div><div><img src={solarPoweredStud} alt="" /></div></div>
                <div>Solar road studs are flashing solar cell powered LED maintenance-free lighting devices used in road construction to delineate road edges and centrelines. Embedded in the road surface, they are an electronic improvement on the traditional cat eyes in that they may give drivers more than a thirty-second reaction window compared with about 3 seconds for conventional reflective devices. The intense brightness of the LEDs makes them easily visible at distances of about 900m under favourable conditions.</div>

                
                <div className='title-in-fullscreen-product-display-in-condominiums'> WATER-I-VAC WATER & VACUUM ALL IN ONE COIN OPERATED MACHINE</div>
                <div><div><img src={ivacImage} alt="" /></div></div>
                <div>This ULTRA compact sized WATER-I-VAC provides industrial grade powerful Vacuum & Water dispensing in an all in one car care machine to provide long maintenance free years of a full service wash bay while generating a sustainable revenue stream $1-$2 from per Vacuum usage and 20-40 cents per water usage. Both water and vacuum can be used at the same time. Upon inserting a coin the large respective countdown LCD screen on an attractive bright yellow with designer outdoor sticker visuals gives an unique satisfaction to residences & car owners. Ideal for medium self-service usage locations at condominiums car parks, workshops, public(HDB), and private residential car wash bays. <br /><br />The Water-I-Vac is the most cost effective & power efficient vacuum  and has only 1 motor and 1 filter bag and fits in the centre of any car wash bay or compactly wall mounted. It can either be manually operated or coin operated as shown above. A water valve with water hose may also be added to enable water dispense functions for the perfect all in car wash bay solution for basic interior and external car care function. </div>
            </div>

            <h4 id='sub-heading-2-in-condominiums-container'>Listed below are our products exclusively picked and priced for MCSTs. Comprehensive maintenance included on profit sharing models.</h4>

            <div className='products-for-condos-grid-container'>
                <div className='individual-product-box-in-products-for-condos'>
                    <div> <img src={image} alt="" /></div>
                    <div className='individual-product-title-box-in-products-for-condos'>Season Parking Electonic Parking Systems</div>
                    <div>Full, Semi or Vehicle acess EPS systems for convenience of car park operator.</div>
                    <Link to={"/cwbsolutions.net/parking-and-access-control/electronic-parking-systems#cwb-eps-season-controller"}>Learn More</Link>
                </div>

                <div className='individual-product-box-in-products-for-condos'>
                    <div> <img src={image} alt="" /></div>
                    <div className='individual-product-title-box-in-products-for-condos'>Automatic Car Barriers</div>
                    <div>Wide range of automatic car parking gates.</div>
                    <Link to={'/cwbsolutions.net/barrier-systems/automatic-car-park-barrier-gates/automatic-car-park-barrier-gates/'}>Learn More</Link>
                </div>

                <div className='individual-product-box-in-products-for-condos'>
                    <div><img src={speedBumpImage} alt="" /></div>
                    <div className='individual-product-title-box-in-products-for-condos'>Speed Bumps</div>
                    <div>Designed to slow traffic in all areas where high speeds can be dangerous.</div>
                    
                </div>

                <div className='individual-product-box-in-products-for-condos'>
                    <div><img src={image} alt="" /></div>
                    <div className='individual-product-title-box-in-products-for-condos'>Parking Lot Barriers</div>
                    <div>Wide range of cheap and effective parking space barriers.</div>
                    <Link to={'/cwbsolutions.net/car-barrier-systems/#parking-lot-barriers-section'}>Learn More</Link>
                </div>
                
                <div className='individual-product-box-in-products-for-condos'>
                    <div><img src={image} alt="" /></div>
                    <div className='individual-product-title-box-in-products-for-condos'>Swing Arm Barriers</div>
                    <div>Cheap and effective swing arm barriers.</div>
                    <Link to={'/cwbsolutions.net/car-barrier-systems/#swing-arm-barrier-section'}>Learn More</Link>
                </div>

                <div className='individual-product-box-in-products-for-condos'>
                    <div><img src={image} alt="" /></div>
                    <div className='individual-product-title-box-in-products-for-condos'>Electric BBQ Pits</div>
                    <div>Innovative electric BBQ Pits can complete your park or resting area.</div>
                    <Link to={'/cwbsolutions.net/electric-bbq-pits/'}>Learn More</Link>
                </div>

                <div className='individual-product-box-in-products-for-condos'>
                    <div><img src={image} alt="" /></div>
                    <div className='individual-product-title-box-in-products-for-condos'>Water Dispensers</div>
                    <div>Coin operated water dispensers for washing bays.</div>
                    <Link to={'/cwbsolutions.net/car-washing-and-car-wash-bays-equipment/water-dispensers/'}>Learn More</Link>
                </div>

                <div className='individual-product-box-in-products-for-condos'>
                    <div><img src={image} alt="" /></div>
                    <div className='individual-product-title-box-in-products-for-condos'>Coin Operated Shower</div>
                    <div>Best water saving and profit generating solution for public places.</div>
                    <Link to={'/cwbsolutions.net/coin-operated-showers'}>Learn More</Link>
                </div>

                <div className='individual-product-box-in-products-for-condos'>
                    <div><img src={image} alt="" /></div>
                    <div className='individual-product-title-box-in-products-for-condos'>Power vacuums</div>
                    <div>Wide range of Powerful vacuums or water & vacuum coin operated machines.</div>
                    <Link to={'/cwbsolutions.net/car-washing-and-car-wash-bays-equipment/power-vacuums/'}>Learn More</Link>
                </div>

                <div className='individual-product-box-in-products-for-condos'>
                    <div><img src={pvcCoatedChainLink} alt="" /></div>
                    <div className='individual-product-title-box-in-products-for-condos'>PVC Coated Chain Link Fence Gate</div>
                    <div>1.0m wide by 1.8m or custom high  single/ double leaf PCV Coated  chain link swing gate </div>
                    <Link to={'/cwbsolutions.net/perimeter-fencing---gates/'}>Learn More</Link>
                </div>

                <div className='individual-product-box-in-products-for-condos'>
                    <div><img src={chainLinkFenceImage} alt="" /></div>
                    <div className='individual-product-title-box-in-products-for-condos'>Chain Link Fence</div>
                    <div>1.8m or custom hight PVC coated chain link fence- Supply only or Supply & Install with or without concrete kerb.</div>
                    <Link to={'/cwbsolutions.net/perimeter-fencing---gates/'}>Learn More</Link>
                </div>

                <div className='individual-product-box-in-products-for-condos'>
                    <div><img src={brcFencingImage} alt="" /></div>
                    <div className='individual-product-title-box-in-products-for-condos'>BRC Weldfence Gate</div>
                    <div>BRC Weldfence is manufactured from high tensile strength steel wires that are welded together to provide accurate panel & mesh dimensions.</div>
                    <Link to={'/cwbsolutions.net/perimeter-fencing---gates/'}>Learn More</Link>
                </div>

            </div>

            

        </div>
    )
}
export default Condominiums;