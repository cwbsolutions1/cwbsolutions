import './Waterproof Parking Lot Protector.css'
import productImage from './image234.jpg'
import producSpecsImage from './1200x630wa.png'

const WaterproofParkingLotProtector = () =>{
    return(
        <div className='waterproof-parking-lot-protector-container'>
            <h1>Waterproof Parking Lot Protector</h1>

            <br />
            <p>This Waterproof Parking Lot Protector is a cheap and cost effective solution to protect your reserved parking lots from undesireable parking. It's corrosion, aging, sunshine resisitance, rot and waterproof.</p>

            <div>
                <div>
                    <img src={productImage} style={{maxWidth:'100%'}} alt="" />
                </div>

                    {/*classname "applications-in-parking-lot-barriers-super-section" and  classname "features-and-functions-container-in-parking-lot-barriers-super-section" are common classes handled in the, "remote-control-automatic-smoothrrunning-parking-space-barriers" page. Adjustemt will appear on all parts in that specific section*/}

                <div className='applications-in-parking-lot-barriers-super-section'>
                    <h6>Applications</h6>
                    <ul type='square'>
                        <li>Car Parks</li>
                        <li>MSCP</li>
                        <li>Highway Toll Station</li>
                        <li>Industry Building</li>
                        <li>Financial Premises</li>
                    </ul>
                </div>

                <div className='features-and-functions-container-in-parking-lot-barriers-super-section'>
                    <h6>Features</h6>

                    <ul>
                        <li>Swing up and down, prevent the parking place from being occupied.</li>
                        <li>To some extent, protect the car agaist theft of vehicles</li>
                        <li>With driving wheel, smooth running.</li>
                        <li>With reset devices for anti-collision </li>
                        <li> Low noise electromotor</li>
                    </ul>
                </div>

                <div>
                    <img src={producSpecsImage} style={{maxWidth:'100%'}} alt="" />
                </div>
            </div>

        </div>
    )
}
export default WaterproofParkingLotProtector;