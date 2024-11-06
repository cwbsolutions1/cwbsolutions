import './Remote Control Automatic smooth running Parking Space Barriers.css'
import productImage from './image234.jpg'
import producSpecsImage from './1200x630wa.png'

const RemoteControlAutomaticSmoothRunningParkingSpaceBarriers = () =>{

    return(
        <div className='remote-control-automatic-smoothrrunning-parking-space-barriers-container'>
            <h1>Remote Control Automatic Smooth Running Parking Space Barriers</h1>

            <br />
            <p>This Steel Remote Control Automatic smooth running Parking Space Barriers   can can prevent the parking space from being occupied by other’s vehicle, and to some extent, it can protect your car vehicle from being stolen. When your vehicle is arriving parking position, press the down key on the remote controller. The upper part of the parking lock go down to let your car pass through. When your car has left, press up key, then the upper part go up to protect your parking space. When your car is parking in your parking space, let your parking lock go up, it can also protect your from being stolen. It's waterproof and has alarm function. Rechargable battery power supply allows to use it for a long time without maintenance. Easy to install and low fault rate.</p>

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
                        <li>Industry Building,</li>
                        <li>Condominiums etc.</li>

                    </ul>
                </div>

                <div className='features-and-functions-container-in-parking-lot-barriers-super-section'>
                    <h6>Features</h6>

                    <ul>
                        <li> Move up and down, prevent the parking place from being occupied.</li>
                        <li>To some extent, protect the car from being stolen</li>
                        <li>Generous design, solid</li>
                        <li>Intelligent circuit can correct the faulty operation.</li>
                        <li>The board go down automatically as soon as it touch a block while going up.</li>
                        <li>When the board is at lowest position, alarm function will be cancelled.</li>
                        <li>New and lateral semicircular design, seems more elegant</li>
                    </ul>
                </div>

                <div>
                    <img src={producSpecsImage} style={{maxWidth:'100%'}} alt="" />
                </div>
            </div>



        </div>
    )
}
export default RemoteControlAutomaticSmoothRunningParkingSpaceBarriers;