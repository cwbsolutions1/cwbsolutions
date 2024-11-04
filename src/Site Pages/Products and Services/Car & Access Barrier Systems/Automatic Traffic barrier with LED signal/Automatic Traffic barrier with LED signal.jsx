import './Automatic Traffic barrier with LED signal.css'
import image1 from './parking.png'

const AutomaticTrafficBarrieWithLedSignal = () =>{

    {/*All the styles are copied from "Automatic Car Park Barrier Gates" page since the page looks same, Only the main contaner has changed according to this page*/}
    return(
        <div className='automatic-traffic-barrier-with-led-signal-container'>
            <h1>Automatic Traffic Barrier with LED signal</h1>

            <div>
                <img style={{maxWidth:'100%'}} src={image1} alt="" />
            </div>

            <div>
                <p>This high quality <b>traffic barrier with LED signal</b> employs special torque motor and master controller with high integration and stong logic function.  Multiple working modes to meet different demands and several interfaces for external device.</p>

                <p><b>Applications: </b>Airport, Highway, MSCP, Car Parks, Shopping Malls and other places with heavy traffic. </p>
            </div>

            <div className='automatic-car-park-barrier-gate-features-container'>
                <h6>Features</h6>
                <ol>
                    <li>
                    The master controller employs the hi-reliable microprocessor
                        <ul type='square'>
                            <li>High integration and strong logic function</li>
                            <li>Multiple operation modes available</li>
                            <li>Several interfaces for external devices available</li> <br />
                        </ul>
                    </li>

                    <li>
                    The core technology employs the special AC220V torque motor
                        <ul type='square'>
                            <li>Maintenance-free motor,  work normally under extremely climates</li>
                            <li>Use sine generator to reduce mechanical failure greatly</li>
                            <li>Power protection in case of instant heavy current,  voltage fluctuation</li><br />
                        </ul>
                    </li>

                    <li>
                    All-round safety protection 
                        <ul type='square'>
                            <li> Collision prevention</li>
                            <li> LED traffic signal (optional)</li>
                            <li> Infrared ray protection (optional)</li>
                            <li> Remote control (optional)</li>
                            <li> Falling protection (optional)</li>
                        </ul>
                    </li>
                </ol>

            </div>
        </div>        
    )
}
export default AutomaticTrafficBarrieWithLedSignal;