import { Carousel } from 'react-bootstrap';
import './Mini Car Washes.css'
import image from './image234.jpg'
import { Link } from 'react-router-dom';

const MiniCarWashes = () =>{
    return (
        <div className='mini-car-washes-container'>
            <h1>Mini Car Washes</h1>

            <h3>Mini Powerful All-in-One Car Wash</h3>

            <Carousel id='carousel-in-mini-car-washes-container'>
                    <Carousel.Item interval={2500} >
                        <img className='carousle-item-in-mini-car-washes' src={image} alt="" />
                    </Carousel.Item>

                    <Carousel.Item interval={2500} >
                        <img className='carousle-item-in-mini-car-washes' src={image} alt="" />
                    </Carousel.Item>

                    <Carousel.Item interval={2500} >
                        <img className='carousle-item-in-mini-car-washes' src={image} alt="" />
                    </Carousel.Item>
            </Carousel>

        <p>The Splash N Dash is a single bay self service all in one car wash station.</p>
        <p>The first impressive feature is the low Pressure Tire/Engine Cleaner, which uses a special cutting solution to remove oxidised tire film and strips away engine grease and grime to keep the engine in top working performance.</p>
        <p>The High Pressure Wash ensures a through cleaning of the vehicle from top to bottom, while a soft bristled foaming brush scrubs away hardened road scum. For a clean rinse, High Pressure crystal clear water washes away the debris that the foaming brush scrubs away.</p>
        <p></p>


        <div>
            <iframe 
                id='i-vac-video'
                width="500px" 
                height="500px" 
                src="https://www.youtube.com/embed/GCpK6EWx47c" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>

        <div className='applications-section-in-mini-car-washes-container'> 
            <h4>Applications</h4>
            <ul>
                <li>Splash N Dash would be great solution for Car Washes</li>
                <li>Car rental agencies, Auto Dealerships</li>
                <li>HDB & Condo carparks</li>
                <li>NParks and other locations where you need to organise car care service with minimum manpower and space requirements.</li>
            </ul>
        </div>


        {/* Buy Niw section to be added 
        <div>
            <div></div>
            <div></div>
        </div> */}

        <div className='features-section-in-mini-car-washes-container'>
            <h4>Features</h4>
            <ul>
                <li>All Stainless Steel Cabinet</li>
                <li>Colorful Custom Graphics</li>
                <li>Trigger Gun and Hoses-45 FT</li>
                <li>3 HP - 3 PH Electric Motor</li>
                <li>Model CAT 5CP2120 Pump,</li>
                <li>4.0 GPM/1000 PSI</li>
                <li>34” W x 32” D x 70” H</li>
                <li>220 Volts 50/60 Cycles</li>
                <li>Shipping Weight: 775 lbs.</li>
                <li>Coin/Token Security Box</li>
                <li>Countdown Timer</li>
                <li>Foam Brush </li>
            </ul>

            <h6>Operating options are also available:</h6>
            <ol>
                <li>Coin operated </li>
                <li>Token operated </li>
                <li>Manual switch operated.</li>
            </ol>

            <h6>CAR WASHES + SELF SERVICE OPERATING OPTION:</h6>
            <ul type='none'>
                <li>The Splash N Dash operating options can also be customized by having a manual switch option operated during the car wash operating hours and to switch to coin operated option for self service usage at the wash bays after operating hours to increase revenue yields.</li>
            </ul>
        </div>

           {/*Classes duplicated from Powerful Car Vaccums */} 

        <h4 id='add-on-items-heading'>Add On's to the Power Vacuum</h4>

        <div className='add-on-items-in-powerful-car-vaccums'>
            <div className='individual-item-box-in-powerful-car-vaccums'>
                <div><img src={image} alt="" /></div>
                <div className='heading-in-individual-item-box-in-powerful-car-vaccums'>Splash N Dash with extended boom </div>
                <div>The Splash N Dash comes in various models.Add on's include an extended boom to minimise the ware & tear of the hoses.  This also adds to the users ease and convenience of using the Splash N Dash of not having the hoses touch their cars. </div>
            </div>

            <div className='individual-item-box-in-powerful-car-vaccums'>
                <div><img src={image} alt="" /></div>
                <div className='heading-in-individual-item-box-in-powerful-car-vaccums'>Hot Air Dryer</div>
                <div>Cut your manpower cost & increase customer satisfaction on you per car wash speed with a spot free finish with  our powerful heated air dryer. </div>
                <Link to={'/cwbsolutions.net/hot-air-dryer/'}>Read More</Link>
            </div>

            <div className='individual-item-box-in-powerful-car-vaccums'>
                <div><img src={image} alt="" /></div>
                <div className='heading-in-individual-item-box-in-powerful-car-vaccums'>Air Machines</div>
                <div>We offer a high quality stainless steel air machine for your petrol station,  detail shop, multi storey carpark  or anywhere you want to offer your customers air compression. </div>
                <Link to={"/cwbsolutions.net/air-machines"}>Read More</Link>
                <div></div>
            </div>




        </div>



        </div>
    )
}
export default MiniCarWashes;