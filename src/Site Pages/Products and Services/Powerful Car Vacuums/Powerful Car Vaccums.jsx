import './Powerful Car Vaccums.css'
import image from './1200x630wa.png'
import { Link } from 'react-router-dom';

const PowerfulCarVaccums =()=>{
    return(
        <div className='powerful-car-vaccums-container'>
            <h1>Powerful Car Vaccums</h1>

            <p>We are distributing the world's most powerful Self service vacuums in the industry. Whether you are looking for a revenue generator, to cut cost or to provide your customers or residents with great quality vacuum or vacuum and water dispenser options at their door step we've got all the right options for you. </p>

            <div className='box-for-applicatios-installation-in-coin-operated-showers'>
            <h4>Applications</h4>
            <ul type="square">
                <li>Our commercial vacuums & vacuum with water dispenser configurations are great for car washes</li>
                <li>Petrol stations</li>
                <li>Car  dealerships</li>
                <li>Rental car agencies</li>
                <li>Auto body shops</li>
                <li>HDB and Condo car parks</li>
                <li>Beach carparks or anywhere else where you want to provide your customers or residents with powerful vacuum which will serve them for years of maintenance free value added service & convenience.</li>
            </ul>
            <p>Our revenue generating models give you the options to use notes, coin, cashcard/Flashpay  or tokens. All vacuums are of top quality proven for over 20 years at every petrol station in USA. Moreover since we have over 50 commercial power vacuums island wide & with 8 year maintenance contracts with the respective Town Councils, we have ready stock of replacement parts for a 1-1 replacement for your peace of mind and convenience</p>
            </div>
        
            <div className='merchandise-items-in-powerful-car-vaccums'>
                <div className='individual-item-box-in-powerful-car-vaccums'>
                    <div><img src={image} alt="" /></div>
                    <div className='heading-in-individual-item-box-in-powerful-car-vaccums'>POWER VAC(WORLD MOST POWERFUL VACUUM)</div>
                    <div>This is the world's most powerful industrial grade power Vacuum. 2 & 3 motors models are available. The coin operated model is ideal for commercial car washes & grooming centers where you can earn extra self service vacuum profits after operating hours. Also ideal for HDB multistory car park & condominiums car washing bays and also comes with a water dispense and tyre air pump add-on option where you may also add a water/air hose for your residents ultimate convenience and satisfaction.
                    Comes with same specifications as the stand-alone model.</div>
                    <Link to={'/car-washing-and-car-wash-bays-equipment/power-vacuums/commercial-vacuums/'}>Buy Now</Link>
                </div>

                <div className='individual-item-box-in-powerful-car-vaccums'>
                    <div className='heading-in-individual-item-box-in-powerful-car-vaccums'><img src={image} alt="" /></div>
                    <div className='heading-in-individual-item-box-in-powerful-car-vaccums'>WATER-I-VAC( WATER & VACUUM ALL IN ONE )</div>
                    <div>
                    This ULTRA compact sized WATER-I-VAC is ideal for medium usage locations specifically for HDB & condominium car wash bays. It's the most cost effective Power vacuum and has only 1 motor and 1 filter bag and fits in the centre of any car wash bay or compactly wall mounted. It can either be manually operated or coin operated as shown above. A water valve with water hose may also be added to enable water dispense functions for the perfect all in car wash bay solution for basic interior and external car care function. 
                    </div>
                    <Link to={'/our-products/power-vacuums/water-i-vac/'}>Buy Now</Link>
                    
                </div>
            </div>

            <div className='vaccum-machine-types-in-powerful-car-vaccums'>
                <div className='individual-item-box-in-powerful-car-vaccums'>
                    <div><img src={image} alt="" /></div>
                    <div className='heading-in-individual-item-box-in-powerful-car-vaccums'>Dual Commercial Ultra Power Vacuum with 4 motors</div>
                    <div>This unit is specially designed for car washes or high traffic places where you need more than 1 vacuum. As for the 4 motors (2 on each side), it can be used for 2 cars at the same time. You can also have 2 different claw type at the end of each hose, 1 nosed type and the other claw type.</div>
                    <Link to={'/our-products/power-vacuums/dual-commercial-ultra-power-vacuum-with-4-motors/'}>Learn More</Link>
                </div>

                <div className='individual-item-box-in-powerful-car-vaccums'>
                    <div><img src={image} alt="" /></div>
                    <div className='heading-in-individual-item-box-in-powerful-car-vaccums'>Ultra Turbonator</div>
                    <div>The Ultra Turbonator is great solution when you want to provide your customers/residents with more services and to crete additional revenue for yourself.
                    This model allows you to charge two different prices to allow your customers to choose between 2 motor or 3 motor functions.</div>
                    <Link to={'/our-products/power-vacuums/ultra-turbonator/'}>Learn More</Link>
                </div>
            </div>

            <h4 id='add-on-items-heading'>Add On's to the Power Vacuum</h4>

            <div className='add-on-items-in-powerful-car-vaccums'>
                <div className='individual-item-box-in-powerful-car-vaccums'>
                    <div><img src={image} alt="" /></div>
                    <div className='heading-in-individual-item-box-in-powerful-car-vaccums'>Replacement Hose </div>
                    <div>J E adams Hoses are of the highest quality available 6 different colours and lengths of 15 ,25 & 50 feet </div>
                    <Link to={'/replacement-parts-for-vacuums-water-dispensers/'}>Read More</Link>
                </div>

                <div className='individual-item-box-in-powerful-car-vaccums'>
                    <div><img src={image} alt="" /></div>
                    <div className='heading-in-individual-item-box-in-powerful-car-vaccums'>Hot Air Dryer</div>
                    <div>Cut your manpower cost & increase customer satisfaction on you per car wash speed with a spot free finish with  our powerful heated air dryer. </div>
                    <Link to={'/hot-air-dryer/'}>Read More</Link>
                </div>

                <div className='individual-item-box-in-powerful-car-vaccums'>
                    <div><img src={image} alt="" /></div>
                    <div className='heading-in-individual-item-box-in-powerful-car-vaccums'>Water Dispensers</div>
                    <div>We manufacture, sell, repair and maintain different types of water dispensers: coin operated, cash card operated and aqua save water dispensers.</div>
                    <Link to={"/car-washing-and-car-wash-bays-equipment/water-dispensers/"}>Read More</Link>
                    <div></div>
                </div>

                <div className='individual-item-box-in-powerful-car-vaccums'>
                    <div><img src={image} alt="" /></div>
                    <div className='heading-in-individual-item-box-in-powerful-car-vaccums'>All in one mini Car Wash</div>
                    <div>The Splash N Dash is a single bay self service all in one car wash station. The first impressive feature is the low Pressure Tire/Engine Cleaner, which uses a special cutting solution</div>
                    <Link to={'/news/mini-car-washes'}>Read More</Link>
                </div>
            </div>



            




        </div>
    )
}
export default PowerfulCarVaccums;