import './Stainless steel Automatic Single Arm Swing Gate.css'
import productImage from './setting.png'
import producSpecsImage from './Spec.png'

const StainlessSteelAutomaticSingleArmSwingGate = () =>{
    return(
        <div className='stainless-steel-automatic-single-arm-swing-gate'>
            <h1>Stainless Steel Automatic Single Arm Swing Gate</h1>
            <br />
            <p>This high quality Stainless steel Automatic Single Arm Swing Gate consists of automatic flap barrier, two/one direction running, access control. Can be modified to meet your specific equirements. Suitable for indoor and outdoor use. Can work with extreme weather conditions (-30°C - +70°C).</p>

            <div>
                <div>
                    <img src={productImage} style={{maxWidth:'100%'}} alt="" />
                </div>

                <div>
                    <p>Applications</p>
                    <ul type='square'>
                        <li>Condominiums</li>
                        <li>Garden Fence,</li>
                        <li>Residential</li>
                        <li>School</li>
                        <li>Community</li>
                        <li>Financial Institutions</li>
                    </ul>
                </div>

                <div>
                    <h6>Functions & Features</h6>

                    <ul>
                        <li>Equipment appearance is made of stainless steel plate with cold bending technology, no clearance welding. It is beautiful modeling and rust-proof and durable.</li>
                        <li>The material of the whole case is stainless, and the width is 2mm.</li>
                        <li>Adopted 6 pairs infrared device or light curtain to stop following, distinguishing direction, preventing touch, and alarm function .</li>
                        <li>Humanized status identification can distinguish the status of the equipment operation</li>
                        <li>5 Adopted the standard electrical interface, this system can integrated many reader of magnetic card, the bar code card, ID card, IC card in this equipment.</li>
                        <li>6 This system has the emergency measures to ensure the channel unimpeded, for staff evacuation in time.</li>
                        <li>The standard outward electric interface can be connected with many kinds of card readers and realize remote control and management through running the computer.</li>
                        <li>The whole system is running steadily with low noise.</li>
                        <li>If it is in the low temperature area, the equipment will add warming device.
                        </li>
                    </ul>
                </div>

                <div>
                    <img src={producSpecsImage} style={{maxWidth:'100%'}} alt="" />
                </div>
            </div>

        </div>
    )
}
export default StainlessSteelAutomaticSingleArmSwingGate