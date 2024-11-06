import './Stainless steel Remote Control Parking Space Barrier.css'
import productImage from './image234.jpg'
import producSpecsImage from './1200x630wa.png'

const StainlessSteelRemoteControlParkingSpaceBarrier =() =>{
    return(
        <div className='stainless-steel-remote-control-parking-space-barrier-container'>

            <h1>Stainless Steel Remote Control Parking Space Barrier</h1>

            <br />
            <p>Stainless steel 540mm height Remote Control Parking Space Barrier is a cheap and cross effective solution to secure your parking lot. It's rust, rot and waterproof, reliable, light and easy to maintatin. Alarm function.</p>

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
                        <li>Condominiums</li>
                        <li>shopping malls</li>
                        <li>Airport</li>
                        <li>Clubhouses</li>

                    </ul>
                </div>

                <div className='features-and-functions-container-in-parking-lot-barriers-super-section'>
                    <h6>Features</h6>

                    <ul>
                        <li>Swing up and down, prevent the parking place from being occupied.</li>
                        <li>To some extent, protect the car agaist theft of vehicles</li>
                        <li>With worm wheel & worm, to protect driving electromotor</li>
                        <li>With reset device for anti-collision</li>
                        <li> Low noise electromotor</li>
                        <li> Intelligent circuit can correct the faulty operation</li>
                        <li>The board go down automatically as soon as it touch a block while going up</li>
                        <li>When the board is at lowest position, alarm function will be cancelled.</li>
                        <li>Power supply: 6 pieces of NO. 5 dry battery</li>
                        <li>Waterproof design</li>
                    </ul>
                </div>

                <div>
                    <img src={producSpecsImage} style={{maxWidth:'100%'}} alt="" />
                </div>
            </div>

        </div>
    )
}
export default StainlessSteelRemoteControlParkingSpaceBarrier;