import './Tripod Turnstile.css'
import productImage from './image234.jpg'
import checkedImage from './checklist.png'

const TripodTurnstile = () =>{
    return(
        <div className='tripod-turnstile-container'>
            <h1>Tripod Turnstile</h1>

            <br />
            <p>Tripod Turnstile is generally used in simple dissuasion level access contrl of public passages. It is widely used in work attendance checking systems of factories, consumption systems of public institutions,  access control of residential estates, ticket exit systems of scenic, sports and other arenas, handkey management systems of construction sites and so on.</p>

            <div>
                <div>
                    <img src={productImage} style={{maxWidth:'100%'}} alt="" />
                </div>

                    {/*classname "applications-in-turnstile-super-section" and  classname "applications-in-turnstile-super-section (with child classes)" are common classes handled in the, "full-height-turnstile-container" page. Adjustemt will appear on all parts in that specific section*/}

                <div className='applications-in-turnstile-super-section'>


                    <div className='highlighted-features-in-turnstile-container'>
                        <div className='individual-highlighted-feature-in-turnstile-container'>
                            <div><img src={checkedImage} alt="" /></div>
                            <div>Turnstile contains an emergency control device, which allows free passage in case of power failure.</div>
                        </div>

                        <div className='individual-highlighted-feature-in-turnstile-container'>
                            <div><img src={checkedImage} alt="" /></div>
                            <div>Different optional configurations for the applications of all building conditions and for the control of all kinds of passage entrance-exits.</div>
                        </div>

                        <div className='individual-highlighted-feature-in-turnstile-container'>
                            <div><img src={checkedImage} alt="" /></div>
                            <div>Different identification systems (ID Card, IC card, bar-code, handkey, fingerprint, iris, etc.) can be configured into the turnstile system.</div>
                        </div>

                        <div className='individual-highlighted-feature-in-turnstile-container'>
                            <div><img src={checkedImage} alt="" /></div>
                            <div>The turnstile can be connected to any kinds of controllers and various consumption devices.</div>
                        </div>

                    </div>

                </div>

                <div className='features-and-functions-container-in-turnstile-super-section'>
                    <h6>Features</h6>

                    <ul>
                        <li>Rainproof housing, anti-corrosion coating iron or #304 stainless steel</li>
                        <li>CNC stamping and laser drilling, presenting a novel and elegant appearance</li>
                        <li>Innovative and unique mounting surface ensures simple and convenient installation for system integrators</li>
                        <li>Direction can be set as single-direction or bi-direction</li>
                        <li>Direction indicator</li>
                        <li>Can be used with variety of card readers: IC / ID card readers, bar codes, fingerprints, etc. (Access control needed)</li>
                        <li>Automatic reset function. Should the user fail to pass within the prescribed time (default time is 5 seconds), the system will cancel the authority of the current user automatically</li>
                        <li>When power failure, lane will be free to pass, complying with fire safety requirements.</li>
                        <li>The mechanism is equipped with an automatic regulated hydraulic buffer device. There is no noise and impact when running</li>
                        <li>Dual-bearing device, keeping the gate in balance when there is external force.</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}
export default TripodTurnstile;