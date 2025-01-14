import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Homepage.css'
import image1 from '../Home Page/Images/Image 1.png'
import image2 from '../Home Page/Images/Image2.png'
import ivac from '../Home Page/Images/I-Vac.png'
import electricBBQ from '../Home Page/Images/Electric BBQ Pit.jpeg'
import electricBBQDescription from '../Home Page/Images/Electric BBQ Pit Description.jpeg'
import noise from '../../SSC Products/Noise Barriers/noise_03.jpg'
import guardrail from '../../SSC Products/Guard Rails/guardrail_06.jpg'
import crashCushion from '../../SSC Products/Crash Cushion/crash_06.jpg'
import solarStructure from '../../SSC Products/Solar Structures/solar.jpg'
import coilCentre from '../../SSC Products/Coil Centre/coils.jpg'
import hv2 from '../../SSC Products/HV2/hv2_01.jpg'
import ironBarrier from '../../SSC Products/Ironman Barrier/ironman-01.jpg'
import steelBollard from '../../SSC Products/Steel Bollards/steel-03.jpg'
import cappilaryTubeMats from '../../SSC Products/Capillary Tube Mats/capillary_01.png'
import cableTray from '../../SSC Products/Cable Tray/cable_cable_try.jpg'



const Homepage = () =>{


    return(
        <div className='Homepage-container'>

            <div className='company-introduction-in-homepage'>
                <h1>CWB Solutions Pte Ltd</h1>
                <br />

                <div>
                    <p>CWB is a fledging system integration engineering firm providing a wide range of products and solutions for commercial and residential buildings specifically related to car parking and automation industries. We also manufacture, supply, distribute and maintain self service machines related to car washes & car grooming companies, car washing bays, petrol stations, multi storey car parks etc. <br /><br />Our engineering practice integrates in-depth knowledge of technology platforms and profound understanding of business needs for building automation & automobile industry: EPS system, car park  barriers and accessories, condominium security systems, access control systems, key press and storage management system, washing bays set up, self service & car wash equipment inclusive of petrol stations etc. We also have our own in-house research & development division that scopes and develop proprietary hardware such as our own PCB controllers, firmware and database softwares that are Wi-Fi and Network ready able to handle most small and mid scale developments for solutions for today and tomorrow. </p>


                    CWB manufactures it's proprietary products ranging from <Link to={'/cwbsolutions.net/pcb-boards/'}>PCB boards</Link>, EPS system, <Link to={'/cwbsolutions.net/coin-operated-water-dispenser/'}>Coin operated water dispensers</Link>, <Link to={'/cwbsolutions.net/products/water-dispensers/cash-card-and-flash-pay-combi-water-dispenser'}>Cash-Card operated water dispensers</Link>, <Link to={'/cwbsolutions.net/coin-operated-showers'}>Coin Operated Showers</Link>, <Link to={'/cwbsolutions.net/car-washing-and-car-wash-bays-equipment/power-vacuums/'}>Powerful Car Vacuums</Link>, <Link to={'/cwbsolutions.net/air-machines/'}>Air Machines</Link>, <Link to={'/cwbsolutions.net/hot-air-dryer/'}>Hot Air Dryers</Link>, <Link to={'/cwbsolutions.net/automatic-car-wash/'}>Automatic Car Washes</Link> to <Link to={'/cwbsolutions.net/car-barrier-systems/'}>automated parking barrier & gantry systems</Link>

                    <br /> <br />
                    We are <Link to={'/cwbsolutions.net/engineering/payment-modules/nets-cashcard-and-flashpay/ez-link-/payments-integration/'}>System Integrators for NETS, EZ Link & NERA</Link>  and are working with MHI for unique parking solutions.
                    If you are looking to add Cashless payments to your products, you are in good hands.
                </div>

            </div>

            <div className='product-section-in-homepage'>
                <h2>CWB IOT & INDUSTRY 4.0 SMART PARKING LOT RESERVATION ECO-SYSTEM</h2>

                <Carousel id='carousel-home-page'>
                    <Carousel.Item interval={2500} >
                        <img className='carousle-item' src={image1} alt="" />
                    </Carousel.Item>

                    <Carousel.Item interval={2500} >
                        <img className='carousle-item' src={image2} alt="" />
                    </Carousel.Item>

                    <Carousel.Item interval={2500} >
                        <img className='carousle-item' src={image1} alt="" />
                    </Carousel.Item>

                    <Carousel.Item interval={2500} >
                        <img className='carousle-item' src={image1} alt="" />
                    </Carousel.Item>
                </Carousel>

            </div>

            
            <div className='product-section-in-homepage'>
                <h2>Intelligent Self-Service Car Care Machines</h2>

                <p style={{fontSize:'1.3em'}}>Looking for quailty and long lasting maintenance free car washing equipment? Need to set up a washing bay for your Condo?</p>
                <p>
                    We provide wide range of professional equipment, systems and replacement parts for car washes and car washing bays such as coin operated water dispensers,cash card operated dispenser, power vacuums, automatic car washes, hot air dryers and much more to satisfy you and your customer's needs. 
                </p>
                <p>Wether you are setting up your first car wash, expanding your business or organizing self service washing bay for your residents, we are here to help you find the best suited products.</p>

                <p>
                    What's more. No more hunting for quotations or waiting for replies from other suppliers. <span style={{color:"red"}}>You can now use your <a style={{color:"red", fontWeight:"bold"}} href="">credit card</a> and purchase your equipment right away from our website, put it on an *instalment plan, and we'll process your order and set up an installation date immediately!</span> Not sure which item to purchase? Just browse our pages and click buy, or call us and we'll be glad to assist.
                </p>

                <div className='product-visuals-in-homepage'>
                    <div><img id='ivac-image' src={ivac} alt="" /></div>
                    <div>
                        <iframe 
                            id='i-vac-video'
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/GCpK6EWx47c" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>

            </div>

            <div className='ssc-products-section-in-homepage'>
                <h2>Road Safety & Temporary Construction Products</h2>

                <div className="ssc-products-in-homepage">
                
                        <div className='individual-product-container'>
                            <img src={noise} alt="" />

                            <div className='individual-product-container-overlay'>
                                <span className='ssc-product-name'>Noise Barriers</span>
                                <button>Learn More</button>
                            </div>
                        </div>

                        <div className='individual-product-container'>
                            <img src={guardrail} alt="" />

                            <div className='individual-product-container-overlay'>
                                <span className='ssc-product-name'>Guardrail</span>
                                <button>Learn More</button>
                            </div>
                        </div>

                        <div className='individual-product-container'>
                            <img src={crashCushion} alt="" />

                            <div className='individual-product-container-overlay'>
                                <span className='ssc-product-name'>Crash Cushion</span>
                                <button>Learn More</button>
                            </div>
                        </div>

                        <div className='individual-product-container'>
                            <img src={solarStructure} alt="" />

                            <div className='individual-product-container-overlay'>
                                <span className='ssc-product-name'>Solar Structure</span>
                                <button>Learn More</button>
                            </div>
                        </div>

                        <div className='individual-product-container'>
                            <img src={coilCentre} alt="" />

                            <div className='individual-product-container-overlay'>
                                <span className='ssc-product-name'>Coil Centre</span>
                                <button>Learn More</button>
                            </div>
                        </div>

                        <div className='individual-product-container'>
                            <img src={hv2} alt="" />

                            <div className='individual-product-container-overlay'>
                                <span className='ssc-product-name'>HV2</span>
                                <button>Learn More</button>
                            </div>
                        </div>

                        <div className='individual-product-container'>
                            <img src={ironBarrier} alt="" />

                            <div className='individual-product-container-overlay'>
                                <span className='ssc-product-name'>Ironman Barrier</span>
                                <button>Learn More</button>
                            </div>
                        </div>

                        <div className='individual-product-container'>
                            <img src={steelBollard} alt="" />

                            <div className='individual-product-container-overlay'>
                                <span className='ssc-product-name'>Steel Bollards</span>
                                <button>Learn More</button>
                            </div>
                        </div>

                        <div className='individual-product-container'>
                            <img src={cappilaryTubeMats} alt="" />

                            <div className='individual-product-container-overlay'>
                                <span className='ssc-product-name'>Capillary Tube Mats for Heating
                                & Cooling Systems</span>
                                <button>Learn More</button>
                            </div>
                        </div>

                        <div className='individual-product-container'>
                            <img src={cableTray} alt="" />

                            <div className='individual-product-container-overlay'>
                                <span className='ssc-product-name'>Cable Tray</span>
                                <Link to={'/cwbsolutions.net/sscproducts/cable-tray/'}><button>Learn More</button></Link>
                            </div>
                        </div>
                    
                </div>


            </div>

            <div className='product-section-in-homepage'>
                <h2>OUR OWN RADIO NETWORK & IOT ENABLED ECOSYSTEM SOLUTIONS</h2>
                <p>
                IoT devices with LPWAN connectivity allow transmitting its readings at a very long range even in harsh urban environment. Integrated radio modules provide superior connectivity characteristics for numerous smart devices. CWBIoT-powered devices for Internet of Things allow rolling out the industrial IoT applications fast and cost-effectively with a high level of autonomy in the wide city areas or across the entire country Smart devices are able to exchange the information and parameters they measure in an automatic manner. Intelligent meters perform monitoring, reading and transmission of data by themselves. <br /><br />No more need in manual reading and site visits to collect data and operate the system Some of our smart devices are already featured with remote control option. The full-duplex connectivity of NB-Fi wireless protocol for example allows to change tariffs of electricity meters remotely, manage the power load limits, close and open control valves of different IoT systems, etc. The long-range Internet of Things technology provides perfect scalability only when the end-device installation is as simple as screwing in the bulb. Utilising the extensive practical and use case experience we aim at developing our devices based on these principles.

                <br /> <br />
                Smart sensors are the integrated devices with IoT radiomodules able to transmit data wirelessly via LPWA network. Such appliances can be used in different IoT applications as part of distributed sensor network. Industrial solutions use a large number of different sensors which required a reliable and robust connectivity.

                <br />
                Introducing our own CWBIoT enabled solutions with battery operated off the shelf ready products such as; Smart wireless Battery operated CWBIoT:
                </p>


                <div className='iot-products'>
                    <div style={{backgroundColor:'#BDC696'}}>SMART Parking Occupancy Sensors</div>
                    <div style={{backgroundColor:'#FF8200'}}>SMART Water Meters</div>
                    <div style={{backgroundColor:'#A3C4BC'}}>SMART Electric Meters</div>
                    <div style={{backgroundColor:'#FFC100'}}>SMART Gas Meters</div>
                    <div style={{backgroundColor:'#B7AD99'}}>SMART Waste Monitoring Sensors</div>
                    <div style={{backgroundColor:'#D0BCD5'}}>SMART Soil Moisture Sensors</div>
                    <div style={{backgroundColor:'#81ADC8'}}>SMART Pulse Modems</div>
                    <div style={{backgroundColor:'#629677'}}>SMART Serial Modems</div>
                </div>


            </div>


            <div className='product-section-in-homepage'>
                <h2>We are NPARKS ELECTRICAL BBQ PIT 1st in Singapore @Sembawang Park Supplier with booking integration to AXS!</h2>

                <Carousel id='carousel-home-page'>
                    <Carousel.Item interval={2500} >
                        <img src={electricBBQ} alt="" />    
                    </Carousel.Item>

                    <Carousel.Item interval={2500} >
                        <img src={electricBBQDescription} alt="" /> 
                    </Carousel.Item>

                </Carousel>
                

                <br /><br />
                
                <h5>ELECTRICAL BBQ PIT (Sembawang Park) </h5>

                <p> <b>1. What is an electrical BBQ pit? </b>
                    <br />
                    It is a BBQ pit that runs on electricity and is activated by a PIN.You do not need any charcoal for barbecuing. 
                </p>

                <p> <b>2. Where are the electrical BBQ pits located? </b>
                    <br />
                    They are currently located only at Sembawang Park, Pit 9 and 10. 3.  
                </p>

                <p> <b>3.Where can I make booking for electrical pits? </b>
                    <br />
                    The booking channels are the same as booking for normal BBQ pits. You may book for BBQ pit via AXS Stations, Online (NParks BBQ Pit Booking internet portal) and Phone Booking via AXS Hotline 6560 2727 (8am – 10pm daily). 
                </p>



                <p>Custom Booking Platform available through PC Standalone and Web & App integrations & Custom design <a href="https://www.axs.com.sg/help_NParksBBQFAQ.php">Click Here</a></p>

                <button>Read More</button>

                <div>
                <iframe 
                    style={{marginTop:"10px"}}
                    width="100%" 
                    height="315" 
                    src="https://www.youtube.com/embed/9HqbHp3osys?si=2ogEKY5460Xz8UNC" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
            </div>
        

        


        </div>
    )
}
export default Homepage

