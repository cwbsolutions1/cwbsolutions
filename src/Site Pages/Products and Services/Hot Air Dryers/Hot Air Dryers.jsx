import './Hot Air Dryers.css'
import wallMountBoom from './61h-ugoupdl__ac_sl1500_.jpg'
import vaccumCleaner from './Commercial-Vacuum-CleanerPower.png'
import airDryer from './Air_Machine.jpeg'

const HotAirDryers = () =>{
    return(
        <div className='hot-air-dryers-container'>
            <h1>Hot Air Dryer</h1>
            CUT YOUR MANPOWER COST & INCREASE  CUSTOMER SATISFACTION ON YOU PER CAR WASH SPEED WITH A SPOT FREE FINISH WITH OUR POWERFUL HEATED AIR DRYER

            <p>If you're the car wash owner or your work connected with car care business you understand all importance of providing your customers with fast and at the same time careful final dry.Researches show that the final qualified dry is the longest part of car wash service especially if you use only one worker for it and it's common problem after manual drying that windows, space around wheels, windows and mirrors are usually have water droplets together with scratches on the paint, which cause most of customers complains.</p>

            <p>We are proud to present in Singapore this innovative Hot Air Dryer that features a patented air heating system that uses a 1200 watt element and is the only product on the market that features this type of additional heating option. </p>

            <p>The Hot Air Dryer boasts air speeds of 200+ MPH at the end of the blower nozzle for rapid dissipation of water droplets (it can be compared to Formula 1 car speed). That means you'll need just few minutes for the final scratch and spot free dry. The internal heating element engages when ambient temperature is below 79 degrees to provide a steak and spot free finish.</p>

            <p>This Hot Air Dryer uses only 1 motor versus the competitions 3 motor style units, which means that you'll need less replacement parts and provide your customers with a quicker dry. </p>

            <h6>Application</h6>
            <ul>
                <li>car washes</li>
                <li>car grooming companies</li>
                <li>taxi terminals and other locations where matter quality and speed of the final dry.</li>
            </ul>


            <div className='add-ons-to-air-machines-container'>
                <h6>Add On's to Air Machines</h6>

                <div className='add-ons-to-air-machines-container-grid'>
                    
                    <div className='add-ons-to-air-machines-box'>
                        <div><img src={vaccumCleaner} alt="" /></div>
                        <div className='add-ons-to-air-machines-box-title'>Commercial Power Vacuum</div>
                        <div className='add-ons-to-air-machines-box-description'>We are distributing the worls's most powerful vacuums in the  industry. Whether you are looking for a revenue generator, to stop replacing shop-vacs or to provide your customers or residents with  great quality vacuum for free we've got options for you. </div>
                        <button>Learn More</button>
                    </div>

                    <div className='add-ons-to-air-machines-box'>
                        <div><img src={airDryer} alt="" /></div>
                        <div className='add-ons-to-air-machines-box-title'>Air Machines</div>
                        <div className='add-ons-to-air-machines-box-description'>We offer a high quality stainless steel air machine for your petrol station,  detail shop, multi storey carpark  or anywhere you want to offer your customers air compression. </div>
                        <button>Learn More</button>
                    </div>

                    <div className='add-ons-to-air-machines-box'>
                        <div><img src={wallMountBoom} alt="" /></div>
                        <div className='add-ons-to-air-machines-box-title'>Wall mount boom</div>
                        <div className='add-ons-to-air-machines-box-description'>Increase productivity, save  hose ware & tear and do away with messy hoses lying around on the floor by getting this wall mount boom for your hot air dryer.</div>
                        <button>Learn More</button>
                    </div>
                </div>

            </div>




        </div>
    )
}
export default HotAirDryers;