import './Access control Time attendance Versatile Stainless Steel Flap Swing Arm Barrier.css'
import productImage from './setting.png'
import producSpecsImage from './Spec.png'

const AccessControlTimeAttendanceVersatileStainlessSteelFlapSwingArmBarrier=() =>{

    return(
        <div className='access-control-time-attendance-versatile-stainless-steel-flap-swing-arm-barrier-container'>
            <h1>Access control Time attendance Versatile Stainless Steel Flap Swing Arm Barrier</h1>
            <br />
            <p>This high quality Access control Time attendance Versatile Stainless Steel Flap Swing Arm Barrier  is widely used in airports,   gallerys,   bus station, supermarkets,   park,   and other traffic resticted areas. It is able to integrate with barcode,  cash card,   IC,   ID card to excute access control,  time attendance,   tolling,   etc. The machine is rustproof,   durable and can resist external destroy,   able to be placed both indoor or outdoor.</p>

            <div>
                <div>
                    <img src={productImage} style={{maxWidth:'100%'}} alt="" />
                </div>

                    {/*classname "applications-in-swing-arm-barrier-super-section" and  classname "features-and-functions-container-in-swing-arm-barrier-super-section" are common classes handled in the, "stainless-steel-automatic-single-arm-swing-gate" page. Adjustemt will appear on all parts in that specific section*/}

                <div className='applications-in-swing-arm-barrier-super-section'>
                    <h6>Applications</h6>
                    <ul type='square'>
                        <li>Bus Station</li>
                        <li>Feryy terminal</li>
                        <li>Exhibitions</li>
                        <li>Subway</li>
                        <li>Financial institutions</li>
                        <li>Factorys etc</li>
                    </ul>
                </div>

                <div className='features-and-functions-container-in-swing-arm-barrier-super-section'>
                    <h6>Features</h6>

                    <ul>
                        <li>Breakdown self-checking and alarm,  very convenient to maintenance and use</li>
                        <li>Easy to program operation mode by built-in little keypad on master controller.</li>
                        <li>Mechanical structure & induction anti-Pinch enable  motor to stop working automatically in given time.</li>
                        <li>Sound & light alarm,  including alarm and close in case of unauthorized etry and trailling,  etc.</li>
                        <li>Gate synchronization adjustable.</li>
                        <li>Automatic resetting function: during openning,  the system will cancel access  if nobody pass in given time.</li>
                        <li>Induction /automatic delay reset process 5 second after open</li>
                        <li>Easy to integrated with magnetic card, barcode card, ID card,  IC card,  etc.</li>
                        <li>Single or double direction for option.</li>
                        <li>Open automatically when power off and close automatically when power on.</li>
                        <li>Counting function (Optional)</li>
                    </ul>
                </div>

                <div>
                    <img src={producSpecsImage} style={{maxWidth:'100%'}} alt="" />
                </div>
            </div>



        </div>
    )
}
export default AccessControlTimeAttendanceVersatileStainlessSteelFlapSwingArmBarrier;