import './Flap Barrier.css'
import productImage from './setting.png'
import producSpecsImage from './Spec.png'

const FlapBarrier= () =>{
    return(
        <div className='flap-barrier-container'>
            <h1>Flap Barrier (Speed Gate)</h1>
            <br />
            <p>Flap Barrier (speed gate) is generally used to in access control of public passages. The mechanical part of the flap barrier contains an emergency control device, which allows automatic opening of the two wings in case of power failure; when power supply is resumed, the two wings will be reset automatically. The flap barrier has different optional configurations, applicable to all building conditions and capable of providing a solution for the control of all kinds of passage entrances and exits.</p>

            <div>
                <div>
                    <img src={productImage} style={{maxWidth:'100%'}} alt="" />
                </div>

                <div>
                    {/*For Apllications */}
                </div>

                {/*classname "applications-in-swing-arm-barrier-super-section" and  classname "features-and-functions-container-in-swing-arm-barrier-super-section" are common classes handled in the, "stainless-steel-automatic-single-arm-swing-gate" page. Adjustemt will appear on all parts in that specific section*/}

                <div className='features-and-functions-container-in-swing-arm-barrier-super-section'>
                    <h6>Features & Functions</h6>

                    <ul>
                        <li>Fault detection and alarm functions, easy to use and maintenance</li>
                        <li>The running status can be programmed and controlled with the built-in keyboard on the main board</li>
                        <li>Mechanical anti-pinch function. If the gate meets resistance in the reset process, motors will stop working automatically within the prescribed time and reset again after the default delay (till fully reset)</li>
                        <li>Anti-breakthrough function. The gate is locked automatically until opening signal received</li>
                        <li>Synchronization functions (for dual gate equipments)</li>
                        <li>Automatic reset function. Should the user fail to pass within the prescribed time (default time is 5 seconds), the system will cancel the authority of the current user automatically
                        </li>
                        <li>Can be used with variety of card readers: IC / ID card readers, bar codes, fingerprints, etc. (Access controller needed)</li>
                        <li>Direction can be set as single-direction or bi-direction</li>
                        <li>LED direction indicator</li>
                        <li>Gate auto opens when power off and auto close when power on, complying with fire safety requirements</li>
                        <li>Alarm function, in case of illegal intrustion and reverse intrusion, etc.</li>
                        <li>Counter function (optional)</li>
                        <li>Support infrared photocell for anti-pinch and reset function</li>

                    </ul>
                </div>

                <div>
                    <img src={producSpecsImage} style={{maxWidth:'100%'}} alt="" />
                </div>
            </div>

        </div>
    )
}
export default FlapBarrier;